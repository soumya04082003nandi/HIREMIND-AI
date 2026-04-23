import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-950/80 backdrop-blur-md z-50">
      
      <div className="flex flex-col items-center gap-6">
        
        {/* Pulse Circle */}
        <div className="relative">
          <div className="w-16 h-16 bg-sky-500 rounded-full animate-ping absolute opacity-30"></div>
          <div className="w-16 h-16 bg-sky-400 rounded-full"></div>
        </div>

        {/* Loading Text with Dots */}
        <div className="flex items-center gap-1 text-slate-200 text-lg font-medium">
          Loading
          <span className="animate-bounce [animation-delay:0s]">.</span>
          <span className="animate-bounce [animation-delay:0.2s]">.</span>
          <span className="animate-bounce [animation-delay:0.4s]">.</span>
        </div>

      </div>

    </div>
  );
};

export default Loading;