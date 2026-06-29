import { motion } from "framer-motion";
import { Layout, Code, Wand2, Briefcase, Zap, Shield } from "lucide-react";
import GlassCard from "../ui/GlassCard";

const Features = () => {
  const features = [
    {
      title: "AI Website Builder",
      description: "Generate stunning, responsive websites in seconds with simple text prompts. No design skills needed.",
      icon: <Layout className="text-blue-400" size={28} />,
      color: "blue"
    },
    {
      title: "AI Code Assistant",
      description: "Write clean, optimized code faster. Our AI understands your context and suggests production-ready snippets.",
      icon: <Code className="text-purple-400" size={28} />,
      color: "purple"
    },
    {
      title: "AI UI Generator",
      description: "Create beautiful components and layouts. From dashboards to landing pages, AI handles the visual polish.",
      icon: <Wand2 className="text-pink-400" size={28} />,
      color: "pink"
    },
    {
      title: "Project Management",
      description: "Organize tasks, collaborate with your team, and track progress effortlessly with AI-powered insights.",
      icon: <Briefcase className="text-emerald-400" size={28} />,
      color: "emerald"
    },
    {
      title: "Ultra Fast Deployment",
      description: "Ship your projects to global edge networks with a single click. High performance guaranteed.",
      icon: <Zap className="text-yellow-400" size={28} />,
      color: "yellow"
    },
    {
      title: "Enterprise Security",
      description: "Bank-grade security protocols to protect your data and projects. Your privacy is our priority.",
      icon: <Shield className="text-red-400" size={28} />,
      color: "red"
    }
  ];

  return (
    <section id="features" className="py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Everything you need to <span className="text-gradient">build faster</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            NovaAI Studio combines powerful AI engines with a modern workspace to streamline your entire development workflow.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <GlassCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
