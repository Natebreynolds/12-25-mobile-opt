"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "AI-Powered Insights",
    description: "Leverage our ai-powered insights to accelerate your sales growth"
  },
  {
    title: "Proven Frameworks",
    description: "Leverage our proven frameworks to accelerate your sales growth"
  },
  {
    title: "Expert Coaching",
    description: "Leverage our expert coaching to accelerate your sales growth"
  }
];

function ServiceCard({ title, description, index }: { title: string; description: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card/5 backdrop-blur-sm border border-white/5 rounded-xl p-8 hover:bg-card/10 transition-colors duration-300"
    >
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-foreground/60">{description}</p>
    </motion.div>
  );
}

export default function ServicesIntro() {
  return (
    <section className="relative py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Services Tailored for{" "}
            <span className="text-blue-400">Breakthrough Success</span>
          </h2>
          <p className="text-lg sm:text-xl text-foreground/60 leading-relaxed">
            We combine AI innovation, proven sales frameworks, and personalized
            coaching to drive measurable results. Our approach transforms your sales
            process into a powerful engine for growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>

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
      </div>
    </section>
  );
}