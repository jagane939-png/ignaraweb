"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FlaskConical, BookOpen, Cpu, Network, Database, MemoryStick } from "lucide-react";

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, delay, ease: "easeOut" as const },
});

const areas = [
  { icon: MemoryStick, color: "#3b82f6", bg: "rgba(59,130,246,0.08)", title: "Memory Architecture", body: "CXL-based memory disaggregation for AI inference. KV-cache orchestration and paged attention mechanisms. Memory tiering strategies for heterogeneous AI systems." },
  { icon: Cpu, color: "#06b6d4", bg: "rgba(6,182,212,0.08)", title: "Scheduling Algorithms", body: "Gang scheduling, backfill, and fairshare for distributed AI training. Network-topology-aware placement for collective communication workloads." },
  { icon: Database, color: "#818cf8", bg: "rgba(129,140,248,0.08)", title: "Storage Systems", body: "Training data pipeline optimization. Distributed checkpoint protocols with fast recovery. Prefetching strategies for large-scale ML training workloads." },
  { icon: Network, color: "#34d399", bg: "rgba(52,211,153,0.08)", title: "Distributed Systems", body: "Collective communication primitives for distributed AI. Control plane design for heterogeneous compute clusters. Consensus and coordination in AI infrastructure platforms." },
];

export default function Labs() {
  return (
    <div style={{ minHeight: "100vh", paddingTop: "88px" }}>
      <section style={{ padding: "80px 0 96px", position: "relative", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(6,182,212,0.1) 0%, transparent 70%)" }} />
        <div className="container-xl" style={{ position: "relative" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "32px" }}>
              <Link href="/" style={{ fontSize: "13px", color: "rgba(240,244,255,0.3)", textDecoration: "none" }}>Ignara AI</Link>
              <span style={{ color: "rgba(240,244,255,0.2)" }}>/</span>
              <Link href="/platform" style={{ fontSize: "13px", color: "rgba(240,244,255,0.3)", textDecoration: "none" }}>Platform</Link>
              <span style={{ color: "rgba(240,244,255,0.2)" }}>/</span>
              <span style={{ fontSize: "13px", color: "rgba(240,244,255,0.6)" }}>Labs</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px", flexWrap: "wrap" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "7px", padding: "5px 14px", borderRadius: "20px", background: "rgba(6,182,212,0.1)", border: "1px solid rgba(6,182,212,0.25)", color: "#22d3ee", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                <FlaskConical size={11} aria-hidden="true" /> Research Initiative
              </span>
            </div>
            <h1 style={{ fontSize: "clamp(44px, 7vw, 80px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.02, color: "#fff", marginBottom: "24px" }}>Ignara Labs</h1>
            <p style={{ fontSize: "clamp(17px, 2vw, 21px)", lineHeight: 1.6, color: "rgba(240,244,255,0.55)", maxWidth: "620px", marginBottom: "16px" }}>
              The research arm of Ignara AI.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "rgba(240,244,255,0.38)", maxWidth: "580px", marginBottom: "48px" }}>
              Ignara Labs explores foundational questions in AI infrastructure — conducting research, developing experimental prototypes, and investigating the computing architectures that will be needed for the next generation of AI systems.
            </p>
            <Link href="/research"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", borderRadius: "12px", background: "rgba(6,182,212,0.12)", border: "1px solid rgba(6,182,212,0.25)", color: "#22d3ee", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(6,182,212,0.2)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(6,182,212,0.12)"; }}>
              View research areas <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "rgba(0,0,0,0.2)" }}>
        <div className="container-xl">
          <motion.div {...reveal()} style={{ marginBottom: "56px" }}>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#fff" }}>Research focus areas</h2>
          </motion.div>
          <div className="grid-2">
            {areas.map((a, i) => (
              <motion.div key={a.title} {...reveal(i * 0.08)}
                style={{ padding: "32px", borderRadius: "16px", background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.08)", transition: "all 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.14)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; }}>
                <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: a.bg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                  <a.icon size={18} style={{ color: a.color }} aria-hidden="true" />
                </div>
                <h3 style={{ fontSize: "17px", fontWeight: 600, letterSpacing: "-0.02em", color: "#fff", marginBottom: "12px" }}>{a.title}</h3>
                <p style={{ fontSize: "14px", lineHeight: 1.75, color: "rgba(240,244,255,0.5)" }}>{a.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-xl">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
            <motion.div {...reveal()}>
              <h2 style={{ fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#fff", marginBottom: "20px", lineHeight: 1.15 }}>Research philosophy</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  "Ignara Labs operates on the conviction that lasting advances in AI depend on advances in infrastructure. The field has made extraordinary progress at the model layer. The infrastructure layer has not kept pace.",
                  "We conduct research that is grounded in published systems literature, validated empirically, and designed to produce artifacts — prototypes, reference designs, and technical documentation — not just papers.",
                  "We publish our findings where appropriate and contribute to the broader infrastructure research community. The hard problems in AI infrastructure are too important to solve in isolation.",
                ].map((p, i) => (
                  <p key={i} style={{ fontSize: "15px", lineHeight: 1.8, color: "rgba(240,244,255,0.5)", margin: 0 }}>{p}</p>
                ))}
              </div>
            </motion.div>
            <motion.div {...reveal(0.1)}>
              <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                {[
                  { label: "Empirical validation", desc: "Research produces benchmarks, not just claims" },
                  { label: "Runnable artifacts", desc: "Every project produces working prototypes" },
                  { label: "Literature grounded", desc: "Builds on published systems research" },
                  { label: "Long-horizon thinking", desc: "Focuses on problems that take years to solve" },
                  { label: "Open where appropriate", desc: "Contributes to the research community" },
                ].map((item, i) => (
                  <motion.div key={item.label} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 + 0.1, duration: 0.5 }}
                    style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 20px", borderRadius: "10px", background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}>
                    <span style={{ fontSize: "14px", fontWeight: 500, color: "#fff" }}>{item.label}</span>
                    <span style={{ fontSize: "12px", color: "rgba(240,244,255,0.35)" }}>{item.desc}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ textAlign: "center", background: "rgba(0,0,0,0.2)" }}>
        <div className="container-sm">
          <motion.div {...reveal()}>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#fff", marginBottom: "16px" }}>Work with Ignara Labs</h2>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "rgba(240,244,255,0.45)", marginBottom: "36px" }}>We welcome conversations with researchers, engineers, and institutions working on related problems in AI infrastructure.</p>
            <Link href="/contact"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "13px 28px", borderRadius: "12px", background: "linear-gradient(135deg, #2563eb, #1a56c8)", color: "#fff", fontWeight: 700, fontSize: "15px", textDecoration: "none" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
              Get in touch <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
