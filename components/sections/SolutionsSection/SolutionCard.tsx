"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface SolutionCardProps {
  title: string;
  description: string;
  index: number;
}

export default function SolutionCard({ title, description, index }: SolutionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative bg-card-gradient backdrop-blur-sm border border-white/5 rounded-xl p-8 transition-all duration-500 hover-card-glow overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-start justify-between">
            <div className="space-y-3">
              <span className="inline-block text-blue-400/60 text-sm font-medium">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors duration-300">
                {title}
              </h3>
              <p className="text-foreground/60 leading-relaxed max-w-2xl">
                {description}
              </p>
            </div>
            <div className="relative flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                <ArrowUpRight className="w-4 h-4 text-blue-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-blue-500/5 group-hover:to-transparent transition-all duration-500" />
        
        {/* Glow effect */}
        <div className="absolute -inset-px bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500" />
      </div>
    </motion.div>
  );
}