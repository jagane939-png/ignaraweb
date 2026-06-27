"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Database, Network, GitBranch, Eye, Shield, Zap, Clock, Globe2, FlaskConical, Layers, Server, Activity } from "lucide-react";

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, delay, ease: "easeOut" as const },
});

const S = {
  tag: {
    display: "inline-flex", alignItems: "center", gap: "8px",
    padding: "5px 14px", borderRadius: "20px",
    background: "rgba(37,99,235,0.12)", border: "1px solid rgba(37,99,235,0.25)",
    color: "#60a5fa", fontSize: "11px", fontWeight: 600,
    letterSpacing: "0.12em", textTransform: "uppercase" as const, marginBottom: "20px",
  } as React.CSSProperties,
  card: {
    background: "rgba(255,255,255,0.025)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "16px", padding: "32px",
    transition: "transform 0.25s ease, border-color 0.25s ease",
  } as React.CSSProperties,
};

const hover = (e: React.MouseEvent, enter: boolean) => {
  const el = e.currentTarget as HTMLElement;
  el.style.transform = enter ? "translateY(-3px)" : "translateY(0)";
  el.style.borderColor = enter ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0.08)";
};

const components = [
  {
    icon: Cpu, color: "#3b82f6", bg: "rgba(59,130,246,0.08)",
    name: "AI Compute", tag: "Core",
    desc: "Orchestrates heterogeneous compute resources — GPU, CPU, and accelerator pools — with workload-aware scheduling. Abstracts hardware topology to present a unified compute surface to AI workloads regardless of underlying infrastructure.",
    specs: ["Multi-vendor GPU orchestration", "NUMA-aware placement", "Preemptive scheduling with priority tiers", "Hardware topology discovery"],
  },
  {
    icon: Database, color: "#06b6d4", bg: "rgba(6,182,212,0.08)",
    name: "Storage Fabric", tag: "Core",
    desc: "A distributed storage layer purpose-built for AI data flows. Eliminates I/O bottlenecks during training by co-locating data with compute, supporting streaming ingestion, and providing deterministic read latency at scale.",
    specs: ["Distributed object storage", "Training-optimized I/O pipeline", "Tiered caching (NVMe → DRAM → remote)", "Checkpointing and snapshot management"],
  },
  {
    icon: Network, color: "#818cf8", bg: "rgba(129,140,248,0.08)",
    name: "Network Fabric", tag: "Core",
    desc: "High-throughput, low-latency networking infrastructure for distributed AI. Manages collective communication patterns (AllReduce, AllGather) and provides congestion control tuned for gradient synchronization workloads.",
    specs: ["RDMA-aware routing", "Collective communication primitives", "Bandwidth-aware job placement", "Network topology modeling"],
  },
  {
    icon: GitBranch, color: "#34d399", bg: "rgba(52,211,153,0.08)",
    name: "AI Scheduler", tag: "Platform",
    desc: "A workload scheduler designed for the unique characteristics of AI jobs — long-running, gang-scheduled, and sensitive to resource fragmentation. Implements backfill scheduling, gang admission control, and preemption policies.",
    specs: ["Gang scheduling with backfill", "Priority queues and fairshare", "Spot/preemptible workload support", "Multi-tenant isolation"],
  },
  {
    icon: Server, color: "#f59e0b", bg: "rgba(245,158,11,0.08)",
    name: "Inference Gateway", tag: "Platform",
    desc: "A high-performance serving layer for AI model inference. Handles request routing, batching, model versioning, and autoscaling. Designed for sub-10ms p99 latency at sustained throughput across model sizes from 7B to 700B parameters.",
    specs: ["Dynamic batching and continuous batching", "KV-cache memory management", "Multi-model serving", "Autoscaling with cold-start mitigation"],
  },
  {
    icon: Eye, color: "#a78bfa", bg: "rgba(167,139,250,0.08)",
    name: "Observability", tag: "Platform",
    desc: "Full-stack observability for AI infrastructure — GPU utilization, memory pressure, training throughput, and job lifecycle events. Provides the telemetry required to diagnose performance regressions and infrastructure anomalies.",
    specs: ["GPU/CPU/memory telemetry", "Training metrics pipeline", "Distributed tracing for inference", "Alerting and anomaly detection"],
  },
  {
    icon: Shield, color: "#ef4444", bg: "rgba(239,68,68,0.08)",
    name: "Security Layer", tag: "Platform",
    desc: "Security primitives for multi-tenant AI infrastructure — workload isolation, secrets management, network policy enforcement, and audit logging. Designed for enterprise compliance requirements without compromising performance.",
    specs: ["Workload identity and isolation", "Secrets and credential management", "Network policy enforcement", "Audit logging and compliance"],
  },
];

