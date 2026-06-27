"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Cpu, Network, Database, Eye, ArrowRight, GitBranch, Map } from "lucide-react";

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const sections = [
  {
    icon: BookOpen, color: "#3b82f6", bg: "rgba(59,130,246,0.08)",
    title: "Getting Started",
    docs: [
      { slug: "what-is-ignara-fabric", title: "What is Ignara Fabric?", desc: "An introduction to the Ignara Fabric platform architecture and goals." },
      { slug: "architecture-overview", title: "Architecture Overview", desc: "The high-level system design and component relationships." },
      { slug: "design-principles", title: "Design Principles", desc: "The engineering philosophy guiding every platform decision." },
    ],
  },
  {
    icon: Cpu, color: "#06b6d4", bg: "rgba(6,182,212,0.08)",
    title: "Platform Components",
    docs: [
      { slug: "control-plane", title: "Control Plane", desc: "The orchestration layer managing platform state and configuration." },
      { slug: "scheduling", title: "Scheduling", desc: "AI workload scheduling, placement, and resource allocation." },
      { slug: "storage", title: "Storage Fabric", desc: "Distributed storage designed for AI training and inference data flows." },
    ],
  },
  {
    icon: Network, color: "#818cf8", bg: "rgba(129,140,248,0.08)",
    title: "Infrastructure",
    docs: [
      { slug: "networking", title: "Network Fabric", desc: "High-throughput networking for distributed AI workloads." },
      { slug: "observability", title: "Observability", desc: "Telemetry, monitoring, and diagnostics across the platform." },
      { slug: "security", title: "Security Model", desc: "Identity, isolation, and access control architecture." },
    ],
  },
  {
    icon: Map, color: "#34d399", bg: "rgba(52,211,153,0.08)",
    title: "Research & Roadmap",
    docs: [
      { slug: "roadmap", title: "Development Roadmap", desc: "Current status and future directions across platform initiatives." },
      { slug: "research-agenda", title: "Research Agenda", desc: "Active research themes and long-horizon investigations." },
      { slug: "future-directions", title: "Future Directions", desc: "Exploratory concepts for the next generation of Ignara technologies." },
    ],
  },
];

export default function DocsHome() {
  return (
    <div style={{ minHeight: "100vh", paddingTop: "88px" }}>
      <section style={{ padding: "64px 0 48px", position: "relative", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(37,99,235,0.09) 0%, transparent 70%)" }} />
        <div className="container-xl" style={{ position: "relative" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
              <Link href="/" style={{ fontSize: "13px", color: "rgba(240,244,255,0.3)", textDecoration: "none" }}>Ignara AI</Link>
              <span style={{ color: "rgba(240,244,255,0.2)" }}>/</span>
              <span style={{ fontSize: "13px", color: "rgba(240,244,255,0.6)" }}>Docs</span>
            </div>
            <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, letterSpacing: "-0.04em", color: "#fff", marginBottom: "16px", lineHeight: 1.05 }}>Documentation</h1>
            <p style={{ fontSize: "17px", lineHeight: 1.7, color: "rgba(240,244,255,0.5)", maxWidth: "560px" }}>
              Technical documentation for the Ignara AI platform ecosystem. This documentation describes architecture, design decisions, and research directions — not shipping software.
            </p>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: "48px 0 96px" }}>
        <div className="container-xl">
          <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
            {sections.map((sec, si) => (
              <motion.div key={sec.title} {...reveal(si * 0.08)}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                  <div style={{ width: "28px", height: "28px", borderRadius: "8px", background: sec.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <sec.icon size={14} style={{ color: sec.color }} aria-hidden="true" />
                  </div>
                  <h2 style={{ fontSize: "14px", fontWeight: 600, color: "rgba(240,244,255,0.6)", letterSpacing: "0.02em" }}>{sec.title}</h2>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "4px" }}>
                  {sec.docs.map((doc, di) => (
                    <motion.div key={doc.slug} {...reveal(si * 0.06 + di * 0.04)}>
                      <Link href={`/docs/${doc.slug}`}
                        style={{ display: "block", padding: "20px 24px", borderRadius: "12px", background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", textDecoration: "none", transition: "all 0.2s" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.045)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.025)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                      >
                        <div style={{ fontSize: "14px", fontWeight: 600, color: "#fff", marginBottom: "6px", letterSpacing: "-0.01em" }}>{doc.title}</div>
                        <div style={{ fontSize: "12.5px", lineHeight: 1.6, color: "rgba(240,244,255,0.4)" }}>{doc.desc}</div>
                        <div style={{ display: "flex", alignItems: "center", gap: "4px", marginTop: "14px", color: sec.color, fontSize: "12px", fontWeight: 500 }}>
                          Read <ArrowRight size={11} aria-hidden="true" />
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Notice */}
          <motion.div {...reveal(0.4)} style={{ marginTop: "64px", padding: "24px 28px", borderRadius: "12px", background: "rgba(37,99,235,0.06)", border: "1px solid rgba(37,99,235,0.15)" }}>
            <p style={{ fontSize: "13px", lineHeight: 1.7, color: "rgba(240,244,255,0.5)", margin: 0 }}>
              <strong style={{ color: "rgba(240,244,255,0.7)", fontWeight: 600 }}>Documentation status:</strong> This documentation describes Ignara AI&apos;s platform architecture and research directions. Ignara Fabric is currently in the architecture and research phase. Documentation will be updated as the platform matures.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
