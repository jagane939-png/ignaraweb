"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const phases = [
  { phase: "Today", status: "active", color: "#3b82f6", label: "In progress",
    title: "Architecture & Research",
    desc: "Core platform architecture definition, component interface specifications, storage and compute abstractions, and deep research on scheduling, memory disaggregation, and storage optimization.",
    items: ["Control plane architecture", "Storage Fabric design", "AI Scheduler algorithms", "Observability pipeline", "Security model"] },
  { phase: "Next", status: "near", color: "#06b6d4", label: "Near-term goal",
    title: "Prototype Platforms",
    desc: "Functional prototypes of core Fabric components, beginning with the storage layer and scheduler. Reference implementations with reproducible benchmarks.",
    items: ["Storage Fabric MVP", "AI Scheduler prototype", "Observability integration", "Integration test framework", "Developer documentation"] },
  { phase: "Future", status: "future", color: "#818cf8", label: "Goal",
    title: "Platform Integration",
    desc: "Full platform integration across all Fabric components. Inference Gateway development. Multi-tenant support and production hardening. No timeline is published for this phase.",
    items: ["Inference Gateway", "Multi-tenant isolation", "Security hardening", "Production documentation", "Developer preview program"] },
  { phase: "Long-term", status: "vision", color: "#f59e0b", label: "Vision",
    title: "Ecosystem Expansion",
    desc: "Ignara Cloud, Ignara Edge, and Ignara Orbit represent long-term vision items. No development commitments, timelines, or feature specifications exist for these initiatives.",
    items: ["Ignara Cloud (vision)", "Ignara Edge (research direction)", "Ignara Orbit (aspirational)", "Managed services (future)", "Ecosystem partnerships"] },
];

export default function Roadmap() {
  return (
    <div style={{ minHeight: "100vh", paddingTop: "88px" }}>
      <section style={{ padding: "80px 0 64px", position: "relative", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(37,99,235,0.09) 0%, transparent 70%)" }} />
        <div className="container-xl" style={{ position: "relative" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "28px" }}>
              <Link href="/" style={{ fontSize: "13px", color: "rgba(240,244,255,0.3)", textDecoration: "none" }}>Ignara AI</Link>
              <span style={{ color: "rgba(240,244,255,0.2)" }}>/</span>
              <span style={{ fontSize: "13px", color: "rgba(240,244,255,0.6)" }}>Roadmap</span>
            </div>
            <h1 style={{ fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 800, letterSpacing: "-0.04em", color: "#fff", marginBottom: "20px", lineHeight: 1.05 }}>Development Roadmap</h1>
            <p style={{ fontSize: "17px", lineHeight: 1.7, color: "rgba(240,244,255,0.5)", maxWidth: "580px", marginBottom: "16px" }}>
              A transparent view of where Ignara AI is today and where we are building toward.
            </p>
            <p style={{ fontSize: "14px", lineHeight: 1.7, color: "rgba(240,244,255,0.3)", maxWidth: "540px" }}>
              Later stages represent goals and aspirations, not commitments. We do not publish timelines we cannot keep. This document will be updated as work progresses.
            </p>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: "48px 0 96px" }}>
        <div className="container-xl">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "4px", marginBottom: "64px" }}>
            {phases.map((p, i) => (
              <motion.div key={p.phase} {...reveal(i * 0.08)}
                style={{ padding: "28px 24px", borderRadius: "14px", background: p.status === "active" ? "rgba(37,99,235,0.08)" : "rgba(255,255,255,0.02)", border: `1px solid ${p.status === "active" ? "rgba(37,99,235,0.2)" : "rgba(255,255,255,0.07)"}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: p.color, boxShadow: p.status === "active" ? `0 0 12px ${p.color}` : "none" }} aria-hidden="true" />
                  <span style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: p.color }}>{p.label}</span>
                </div>
                <h3 style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: "rgba(240,244,255,0.35)", marginBottom: "8px" }}>{p.phase}</h3>
                <h2 style={{ fontSize: "15px", fontWeight: 600, color: "#fff", marginBottom: "12px", letterSpacing: "-0.01em" }}>{p.title}</h2>
                <p style={{ fontSize: "12.5px", lineHeight: 1.65, color: "rgba(240,244,255,0.42)", marginBottom: "20px" }}>{p.desc}</p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                  {p.items.map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                      <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: p.color, flexShrink: 0, marginTop: "7px", display: "inline-block", opacity: 0.7 }} aria-hidden="true" />
                      <span style={{ fontSize: "12px", color: "rgba(240,244,255,0.4)" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Disclaimer */}
          <motion.div {...reveal(0.3)}
            style={{ padding: "24px 28px", borderRadius: "12px", background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.16)", marginBottom: "64px" }}>
            <p style={{ fontSize: "13px", lineHeight: 1.7, color: "rgba(240,244,255,0.5)", margin: 0 }}>
              <strong style={{ color: "#fcd34d", fontWeight: 600 }}>Roadmap disclaimer:</strong> This roadmap describes research directions and development goals. Items beyond the current research phase represent aspirations, not commitments. No delivery dates are implied. Ignara AI is an early-stage company and our plans will evolve as our research progresses.
            </p>
          </motion.div>

          <motion.div {...reveal(0.35)} style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#fff", marginBottom: "14px" }}>Follow the work</h2>
            <p style={{ fontSize: "15px", color: "rgba(240,244,255,0.45)", marginBottom: "32px" }}>We share research findings and architectural decisions through our engineering blog and documentation.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
              <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "11px 22px", borderRadius: "10px", background: "rgba(255,255,255,0.055)", border: "1px solid rgba(255,255,255,0.12)", color: "#fff", fontSize: "14px", fontWeight: 500, textDecoration: "none" }}>
                Engineering Blog <ArrowRight size={13} aria-hidden="true" />
              </Link>
              <Link href="/docs" style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "11px 22px", borderRadius: "10px", background: "rgba(255,255,255,0.055)", border: "1px solid rgba(255,255,255,0.12)", color: "#fff", fontSize: "14px", fontWeight: 500, textDecoration: "none" }}>
                Documentation <ArrowRight size={13} aria-hidden="true" />
              </Link>
              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "11px 22px", borderRadius: "10px", background: "linear-gradient(135deg, #2563eb, #1a56c8)", color: "#fff", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
                Contact us <ArrowRight size={13} aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
