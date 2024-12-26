"use client";

import { motion } from "framer-motion";
import FooterNav from "./FooterNav";
import FooterSocial from "./FooterSocial";
import FooterContact from "./FooterContact";
import FooterNewsletter from "./FooterNewsletter";

export default function Footer() {
  return (
    <footer className="relative bg-background border-t border-white/5">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-50" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />
      
      <div className="relative container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Navigation */}
          <FooterNav />
          
          {/* Contact Information */}
          <FooterContact />
          
          {/* Social Links */}
          <FooterSocial />
          
          {/* Newsletter */}
          <FooterNewsletter />
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/5 text-center md:text-left">
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} Breakthrough Coaching AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}