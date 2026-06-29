import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Sparkles, ArrowRight, Loader2, Code2, Layout, Smartphone } from "lucide-react";
import GradientButton from "../ui/GradientButton";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const Hero = () => {
  const [prompt, setPrompt] = useState("");
  const [generating, setGenerating] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setGenerating(true);
    setShowResult(false);
    
    // Simulate AI generation
    setTimeout(() => {
      setGenerating(false);
      setShowResult(true);
    }, 3000);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Image/Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/d7efdbd4-8d13-4987-a408-4162c9671acb/hero-bg-93976a17-1782534227954.webp" 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c] via-transparent to-[#0a0a0c]" />
      </div>

      <div className="container mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-white/10 text-blue-400 text-sm font-medium mb-8">
            <Sparkles size={16} />
            The Future of Development is Here
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 tracking-tight leading-tight">
            Build Websites and <br />
            <span className="text-gradient">Apps with AI</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            NovaAI Studio empowers you to transform ideas into production-ready software in minutes. 
            The only platform that combines AI generation with professional grade tools.
          </p>
        </motion.div>

        {/* AI Prompt Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto glass p-2 rounded-2xl md:rounded-3xl flex flex-col md:flex-row items-center gap-2"
        >
          <div className="flex-1 w-full flex items-center gap-3 px-6 py-4">
            {generating ? (
              <Loader2 className="text-blue-400 animate-spin shrink-0" size={24} />
            ) : (
              <Search className="text-slate-500 shrink-0" size={24} />
            )}
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              disabled={generating}
              placeholder="Describe the website or app you want to build..."
              className="bg-transparent border-none outline-none w-full text-white placeholder:text-slate-500 text-lg"
            />
          </div>
          <GradientButton 
            className="w-full md:w-auto px-10 py-5 text-lg"
            icon={<ArrowRight size={20} />}
            onClick={handleGenerate}
            disabled={generating || !prompt.trim()}
          >
            {generating ? "Generating..." : "Generate"}
          </GradientButton>
        </motion.div>

        {/* Generated Preview Card */}
        <AnimatePresence>
          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="max-w-4xl mx-auto mt-12 overflow-hidden"
            >
              <div className="glass-dark rounded-3xl border border-white/10 overflow-hidden shadow-2xl flex flex-col lg:flex-row">
                {/* Preview Image */}
                <div className="lg:w-1/2 relative group">
                  <img 
                    src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/d7efdbd4-8d13-4987-a408-4162c9671acb/generated-preview-image-71922dfa-1782658793136.webp" 
                    alt="Generated Preview" 
                    className="w-full h-full object-cover aspect-video lg:aspect-square"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <Badge variant="secondary" className="bg-black/50 backdrop-blur-md border-white/10 flex gap-1.5 items-center font-normal">
                      <Layout size={12} /> Desktop
                    </Badge>
                    <Badge variant="secondary" className="bg-black/50 backdrop-blur-md border-white/10 flex gap-1.5 items-center font-normal">
                      <Smartphone size={12} /> Mobile
                    </Badge>
                  </div>
                </div>
                
                {/* Content */}
                <div className="lg:w-1/2 p-8 text-left flex flex-col">
                  <div className="flex items-center gap-2 text-blue-400 mb-4 font-semibold uppercase tracking-wider text-xs">
                    <Sparkles size={14} /> AI Generation Complete
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {prompt.length > 30 ? prompt.substring(0, 30) + "..." : prompt || "Professional Platform"}
                  </h3>
                  <p className="text-slate-400 mb-8 leading-relaxed">
                    Your custom solution has been generated with production-ready code. 
                    Featuring a responsive layout, modern aesthetic, and optimized performance.
                  </p>
                  
                  <div className="space-y-6 mt-auto">
                    <div>
                      <p className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-3">Technologies Used</p>
                      <div className="flex flex-wrap gap-2">
                        {['React 19', 'Tailwind CSS', 'Framer Motion', 'Lucide Icons', 'TypeScript'].map((tech) => (
                          <Badge key={tech} variant="outline" className="border-white/10 text-slate-300 font-normal py-1 px-3">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full py-7 text-lg bg-white text-black hover:bg-slate-200 rounded-2xl gap-3 font-bold"
                      onClick={() => window.location.href = '/dashboard'}
                    >
                      Continue Building <Code2 size={20} />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
        >
          <span className="text-white font-bold text-xl italic tracking-widest">TECHCORP</span>
          <span className="text-white font-bold text-xl italic tracking-widest">LUMINA</span>
          <span className="text-white font-bold text-xl italic tracking-widest">NEXUS</span>
          <span className="text-white font-bold text-xl italic tracking-widest">QUANTUM</span>
          <span className="text-white font-bold text-xl italic tracking-widest">VORTEX</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
