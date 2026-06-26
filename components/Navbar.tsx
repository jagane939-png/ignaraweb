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

function LogoMark({ dim = 28 }: { dim?: number }) {
  return (
    <div
      style={{ width: dim, height: dim }}
      className="rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center flex-shrink-0"
    >
      <svg width={Math.round(dim * 0.58)} height={Math.round(dim * 0.58)} viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M8 1L13.5 4.25V10.75L8 14L2.5 10.75V4.25L8 1Z" stroke="white" strokeWidth="1.4" strokeLinejoin="round"/>
        <circle cx="8" cy="7.5" r="1.8" fill="white"/>
        <line x1="8" y1="1" x2="8" y2="5.7" stroke="white" strokeWidth="0.8" opacity="0.5"/>
        <line x1="8" y1="9.3" x2="8" y2="14" stroke="white" strokeWidth="0.8" opacity="0.5"/>
        <line x1="13.5" y1="4.25" x2="9.56" y2="6.45" stroke="white" strokeWidth="0.8" opacity="0.5"/>
        <line x1="6.44" y1="8.55" x2="2.5" y2="10.75" stroke="white" strokeWidth="0.8" opacity="0.5"/>
        <line x1="2.5" y1="4.25" x2="6.44" y2="6.45" stroke="white" strokeWidth="0.8" opacity="0.5"/>
        <line x1="9.56" y1="8.55" x2="13.5" y2="10.75" stroke="white" strokeWidth="0.8" opacity="0.5"/>
      </svg>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-white/7 py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="Ignara AI home">
          <div className="group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-shadow duration-300 rounded-lg">
            <LogoMark />
          </div>
          <span className="font-semibold tracking-tight text-[15px] text-white">
            Ignara <span className="text-cyan-400">AI</span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-0.5" role="list">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative px-4 py-2 rounded-lg text-[13px] font-medium transition-all duration-200 ${
                    active ? "text-white" : "text-white/50 hover:text-white/90"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-lg bg-white/7 border border-white/10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/contact"
          className="hidden md:inline-flex px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-[13px] font-medium transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
        >
          Get in Touch
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/6 transition-all"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-white/7 glass"
          >
            <ul className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1" role="list">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block px-4 py-2.5 rounded-lg text-sm transition-all ${
                      pathname === link.href ? "text-white bg-white/7" : "text-white/50 hover:text-white hover:bg-white/4"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <Link href="/contact" className="block px-4 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium text-center">
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
