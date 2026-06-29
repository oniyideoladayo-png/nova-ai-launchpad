import React from 'react';
import { useProjects } from '@/hooks/use-database';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, Calendar, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const RecentProjects: React.FC = () => {
  const { projects } = useProjects();
  const navigate = useNavigate();
  
  const recentProjects = projects.slice(0, 5);

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-xl">
      <div className="p-5 border-b border-white/10 flex items-center justify-between">
        <h3 className="font-semibold text-white">Recent Projects</h3>
        <Button variant="ghost" size="sm" className="text-xs text-slate-400 hover:text-white" onClick={() => navigate('/dashboard')}>
          View all
        </Button>
      </div>
      <div className="divide-y divide-white/5">
        {recentProjects.length > 0 ? (
          recentProjects.map((project) => (
            <div 
              key={project.id} 
              onClick={() => navigate(`/dashboard/${project.id}`)}
              className="p-4 flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-200">{project.title}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <Calendar className="w-3 h-3 text-slate-500" />
                    <span className="text-[10px] text-slate-500">
                      {new Date(project.created_at).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-white transition-colors" />
            </div>
          ))
        ) : (
          <div className="p-8 text-center text-slate-500 text-sm italic">
            No projects found. Create your first one to get started!
          </div>
        )}
      </div>
    </div>
  );
};
