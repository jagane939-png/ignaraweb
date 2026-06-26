"use client";

import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
  gradient?: boolean;
}

export function Card({
  children,
  className = "",
  hover = true,
  delay = 0,
  gradient = false,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={`relative rounded-2xl p-px overflow-hidden ${className}`}
    >
      {gradient && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
      <div
        className={`relative glass rounded-2xl h-full group ${
          hover ? "hover:border-white/15 transition-all duration-300" : ""
        }`}
      >
        {children}
      </div>
    </motion.div>
  );
}
