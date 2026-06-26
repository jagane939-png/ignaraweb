"use client";

import Link from "next/link";
import { GitBranch, ExternalLink, Mail, ArrowUpRight } from "lucide-react";

const nav = [
  { label: "Company", links: [
    { href: "/about", label: "About" },
    { href: "/vision", label: "Vision" },
    { href: "/research", label: "Research" },
    { href: "/contact", label: "Contact" },
  ]},
  { label: "Research", links: [
    { href: "/research", label: "Ignara Fabric" },
    { href: "/research", label: "Space Intelligence" },
    { href: "/research", label: "Memory Architecture" },
    { href: "/research", label: "Inference Systems" },
  ]},
  { label: "Legal", links: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ]},
];

export function Footer() {
  return (
    <footer style={{ background: "#040910", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-12">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-3 mb-6" aria-label="Ignara AI">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <rect width="28" height="28" rx="7" fill="url(#f-logo-grad)" />
                <path d="M14 5L20.5 8.75V16.25L14 20L7.5 16.25V8.75L14 5Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
                <circle cx="14" cy="12.5" r="2.2" fill="white"/>
                <defs>
                  <linearGradient id="f-logo-grad" x1="0" y1="0" x2="28" y2="28">
                    <stop stopColor="#2563eb"/><stop offset="1" stopColor="#06b6d4"/>
                  </linearGradient>
                </defs>
              </svg>
              <span className="font-semibold text-[15px] text-white tracking-tight">
                Ignara <span style={{ color: "#06b6d4" }}>AI</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-8 max-w-xs" style={{ color: "rgba(240,244,255,0.32)" }}>
              Building intelligent infrastructure for the next generation of artificial intelligence systems.
            </p>
            <div className="flex flex-col gap-2.5 mb-8">
              {[
                { href: "mailto:contact@ignara.ai", label: "contact@ignara.ai" },
                { href: "mailto:jagan@ignara.ai", label: "jagan@ignara.ai" },
              ].map((e) => (
                <a key={e.href} href={e.href}
                  className="inline-flex items-center gap-2 text-sm transition-colors duration-200"
                  style={{ color: "rgba(240,244,255,0.32)" }}
                  onMouseEnter={(el) => { (el.currentTarget as HTMLElement).style.color = "rgba(240,244,255,0.7)"; }}
                  onMouseLeave={(el) => { (el.currentTarget as HTMLElement).style.color = "rgba(240,244,255,0.32)"; }}
                >
                  <Mail size={13} aria-hidden="true" />
                  {e.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2">
              {[
                { href: "https://linkedin.com", icon: ExternalLink, label: "LinkedIn" },
                { href: "https://github.com/jagane939-png", icon: GitBranch, label: "GitHub" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(240,244,255,0.3)" }}
                  aria-label={s.label}
                  onMouseEnter={(el) => { (el.currentTarget as HTMLElement).style.color = "rgba(240,244,255,0.8)"; (el.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)"; }}
                  onMouseLeave={(el) => { (el.currentTarget as HTMLElement).style.color = "rgba(240,244,255,0.3)"; (el.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
                >
                  <s.icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {nav.map((col) => (
            <div key={col.label} className="md:col-span-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] mb-5" style={{ color: "rgba(240,244,255,0.2)" }}>
                {col.label}
              </p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "rgba(240,244,255,0.38)" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(240,244,255,0.75)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(240,244,255,0.38)"; }}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Website col */}
          <div className="md:col-span-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] mb-5" style={{ color: "rgba(240,244,255,0.2)" }}>
              Website
            </p>
            <a href="https://ignara.ai" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm transition-colors duration-200"
              style={{ color: "rgba(240,244,255,0.38)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(240,244,255,0.75)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(240,244,255,0.38)"; }}
            >
              ignara.ai <ArrowUpRight size={11} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Divider + bottom */}
        <div className="divider mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "rgba(240,244,255,0.16)" }}>
            © 2026 Ignara AI. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "rgba(240,244,255,0.16)" }}>
            Building the future of AI infrastructure.
          </p>
        </div>
      </div>
    </footer>
  );
}
