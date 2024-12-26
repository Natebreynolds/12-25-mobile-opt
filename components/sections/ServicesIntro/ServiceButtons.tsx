"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServiceButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="flex flex-col sm:flex-row items-center justify-center gap-4"
    >
      <Link
        href="/services"
        className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition-all duration-300 group"
      >
        Explore Our Services
        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </Link>
      
      <Link
        href="/about"
        className="inline-flex items-center px-8 py-4 text-lg font-medium text-foreground border-2 border-foreground/10 hover:border-foreground/20 rounded-lg transition-all duration-300"
      >
        Learn More
        <ArrowRight className="ml-2 w-5 h-5" />
      </Link>
    </motion.div>
  );
}