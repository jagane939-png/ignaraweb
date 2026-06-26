import Link from "next/link";
import { GitBranch, ExternalLink, Mail } from "lucide-react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/vision", label: "Vision" },
  { href: "/research", label: "Research" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#080f1c]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4" aria-label="Ignara AI">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M9 2L15 6V12L9 16L3 12V6L9 2Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
                  <circle cx="9" cy="9" r="2" fill="white" />
                </svg>
              </div>
              <span className="text-white font-semibold text-base tracking-tight">
                Ignara <span className="text-cyan-400">AI</span>
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Building intelligent infrastructure for the next generation of artificial intelligence.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-white/40 hover:text-white hover:bg-white/8 transition-all"
                aria-label="Ignara AI on LinkedIn"
              >
                <ExternalLink size={16} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-white/40 hover:text-white hover:bg-white/8 transition-all"
                aria-label="Ignara AI on GitHub"
              >
                <GitBranch size={16} />
              </a>
              <a
                href="mailto:contact@ignara.ai"
                className="p-2 rounded-lg text-white/40 hover:text-white hover:bg-white/8 transition-all"
                aria-label="Email Ignara AI"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white/80 text-xs font-semibold uppercase tracking-widest mb-4">Company</h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/40 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white/80 text-xs font-semibold uppercase tracking-widest mb-4">Contact</h3>
            <ul className="flex flex-col gap-2.5" role="list">
              <li>
                <a
                  href="mailto:contact@ignara.ai"
                  className="text-white/40 hover:text-white text-sm transition-colors"
                >
                  contact@ignara.ai
                </a>
              </li>
              <li>
                <a
                  href="https://ignara.ai"
                  className="text-white/40 hover:text-white text-sm transition-colors"
                >
                  ignara.ai
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h3 className="text-white/80 text-xs font-semibold uppercase tracking-widest mb-4">Legal</h3>
              <ul className="flex flex-col gap-2.5" role="list">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/40 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} Ignara AI. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Built for the future.
          </p>
        </div>
      </div>
    </footer>
  );
}
