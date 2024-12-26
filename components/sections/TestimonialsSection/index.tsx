"use client";

import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./data";

export default function TestimonialsSection() {
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
            Trusted by{" "}
            <span className="text-blue-400">Top Performers</span>{" "}
            and{" "}
            <span className="text-blue-400">Leaders</span>{" "}
            alike
          </h2>
          <p className="text-lg text-foreground/60">
            See how Breakthrough Coaching AI is transforming sales teams and driving 
            exceptional results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}