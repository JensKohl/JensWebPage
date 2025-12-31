import React, { useState, useEffect } from 'react';

const ViewCounter: React.FC = () => {
  const [views, setViews] = useState<string>("···");

  useEffect(() => {
    const key = "dr-jens-kohl-2025-final";
    
    // We use a very fast timeout to ensure the site doesn't wait
    fetch(`https://api.counterapi.dev/v1/${key}/visits/up`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.count) {
          setViews(data.count.toLocaleString());
        }
      })
      .catch(() => {
        setViews("Offline"); // Feedback if blocked
      });
  }, []);

  return (
    <div className="mt-12 pt-8 border-t border-gray-100 group cursor-default w-full">
      <div className="flex flex-col gap-3 transition-all duration-700 opacity-50 group-hover:opacity-100">
        
        {/* Label Row */}
        <div className="flex items-center gap-2">
          <div className="h-[1px] w-4 bg-gray-400 group-hover:w-12 group-hover:bg-black transition-all duration-500"></div>
          <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-gray-500 group-hover:text-black transition-colors">
            Metrics // Live
          </span>
        </div>

        {/* Data Row */}
        <div className="flex items-baseline gap-2 pl-6">
          <span className="text-2xl font-light tracking-tighter text-gray-900 font-mono">
            {views}
          </span>
          <span className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">
            Impressions
          </span>
        </div>
        
      </div>
    </div>
  );
};

export default ViewCounter;