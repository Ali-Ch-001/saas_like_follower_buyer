// src/pages/Payment.jsx
import React from 'react';

export default function Payment() {
  return (
    <div className="flex items-center justify-center min-h-[70vh] bg-gray-50">
      <div className="max-w-md w-full p-8 bg-white rounded shadow text-center">
        <h2 className="text-2xl font-semibold mb-6">Complete Your Payment</h2>
        {/* Stripe placeholder */}
        <div className="mb-6">
          <p className="mb-4">Stripe integration coming soon</p>
          <button className="w-full py-2 bg-blue-600 text-white rounded">
            Pay with Stripe
          </button>
        </div>
        {/* PayPal placeholder */}
        <div>
          <p className="mb-4">PayPal integration coming soon</p>
          <button className="w-full py-2 bg-yellow-500 text-white rounded">
            Pay with PayPal
          </button>
        </div>
      </div>
    </div>
  );
}
