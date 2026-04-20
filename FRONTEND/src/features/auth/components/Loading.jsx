const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm z-50">
      
      <div className="flex flex-col items-center gap-4">
        
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-slate-600 border-t-sky-400 rounded-full animate-spin"></div>
        
        {/* Text */}
        <p className="text-slate-200 text-lg font-medium tracking-wide">
          Loading...
        </p>

      </div>

    </div>
  );
};

export default Loading;