"use client";

import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import { services } from "./data";

export default function ServicesSection() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Solutions That{" "}
            <span className="text-blue-400">Drive Success</span>
          </h2>
          <p className="text-lg text-foreground/60">
            From strategy to implementation, we offer a comprehensive suite of solutions to 
            help you reach your goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}