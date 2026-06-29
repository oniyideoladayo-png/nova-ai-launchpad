import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, RefreshCw } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import AuthLayout from "../../components/auth/AuthLayout";
import GradientButton from "../../components/ui/GradientButton";

const EmailVerification = () => {
  const [resending, setResending] = useState(false);

  const handleResend = async () => {
    setResending(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      const email = user?.email || "";
      const { error } = await supabase.auth.resend({
        type: "signup",
        email,
      });
      if (error) throw error;
      toast.success("Verification email resent!");
      toast.success("Verification email resent!");
    } catch (err: any) {
      toast.error(err.message || "Failed to resend verification email");
    } finally {
      setResending(false);
    }
  };

  const handleOpenEmail = () => {
    // Try to open common email clients
    window.open("https://mail.google.com", "_blank");
  };

  return (
    <AuthLayout 
      title="Verify Your Email" 
      subtitle="Just one more step to secure your account"
      showBackButton={false}
    >
      <div className="text-center py-4">
        <div className="w-20 h-20 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-8 border border-purple-500/20">
          <Mail className="text-purple-400 w-10 h-10" />
        </div>
        
        <p className="text-slate-300 font-medium mb-3">Verification link sent!</p>
        <p className="text-slate-400 text-sm mb-10 leading-relaxed px-4">
          We sent a verification link to your email address. Please click the link to confirm your account.
        </p>

        <div className="space-y-4">
          <GradientButton className="w-full" onClick={handleOpenEmail}>
            Open Email App
          </GradientButton>
          
          <button 
            onClick={handleResend}
            disabled={resending}
            className="w-full flex items-center justify-center gap-2 py-3 text-sm text-slate-400 hover:text-white transition-colors disabled:opacity-50"
          >
            <RefreshCw size={16} className={resending ? "animate-spin" : ""} />
            {resending ? "Resending..." : "Resend verification email"}
          </button>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5">
          <Link to="/login" className="text-sm text-slate-400 hover:text-white transition-colors inline-flex items-center gap-2">
            Wrong email address? <span className="text-blue-400">Change it</span>
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};

export default EmailVerification;