const useCases = [
  {
    title: "Large-scale model training",
    body: "Fabric coordinates compute, storage, and network resources for distributed training runs — from single-node fine-tuning to multi-cluster pre-training across thousands of GPUs. The scheduler ensures optimal placement, the storage layer eliminates data starvation, and the network fabric minimizes gradient synchronization overhead.",
  },
  {
    title: "High-throughput inference serving",
    body: "The Inference Gateway handles model serving at production scale — routing requests, managing KV-cache memory, batching dynamically, and scaling replicas based on load. Designed for organizations running multiple models across diverse hardware configurations.",
  },
  {
    title: "ML research infrastructure",
    body: "Research teams need infrastructure that supports rapid iteration — fast dataset access, reproducible environments, experiment tracking, and efficient use of shared compute. Fabric provides the substrate for research infrastructure without requiring each team to build their own.",
  },
  {
    title: "Multi-tenant AI platforms",
    body: "Enterprises building internal AI platforms need isolation, fairshare scheduling, cost attribution, and policy enforcement across teams. Fabric provides the infrastructure primitives to build multi-tenant AI compute platforms that scale from tens to thousands of users.",
  },
];

const roadmap = [
  { phase: "Architecture", status: "active", label: "Current phase", title: "System design and core architecture", items: ["Platform architecture definition", "Component interface specifications", "Storage and compute abstractions", "Scheduler design and algorithms"] },
  { phase: "Research", status: "active", label: "Ongoing", title: "Foundational research", items: ["KV-cache memory orchestration", "CXL memory disaggregation", "Distributed checkpoint protocols", "Network-aware job placement"] },
  { phase: "Prototype", status: "next", label: "Next", title: "Core component prototypes", items: ["Storage Fabric MVP", "AI Scheduler prototype", "Observability pipeline", "Integration test framework"] },
  { phase: "Platform", status: "future", label: "Future", title: "Full platform integration", items: ["Inference Gateway", "Security layer", "Multi-tenant support", "Production hardening"] },
];

const principles = [
  { icon: Zap, title: "Performance first", body: "Every component is designed around throughput and latency requirements — not general-purpose compute adapted for AI workloads." },
  { icon: Layers, title: "Composable architecture", body: "Platform components are independently deployable and composable. Adopt what you need without taking on the full stack." },
  { icon: Globe2, title: "Hardware agnostic", body: "Fabric abstracts away underlying hardware vendors. Support NVIDIA, AMD, Intel, and custom accelerators through a unified API." },
  { icon: FlaskConical, title: "Research-validated", body: "Architecture decisions are grounded in systems research. Every design choice is validated against published work and empirical benchmarks." },
  { icon: Activity, title: "Observable by default", body: "Observability is not an afterthought. Every component emits structured telemetry from day one." },
  { icon: Clock, title: "Operational simplicity", body: "Infrastructure that requires constant human intervention doesn't scale. Fabric aims for autonomous steady-state operation." },
];

