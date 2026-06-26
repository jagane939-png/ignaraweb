"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Database, Satellite, MemoryStick, Brain } from "lucide-react";

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, delay, ease: "easeOut" as const },
});

const card: React.CSSProperties = {
  background: "rgba(255,255,255,0.025)",
  border: "1px solid rgba(255,255,255,0.07)",
  borderRadius: "16px",
  padding: "36px",
  transition: "transform 0.25s ease, border-color 0.25s ease",
};

const areas = [
  {
    icon: Database, title: "Data Pipeline Acceleration", subtitle: "Ignara Fabric",
    body: "ML training is bottlenecked at data loading more often than compute. Ignara Fabric is a pipeline acceleration layer that eliminates I/O wait time during training, keeping GPUs saturated and reducing time-to-model.",
    tags: ["PyTorch", "FastAPI", "Prometheus", "Grafana", "Docker"],
    status: "Active", statusColor: "#34d399", statusBg: "rgba(52,211,153,0.1)", statusBorder: "rgba(52,211,153,0.2)",
  },
  {
    icon: Satellite, title: "Space Situational Awareness", subtitle: "Ignara Space Intelligence",
    body: "Real-time satellite tracking and orbital analytics powered by TLE ingestion, sgp4 propagation, and AI-driven anomaly detection. Built for operational use in defense, commercial, and research contexts.",
    tags: ["sgp4", "TLE", "FastAPI", "Real-time", "Edge AI"],
    status: "Active", statusColor: "#34d399", statusBg: "rgba(52,211,153,0.1)", statusBorder: "rgba(52,211,153,0.2)",
  },
  {
    icon: MemoryStick, title: "Disaggregated Memory", subtitle: "CXL Memory Research",
    body: "Exploring Compute Express Link (CXL) as a vehicle for disaggregating memory from compute — enabling AI systems to scale memory capacity independently and eliminate stranded DRAM in large GPU clusters.",
    tags: ["CXL", "Memory Fabric", "NUMA", "HBM"],
    status: "Exploratory", statusColor: "#60a5fa", statusBg: "rgba(96,165,250,0.1)", statusBorder: "rgba(96,165,250,0.2)",
  },
  {
    icon: Brain, title: "Inference Memory Orchestration", subtitle: "KV-Cache Optimization",
    body: "Research into software-defined memory orchestration for LLM inference — KV-cache subsystem optimization, paged attention mechanisms, and token memory efficiency at deployment scale.",
    tags: ["LLM", "KV-Cache", "Paged Attention", "Inference"],
    status: "Exploratory", statusColor: "#60a5fa", statusBg: "rgba(96,165,250,0.1)", statusBorder: "rgba(96,165,250,0.2)",
  },
];

export default function Research() {
  return (
    <div style={{ minHeight: "100vh", paddingTop: "96px" }}>

      {/* Hero */}
      <section className="section-pad-sm" style={{ position: "relative", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(37,99,235,0.1) 0%, transparent 70%)" }} />
        <div className="container-xl" style={{ position: "relative" }}>
          <motion.div {...reveal()}>
            <div className="section-tag">Research</div>
            <h1 className="display-xl" style={{ color: "#fff", marginBottom: "24px" }}>
              What we are <span className="gt-white">building</span>
            </h1>
            <p className="body-lg" style={{ color: "rgba(240,244,255,0.5)", maxWidth: "600px" }}>
              Our research spans the full AI infrastructure stack — from data pipelines and memory architecture to satellite intelligence and autonomous systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research areas */}
      <section className="section-pad">
        <div className="container-xl">
          <div className="grid-2" style={{ marginBottom: "80px" }}>
            {areas.map((a, i) => (
              <motion.div key={a.title} {...reveal(i * 0.08)}
                style={card}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.13)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)"; }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "24px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "rgba(37,99,235,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <a.icon size={18} style={{ color: "#60a5fa" }} aria-hidden="true" />
                  </div>
                  <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "4px 10px", borderRadius: "20px", background: a.statusBg, color: a.statusColor, border: `1px solid ${a.statusBorder}` }}>
                    {a.status}
                  </span>
                </div>
                <p className="label" style={{ color: "#06b6d4", opacity: 0.7, marginBottom: "6px" }}>{a.subtitle}</p>
                <h3 style={{ color: "#fff", fontWeight: 600, fontSize: "18px", marginBottom: "12px", letterSpacing: "-0.02em" }}>{a.title}</h3>
                <p className="body-sm" style={{ color: "rgba(240,244,255,0.5)", marginBottom: "24px" }}>{a.body}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {a.tags.map((tag) => (
                    <span key={tag} style={{ fontSize: "11px", padding: "4px 10px", borderRadius: "6px", background: "rgba(255,255,255,0.04)", color: "rgba(240,244,255,0.35)", border: "1px solid rgba(255,255,255,0.07)" }}>{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Philosophy block */}
          <motion.div {...reveal()}>
            <div style={{ ...card, padding: "56px 64px", position: "relative", overflow: "hidden" }}>
              <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 60% 60% at 100% 100%, rgba(6,182,212,0.07) 0%, transparent 60%)" }} />
              <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
                <div>
                  <div className="section-tag">Research Philosophy</div>
                  <h2 className="display-md" style={{ color: "#fff", marginBottom: "20px" }}>We build to learn.<br />We learn to build.</h2>
                  <p className="body-md" style={{ color: "rgba(240,244,255,0.5)", marginBottom: "16px" }}>
                    At Ignara AI, research and engineering are not separate disciplines. Every exploratory project produces runnable artifacts with reproducible benchmarks. Every production system produces insights that feed back into research.
                  </p>
                  <p className="body-md" style={{ color: "rgba(240,244,255,0.5)", marginBottom: "32px" }}>
                    The most important advances in AI infrastructure come from teams willing to go deep on hard problems — memory hierarchy, data throughput, distributed coordination — and bring both systems-level rigor and scientific curiosity to the work.
                  </p>
                  <Link href="/contact"
                    style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", borderRadius: "10px", background: "#2563eb", color: "#fff", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#1d4ed8"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#2563eb"; }}>
                    Collaborate With Us <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {["We ship runnable code, not whitepapers", "Every benchmark is reproducible", "Research informs engineering, engineering informs research", "We go deep on hard systems problems", "Long-term thinking over short-term optimization"].map((item, i) => (
                    <motion.div key={item} {...reveal(i * 0.06)}
                      style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "14px 16px", borderRadius: "10px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                      <div aria-hidden="true" style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#06b6d4", flexShrink: 0, marginTop: "7px" }} />
                      <p className="body-sm" style={{ color: "rgba(240,244,255,0.65)" }}>{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
