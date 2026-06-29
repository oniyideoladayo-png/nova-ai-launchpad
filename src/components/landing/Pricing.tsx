import { motion } from "framer-motion";
import { Check } from "lucide-react";
import GlassCard from "../ui/GlassCard";
import GradientButton from "../ui/GradientButton";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "0",
      description: "Perfect for exploring AI capabilities and personal projects.",
      features: [
        "3 AI projects per month",
        "Basic UI components",
        "Community support",
        "1GB Storage",
        "Public workspace"
      ],
      cta: "Get Started",
      recommended: false
    },
    {
      name: "Pro",
      price: "49",
      description: "For professionals who want to ship faster and better.",
      features: [
        "Unlimited AI projects",
        "Premium UI library",
        "Priority AI access",
        "10GB Storage",
        "Private workspace",
        "Custom domains"
      ],
      cta: "Go Pro",
      recommended: true
    },
    {
      name: "Team",
      price: "129",
      description: "Scale your productivity with collaborative features.",
      features: [
        "Everything in Pro",
        "Up to 10 members",
        "Shared asset library",
        "Advanced analytics",
        "24/7 dedicated support",
        "SSO & Admin controls"
      ],
      cta: "Contact Sales",
      recommended: false
    }
  ];

  return (
    <section id="pricing" className="py-24 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Simple, <span className="text-gradient">transparent</span> pricing
          </motion.h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your needs. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <GlassCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={plan.recommended ? "border-blue-500/50 relative overflow-hidden ring-1 ring-blue-500/20" : ""}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                  Recommended
                </div>
              )}
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-extrabold text-white">${plan.price}</span>
                <span className="text-slate-500 text-sm">/month</span>
              </div>
              <p className="text-slate-400 text-sm mb-8">
                {plan.description}
              </p>
              
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-sm text-slate-300">
                    <Check className="text-blue-400 shrink-0 mt-0.5" size={16} />
                    {feature}
                  </li>
                ))}
              </ul>

              <GradientButton
                variant={plan.recommended ? "primary" : "outline"}
                className="w-full"
              >
                {plan.cta}
              </GradientButton>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
