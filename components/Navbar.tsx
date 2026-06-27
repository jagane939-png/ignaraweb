"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const NAV = [
  { label: "Company", links: [
    { href: "/about", label: "About", desc: "Our story and team" },
    { href: "/vision", label: "Vision", desc: "Where we are going" },
    { href: "/roadmap", label: "Roadmap", desc: "Development timeline" },
  ]},
  { label: "Platform", links: [
    { href: "/platform", label: "Ecosystem", desc: "Platform overview" },
    { href: "/fabric", label: "Ignara Fabric", desc: "Infrastructure platform" },
    { href: "/labs", label: "Ignara Labs", desc: "Research initiative" },
    { href: "/architecture", label: "Architecture", desc: "System design" },
  ]},
  { label: "Developers", links: [
    { href: "/docs", label: "Documentation", desc: "Guides and reference" },
    { href: "/blog", label: "Engineering Blog", desc: "Technical writing" },
    { href: "/research", label: "Research", desc: "Active research areas" },
  ]},
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setMobileOpen(false); setActiveMenu(null); }, [pathname]);

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        transition: "all 0.4s ease",
        padding: scrolled ? "8px 0" : "16px 0",
        background: scrolled ? "rgba(7,13,26,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
      }}
    >
      <nav ref={menuRef} style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }} aria-label="Main navigation">

        {/* Logo */}
        <Link href="/" aria-label="Ignara AI" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", flexShrink: 0 }}>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
            <defs>
              <linearGradient id="nav-lg" x1="0" y1="0" x2="30" y2="30" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#3b82f6"/>
                <stop offset="100%" stopColor="#06b6d4"/>
              </linearGradient>
            </defs>
            <path d="M15 2L26 8.5V21.5L15 28L4 21.5V8.5L15 2Z" stroke="url(#nav-lg)" strokeWidth="1.3" fill="rgba(37,99,235,0.1)"/>
            <path d="M15 8L21 11.5V18.5L15 22L9 18.5V11.5L15 8Z" stroke="url(#nav-lg)" strokeWidth="1.3" fill="rgba(37,99,235,0.18)"/>
            <circle cx="15" cy="15" r="3" fill="url(#nav-lg)"/>
            <line x1="15" y1="2" x2="15" y2="12" stroke="url(#nav-lg)" strokeWidth="0.8" opacity="0.5"/>
            <line x1="15" y1="18" x2="15" y2="28" stroke="url(#nav-lg)" strokeWidth="0.8" opacity="0.5"/>
            <line x1="26" y1="8.5" x2="18" y2="13" stroke="url(#nav-lg)" strokeWidth="0.8" opacity="0.5"/>
            <line x1="12" y1="17" x2="4" y2="21.5" stroke="url(#nav-lg)" strokeWidth="0.8" opacity="0.5"/>
            <line x1="4" y1="8.5" x2="12" y2="13" stroke="url(#nav-lg)" strokeWidth="0.8" opacity="0.5"/>
            <line x1="18" y1="17" x2="26" y2="21.5" stroke="url(#nav-lg)" strokeWidth="0.8" opacity="0.5"/>
          </svg>
          <span style={{ fontWeight: 700, fontSize: "15px", letterSpacing: "-0.03em", color: "#fff" }}>
            Ignara<span style={{ color: "#06b6d4" }}>AI</span>
          </span>
        </Link>

        {/* Desktop grouped nav */}
        <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "2px" }}>
          {NAV.map((group) => {
            const isActive = activeMenu === group.label;
            const groupActive = group.links.some(l => pathname.startsWith(l.href));
            return (
              <div key={group.label} style={{ position: "relative" }}>
                <button
                  onClick={() => setActiveMenu(isActive ? null : group.label)}
                  style={{ display: "flex", alignItems: "center", gap: "4px", padding: "7px 14px", borderRadius: "8px", background: isActive ? "rgba(255,255,255,0.07)" : groupActive ? "rgba(255,255,255,0.05)" : "transparent", border: "none", cursor: "pointer", color: groupActive || isActive ? "rgba(240,244,255,0.9)" : "rgba(240,244,255,0.42)", fontSize: "13px", fontWeight: 500, transition: "all 0.15s" }}
                >
                  {group.label}
                  <ChevronDown size={12} style={{ transform: isActive ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }} aria-hidden="true" />
                </button>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15 }}
                      style={{ position: "absolute", top: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)", minWidth: "200px", background: "rgba(10,18,32,0.97)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", padding: "8px", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)", boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
                    >
                      {group.links.map((link) => {
                        const active = pathname === link.href || pathname.startsWith(link.href + "/");
                        return (
                          <Link key={link.href} href={link.href}
                            style={{ display: "block", padding: "9px 12px", borderRadius: "8px", textDecoration: "none", background: active ? "rgba(37,99,235,0.12)" : "transparent", transition: "background 0.15s" }}
                            onMouseEnter={(e) => { if (!active) (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)"; }}
                            onMouseLeave={(e) => { if (!active) (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                          >
                            <div style={{ fontSize: "13px", fontWeight: 500, color: active ? "#60a5fa" : "rgba(240,244,255,0.85)", marginBottom: "2px" }}>{link.label}</div>
                            <div style={{ fontSize: "11px", color: "rgba(240,244,255,0.3)" }}>{link.desc}</div>
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          <Link href="/contact"
            style={{ marginLeft: "8px", display: "inline-flex", alignItems: "center", gap: "6px", padding: "8px 18px", borderRadius: "9px", background: "linear-gradient(135deg, #2563eb, #1a56c8)", color: "#fff", fontSize: "13px", fontWeight: 600, textDecoration: "none", boxShadow: "0 1px 0 rgba(255,255,255,0.12) inset, 0 4px 14px rgba(37,99,235,0.3)", transition: "all 0.2s" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 0 rgba(255,255,255,0.12) inset, 0 8px 22px rgba(37,99,235,0.45)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 0 rgba(255,255,255,0.12) inset, 0 4px 14px rgba(37,99,235,0.3)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="mobile-btn"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          style={{ display: "none", padding: "8px", borderRadius: "8px", background: "none", border: "none", color: "rgba(255,255,255,0.6)", cursor: "pointer" }}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            style={{ overflow: "hidden", background: "rgba(7,13,26,0.97)", borderTop: "1px solid rgba(255,255,255,0.07)", backdropFilter: "blur(24px)" }}
          >
            <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "16px 24px 24px" }}>
              {NAV.map((group) => (
                <div key={group.label} style={{ marginBottom: "20px" }}>
                  <p style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(240,244,255,0.25)", marginBottom: "8px", paddingLeft: "12px" }}>{group.label}</p>
                  {group.links.map((link) => (
                    <Link key={link.href} href={link.href}
                      style={{ display: "block", padding: "10px 12px", borderRadius: "9px", textDecoration: "none", fontSize: "14px", color: pathname === link.href ? "#fff" : "rgba(240,244,255,0.55)", background: pathname === link.href ? "rgba(37,99,235,0.12)" : "transparent", marginBottom: "2px" }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              ))}
              <Link href="/contact" style={{ display: "block", padding: "12px", borderRadius: "10px", background: "#2563eb", color: "#fff", fontSize: "14px", fontWeight: 600, textAlign: "center", textDecoration: "none" }}>
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-btn { display: flex !important; }
        }
      `}</style>
    </motion.header>
  );
}
