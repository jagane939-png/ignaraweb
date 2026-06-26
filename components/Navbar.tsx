"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/vision", label: "Vision" },
  { href: "/research", label: "Research" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-white/8 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-6 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="Ignara AI home">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg group-hover:shadow-blue-500/30 transition-shadow duration-300">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M9 2L15 6V12L9 16L3 12V6L9 2Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
              <circle cx="9" cy="9" r="2" fill="white" />
            </svg>
          </div>
          <span className="text-white font-semibold text-base tracking-tight">
            Ignara <span className="text-cyan-400">AI</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                    active
                      ? "text-white"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-white/8 border border-white/10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20"
        >
          Get in Touch
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/8 transition-all"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-white/8 glass"
          >
            <ul className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1" role="list">
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block px-4 py-2.5 rounded-lg text-sm transition-all ${
                        active
                          ? "text-white bg-white/8"
                          : "text-white/60 hover:text-white hover:bg-white/5"
                      }`}
                      aria-current={active ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="mt-2">
                <Link
                  href="/contact"
                  className="block px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium text-center transition-all"
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
