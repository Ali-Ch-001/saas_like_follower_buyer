// src/pages/Checkout.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate }                  from 'react-router-dom';
import { supabase }                     from '../supabaseClient.js';

import {
  FaShoppingCart,
  FaUser,
  FaCreditCard,
  FaCheckCircle,
  FaTrash,
  FaPlus,
  FaEnvelope,
  FaPhone
} from 'react-icons/fa';
import { SiInstagram, SiTiktok } from 'react-icons/si';

const LINK_PROMPTS = {
  'Instagram Followers':  { label: 'Profile Link', placeholder: 'https://instagram.com/username' },
  'Instagram Likes':      { label: 'Post Link',    placeholder: 'https://instagram.com/p/ABC123' },
  'Instagram Comments':   { label: 'Post Link',    placeholder: 'https://instagram.com/p/ABC123' },
  'Instagram Views':      { label: 'Post Link',    placeholder: 'https://instagram.com/p/ABC123' },
  'TikTok Followers':     { label: 'Profile Link', placeholder: 'https://www.tiktok.com/@username' },
  'TikTok Likes':         { label: 'Video Link',   placeholder: 'https://www.tiktok.com/@u/video/123' },
};

const SERVICE_ICONS = service =>
  service.includes('Instagram')
    ? <SiInstagram size={20} color="#E1306C" />
    : service.includes('TikTok')
      ? <SiTiktok size={20} color="#000" />
      : null;

const SERVICE_RATES = {
  'Instagram Followers': 3,
  'Instagram Likes':     2,
  'Instagram Comments':  2.5,
  'Instagram Views':     1,
  'TikTok Followers':    4,
  'TikTok Likes':        3.5,
};

