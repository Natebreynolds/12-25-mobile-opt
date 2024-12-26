"use client";

import { motion } from "framer-motion";
import FrameworkCard from "./FrameworkCard";
import { frameworks } from "./data";

export default function FrameworksSection() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-background/95 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Frameworks That{" "}
            <span className="text-blue-400">Deliver Results</span>
          </h2>
          <p className="text-lg text-foreground/60">
            Our proven methodologies combine decades of sales expertise with cutting-edge
            AI technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {frameworks.map((framework, index) => (
            <FrameworkCard key={framework.title} {...framework} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}