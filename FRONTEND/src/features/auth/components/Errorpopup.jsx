import { X, AlertCircle } from "lucide-react";
import { useState } from "react";

const Errorpopup = ({ onClose }) => {

  const [popOpen, setPopOpen] = useState(true)
  return (
    <div  onClick={(e)=>{
            setPopOpen(false)
          }}
     className={`fixed inset-0 z-50  items-center ${!popOpen ? 'hidden' :'flex'} justify-center bg-black/70 backdrop-blur-sm p-4`}>
      <div onClick={(e)=>{
        e.stopPropagation()
            
          }}
       className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[#0d1020] p-8 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
        
        {/* Close Button */}
        <button
          className="absolute right-5 top-5 text-gray-500 hover:text-white transition"
        >
          <X size={20}
          onClick={(e)=>{
            setPopOpen(false)
          }}
          />
        </button>

        {/* Icon */}
        <div className="flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-500/15">
            <AlertCircle
              size={28}
              className=" fill-pink-500 "
            />
          </div>
        </div>

        {/* Title */}
        <h2 className="mt-8 text-center text-4xl font-bold text-white">
          System Unavailable
        </h2>

        {/* Description */}
        <p className="mt-4 text-center text-gray-400 text-lg leading-relaxed">
          AI is not working at the moment, please try after some time
        </p>

        {/* Info Box */}
        <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Error Code
            </span>

            <span className="font-mono text-pink-500">
              0xAI_UNAVAILABLE
            </span>
          </div>

          <div className="mt-5 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Timestamp
            </span>

            <span className="font-mono text-gray-300">
              16:42:01.026
            </span>
          </div>
        </div>

        {/* Button */}
        <button
         onClick={(e)=>{
            setPopOpen(false)
          }}
          className="mt-8 w-full rounded-xl bg-[#ff2d55] py-4 text-lg font-semibold text-white transition hover:bg-[#ff1d45] shadow-[0_0_30px_rgba(255,45,85,0.35)]"
        >
          Dismiss Notification
        </button>
      </div>
    </div>
  );
};

export default Errorpopup;