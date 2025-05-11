// src/pages/Checkout.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate }                  from 'react-router-dom';
import { supabase }                     from '../supabaseClient.js';

export default function Checkout() {
  const navigate = useNavigate();
  const [user, setUser]       = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  // map each service to its $-per-500 rate
  const SERVICE_RATES = {
    'Instagram Followers': 3,
    'Instagram Likes':     2,
    'Instagram Comments':  2.5,
    'Instagram Views':     1,
    'TikTok Followers':    4,
    'TikTok Likes':        3.5,
  };

  // items = array of { service, quantity, profileLink, rate, amount }
  const [items, setItems] = useState([
    { service: '', quantity: 500, profileLink: '', rate: 0, amount: 0 }
  ]);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [submitting, setSubmitting]       = useState(false);

  // 1) Auth guard + load profile
  useEffect(() => {
    (async () => {
      const { data: { user: authUser }, error: authErr } = await supabase.auth.getUser();
      if (authErr || !authUser) return navigate('/login');

      const { data: profile, error: profErr } = await supabase
        .from('users')
        .select('name')
        .eq('id', authUser.id)
        .single();

      if (profErr) {
        setError(profErr.message);
      } else {
        setUser({ id: authUser.id, name: profile.name });
      }
      setLoading(false);
    })();
  }, [navigate]);

  // recalc a single item’s rate & amount when service or quantity changes
  const handleItemChange = (idx, field, value) => {
    setItems(items.map((it, i) => {
      if (i !== idx) return it;
      const updated = { ...it, [field]: value };

      // if service changed, update rate and recalc amount
      if (field === 'service') {
        const rate = SERVICE_RATES[value] || 0;
        updated.rate   = rate;
        updated.amount = (updated.quantity / 500) * rate;
      }

      // if quantity changed, enforce min 500 & recalc amount
      if (field === 'quantity') {
        const qty     = parseInt(value, 10) || 0;
        const safeQty = Math.max(qty, 500);
        updated.quantity = safeQty;
        const rate       = SERVICE_RATES[updated.service] || 0;
        updated.rate     = rate;
        updated.amount   = (safeQty / 500) * rate;
      }

      return updated;
    }));
  };

  const addItem = () =>
    setItems([...items, { service: '', quantity: 500, profileLink: '', rate: 0, amount: 0 }]);

  const totalAmount = items.reduce((sum, it) => sum + it.amount, 0);

  const handleSubmit = async e => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const order = {
      user_id:        user.id,
      items,
      amount:         totalAmount,
      payment_method: paymentMethod,
    };

    const { error: insertErr } = await supabase.from('orders').insert([order]);
    if (insertErr) {
      setError(insertErr.message);
      setSubmitting(false);
    } else {
      navigate('/payment');
    }
  };

  if (loading) return <div className="p-8 text-center">Loading profile…</div>;

  return (
    <div className="max-w-5xl mx-auto p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Form */}
      <div className="md:col-span-2 bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">Checkout — Hello, {user.name}</h2>
        {error && <p className="text-red-600 mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          {items.map((it, idx) => (
            <div key={idx} className="border-b pb-4 space-y-2">
              <label className="block">
                Service #{idx + 1}
                <select
                  value={it.service}
                  onChange={e => handleItemChange(idx, 'service', e.target.value)}
                  required
                  className="w-full mt-1 p-2 border rounded"
                >
                  <option value="">Select a service</option>
                  {Object.keys(SERVICE_RATES).map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </label>

              <label className="block">
                Quantity (min 500)
                <input
                  type="number"
                  min="500"
                  step="500"
                  value={it.quantity}
                  onChange={e => handleItemChange(idx, 'quantity', e.target.value)}
                  required
                  className="w-full mt-1 p-2 border rounded"
                />
              </label>

              <label className="block">
                Profile Link
                <input
                  type="url"
                  placeholder="https://..."
                  value={it.profileLink}
                  onChange={e => handleItemChange(idx, 'profileLink', e.target.value)}
                  required
                  className="w-full mt-1 p-2 border rounded"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Make sure your profile is public
                </p>
              </label>
            </div>
          ))}

          <button
            type="button"
            onClick={addItem}
            className="text-blue-600 hover:underline"
          >
            + Add another service
          </button>

          <div className="mt-6">
            <label className="block mb-1">Payment Method</label>
            <select
              value={paymentMethod}
              onChange={e => setPaymentMethod(e.target.value)}
              required
              className="w-full p-2 border rounded"
            >
              <option value="">Select a method</option>
              <option value="Stripe">Stripe</option>
              <option value="PayPal">PayPal</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full mt-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            {submitting
              ? 'Processing…'
              : `Checkout — Pay $${totalAmount.toFixed(2)}`}
          </button>
        </form>
      </div>

      {/* Summary box */}
      <aside className="bg-white p-6 rounded shadow">
        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
        <ul className="space-y-3">
          {items.map((it, i) => (
            <li key={i} className="flex justify-between">
              <span>{it.service} x {it.quantity}</span>
              <span>${it.amount.toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <hr className="my-4" />
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>
      </aside>
    </div>
  );
}
