import React from 'react';
import { 
  FileCode, 
  FileJson, 
  FileText, 
  Layout, 
  Globe, 
  Smartphone,
  Copy
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export const TemplateGrid: React.FC = () => {
  const templates = [
    {
      name: 'Landing Page v2',
      type: 'React / Tailwind',
      icon: <Layout className="w-5 h-5 text-blue-400" />,
      tag: 'Frontend'
    },
    {
      name: 'API Wrapper',
      type: 'TypeScript',
      icon: <FileCode className="w-5 h-5 text-purple-400" />,
      tag: 'Backend'
    },
    {
      name: 'Auth Flow',
      type: 'Supabase / React',
      icon: <FileJson className="w-5 h-5 text-yellow-400" />,
      tag: 'Fullstack'
    },
    {
      name: 'Admin Dashboard',
      type: 'Next.js',
      icon: <Globe className="w-5 h-5 text-emerald-400" />,
      tag: 'UI Kit'
    }
  ];

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-xl">
      <div className="p-5 border-b border-white/10 flex items-center justify-between">
        <h3 className="font-semibold text-white">Saved Templates</h3>
        <span className="text-xs text-slate-500 px-2 py-1 rounded bg-white/5">{templates.length} Total</span>
      </div>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {templates.map((template, i) => (
          <div 
            key={i} 
            className="p-4 rounded-xl border border-white/5 bg-black/20 hover:border-white/20 transition-all group"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                {template.icon}
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:text-white">
                <Copy className="w-4 h-4" />
              </Button>
            </div>
            <h4 className="text-sm font-semibold text-white mb-1">{template.name}</h4>
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-slate-500">{template.type}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                {template.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
