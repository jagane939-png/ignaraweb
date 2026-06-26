"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md"
      >
        <div className="text-8xl font-bold gradient-text mb-4">404</div>
        <h1 className="text-2xl font-bold text-white mb-4">Page not found</h1>
        <p className="text-white/40 text-base mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button href="/" icon>Back to Home</Button>
          <Button href="/contact" variant="ghost">Contact Us</Button>
        </div>
      </motion.div>
    </div>
  );
}
