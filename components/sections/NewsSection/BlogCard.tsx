"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BlogPost } from "@/types/blog";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <Link href={`/blog/${post.slug}`}>
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-4 right-4 bg-blue-500 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ArrowUpRight className="w-4 h-4 text-white" />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-4 text-sm text-foreground/60">
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
          <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors duration-300">
            {post.title}
          </h3>
          <p className="text-foreground/60 line-clamp-2">{post.excerpt}</p>
        </div>
      </Link>
    </motion.div>
  );
}