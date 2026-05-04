import React from "react";

const GenerateLoader = ({ text = "Generating your report..." }) => {
  return (
    <div className="fixed inset-0 bg-[#0f172a] flex items-center justify-center overflow-hidden z-50">

      {/* Background Glow Blobs */}
      <div className="absolute w-100 h-100 bg-pink-500/20 rounded-full blur-3xl animate-pulse top-1/4 left-1/4"></div>
      <div className="absolute w-75 h-75 bg-purple-500/20 rounded-full blur-3xl animate-pulse bottom-1/4 right-1/4"></div>

      {/* Center Content */}
      <div className="relative flex flex-col items-center gap-6">

        {/* Pulsing Core */}
        <div className="relative flex items-center justify-center">
          <div className="w-24 h-24 bg-pink-500 rounded-full blur-2xl opacity-70 animate-ping"></div>
          <div className="absolute w-16 h-16 bg-linear-to-r from-pink-500 to-purple-500 rounded-full shadow-xl"></div>
        </div>

        {/* Text */}
        <div className="text-center">
          <h2 className="text-white text-lg font-semibold tracking-wide">
            {text}
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Our AI is crafting something smart for you...
          </p>
        </div>

        {/* Minimal Dots Loader */}
        <div className="flex gap-2 mt-2">
          <span className="w-2 h-2 bg-pink-500 rounded-full animate-bounce"></span>
          <span className="w-2 h-2 bg-pink-500 rounded-full animate-bounce delay-150"></span>
          <span className="w-2 h-2 bg-pink-500 rounded-full animate-bounce delay-300"></span>
        </div>

      </div>
    </div>
  );
};

export default GenerateLoader;