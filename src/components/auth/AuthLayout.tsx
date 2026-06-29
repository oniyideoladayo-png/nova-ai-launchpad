import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Cpu, ArrowLeft } from "lucide-react";
import GlassCard from "../ui/GlassCard";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
  showBackButton?: boolean;
}

const AuthLayout = ({ children, title, subtitle, showBackButton = true }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center">
      <div className="w-full max-w-md relative">
        {/* Glow Effects */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px] pointer-events-none" />
        
        {showBackButton && (
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        )}

        <div className="text-center mb-10">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg mx-auto mb-6">
            <Cpu className="text-white w-8 h-8" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-3">{title}</h1>
          <p className="text-slate-400">{subtitle}</p>
        </div>

        <GlassCard hoverEffect={false} className="border-white/10">
          {children}
        </GlassCard>
      </div>
    </div>
  );
};

export default AuthLayout;
