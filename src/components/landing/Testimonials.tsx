import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import GlassCard from "../ui/GlassCard";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex Rivera",
      role: "Frontend Developer",
      content: "NovaAI Studio completely changed my workflow. Building landing pages that used to take days now takes minutes.",
      avatar: "AR"
    },
    {
      name: "Sarah Chen",
      role: "Product Designer",
      content: "The UI generator is spooky good. It follows modern design principles perfectly. A must-have for every designer.",
      avatar: "SC"
    },
    {
      name: "Michael Knight",
      role: "SaaS Founder",
      content: "Finally, an AI tool that actually produces production-ready code. Our team's velocity has tripled since we started using Nova.",
      avatar: "MK"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Loved by <span className="text-gradient">creators</span> worldwide
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <GlassCard
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <Quote className="text-blue-500/20 mb-4" size={40} />
              <p className="text-slate-300 mb-8 italic leading-relaxed flex-1">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">{t.name}</h4>
                  <p className="text-slate-500 text-xs">{t.role}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
