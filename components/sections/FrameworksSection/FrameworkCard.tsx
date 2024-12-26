"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface FrameworkCardProps {
  title: string;
  description: string;
  steps: string[];
  index: number;
}

export default function FrameworkCard({ title, description, steps, index }: FrameworkCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-card-gradient backdrop-blur-sm border border-white/5 rounded-xl p-8 hover-card-glow"
    >
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-foreground/60 mb-6">{description}</p>
        
        <ul className="space-y-3 mb-8">
          {steps.map((step, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * i }}
              className="flex items-center space-x-3"
            >
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse-glow" />
              <span className="text-foreground/80">{step}</span>
            </motion.li>
          ))}
        </ul>

        <Link
          href="/frameworks"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group-hover:translate-x-1 duration-300"
        >
          Learn More
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-blue-500/5 group-hover:to-transparent transition-all duration-500 rounded-xl" />
      
      {/* Glow effect */}
      <div className="absolute -inset-px bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 rounded-xl blur-lg transition-all duration-500" />
    </motion.div>
  );
}