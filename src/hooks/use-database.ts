import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import * as Sonner from 'sonner';

export interface Folder {
  id: string;
  name: string;
  user_id: string;
  created_at: string;
}

export interface Project {
  id: string;
  title: string;
  user_id: string;
  folder_id: string | null;
  created_at: string;
  updated_at: string;
}

export interface Message {
  id: string;
  project_id: string;
  user_id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  created_at: string;
}

export function useFolders() {
  const [folders, setFolders] = useState<Folder[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchFolders = async () => {
    try {
      const { data, error } = await supabase
        .from('folders')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setFolders(data || []);
    } catch (error: any) {
      Sonner.toast.error('Error fetching folders: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const createFolder = async (name: string) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('User not authenticated');

      const { data, error } = await supabase
        .from('folders')
        .insert([{ name, user_id: user.id }])
        .select()
        .single();

      if (error) throw error;
      setFolders([data, ...folders]);
      return data;
    } catch (error: any) {
      Sonner.toast.error('Error creating folder: ' + error.message);
    }
  };

  const deleteFolder = async (id: string) => {
    try {
      const { error } = await supabase.from('folders').delete().eq('id', id);
      if (error) throw error;
      setFolders(folders.filter((f) => f.id !== id));
      Sonner.toast.success('Folder deleted');
    } catch (error: any) {
      Sonner.toast.error('Error deleting folder: ' + error.message);
    }
  };

  useEffect(() => {
    fetchFolders();
  }, []);

  return { folders, loading, createFolder, deleteFolder, refreshFolders: fetchFolders };
}

export function useProjects(folderId: string | null = null) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    try {
      let query = supabase
        .from('projects')
        .select('*')
        .order('updated_at', { ascending: false });

      if (folderId) {
        query = query.eq('folder_id', folderId);
      }

      const { data, error } = await query;

      if (error) throw error;
      setProjects(data || []);
    } catch (error: any) {
      Sonner.toast.error('Error fetching projects: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const createProject = async (title: string, folderId: string | null = null) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('User not authenticated');

      const { data, error } = await supabase
        .from('projects')
        .insert([{ title, user_id: user.id, folder_id: folderId }])
        .select()
        .single();

      if (error) throw error;
      setProjects([data, ...projects]);
      return data;
    } catch (error: any) {
      Sonner.toast.error('Error creating project: ' + error.message);
    }
  };

  const deleteProject = async (id: string) => {
    try {
      const { error } = await supabase.from('projects').delete().eq('id', id);
      if (error) throw error;
      setProjects(projects.filter((p) => p.id !== id));
      Sonner.toast.success('Project deleted');
    } catch (error: any) {
      Sonner.toast.error('Error deleting project: ' + error.message);
    }
  };

  const moveProject = async (projectId: string, newFolderId: string | null) => {
    try {
      const { error } = await supabase
        .from('projects')
        .update({ folder_id: newFolderId })
        .eq('id', projectId);

      if (error) throw error;
      setProjects(projects.map(p => p.id === projectId ? { ...p, folder_id: newFolderId } : p));
      Sonner.toast.success('Project moved');
    } catch (error: any) {
      Sonner.toast.error('Error moving project: ' + error.message);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [folderId]);

  return { projects, loading, createProject, deleteProject, moveProject, refreshProjects: fetchProjects };
}

export function useMessages(projectId: string | null) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchMessages = async () => {
    if (!projectId) return;
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .eq('project_id', projectId)
        .order('created_at', { ascending: true });

      if (error) throw error;
      setMessages(data || []);
    } catch (error: any) {
      Sonner.toast.error('Error fetching messages: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const sendMessage = async (content: string, role: 'user' | 'assistant' = 'user') => {
    if (!projectId) return;
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('User not authenticated');

      const { data, error } = await supabase
        .from('messages')
        .insert([{ project_id: projectId, content, role, user_id: user.id }])
        .select()
        .single();

      if (error) throw error;
      setMessages((prev) => [...prev, data]);
      
      // Update project updated_at
      await supabase.from('projects').update({ updated_at: new Date().toISOString() }).eq('id', projectId);
      
      return data;
    } catch (error: any) {
      Sonner.toast.error('Error sending message: ' + error.message);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [projectId]);

  return { messages, loading, sendMessage, refreshMessages: fetchMessages };
}
