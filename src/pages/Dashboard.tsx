import React from 'react';
import { ChatSidebar } from '@/components/chat/ChatSidebar';
import { ChatWindow } from '@/components/chat/ChatWindow';
import { Overview } from '@/components/dashboard/Overview';
import { useParams } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const { projectId } = useParams();

  return (
    <div className="flex h-full w-full overflow-hidden bg-[#0a0a0c]">
      <ChatSidebar />
      <main className="flex-1 relative flex flex-col h-full overflow-hidden">
        {/* Decorative elements for the background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-600/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/5 rounded-full blur-[150px]" />
        </div>
        
        <div className="relative z-10 flex flex-col h-full overflow-hidden">
          {projectId ? <ChatWindow /> : <Overview />}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
