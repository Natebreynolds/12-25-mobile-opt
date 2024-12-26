"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter, Facebook } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" }
];

export default function FooterSocial() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-lg font-medium mb-4">Social</h3>
      <div className="flex flex-wrap gap-4">
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={social.label}
              href={social.href}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="w-10 h-10 rounded-lg bg-foreground/5 hover:bg-foreground/10 flex items-center justify-center transition-colors duration-200 group"
              aria-label={social.label}
            >
              <Icon className="w-5 h-5 text-foreground/60 group-hover:text-foreground transition-colors duration-200" />
            </motion.a>
          );
        })}
      </div>
    </motion.div>
  );
}