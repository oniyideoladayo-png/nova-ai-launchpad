import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import AuthLayout from "../../components/auth/AuthLayout";
import GradientButton from "../../components/ui/GradientButton";

const ForgotPassword = () => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/login`,
      });
      if (error) throw error;
      setSubmitted(true);
    } catch (err: any) {
      toast.error(err.message || "Failed to send reset email");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <AuthLayout 
        title="Check Your Inbox" 
        subtitle="We've sent password reset instructions to your email."
        showBackButton={false}
      >
        <div className="text-center py-6">
          <div className="w-20 h-20 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-8 border border-blue-500/20">
            <CheckCircle2 className="text-blue-400 w-10 h-10" />
          </div>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Click the link in the email to securely reset your password. If you don't see it, check your spam folder.
          </p>
          <GradientButton className="w-full" onClick={() => setSubmitted(false)}>
            Try another email
          </GradientButton>
          <Link to="/login" className="inline-block mt-6 text-sm text-slate-400 hover:text-white transition-colors">
            Back to Login
          </Link>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout 
      title="Forgot Password?" 
      subtitle="No worries, we'll send you reset instructions."
    >
      <form className="space-y-6" onSubmit={handleResetPassword}>
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input
              type="email"
              placeholder="name@example.com"
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-slate-600 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <GradientButton className="w-full" type="submit" icon={<ArrowRight size={18} />}>
          {loading ? (
            <span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</span>
          ) : "Reset Password"}
        </GradientButton>

        <p className="text-center text-sm text-slate-400">
          Remember your password?{" "}
          <Link to="/login" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
            Log in
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default ForgotPassword;
