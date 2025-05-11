import React from "react";
import { useNavigate } from "react-router-dom";

export default function BuyTiktokFollowers() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-blue-50 to-white px-6 py-10">
      <div className="max-w-4xl w-full bg-white/30 backdrop-blur-md rounded-3xl p-8 shadow-xl flex flex-col lg:flex-row items-center transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl">
        
        {/* Left Side Text Content */}
        <div className="flex-1 text-left space-y-6 animate-fadeIn">
          <span className="inline-block px-4 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium animate-bounce">
            ALL TIME <span className="font-bold">TRUSTED VENDOR</span>
          </span>

          <h1 className="text-4xl font-bold text-gray-800 transition duration-300 hover:text-orange-600">
            Buy Real <br /> TikTok Followers
          </h1>

          <ul className="space-y-2 text-gray-700 font-medium">
            <li className="transition duration-300 hover:translate-x-1">✅ Active & Real TikTok Followers</li>
            <li className="transition duration-300 hover:translate-x-1">📊 Boosts profile credibility fast</li>
            <li className="transition duration-300 hover:translate-x-1">🚀 Helps you reach the For You Page</li>
            <li className="transition duration-300 hover:translate-x-1">💬 24/7 Live Support</li>
            <li className="transition duration-300 hover:translate-x-1">🔓 No password required</li>
          </ul>

          <button
            onClick={() => navigate("/Checkout")}
            className="mt-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-xl shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            Buy Now
          </button>
        </div>

        {/* Right Side Visual — Refined TikTok Style Card */}
        <div className="mt-10 lg:mt-0 lg:ml-10 relative group">
          <div className="relative w-64 rounded-2xl overflow-hidden shadow-xl border border-white/40 transition-transform duration-500 group-hover:scale-[1.015] group-hover:shadow-2xl bg-white">

            {/* Smooth image with light zoom */}
            <img
              src="/images/tiktokfollowers.png" // <-- Add your TikTok image here
              alt="TikTok Followers"
              className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

            {/* Glow ring on hover */}
            <div className="absolute inset-0 rounded-2xl ring-2 ring-purple-400 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />
          </div>
        </div>

      </div>
    </div>
  );
}
