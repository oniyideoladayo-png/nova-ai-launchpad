import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Send, 
  Bot, 
  User, 
  RotateCcw, 
  Sparkles,
  RefreshCw,
  Terminal,
  MessageSquare,
  Code2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useMessages, useProjects } from '@/hooks/use-database';
import { CodeBlock } from './CodeBlock';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import * as Sonner from 'sonner';

export const ChatWindow: React.FC = () => {
  const { projectId } = useParams();
  const { projects } = useProjects();
  const { messages, loading, sendMessage } = useMessages(projectId || null);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const currentProject = projects.find(p => p.id === projectId);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || !projectId || isTyping) return;

    const userContent = input.trim();
    setInput('');
    setIsTyping(true);

    try {
      await sendMessage(userContent, 'user');
      setTimeout(async () => {
        const aiResponse = "I have received your request and I am processing it.";
        await sendMessage(aiResponse, 'assistant');
        setIsTyping(false);
      }, 1000);
    } catch (error: any) {
      Sonner.toast.error('Failed to send message: ' + error.message);
      setIsTyping(false);
    }
  };

  const handleRegenerate = async () => {
    if (!projectId || messages.length < 2 || isTyping) return;
    setIsTyping(true);
    try {
      await sendMessage("Regenerating response...", 'assistant');
      setIsTyping(false);
    } catch (error: any) {
      Sonner.toast.error('Regeneration failed');
      setIsTyping(false);
    }
  };

  const parseMessage = (content: string) => {
    const regex = new RegExp('```(\\w+)?\
([\\s\\S]*?)```', 'g');
    const parts = content.split(regex);
    return parts.map((part, i) => {
      if (i % 3 === 0) return <p key={i} className="whitespace-pre-wrap">{part}</p>;
      if (i % 3 === 1) return null;
      return <CodeBlock key={i} language={parts[i-1] || 'text'} value={part} />;
    });
  };

  if (!projectId) {
    return null;
  }

  return (
    <div className="flex-1 flex flex-col h-full bg-[#0d0d0f]">
      <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between glass-dark">
        <h2 className="font-semibold text-white">{currentProject?.title}</h2>
        <Button variant="ghost" size="sm" onClick={handleRegenerate} disabled={isTyping}>
          <RotateCcw className="w-4 h-4 mr-2" />
          Regenerate
        </Button>
      </div>
      <ScrollArea className="flex-1 p-6">
        <div className="max-w-3xl mx-auto space-y-6">
          {messages.map((m) => (
            <div key={m.id} className={cn("flex gap-3", m.role === 'user' ? "flex-row-reverse" : "")}>
              <div className={cn("w-8 h-8 rounded flex items-center justify-center", m.role === 'user' ? "bg-blue-600" : "bg-purple-600")}>
                {m.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>
              <div className="bg-white/5 p-3 rounded-lg border border-white/10 max-w-[80%] text-slate-200">
                {parseMessage(m.content)}
              </div>
            </div>
          ))}
          {isTyping && <div className="text-slate-500 text-sm animate-pulse">NovaAI is thinking...</div>}
          <div ref={scrollRef} />
        </div>
      </ScrollArea>
      <div className="p-6 border-t border-white/10">
        <form onSubmit={handleSend} className="max-w-3xl mx-auto relative">
          <Textarea 
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything..."
            className="bg-white/5 border-white/10 pr-12 rounded-xl"
          />
          <Button type="submit" className="absolute right-2 bottom-2" disabled={!input.trim() || isTyping}>
            <Send className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};
