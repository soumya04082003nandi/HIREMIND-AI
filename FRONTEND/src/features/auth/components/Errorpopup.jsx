import { X, AlertCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { useInterview } from "../../interview/hooks/useinterview";
import { useNavigate } from "react-router-dom";

const Errorpopup = () => {

  const [popOpen, setPopOpen] = useState(true)
  const [timestamp, setTimestamp] = useState("");
  const { report } = useInterview()
  const navigate = useNavigate()

  //Handle the onclick function for the cross symbol and    dismiss button 
  const onClose = () => {
    setPopOpen(false)
    // if (report?._id) {
    //   navigate(`/interview/report/${report?._id}`);
    // }
  }

  //Update timestamp
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      setTimestamp(
        now.toLocaleTimeString("en-GB", { hour12: false }) +
        "." +
        String(now.getMilliseconds()).padStart(3, "0")
      );
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div onClick={onClose}
      className={`fixed inset-0 z-50  items-center ${!popOpen ? 'hidden' : 'flex'} justify-center bg-black/70 backdrop-blur-sm p-4`}>
      <div onClick={(e) => {
        e.stopPropagation()

      }}
        className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[#0d1020] p-8 shadow-[0_0_40px_rgba(0,0,0,0.6)]">

        {/* Close Button */}
        <button
          className="absolute right-5 top-5 text-gray-500 hover:text-white transition"
        >
          <X size={20}
            onClick={onClose}
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
        <h2 className="mt-8 text-center orbitron  text-4xl font-bold text-white">
          System Unavailable
        </h2>

        {/* Description */}
        <p className="mt-4 text-center audiowide text-gray-400 text-lg leading-relaxed">
          AI is not working at the moment, please try after some time
        </p>

        {/* Info Box */}
        <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Error Code
            </span>

            <span className="font-mono text-red-500">
              0xAI_UNAVAILABLE
            </span>
          </div>

          <div className="mt-5 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Timestamp
            </span>

            <span className="font-mono text-gray-300">
              {timestamp}
            </span>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={onClose}
          className="mt-8 w-full rounded-xl bg-pink-700 py-3 text-lg font-semibold text-white transition hover:bg-[#ff1d45] active:scale-95 shadow-[0_0_20px_rgba(255,45,85,0.35)]"
        >
          Dismiss Notification
        </button>
      </div>
    </div>
  );
};

export default Errorpopup;