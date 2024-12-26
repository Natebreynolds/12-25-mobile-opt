"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  text: string;
  author: string;
  role: string;
  rating: number;
  index: number;
}

export default function TestimonialCard({ text, author, role, rating, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card/5 backdrop-blur-sm border border-white/5 rounded-xl p-8"
    >
      <div className="flex gap-1 mb-6">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
        ))}
      </div>
      
      <p className="text-lg mb-6 text-foreground/80 italic">"{text}"</p>
      
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-foreground/60">{role}</p>
      </div>
    </motion.div>
  );
}