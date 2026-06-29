import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  Plus, 
  MessageSquare, 
  Folder as FolderIcon, 
  FolderPlus, 
  MoreVertical, 
  Trash2, 
  Edit2, 
  ChevronRight, 
  ChevronDown,
  LogOut,
  BarChart3,
  LayoutDashboard
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useFolders, useProjects } from '@/hooks/use-database';
import { supabase } from '@/integrations/supabase/client';
import { cn } from '@/lib/utils';
import * as Sonner from 'sonner';

export const ChatSidebar: React.FC = () => {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const { folders, createFolder, deleteFolder } = useFolders();
  const { projects, createProject, deleteProject } = useProjects();
  const [expandedFolders, setExpandedFolders] = useState<Record<string, boolean>>({});

  const toggleFolder = (id: string) => {
    setExpandedFolders(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleNewChat = async () => {
    const project = await createProject('New Chat');
    if (project) {
      navigate(`/dashboard/${project.id}`);
    }
  };

  const handleNewFolder = async () => {
    const name = window.prompt('Enter folder name:');
    if (name) {
      await createFolder(name);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  return (
    <div className="w-64 flex flex-col h-full border-r border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="p-4 border-b border-white/10">
        <div className="flex items-center gap-2 mb-6 px-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <LayoutDashboard className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white">NovaAI</span>
        </div>
        
        <Button 
          onClick={handleNewChat}
          className="w-full justify-start gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-none shadow-lg shadow-purple-500/20"
        >
          <Plus className="w-4 h-4" />
          New Chat
        </Button>
      </div>

      <div className="px-3 py-2 space-y-1">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/dashboard')}
          className={cn("w-full justify-start gap-2", !projectId ? "bg-white/10 text-white" : "text-slate-400 hover:text-white hover:bg-white/5")}
        >
          <BarChart3 className="w-4 h-4" />
          Overview
        </Button>
      </div>

      <ScrollArea className="flex-1 px-3 py-4">
        <div className="space-y-6">
          {/* Folders Section */}
          <div>
            <div className="flex items-center justify-between px-2 mb-2">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Folders</span>
              <button onClick={handleNewFolder} className="text-slate-500 hover:text-white transition-colors">
                <FolderPlus className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-1">
              {folders.map(folder => (
                <div key={folder.id} className="group">
                  <div className="flex items-center justify-between px-2 py-1.5 rounded-md hover:bg-white/5 transition-colors cursor-pointer text-slate-300 hover:text-white">
                    <div className="flex items-center gap-2 flex-1 min-w-0" onClick={() => toggleFolder(folder.id)}>
                      {expandedFolders[folder.id] ? <ChevronDown className="w-4 h-4 shrink-0" /> : <ChevronRight className="w-4 h-4 shrink-0" />}
                      <FolderIcon className="w-4 h-4 text-blue-400 shrink-0" />
                      <span className="truncate text-sm">{folder.name}</span>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-white/10 rounded transition-all">
                          <MoreVertical className="w-3.5 h-3.5" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-zinc-900 border-white/10 text-slate-300">
                        <DropdownMenuItem onClick={() => deleteFolder(folder.id)} className="text-red-400 focus:text-red-400 focus:bg-red-400/10">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  
                  {expandedFolders[folder.id] && (
                    <div className="ml-4 pl-2 border-l border-white/10 mt-1 space-y-1">
                      {projects.filter(p => p.folder_id === folder.id).map(project => (
                        <div 
                          key={project.id}
                          onClick={() => navigate(`/dashboard/${project.id}`)}
                          className={cn(
                            "flex items-center gap-2 px-2 py-1.5 rounded-md text-sm cursor-pointer transition-colors",
                            projectId === project.id ? "bg-white/10 text-white" : "text-slate-400 hover:bg-white/5 hover:text-white"
                          )}
                        >
                          <MessageSquare className="w-4 h-4 shrink-0 opacity-50" />
                          <span className="truncate">{project.title}</span>
                        </div>
                      ))}
                      {projects.filter(p => p.folder_id === folder.id).length === 0 && (
                        <span className="text-xs text-slate-600 px-2 italic">Empty folder</span>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Recent Projects (not in folders) */}
          <div>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-2 block mb-2">Recent Chats</span>
            <div className="space-y-1">
              {projects.filter(p => !p.folder_id).map(project => (
                <div 
                  key={project.id}
                  className={cn(
                    "group flex items-center justify-between px-2 py-2 rounded-md transition-all cursor-pointer",
                    projectId === project.id ? "bg-white/10 text-white shadow-inner" : "text-slate-400 hover:bg-white/5 hover:text-white"
                  )}
                  onClick={() => navigate(`/dashboard/${project.id}`)}
                >
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <MessageSquare className={cn("w-4 h-4 shrink-0", projectId === project.id ? "text-purple-400" : "opacity-50")} />
                    <span className="truncate text-sm">{project.title}</span>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-white/10 rounded transition-all">
                        <MoreVertical className="w-3.5 h-3.5" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-zinc-900 border-white/10 text-slate-300">
                      <DropdownMenuItem onClick={(e) => { e.stopPropagation(); deleteProject(project.id); }} className="text-red-400 focus:text-red-400 focus:bg-red-400/10">
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>

      <div className="p-4 border-t border-white/10 mt-auto">
        <Button 
          variant="ghost" 
          onClick={handleLogout}
          className="w-full justify-start gap-2 text-slate-400 hover:text-white hover:bg-white/5"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </Button>
      </div>
    </div>
  );
};
