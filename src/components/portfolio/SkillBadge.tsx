import React from 'react';
import { motion } from 'framer-motion';

interface SkillBadgeProps {
  name: string;
  icon?: React.ReactNode;
  index: number;
}

export function SkillBadge({ name, icon, index }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-lg border border-border hover:border-primary/30 transition-colors cursor-default"
    >
      {icon}
      <span className="font-medium">{name}</span>
    </motion.div>
  );
}
