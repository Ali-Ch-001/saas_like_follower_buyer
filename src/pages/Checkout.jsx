// src/pages/Checkout.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate }                  from 'react-router-dom';
import { supabase }                     from '../supabaseClient.js';

export default function Checkout() {
  const navigate = useNavigate();
  const [user, setUser]       = useState(undefined);
  const [error, setError]     = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const SERVICE_RATES = {
    'Instagram Followers': 3,
    'Instagram Likes':     2,
    'Instagram Comments':  2.5,
    'Instagram Views':     1,
    'TikTok Followers':    4,
    'TikTok Likes':        3.5,
  };

  const [items, setItems] = useState([
    { service: '', quantity: 500, profileLink: '', rate: 0, amount: 0 }
  ]);
  const [paymentMethod, setPaymentMethod] = useState('');

  useEffect(() => {
    supabase.auth.getUser().then(({ data, error }) => {
      if (error) {
        console.error('Auth error:', error);
        setUser(null);
      } else {
        setUser(data.user ?? null);
      }
    });
  }, []);

  const handleItemChange = (idx, field, value) => {
    setItems(items.map((it, i) => {
      if (i !== idx) return it;
      const updated = { ...it, [field]: value };
      if (field === 'service') {
        const rate     = SERVICE_RATES[value] || 0;
        updated.rate   = rate;
        updated.amount = (updated.quantity / 500) * rate;
      }
      if (field === 'quantity') {
        const qty       = parseInt(value, 10) || 500;
        const safeQty   = Math.max(qty, 500);
        const rate      = SERVICE_RATES[updated.service] || 0;
        updated.quantity = safeQty;
        updated.rate     = rate;
        updated.amount   = (safeQty / 500) * rate;
      }
      return updated;
    }));
  };

  // remove item at index
  const removeItem = idx => {
    setItems(items.filter((_, i) => i !== idx));
  };

  const addItem = () =>
    setItems([
      ...items,
      { service: '', quantity: 500, profileLink: '', rate: 0, amount: 0 }
    ]);

  const totalAmount = items.reduce((sum, it) => sum + it.amount, 0);

  const handleSubmit = async e => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const order = {
      user_id:        user?.id ?? null,
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

  if (user === undefined) {
    return <div className="p-8 text-center">Loading…</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Form */}
      <div className="md:col-span-2 bg-white p-4 sm:p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">
          Checkout — {user ? `Hello, ${user.email}` : 'Guest'}
        </h2>
        {error && <p className="text-red-600 mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          {items.map((it, idx) => {
            const percent = ((it.quantity - 500) / (10000 - 500)) * 100 + '%';

            return (
              <div key={idx} className="relative border-b pb-4 space-y-4">
                {/* delete button */}
                <button
                  type="button"
                  onClick={() => removeItem(idx)}
                  className="absolute top-0 right-0 mt-2 mr-2 text-gray-400 hover:text-gray-600"
                  title="Remove this service"
                >
                  &#10005;
                </button>

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

                <div className="space-y-1">
                  <label className="block text-sm font-medium">
                    Quantity: <span className="font-semibold">{it.quantity}</span>
                  </label>
                  <input
                    type="range"
                    min="500"
                    max="10000"
                    step="500"
                    value={it.quantity}
                    onChange={e => handleItemChange(idx, 'quantity', e.target.value)}
                    className="range-slider"
                    style={{ '--pos': percent }}
                  />
                  <p className="text-xs text-gray-500">
                    Drag the slider to choose quantity (min 500)
                  </p>
                </div>

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
            );
          })}

          <button
            type="button"
            onClick={addItem}
            className="
              inline-flex items-center
              px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-500
              text-white font-medium rounded-lg shadow-md
              transition transform hover:scale-105
              focus:outline-none focus:ring-2 focus:ring-blue-300
            "
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
            className="
              w-full mt-6 py-3
              bg-gradient-to-r from-orange-500 to-orange-600
              text-white font-semibold rounded-lg shadow-lg
              transition transform hover:scale-105
              focus:outline-none focus:ring-2 focus:ring-orange-300
              animate-pulse
            "
          >
            {submitting
              ? 'Processing…'
              : `Checkout — Pay $${totalAmount.toFixed(2)}`}
          </button>
        </form>
      </div>

      {/* Summary */}
      <aside className="bg-white p-4 sm:p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
        <ul className="space-y-3">
          {items.map((it, i) => (
            <li key={i} className="flex justify-between">
              <span>{it.service} × {it.quantity}</span>
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
