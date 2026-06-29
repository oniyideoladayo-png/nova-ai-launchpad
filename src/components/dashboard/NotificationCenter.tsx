import React from 'react';
import { 
  Bell, 
  AlertCircle, 
  CheckCircle2, 
  Info,
  X
} from 'lucide-react';

export const NotificationCenter: React.FC = () => {
  const notifications = [
    {
      id: 1,
      title: 'Monthly limit reached soon',
      description: 'You have used 84% of your monthly AI credits.',
      time: '2 hours ago',
      type: 'warning',
      icon: <AlertCircle className="w-4 h-4" />
    },
    {
      id: 2,
      title: 'Build Successful',
      description: 'NovaAI Project #124 has been successfully exported.',
      time: '5 hours ago',
      type: 'success',
      icon: <CheckCircle2 className="w-4 h-4" />
    },
    {
      id: 3,
      title: 'New Feature: Code Diffusion',
      description: 'Generate production-ready code even faster with our new model.',
      time: '1 day ago',
      type: 'info',
      icon: <Info className="w-4 h-4" />
    }
  ];

  const getTypeStyles = (type: string) => {
    switch (type) {
      case 'warning': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'success': return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
      case 'info': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      default: return 'text-slate-400 bg-slate-400/10 border-slate-400/20';
    }
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-xl flex flex-col h-full">
      <div className="p-5 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bell className="w-4 h-4 text-purple-400" />
          <h3 className="font-semibold text-white">Notifications</h3>
        </div>
        <button className="text-[10px] text-slate-500 hover:text-white transition-colors">Mark all read</button>
      </div>
      <div className="p-4 space-y-4 overflow-y-auto max-h-[300px]">
        {notifications.map((notif) => (
          <div key={notif.id} className="relative group p-3 rounded-xl border border-white/5 bg-black/20 hover:border-white/10 transition-all">
            <div className="flex gap-3">
              <div className={`mt-0.5 w-8 h-8 shrink-0 rounded-lg flex items-center justify-center ${getTypeStyles(notif.type)}`}>
                {notif.icon}
              </div>
              <div className="flex-1 pr-6">
                <h4 className="text-sm font-medium text-white mb-0.5">{notif.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed mb-2">{notif.description}</p>
                <span className="text-[10px] text-slate-600">{notif.time}</span>
              </div>
            </div>
            <button className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 p-1 text-slate-600 hover:text-white transition-all">
              <X className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
