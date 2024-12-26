"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
];

export default function FooterNav() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-lg font-medium mb-4">Sitemap</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <motion.li
            key={link.label}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Link
              href={link.href}
              className="text-foreground/60 hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}