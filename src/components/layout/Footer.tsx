import { Link } from "react-router-dom";
import { Cpu, Mail, Code, Globe, Shield } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 pt-24 pb-12 border-t border-white/5 bg-[#0a0a0c]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Cpu className="text-white w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-white">
                NovaAI <span className="text-blue-400">Studio</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Empowering creators with cutting-edge AI tools to build the future of the web. Modern, fast, and intelligent.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Globe size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">
                <Code size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
                <Shield size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="space-y-4">
              <li><a href="#features" className="text-slate-400 text-sm hover:text-blue-400 transition-colors">AI Website Builder</a></li>
              <li><a href="#features" className="text-slate-400 text-sm hover:text-blue-400 transition-colors">AI Code Assistant</a></li>
              <li><a href="#features" className="text-slate-400 text-sm hover:text-blue-400 transition-colors">UI Generator</a></li>
              <li><a href="#pricing" className="text-slate-400 text-sm hover:text-blue-400 transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-slate-400 text-sm hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-400 text-sm hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-400 text-sm hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate-400 text-sm hover:text-blue-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail size={16} />
                <span>support@novaai.studio</span>
              </li>
              <li className="text-slate-400 text-sm">
                San Francisco, CA<br />
                United States
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © {currentYear} NovaAI Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-500 text-xs hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-500 text-xs hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
