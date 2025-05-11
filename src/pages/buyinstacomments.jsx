import React from "react";
import { useNavigate } from "react-router-dom";

export default function BuyInstaComments() {
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
            Buy Real <br /> Instagram Comments
          </h1>

          <ul className="space-y-2 text-gray-700 font-medium">
            <li className="transition duration-300 hover:translate-x-1">✅ Real & Relevant Comments</li>
            <li className="transition duration-300 hover:translate-x-1">✏️ Custom comment options available</li>
            <li className="transition duration-300 hover:translate-x-1">📈 Boost engagement on your posts</li>
            <li className="transition duration-300 hover:translate-x-1">💬 24/7 Live Support</li>
            <li className="transition duration-300 hover:translate-x-1">🔓 No password required</li>
          </ul>

          <button
            onClick={() => navigate("/Checkout")}
            className="mt-4 bg-gradient-to-r from-orange-400 to-red-500 text-white px-6 py-3 rounded-xl shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            Buy Now
          </button>
        </div>

        {/* Right Side Visual — Refined Instagram Card */}
        <div className="mt-10 lg:mt-0 lg:ml-10 relative group">
          <div className="relative w-64 rounded-2xl overflow-hidden shadow-xl border border-white/40 transition-transform duration-500 group-hover:scale-[1.015] group-hover:shadow-2xl bg-white">

            {/* Smooth image with light zoom */}
            <img
              src="/images/likes.jpg" // <-- Change to your comments-related image
              alt="Instagram Comments"
              className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

            {/* Instagram Top Bar */}
            <div className="absolute top-0 w-full flex items-center px-3 py-2 bg-white/70 backdrop-blur-sm justify-between text-sm z-10">
              <div className="flex items-center space-x-2">
                <span className="font-medium text-gray-800">@xoxo</span>
              </div>
              <span className="text-gray-500">•••</span>
            </div>

            {/* Glow ring on hover */}
            <div className="absolute inset-0 rounded-2xl ring-2 ring-pink-400 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

            {/* Caption area */}
            <div className="px-3 pb-3 pt-1 text-[13px] text-gray-700">
              <div>
                <span className="font-medium">@xoxo</span> these comments made my post blow up 💥 #commentsboost #engagement
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
