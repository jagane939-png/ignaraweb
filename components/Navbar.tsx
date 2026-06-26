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
    const fn = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b py-3"
          : "bg-transparent py-5"
      }`}
      style={{ borderColor: scrolled ? "var(--border)" : "transparent" }}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between" aria-label="Main navigation">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Ignara AI">
          <div className="relative w-7 h-7 flex-shrink-0">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <rect width="28" height="28" rx="7" fill="url(#logo-grad)" />
              <path d="M14 5L20.5 8.75V16.25L14 20L7.5 16.25V8.75L14 5Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
              <circle cx="14" cy="12.5" r="2.2" fill="white"/>
              <line x1="14" y1="5" x2="14" y2="10.3" stroke="white" strokeWidth="0.9" strokeOpacity="0.5"/>
              <line x1="14" y1="14.7" x2="14" y2="20" stroke="white" strokeWidth="0.9" strokeOpacity="0.5"/>
              <line x1="20.5" y1="8.75" x2="16.1" y2="11.3" stroke="white" strokeWidth="0.9" strokeOpacity="0.5"/>
              <line x1="11.9" y1="13.7" x2="7.5" y2="16.25" stroke="white" strokeWidth="0.9" strokeOpacity="0.5"/>
              <line x1="7.5" y1="8.75" x2="11.9" y2="11.3" stroke="white" strokeWidth="0.9" strokeOpacity="0.5"/>
              <line x1="16.1" y1="13.7" x2="20.5" y2="16.25" stroke="white" strokeWidth="0.9" strokeOpacity="0.5"/>
              <defs>
                <linearGradient id="logo-grad" x1="0" y1="0" x2="28" y2="28">
                  <stop stopColor="#2563eb"/>
                  <stop offset="1" stopColor="#06b6d4"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="font-semibold text-[15px] text-white tracking-[-0.02em]">
            Ignara <span style={{ color: "var(--accent)" }}>AI</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative px-4 py-2 rounded-lg text-[13px] font-medium transition-colors duration-200 block"
                  style={{ color: active ? "var(--text-1)" : "var(--text-3)" }}
                  aria-current={active ? "page" : undefined}
                  onMouseEnter={(e) => { if (!active) (e.currentTarget as HTMLElement).style.color = "rgba(240,244,255,0.8)"; }}
                  onMouseLeave={(e) => { if (!active) (e.currentTarget as HTMLElement).style.color = "var(--text-3)"; }}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg"
                      style={{ background: "var(--surface-2)", border: "1px solid var(--border-2)" }}
                      transition={{ type: "spring", stiffness: 320, damping: 30 }}
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
          className="hidden md:inline-flex items-center px-4 py-2 rounded-lg text-white text-[13px] font-semibold transition-all duration-200"
          style={{ background: "var(--primary)" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--primary-h)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(37,99,235,0.3)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--primary)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
        >
          Get in Touch
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg transition-all"
          style={{ color: "var(--text-3)" }}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden overflow-hidden glass border-t"
            style={{ borderColor: "var(--border)" }}
          >
            <ul className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}
                    className="block px-4 py-3 rounded-xl text-sm transition-all"
                    style={{
                      color: pathname === link.href ? "var(--text-1)" : "var(--text-3)",
                      background: pathname === link.href ? "var(--surface-2)" : "transparent",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2 pt-2" style={{ borderTop: "1px solid var(--border)" }}>
                <Link href="/contact" className="block px-4 py-3 rounded-xl text-white text-sm font-semibold text-center transition-all" style={{ background: "var(--primary)" }}>
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
