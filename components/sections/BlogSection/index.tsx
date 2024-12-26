"use client";

import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import { blogPosts } from "@/config/blog";

export default function BlogSection() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-blue-400 mb-2 block">BLOG</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Breakthrough Insights:{" "}
            <span className="text-blue-400">
              Elevate Sales Mastery with AI-Driven Coaching
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}