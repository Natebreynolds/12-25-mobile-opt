"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export default function ServiceCard({ title, description, icon: Icon, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-card/5 backdrop-blur-sm border border-white/5 rounded-xl p-8 hover:bg-card/10 transition-all duration-300"
    >
      <Icon className="w-12 h-12 text-blue-400 mb-6" />
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-foreground/60 text-sm leading-relaxed">{description}</p>
      
      {/* Hover Gradient */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-blue-500/5 group-hover:to-transparent transition-all duration-300" />
    </motion.div>
  );
}