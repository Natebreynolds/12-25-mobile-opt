"use client";

import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  index: number;
}

export default function ServiceCard({ title, description, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-card-gradient backdrop-blur-sm border border-white/5 rounded-xl p-8 hover-card-glow"
    >
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-foreground/60">{description}</p>
      </div>
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-blue-500/5 group-hover:to-transparent transition-all duration-500 rounded-xl" />
      
      {/* Glow effect */}
      <div className="absolute -inset-px bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 rounded-xl blur-lg transition-all duration-500" />
    </motion.div>
  );
}