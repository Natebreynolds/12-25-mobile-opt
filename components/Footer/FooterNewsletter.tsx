"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function FooterNewsletter() {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && agreed) {
      // Handle newsletter signup
      console.log("Newsletter signup:", { email });
      setEmail("");
      setAgreed(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-lg font-medium mb-4">Sign up for updates</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-foreground/5 border-foreground/10 focus:border-blue-500"
          />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="terms"
            checked={agreed}
            onCheckedChange={(checked) => setAgreed(checked as boolean)}
          />
          <label
            htmlFor="terms"
            className="text-sm text-foreground/60 cursor-pointer"
          >
            I agree to the Terms & Conditions
          </label>
        </div>

        <Button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white"
          disabled={!email || !agreed}
        >
          GET NOTIFIED
        </Button>
      </form>
    </motion.div>
  );
}