export default function Fabric() {
  return (
    <div style={{ minHeight: "100vh", paddingTop: "88px" }}>

      {/* ── HERO ── */}
      <section style={{ position: "relative", padding: "80px 0 100px", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(37,99,235,0.14) 0%, rgba(6,182,212,0.04) 50%, transparent 70%)" }} />
        {/* Subtle grid */}
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: "linear-gradient(rgba(37,99,235,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.05) 1px, transparent 1px)", backgroundSize: "72px 72px" }} />

        <div className="container-xl" style={{ position: "relative" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {/* Breadcrumb */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "32px" }}>
              <Link href="/" style={{ fontSize: "13px", color: "rgba(240,244,255,0.3)", textDecoration: "none" }}>Ignara AI</Link>
              <span style={{ color: "rgba(240,244,255,0.2)", fontSize: "13px" }}>/</span>
              <span style={{ fontSize: "13px", color: "rgba(240,244,255,0.6)" }}>Fabric</span>
            </div>

            {/* Platform label */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px", flexWrap: "wrap" }}>
              <div style={{ ...S.tag, marginBottom: 0 }}>Ignara Platform</div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "5px 12px", borderRadius: "20px", background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.2)", color: "#f59e0b", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#f59e0b", display: "inline-block" }} aria-hidden="true" />
                Architecture Phase
              </div>
            </div>

            {/* Headline */}
            <h1 style={{ fontSize: "clamp(44px, 7vw, 80px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.02, color: "#fff", marginBottom: "24px", maxWidth: "800px" }}>
              Ignara Fabric
            </h1>
            <p style={{ fontSize: "clamp(17px, 2vw, 22px)", lineHeight: 1.55, color: "rgba(240,244,255,0.55)", maxWidth: "680px", marginBottom: "16px", fontWeight: 400 }}>
              An intelligent infrastructure platform for AI workloads.
            </p>
            <p style={{ fontSize: "clamp(15px, 1.6vw, 17px)", lineHeight: 1.7, color: "rgba(240,244,255,0.4)", maxWidth: "640px", marginBottom: "48px" }}>
              Fabric orchestrates compute, storage, network, and scheduling resources into a unified substrate — purpose-built for the performance characteristics, operational patterns, and scale requirements of modern AI systems.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
              <Link href="/contact"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "13px 28px", borderRadius: "12px", background: "linear-gradient(135deg, #2563eb, #1a56c8)", color: "#fff", fontWeight: 700, fontSize: "15px", textDecoration: "none", boxShadow: "0 1px 0 rgba(255,255,255,0.15) inset, 0 6px 20px rgba(37,99,235,0.35)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 0 rgba(255,255,255,0.15) inset, 0 10px 30px rgba(37,99,235,0.5)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 0 rgba(255,255,255,0.15) inset, 0 6px 20px rgba(37,99,235,0.35)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
                Partner with us <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <Link href="/research"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "13px 28px", borderRadius: "12px", background: "rgba(255,255,255,0.055)", color: "#fff", fontWeight: 500, fontSize: "15px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.12)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.09)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.055)"; }}>
                View research
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT IS FABRIC ── */}
      <section className="section-pad" style={{ background: "rgba(0,0,0,0.2)" }}>
        <div className="container-xl">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
            <motion.div {...reveal()}>
              <div style={S.tag}>What is Ignara Fabric?</div>
              <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#fff", marginBottom: "24px", lineHeight: 1.15 }}>
                Infrastructure that understands AI workloads
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  "General-purpose infrastructure was not designed for AI. GPU clusters require different scheduling primitives. Training jobs have different I/O patterns than databases. Inference serving has different latency requirements than batch processing.",
                  "Fabric is an infrastructure platform built from first principles for AI — where every component is designed around the performance characteristics, failure modes, and operational patterns specific to AI workloads.",
                  "It sits below the model and above the hardware — abstracting physical resources into a programmable, observable, and resilient infrastructure substrate that AI systems can depend on.",
                ].map((p, i) => (
                  <p key={i} style={{ fontSize: "15px", lineHeight: 1.75, color: "rgba(240,244,255,0.52)", margin: 0 }}>{p}</p>
                ))}
              </div>
            </motion.div>

            <motion.div {...reveal(0.1)}>
              {/* Architecture stack diagram */}
              <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                {[
                  { label: "AI Applications & Models", sub: "Your workloads", color: "rgba(255,255,255,0.06)", border: "rgba(255,255,255,0.1)", text: "rgba(240,244,255,0.5)", highlight: false },
                  { label: "Ignara Fabric", sub: "Orchestration & intelligence layer", color: "rgba(37,99,235,0.12)", border: "rgba(37,99,235,0.3)", text: "#60a5fa", highlight: true },
                  { label: "Physical Infrastructure", sub: "GPU · CPU · NVMe · Network", color: "rgba(255,255,255,0.04)", border: "rgba(255,255,255,0.07)", text: "rgba(240,244,255,0.35)", highlight: false },
                ].map((layer, i) => (
                  <motion.div key={layer.label} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                    style={{ padding: layer.highlight ? "20px 24px" : "16px 24px", borderRadius: "10px", background: layer.color, border: `1px solid ${layer.border}` }}>
                    <div style={{ fontSize: layer.highlight ? "15px" : "13px", fontWeight: layer.highlight ? 600 : 500, color: layer.text, marginBottom: "3px" }}>{layer.label}</div>
                    <div style={{ fontSize: "11px", color: "rgba(240,244,255,0.3)", letterSpacing: "0.03em" }}>{layer.sub}</div>
                  </motion.div>
                ))}

                {/* Components breakdown */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} style={{ marginTop: "4px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "3px" }}>
                  {["Compute", "Storage", "Network", "Scheduler", "Inference", "Security", "Observability", "Gateway"].map((c, i) => (
                    <div key={c} style={{ padding: "8px 10px", borderRadius: "8px", background: "rgba(37,99,235,0.07)", border: "1px solid rgba(37,99,235,0.15)", textAlign: "center" }}>
                      <span style={{ fontSize: "10px", fontWeight: 600, color: "#60a5fa", letterSpacing: "0.04em" }}>{c}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHY IT EXISTS ── */}
      <section className="section-pad">
        <div className="container-xl">
          <motion.div {...reveal()} style={{ marginBottom: "56px" }}>
            <div style={S.tag}>Why Fabric Exists</div>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#fff", maxWidth: "560px", lineHeight: 1.15 }}>
              The infrastructure gap in the AI stack
            </h2>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "4px", background: "rgba(255,255,255,0.06)", borderRadius: "16px", overflow: "hidden" }}>
            {[
              { label: "The problem", color: "rgba(239,68,68,0.06)", border: "rgba(239,68,68,0.15)", items: ["GPU utilization below 50% due to I/O starvation", "Training jobs fail from network congestion", "Engineers spend weeks on infrastructure, not models", "No unified view of compute across clusters", "Scaling requires manual re-architecture"] },
              { label: "Current approaches", color: "rgba(245,158,11,0.05)", border: "rgba(245,158,11,0.12)", items: ["Kubernetes — not designed for AI workloads", "Cloud-native tools — optimized for stateless services", "Custom scripts — brittle, not reusable", "Vendor lock-in — tied to one cloud or hardware vendor", "Point solutions — storage, scheduler, serving all separate"] },
              { label: "What Fabric provides", color: "rgba(37,99,235,0.07)", border: "rgba(37,99,235,0.18)", items: ["Unified infrastructure designed for AI from day one", "Workload-aware scheduling and placement", "Storage co-location eliminating I/O bottlenecks", "Hardware-agnostic abstraction layer", "Observable, self-healing infrastructure by default"] },
            ].map((col, i) => (
              <motion.div key={col.label} {...reveal(i * 0.1)} style={{ padding: "36px 32px", background: col.color }}>
                <h3 style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: i === 0 ? "#fca5a5" : i === 1 ? "#fcd34d" : "#60a5fa", marginBottom: "20px" }}>{col.label}</h3>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                  {col.items.map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: i === 0 ? "#ef4444" : i === 1 ? "#f59e0b" : "#3b82f6", flexShrink: 0, marginTop: "7px", display: "inline-block" }} aria-hidden="true" />
                      <span style={{ fontSize: "13px", lineHeight: 1.6, color: "rgba(240,244,255,0.55)" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORM COMPONENTS ── */}
      <section className="section-pad" style={{ background: "rgba(0,0,0,0.2)" }}>
        <div className="container-xl">
          <motion.div {...reveal()} style={{ marginBottom: "56px" }}>
            <div style={S.tag}>Platform Components</div>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#fff", lineHeight: 1.15 }}>
              Seven integrated subsystems
            </h2>
          </motion.div>
          <div className="grid-2">
            {components.map((c, i) => (
              <motion.div key={c.name} {...reveal(i * 0.06)} style={S.card} onMouseEnter={(e) => hover(e, true)} onMouseLeave={(e) => hover(e, false)}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: c.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <c.icon size={18} style={{ color: c.color }} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 style={{ color: "#fff", fontWeight: 600, fontSize: "16px", letterSpacing: "-0.02em" }}>{c.name}</h3>
                    </div>
                  </div>
                  <span style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", padding: "3px 10px", borderRadius: "20px", background: c.bg, color: c.color, border: `1px solid ${c.color}30`, flexShrink: 0 }}>{c.tag}</span>
                </div>
                <p style={{ fontSize: "13.5px", lineHeight: 1.7, color: "rgba(240,244,255,0.5)", marginBottom: "20px" }}>{c.desc}</p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                  {c.specs.map((spec) => (
                    <li key={spec} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: c.color, flexShrink: 0, display: "inline-block", opacity: 0.7 }} aria-hidden="true" />
                      <span style={{ fontSize: "12px", color: "rgba(240,244,255,0.38)", fontFamily: "var(--font-mono, monospace)" }}>{spec}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section className="section-pad">
        <div className="container-xl">
          <motion.div {...reveal()} style={{ marginBottom: "56px" }}>
            <div style={S.tag}>Use Cases</div>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#fff", lineHeight: 1.15 }}>
              What Fabric enables
            </h2>
          </motion.div>
          <div className="grid-2">
            {useCases.map((u, i) => (
              <motion.div key={u.title} {...reveal(i * 0.08)} style={S.card} onMouseEnter={(e) => hover(e, true)} onMouseLeave={(e) => hover(e, false)}>
                <div style={{ width: "28px", height: "1px", background: "linear-gradient(90deg, #2563eb, #06b6d4)", marginBottom: "20px" }} aria-hidden="true" />
                <h3 style={{ color: "#fff", fontWeight: 600, fontSize: "17px", letterSpacing: "-0.02em", marginBottom: "12px" }}>{u.title}</h3>
                <p style={{ fontSize: "14px", lineHeight: 1.75, color: "rgba(240,244,255,0.5)" }}>{u.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGY PRINCIPLES ── */}
      <section className="section-pad" style={{ background: "rgba(0,0,0,0.2)" }}>
        <div className="container-xl">
          <motion.div {...reveal()} style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ ...S.tag, justifyContent: "center" }}>Technology Principles</div>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#fff" }}>
              Design philosophy
            </h2>
          </motion.div>
          <div className="grid-3">
            {principles.map((p, i) => (
              <motion.div key={p.title} {...reveal(i * 0.06)} style={S.card} onMouseEnter={(e) => hover(e, true)} onMouseLeave={(e) => hover(e, false)}>
                <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(37,99,235,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}>
                  <p.icon size={16} style={{ color: "#60a5fa" }} aria-hidden="true" />
                </div>
                <h3 style={{ color: "#fff", fontWeight: 600, fontSize: "15px", letterSpacing: "-0.01em", marginBottom: "10px" }}>{p.title}</h3>
                <p style={{ fontSize: "13.5px", lineHeight: 1.7, color: "rgba(240,244,255,0.5)" }}>{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEVELOPMENT ROADMAP ── */}
      <section className="section-pad">
        <div className="container-xl">
          <motion.div {...reveal()} style={{ marginBottom: "56px" }}>
            <div style={S.tag}>Development Roadmap</div>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#fff", lineHeight: 1.15 }}>
              Building in phases
            </h2>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "4px", background: "rgba(255,255,255,0.06)", borderRadius: "16px", overflow: "hidden" }}>
            {roadmap.map((r, i) => (
              <motion.div key={r.phase} {...reveal(i * 0.08)} style={{ padding: "32px 28px", background: r.status === "active" ? "rgba(37,99,235,0.07)" : "rgba(255,255,255,0.015)", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: r.status === "active" ? "#3b82f6" : r.status === "next" ? "#f59e0b" : "rgba(255,255,255,0.2)", boxShadow: r.status === "active" ? "0 0 12px rgba(37,99,235,0.6)" : "none" }} aria-hidden="true" />
                  <span style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: r.status === "active" ? "#60a5fa" : r.status === "next" ? "#fcd34d" : "rgba(255,255,255,0.25)" }}>{r.label}</span>
                </div>
                <h3 style={{ color: "#fff", fontWeight: 600, fontSize: "15px", letterSpacing: "-0.01em", marginBottom: "6px" }}>{r.phase}</h3>
                <p style={{ fontSize: "12px", color: "rgba(240,244,255,0.4)", marginBottom: "18px", lineHeight: 1.5 }}>{r.title}</p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "7px" }}>
                  {r.items.map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                      <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: r.status === "active" ? "#3b82f6" : "rgba(255,255,255,0.2)", flexShrink: 0, marginTop: "6px", display: "inline-block" }} aria-hidden="true" />
                      <span style={{ fontSize: "12px", lineHeight: 1.6, color: "rgba(240,244,255,0.42)" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESEARCH STATUS ── */}
      <section className="section-pad" style={{ background: "rgba(0,0,0,0.2)" }}>
        <div className="container-xl">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
            <motion.div {...reveal()}>
              <div style={S.tag}>Research Status</div>
              <h2 style={{ fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#fff", marginBottom: "20px", lineHeight: 1.2 }}>
                Active research areas
              </h2>
              <p style={{ fontSize: "15px", lineHeight: 1.75, color: "rgba(240,244,255,0.5)", marginBottom: "32px" }}>
                Fabric is not a product announcement. It is an active research and architecture project. The following areas are under active investigation, with published literature informing every design decision.
              </p>
              <Link href="/research"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", borderRadius: "10px", background: "rgba(37,99,235,0.12)", border: "1px solid rgba(37,99,235,0.25)", color: "#60a5fa", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(37,99,235,0.2)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(37,99,235,0.12)"; }}>
                View full research agenda <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </motion.div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { area: "Memory disaggregation", detail: "CXL-based disaggregated memory for AI inference — enabling independent memory and compute scaling across GPU clusters." },
                { area: "KV-cache orchestration", detail: "Software-defined memory management for LLM inference — paged attention, cache eviction policies, and memory tiering." },
                { area: "Distributed checkpointing", detail: "Fast, consistent checkpoint protocols for large model training — minimizing recovery time from hardware failures." },
                { area: "Network-aware scheduling", detail: "Placement algorithms that model network topology — minimizing collective communication overhead in distributed training." },
                { area: "Storage I/O optimization", detail: "Data pipeline acceleration for ML training — streaming, prefetching, and caching strategies to eliminate GPU starvation." },
              ].map((r, i) => (
                <motion.div key={r.area} {...reveal(i * 0.06)}
                  style={{ padding: "16px 20px", borderRadius: "12px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                    <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#06b6d4" }} aria-hidden="true" />
                    <span style={{ fontSize: "13px", fontWeight: 600, color: "#fff" }}>{r.area}</span>
                  </div>
                  <p style={{ fontSize: "12px", lineHeight: 1.6, color: "rgba(240,244,255,0.4)", margin: 0, paddingLeft: "13px" }}>{r.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FUTURE VISION ── */}
      <section className="section-pad">
        <div className="container-xl">
          <motion.div {...reveal()}>
            <div style={{ ...S.card, padding: "64px 72px", position: "relative", overflow: "hidden" }}>
              <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(37,99,235,0.08) 0%, transparent 60%)" }} />
              <div aria-hidden="true" style={{ position: "absolute", inset: 0, padding: "1px", borderRadius: "16px", background: "linear-gradient(135deg, rgba(37,99,235,0.3), rgba(6,182,212,0.15), transparent 60%)", WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude", pointerEvents: "none" }} />
              <div style={{ position: "relative", maxWidth: "720px" }}>
                <div style={S.tag}>Future Vision</div>
                <h2 style={{ fontSize: "clamp(26px, 3.5vw, 42px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#fff", marginBottom: "24px", lineHeight: 1.2 }}>
                  Toward autonomous AI infrastructure
                </h2>
                <p style={{ fontSize: "15px", lineHeight: 1.8, color: "rgba(240,244,255,0.5)", marginBottom: "16px" }}>
                  The long-term vision for Fabric is infrastructure that manages itself — detecting anomalies, rebalancing workloads, predicting failures, and optimizing resource utilization without requiring human intervention at steady state.
                </p>
                <p style={{ fontSize: "15px", lineHeight: 1.8, color: "rgba(240,244,255,0.5)", marginBottom: "16px" }}>
                  This is not an automation feature. It is a fundamental architectural goal: an infrastructure platform intelligent enough to reason about its own state and take corrective action within defined policy bounds.
                </p>
                <p style={{ fontSize: "15px", lineHeight: 1.8, color: "rgba(240,244,255,0.5)" }}>
                  Fabric is the foundation. Every component we build today is designed with this long-horizon goal in mind — composable, observable, and programmable enough to support autonomous operation at the platform level.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-pad" style={{ textAlign: "center" }}>
        <div className="container-sm">
          <motion.div {...reveal()}>
            <div style={{ ...S.tag, justifyContent: "center" }}>Get Involved</div>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#fff", marginBottom: "18px", lineHeight: 1.2 }}>
              Shape the future of AI infrastructure
            </h2>
            <p style={{ fontSize: "clamp(15px, 1.8vw, 17px)", lineHeight: 1.7, color: "rgba(240,244,255,0.5)", marginBottom: "44px", maxWidth: "500px", margin: "0 auto 44px" }}>
              We are actively looking for infrastructure engineers, AI systems researchers, and enterprise partners who want to build the next generation of AI infrastructure together.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", justifyContent: "center" }}>
              <Link href="/contact"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 28px", borderRadius: "12px", background: "linear-gradient(135deg, #2563eb, #1a56c8)", color: "#fff", fontWeight: 700, fontSize: "15px", textDecoration: "none", boxShadow: "0 6px 20px rgba(37,99,235,0.35)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 30px rgba(37,99,235,0.5)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(37,99,235,0.35)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
                Partner with Ignara AI <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <Link href="/about"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 28px", borderRadius: "12px", background: "rgba(255,255,255,0.055)", color: "#fff", fontWeight: 500, fontSize: "15px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.12)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.09)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.055)"; }}>
                About Ignara AI
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
