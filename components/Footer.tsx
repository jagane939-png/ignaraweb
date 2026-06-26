import Link from "next/link";
import { GitBranch, ExternalLink, Mail } from "lucide-react";

const nav = [
  { href: "/about", label: "About" },
  { href: "/vision", label: "Vision" },
  { href: "/research", label: "Research" },
  { href: "/contact", label: "Contact" },
];

const legal = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

export function Footer() {
  return (
    <footer style={{ background: "#060c16", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-2.5 mb-5" aria-label="Ignara AI">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M8 1L13.5 4.25V10.75L8 14L2.5 10.75V4.25L8 1Z" stroke="white" strokeWidth="1.4" strokeLinejoin="round"/>
                  <circle cx="8" cy="7.5" r="1.8" fill="white"/>
                </svg>
              </div>
              <span className="font-semibold text-[15px] text-white tracking-tight">
                Ignara <span className="text-cyan-400">AI</span>
              </span>
            </Link>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs mb-6">
              Building intelligent infrastructure for the next generation of artificial intelligence systems.
            </p>
            <div className="flex items-center gap-2">
              {[
                { href: "https://linkedin.com", icon: ExternalLink, label: "LinkedIn" },
                { href: "https://github.com/jagane939-png", icon: GitBranch, label: "GitHub" },
                { href: "mailto:contact@ignara.ai", icon: Mail, label: "Email" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white/30 hover:text-white transition-all duration-200"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}
                  aria-label={s.label}
                >
                  <s.icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <p className="text-white/25 text-[10px] font-semibold uppercase tracking-[0.12em] mb-4">Company</p>
            <ul className="space-y-2.5">
              {nav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/40 hover:text-white text-sm transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="text-white/25 text-[10px] font-semibold uppercase tracking-[0.12em] mb-4">Contact</p>
            <ul className="space-y-2.5 mb-6">
              <li>
                <a href="mailto:contact@ignara.ai" className="text-white/40 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2">
                  <Mail size={13} className="text-white/20" aria-hidden="true" />
                  contact@ignara.ai
                </a>
              </li>
              <li>
                <a href="mailto:jagan@ignara.ai" className="text-white/40 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2">
                  <Mail size={13} className="text-white/20" aria-hidden="true" />
                  jagan@ignara.ai
                </a>
              </li>
            </ul>
            <p className="text-white/25 text-[10px] font-semibold uppercase tracking-[0.12em] mb-4">Legal</p>
            <ul className="space-y-2.5">
              {legal.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/40 hover:text-white text-sm transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <p className="text-white/18 text-xs">© 2026 Ignara AI. All rights reserved.</p>
          <p className="text-white/18 text-xs">ignara.ai</p>
        </div>
      </div>
    </footer>
  );
}
