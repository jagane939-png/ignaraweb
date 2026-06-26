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
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        transition: "all 0.4s ease",
        padding: scrolled ? "10px 0" : "18px 0",
        background: scrolled ? "rgba(7,13,26,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
      }}
    >
      <nav style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }} aria-label="Main navigation">

        {/* ── Logo ── */}
        <Link href="/" aria-label="Ignara AI home" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          {/* Custom geometric logo mark */}
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <defs>
              <linearGradient id="lg1" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#3b82f6"/>
                <stop offset="100%" stopColor="#06b6d4"/>
              </linearGradient>
            </defs>
            {/* Outer hexagon */}
            <path d="M16 2L28 9V23L16 30L4 23V9L16 2Z" fill="url(#lg1)" opacity="0.15"/>
            <path d="M16 2L28 9V23L16 30L4 23V9L16 2Z" stroke="url(#lg1)" strokeWidth="1.2" fill="none"/>
            {/* Inner diamond */}
            <path d="M16 8L22 12V20L16 24L10 20V12L16 8Z" fill="url(#lg1)" opacity="0.3"/>
            {/* Center node */}
            <circle cx="16" cy="16" r="3" fill="url(#lg1)"/>
            {/* Connection lines */}
            <line x1="16" y1="2" x2="16" y2="13" stroke="url(#lg1)" strokeWidth="0.8" opacity="0.6"/>
            <line x1="16" y1="19" x2="16" y2="30" stroke="url(#lg1)" strokeWidth="0.8" opacity="0.6"/>
            <line x1="28" y1="9" x2="19.2" y2="13.5" stroke="url(#lg1)" strokeWidth="0.8" opacity="0.6"/>
            <line x1="12.8" y1="18.5" x2="4" y2="23" stroke="url(#lg1)" strokeWidth="0.8" opacity="0.6"/>
            <line x1="4" y1="9" x2="12.8" y2="13.5" stroke="url(#lg1)" strokeWidth="0.8" opacity="0.6"/>
            <line x1="19.2" y1="18.5" x2="28" y2="23" stroke="url(#lg1)" strokeWidth="0.8" opacity="0.6"/>
          </svg>
          <span style={{ fontWeight: 700, fontSize: "16px", letterSpacing: "-0.03em", color: "#fff" }}>
            Ignara<span style={{ color: "#06b6d4", marginLeft: "1px" }}>AI</span>
          </span>
        </Link>

        {/* ── Desktop links ── */}
        <ul style={{ display: "flex", alignItems: "center", gap: "2px", listStyle: "none", margin: 0, padding: 0 }} role="list">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link href={link.href} aria-current={active ? "page" : undefined}
                  style={{
                    position: "relative", display: "block",
                    padding: "7px 16px", borderRadius: "8px",
                    fontSize: "13.5px", fontWeight: active ? 500 : 400,
                    color: active ? "#fff" : "rgba(255,255,255,0.45)",
                    textDecoration: "none", transition: "color 0.2s",
                    background: active ? "rgba(255,255,255,0.07)" : "transparent",
                    border: active ? "1px solid rgba(255,255,255,0.1)" : "1px solid transparent",
                  }}
                  onMouseEnter={(e) => { if (!active) (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.85)"; }}
                  onMouseLeave={(e) => { if (!active) (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)"; }}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* ── CTA Button ── */}
        <Link href="/contact"
          style={{
            display: "inline-flex", alignItems: "center", gap: "6px",
            padding: "9px 20px", borderRadius: "10px",
            background: "linear-gradient(135deg, #2563eb, #1d84c0)",
            color: "#fff", fontSize: "13.5px", fontWeight: 600,
            textDecoration: "none", letterSpacing: "-0.01em",
            boxShadow: "0 1px 0 rgba(255,255,255,0.12) inset, 0 4px 16px rgba(37,99,235,0.25)",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 0 rgba(255,255,255,0.12) inset, 0 8px 24px rgba(37,99,235,0.4)";
            (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 0 rgba(255,255,255,0.12) inset, 0 4px 16px rgba(37,99,235,0.25)";
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
          }}
        >
          Get in Touch
        </Link>

        {/* ── Mobile toggle ── */}
        <button onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}
          style={{ display: "none", padding: "8px", borderRadius: "8px", background: "none", border: "none", color: "rgba(255,255,255,0.6)", cursor: "pointer" }}
          className="mobile-menu-btn">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            style={{ overflow: "hidden", background: "rgba(7,13,26,0.95)", borderTop: "1px solid rgba(255,255,255,0.07)", backdropFilter: "blur(24px)" }}>
            <ul style={{ maxWidth: "1152px", margin: "0 auto", padding: "16px 24px", display: "flex", flexDirection: "column", gap: "4px", listStyle: "none" }}>
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} style={{ display: "block", padding: "12px 16px", borderRadius: "10px", fontSize: "15px", color: pathname === link.href ? "#fff" : "rgba(255,255,255,0.5)", background: pathname === link.href ? "rgba(255,255,255,0.07)" : "transparent", textDecoration: "none" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li style={{ marginTop: "8px", paddingTop: "8px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                <Link href="/contact" style={{ display: "block", padding: "12px 16px", borderRadius: "10px", background: "#2563eb", color: "#fff", fontSize: "15px", fontWeight: 600, textAlign: "center", textDecoration: "none" }}>
                  Get in Touch
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .mobile-menu-btn { display: flex !important; }
          nav ul, nav > a:last-of-type { display: none !important; }
        }
      `}</style>
    </motion.header>
  );
}
