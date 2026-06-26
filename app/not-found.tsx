"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md"
      >
        <div className="text-8xl font-bold gt-white mb-4">404</div>
        <h1 className="text-2xl font-bold text-white mb-4">Page not found</h1>
        <p className="text-base mb-8" style={{ color: "rgba(240,244,255,0.4)" }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all" style={{ background: "var(--primary)" }}>
            Back to Home <ArrowRight size={14} aria-hidden="true" />
          </Link>
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium text-sm transition-all" style={{ background: "var(--surface-2)", border: "1px solid var(--border-2)" }}>
            Contact Us
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
