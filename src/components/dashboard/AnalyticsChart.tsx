import React from 'react';

const data = [
  { name: 'Mon', credits: 40, requests: 24 },
  { name: 'Tue', credits: 30, requests: 13 },
  { name: 'Wed', credits: 20, requests: 98 },
  { name: 'Thu', credits: 27, requests: 39 },
  { name: 'Fri', credits: 18, requests: 48 },
  { name: 'Sat', credits: 23, requests: 38 },
  { name: 'Sun', credits: 34, requests: 43 },
];

export const AnalyticsChart: React.FC = () => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl h-[400px] flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="font-semibold text-white text-lg">Usage Analytics</h3>
          <p className="text-sm text-slate-500">Weekly breakdown of AI interactions</p>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500" />
            <span className="text-xs text-slate-400">Credits</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-500" />
            <span className="text-xs text-slate-400">Requests</span>
          </div>
        </div>
      </div>
      
      <div className="flex-1 flex items-end justify-between gap-2 px-2">
        {data.map((item, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
            <div className="w-full flex justify-center gap-1 items-end h-48">
              <div 
                className="w-full max-w-[12px] bg-blue-500 rounded-t-sm transition-all duration-500 group-hover:bg-blue-400" 
                style={{ height: `${item.credits}%` }}
              />
              <div 
                className="w-full max-w-[12px] bg-purple-500 rounded-t-sm transition-all duration-500 group-hover:bg-purple-400" 
                style={{ height: `${item.requests}%` }}
              />
            </div>
            <span className="text-[10px] text-slate-500 font-medium uppercase">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
