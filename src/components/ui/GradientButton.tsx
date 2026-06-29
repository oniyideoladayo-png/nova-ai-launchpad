import { cn } from "../../lib/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface GradientButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof HTMLMotionProps<"button">> {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  icon?: ReactNode;
}

const GradientButton = ({
  children,
  className,
  variant = "primary",
  icon,
  ...props
}: GradientButtonProps & HTMLMotionProps<"button">) => {
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]",
    secondary: "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm",
    outline: "bg-transparent border border-white/20 text-white hover:border-white/40 hover:bg-white/5",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.02 }}
      className={cn(
        "px-8 py-3.5 rounded-full font-semibold flex items-center justify-center gap-2 transition-all",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
      {icon && <span className="w-5 h-5">{icon}</span>}
    </motion.button>
  );
};

export default GradientButton;
