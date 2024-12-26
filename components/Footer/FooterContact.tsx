"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@breakthroughai.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567"
  },
  {
    icon: MapPin,
    label: "Address",
    value: "123 AI Street, Tech City"
  }
];

export default function FooterContact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-lg font-medium mb-4">Contact</h3>
      <ul className="space-y-4">
        {contactInfo.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-start space-x-3"
            >
              <Icon className="w-5 h-5 text-blue-400 mt-1" />
              <div>
                <p className="text-sm text-foreground/60">{item.label}</p>
                <p className="text-foreground/80">{item.value}</p>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </motion.div>
  );
}