"use client";

import { motion } from "framer-motion";
import SolutionCard from "./SolutionCard";
import { solutions } from "./data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SolutionsSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 to-background" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />
      <div className="absolute h-full w-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse-glow" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block text-blue-400 text-sm font-medium tracking-wider uppercase mb-4"
          >
            Our Solutions
          </motion.span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Solutions That{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                Drive Success
              </span>
              <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-blue-400/20 to-blue-600/20" />
            </span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-foreground/60 max-w-2xl mx-auto"
          >
            From strategy to implementation, we offer a comprehensive suite of solutions to 
            help you reach your goals.
          </motion.p>
        </motion.div>

        <div className="grid gap-6 max-w-4xl mx-auto mb-12">
          {solutions.map((solution, index) => (
            <SolutionCard key={solution.title} {...solution} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Link
            href="/services"
            className="group inline-flex items-center px-6 py-3 text-blue-400 hover:text-blue-300 transition-colors rounded-lg border border-blue-500/20 hover:border-blue-500/40"
          >
            <span className="mr-2">View All Solutions</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}