export default function Checkout() {
  const navigate = useNavigate();
  const [user, setUser]             = useState(undefined);
  const [step, setStep]             = useState(1);
  const [error, setError]           = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const [items, setItems] = useState([
    { service:'', quantity:500, profileLink:'', rate:0, amount:0 }
  ]);

  const [personal, setPersonal] = useState({
    full_name:      '',
    customer_email: '',
    customer_phone: ''
  });

  const [paymentMethod, setPaymentMethod] = useState('');

  // load current user
  useEffect(() => {
    supabase.auth.getUser().then(({ data, error }) => {
      setUser(error ? null : data.user ?? null);
    });
  }, []);

  // update item for service/quantity/link
  const handleItemChange = (idx, field, value) => {
    setItems(prev =>
      prev.map((it,i) => {
        if (i!==idx) return it;
        const u = { ...it, [field]:value };
        if (field==='service') {
          const r = SERVICE_RATES[value]||0;
          u.rate   = r;
          u.amount = (u.quantity/500)*r;
        }
        if (field==='quantity') {
          const q = Math.max(parseInt(value,10)||500,500);
          const r = SERVICE_RATES[u.service]||0;
          u.quantity=q; u.rate=r; u.amount=(q/500)*r;
        }
        return u;
      })
    );
  };

  const addItem    = () => setItems(prev => [...prev, { service:'', quantity:500, profileLink:'', rate:0, amount:0 }]);
  const removeItem = idx => setItems(prev => prev.filter((_,i)=>i!==idx));
  const totalAmount = items.reduce((sum,it)=>sum+it.amount,0);

  const next = () => setStep(s=>Math.min(s+1,4));
  const prev = () => setStep(s=>Math.max(s-1,1));

  const submitOrder = async e => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    const order = {
      user_id:        user?.id ?? null,
      items,
      amount:         totalAmount,
      payment_method: paymentMethod,
      full_name:      personal.full_name,
      customer_email: personal.customer_email,
      customer_phone: personal.customer_phone,
    };
    const { error: err } = await supabase.from('orders').insert([order]);
    if (err) {
      setError(err.message);
      setSubmitting(false);
    } else {
      setStep(4);
      setTimeout(()=>navigate('/payment'),1500);
    }
  };

  if (user===undefined) return <div className="p-8 text-center">Loading…</div>;
  const prog = ((step-1)/3)*100 + '%';

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Form */}
      <div className="md:col-span-2 bg-white p-4 sm:p-6 rounded-lg shadow space-y-6">
        {/* Progress */}
        <div className="space-y-1">
          <div className="relative h-2 bg-gray-200 rounded-full">
            <div
              className="absolute top-0 left-0 h-2 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full transition-all duration-500"
              style={{ width: prog }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-600">
            <FaShoppingCart/><FaUser/><FaCreditCard/><FaCheckCircle/>
          </div>
        </div>

        {/* Step 1 */}
        {step===1 && (
          <>
            <h2 className="text-2xl font-semibold flex items-center space-x-2">
              <FaShoppingCart/> Choose Services
            </h2>
            {items.map((it,idx)=>{
              const pct = ((it.quantity-500)/9500)*100+'%';
              const lp  = LINK_PROMPTS[it.service]||{label:'🔗 Link',placeholder:'https://…'};
              return (
                <div key={idx} className="relative border-b pb-4 space-y-4">
                  <button
                    onClick={()=>removeItem(idx)}
                    className="absolute top-0 right-0 mt-2 mr-2 text-gray-400 hover:text-gray-600"
                  ><FaTrash/></button>

                  <label className="block">
                    {SERVICE_ICONS(it.service)} Service #{idx+1}
                    <select
                      value={it.service}
                      onChange={e=>handleItemChange(idx,'service',e.target.value)}
                      required
                      className="w-full mt-1 p-2 border rounded"
                    >
                      <option value="">Select…</option>
                      {Object.keys(SERVICE_RATES).map(s=>(
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </label>

                  <div className="space-y-1">
                    <label className="block text-sm">
                      🔢 Quantity: <strong>{it.quantity}</strong>
                    </label>
                    <input
                      type="range"
                      min="500" max="10000" step="500"
                      value={it.quantity}
                      onChange={e=>handleItemChange(idx,'quantity',e.target.value)}
                      className="range-slider"
                      style={{ '--pos':pct }}
                    />
                  </div>

                  <label className="block">
                    {lp.label}
                    <input
                      type="url"
                      placeholder={lp.placeholder}
                      value={it.profileLink}
                      onChange={e=>handleItemChange(idx,'profileLink',e.target.value)}
                      required
                      className="w-full mt-1 p-2 border rounded"
                    />
                  </label>
                </div>
              );
            })}

            <div className="flex justify-between items-center">
              <button
                onClick={addItem}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-lg shadow hover:scale-105 transition-transform duration-200"
              >
                <FaPlus className="mr-1"/> Add Service
              </button>
              <button
                onClick={next}
                className="px-6 py-2 bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-lg shadow hover:scale-105 transition-transform duration-200"
              >
                Next
              </button>
            </div>
          </>
        )}

        {/* Step 2 */}
        {step===2 && (
          <>
            <h2 className="text-2xl font-semibold flex items-center space-x-2">
              <FaUser/> Your Details
            </h2>
            <form onSubmit={e=>{e.preventDefault();next();}} className="space-y-4">
              <label className="block">
                <FaUser className="inline mr-1"/> Full Name
                <input
                  type="text" required
                  value={personal.full_name}
                  onChange={e=>setPersonal({...personal,full_name:e.target.value})}
                  className="w-full mt-1 p-2 border rounded"
                />
              </label>
              <label className="block">
                <FaEnvelope className="inline mr-1"/> Email
                <input
                  type="email" required
                  value={personal.customer_email}
                  onChange={e=>setPersonal({...personal,customer_email:e.target.value})}
                  className="w-full mt-1 p-2 border rounded"
                />
              </label>
              <label className="block">
                <FaPhone className="inline mr-1"/> Phone
                <input
                  type="tel" required
                  value={personal.customer_phone}
                  onChange={e=>setPersonal({...personal,customer_phone:e.target.value})}
                  className="w-full mt-1 p-2 border rounded"
                />
              </label>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prev}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:scale-105 transition-transform duration-200"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-lg shadow hover:scale-105 transition-transform duration-200"
                >
                  Next
                </button>
              </div>
            </form>
          </>
        )}

        {/* Step 3 */}
        {step===3 && (
          <>
            <h2 className="text-2xl font-semibold flex items-center space-x-2">
              <FaCreditCard/> Payment
            </h2>
            <form onSubmit={submitOrder} className="space-y-4">
              <label className="block">
                💳 Choose Method
                <select
                  required
                  value={paymentMethod}
                  onChange={e=>setPaymentMethod(e.target.value)}
                  className="w-full mt-1 p-2 border rounded"
                >
                  <option value="">Select…</option>
                  <option value="Stripe">Stripe</option>
                  <option value="PayPal">PayPal</option>
                </select>
              </label>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prev}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:scale-105 transition-transform duration-200"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-6 py-2 bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-lg shadow hover:scale-105 transition-transform duration-200"
                >
                  {submitting ? 'Processing…' : `Pay $${totalAmount.toFixed(2)}`}
                </button>
              </div>
              {error && <p className="text-red-600">{error}</p>}
            </form>
          </>
        )}

        {/* Step 4 */}
        {step===4 && (
          <div className="text-center py-20">
            <FaCheckCircle className="text-6xl text-green-500 animate-ping mx-auto"/>
            <p className="mt-4 text-2xl">Order Placed!</p>
          </div>
        )}
      </div>

      {/* Summary panel */}
      {step < 4 && (
        <aside className="bg-white p-4 sm:p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold flex items-center space-x-2 mb-4">
            <FaShoppingCart /> Order Summary
          </h3>
          <ul className="space-y-3">
            {items.map((it,i)=>(
              <li key={i} className="flex justify-between">
                <span>{it.service} × {it.quantity}</span>
                <span>${it.amount.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <hr className="my-4"/>
          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
        </aside>
      )}
    </div>
  );
}
