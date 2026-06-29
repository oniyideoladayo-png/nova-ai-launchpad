import React from 'react';
import { 
  CreditCard, 
  Activity, 
  Zap, 
  Clock 
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export const StatCards: React.FC = () => {
  const stats = [
    {
      title: 'AI Credits',
      value: '2,450',
      total: '5,000',
      percentage: 49,
      icon: <Zap className="w-5 h-5 text-yellow-400" />,
      color: 'from-yellow-500/20 to-orange-500/20',
      border: 'border-yellow-500/20'
    },
    {
      title: 'Monthly Usage',
      value: '840',
      total: '1,000',
      percentage: 84,
      icon: <Activity className="w-5 h-5 text-blue-400" />,
      color: 'from-blue-500/20 to-indigo-500/20',
      border: 'border-blue-500/20'
    },
    {
      title: 'Active Projects',
      value: '12',
      total: '20',
      percentage: 60,
      icon: <CreditCard className="w-5 h-5 text-purple-400" />,
      color: 'from-purple-500/20 to-pink-500/20',
      border: 'border-purple-500/20'
    },
    {
      title: 'Avg. Response Time',
      value: '1.2s',
      subtitle: 'Top 5% speed',
      icon: <Clock className="w-5 h-5 text-emerald-400" />,
      color: 'from-emerald-500/20 to-teal-500/20',
      border: 'border-emerald-500/20'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <div 
          key={i} 
          className={`p-5 rounded-2xl bg-gradient-to-br ${stat.color} border ${stat.border} backdrop-blur-xl shadow-xl`}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-slate-400">{stat.title}</span>
            <div className="p-2 rounded-lg bg-black/20">
              {stat.icon}
            </div>
          </div>
          <div className="flex items-baseline gap-2 mb-3">
            <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
            {stat.total && (
              <span className="text-xs text-slate-500">/ {stat.total}</span>
            )}
          </div>
          {stat.percentage !== undefined ? (
            <div className="space-y-2">
              <Progress value={stat.percentage} className="h-1.5" />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>{stat.percentage}% used</span>
                <span>{100 - stat.percentage}% remaining</span>
              </div>
            </div>
          ) : (
            <p className="text-xs text-emerald-400 font-medium">{stat.subtitle}</p>
          )}
        </div>
      ))}
    </div>
  );
};
