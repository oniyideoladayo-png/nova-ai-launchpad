import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import GlassCard from "../ui/GlassCard";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does NovaAI Studio build websites?",
      answer: "NovaAI uses large language models and a proprietary design engine to translate your descriptions into clean HTML, CSS, and React code, while applying modern UI/UX principles automatically."
    },
    {
      question: "Can I export my code?",
      answer: "Yes! Every project can be exported as a standard React/Vite project or deployed directly to our global edge network."
    },
    {
      question: "Is the code SEO friendly?",
      answer: "Absolutely. All generated code follows best SEO practices, including semantic HTML tags, fast loading speeds, and responsive layouts."
    },
    {
      question: "Do you offer enterprise plans?",
      answer: "Yes, we offer custom enterprise plans for large teams that require advanced security, SSO, and dedicated support. Contact our sales team for more info."
    }
  ];

  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Frequently Asked <span className="text-gradient">Questions</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <GlassCard
              key={index}
              hoverEffect={false}
              className="p-0 overflow-hidden border-white/5"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-8 py-6 flex items-center justify-between transition-colors hover:bg-white/5"
              >
                <span className="text-lg font-semibold text-white">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="text-blue-400" size={20} />
                ) : (
                  <Plus className="text-slate-500" size={20} />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-6 text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
