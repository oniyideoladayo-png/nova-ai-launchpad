import React from 'react';
import { StatCards } from './StatCards';
import { RecentProjects } from './RecentProjects';
import { TemplateGrid } from './TemplateGrid';
import { NotificationCenter } from './NotificationCenter';
import { AnalyticsChart } from './AnalyticsChart';
import { Sparkles } from 'lucide-react';

export const Overview: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto p-6 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
              Welcome back, User <Sparkles className="w-6 h-6 text-purple-400" />
            </h1>
            <p className="text-slate-400">Here's what's happening with your AI projects today.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-medium text-slate-300">System Status: Optimal</span>
            </div>
          </div>
        </header>

        <StatCards />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <AnalyticsChart />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <RecentProjects />
              <TemplateGrid />
            </div>
          </div>
          <div className="space-y-8">
            <NotificationCenter />
            {/* Quick Tips or Action Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-700 border border-white/10 shadow-2xl relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-white mb-2">Upgrade to Pro</h3>
                <p className="text-indigo-100 text-sm mb-4 leading-relaxed">Get unlimited AI credits, custom domain support, and priority rendering.</p>
                <button className="w-full py-2.5 bg-white text-indigo-600 font-bold rounded-xl hover:bg-indigo-50 transition-colors">
                  View Pricing
                </button>
              </div>
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
