"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Cpu, FlaskConical, Cloud, Radio, Satellite, ExternalLink } from "lucide-react";

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, delay, ease: "easeOut" as const },
});

/* ── Status badge styles ── */
const statusMap: Record<string, { bg: string; color: string; border: string; dot: string }> = {
  "Architecture & Research": { bg: "rgba(37,99,235,0.1)", color: "#60a5fa", border: "rgba(37,99,235,0.22)", dot: "#3b82f6" },
  "Research Initiative":     { bg: "rgba(6,182,212,0.1)", color: "#22d3ee", border: "rgba(6,182,212,0.22)", dot: "#06b6d4" },
  "Future Vision":           { bg: "rgba(245,158,11,0.08)", color: "#fcd34d", border: "rgba(245,158,11,0.2)", dot: "#f59e0b" },
  "Long-Term Vision":        { bg: "rgba(129,140,248,0.08)", color: "#a5b4fc", border: "rgba(129,140,248,0.2)", dot: "#818cf8" },
};

const platforms = [
  {
    id: "fabric",
    icon: Cpu,
    name: "Ignara Fabric",
    status: "Architecture & Research",
    tagline: "The intelligent infrastructure platform",
    description: "Ignara Fabric is the foundational platform being designed to unify compute, storage, networking, orchestration, observability, and AI services into a single programmable operating layer. Every component is designed from first principles for the performance characteristics and operational patterns of AI workloads.",
    focus: ["AI Infrastructure", "Distributed Systems", "Infrastructure Orchestration", "Workload Scheduling"],
    href: "/fabric",
    color: "#3b82f6",
    note: null,
  },
  {
    id: "labs",
    icon: FlaskConical,
    name: "Ignara Labs",
    status: "Research Initiative",
    tagline: "Where foundational research happens",
    description: "Ignara Labs is the research arm of Ignara AI. It explores emerging technologies, develops experimental prototypes, publishes technical findings, and investigates long-horizon questions in intelligent infrastructure — from memory disaggregation to autonomous computing.",
    focus: ["Applied Research", "Experimental Prototypes", "Technical Publications", "Future Computing Architectures"],
    href: "/research",
    color: "#06b6d4",
    note: null,
  },
  {
    id: "cloud",
    icon: Cloud,
    name: "Ignara Cloud",
    status: "Future Vision",
    tagline: "Managed AI infrastructure — future direction",
    description: "Ignara Cloud represents a future managed platform concept — a hosted service that could simplify deployment, scaling, and operation of AI infrastructure built on Ignara technologies. This is a long-term architectural direction, not an announced product or committed roadmap item.",
    focus: ["Managed Infrastructure", "Deployment Automation", "Operational Simplicity", "Cloud-Native Services"],
    href: null,
    color: "#818cf8",
    note: "Future direction. Not an announced product.",
  },
  {
    id: "edge",
    icon: Radio,
    name: "Ignara Edge",
    status: "Future Vision",
    tagline: "AI infrastructure at the network edge — research direction",
    description: "Ignara Edge explores how the principles of intelligent infrastructure could extend to edge computing environments — where low-latency AI inference, constrained resources, and intermittent connectivity create a distinct set of infrastructure challenges. Currently a research direction.",
    focus: ["Edge AI Inference", "Constrained Environments", "Distributed Edge Systems", "Low-Latency Infrastructure"],
    href: null,
    color: "#f59e0b",
    note: "Research direction. No active development.",
  },
  {
    id: "orbit",
    icon: Satellite,
    name: "Ignara Orbit",
    status: "Long-Term Vision",
    tagline: "Resilient computing for future environments — aspirational research",
    description: "Ignara Orbit represents the long-term exploration of resilient computing architectures for extreme environments — including space-based computing research and infrastructure concepts for environments where reliability, autonomy, and resource constraints are fundamentally different from terrestrial systems.",
    focus: ["Space Computing Research", "Resilient Architectures", "Autonomous Systems", "Extreme Environment Infrastructure"],
    href: null,
    color: "#a78bfa",
    note: "Aspirational research area. Not under active development.",
  },
];

const timeline = [
  { phase: "Today", label: "Active", desc: "Research and architecture work across core platform components", active: true },
  { phase: "Research", label: "Ongoing", desc: "Deep systems research informing every design decision", active: true },
  { phase: "Architecture", label: "In progress", desc: "System design, interface specifications, and component definitions", active: true },
  { phase: "Reference designs", label: "Next", desc: "Validated architectural patterns and reference implementations", active: false },
  { phase: "Prototype platforms", label: "Future", desc: "Functional prototypes demonstrating core platform capabilities", active: false },
  { phase: "Developer preview", label: "Future", desc: "Early access programs for infrastructure engineers and researchers", active: false },
  { phase: "Production technologies", label: "Goal", desc: "Hardened, documented, and supported platform releases", active: false },
];

/* ── Animated ecosystem diagram ── */
function EcosystemDiagram() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width = 680;
    const H = canvas.height = 340;
    let raf: number;
    let t = 0;

    // Node positions
    const CENTER = { x: 340, y: 80, label: "Ignara AI", sub: "Platform Ecosystem" };
    const TIER1 = [
      { x: 160, y: 190, label: "Infrastructure", sub: "Core platform", color: "#3b82f6" },
      { x: 340, y: 190, label: "Research", sub: "Ignara Labs", color: "#06b6d4" },
      { x: 520, y: 190, label: "Future", sub: "Long-term vision", color: "#818cf8" },
    ];
    const TIER2 = [
      { x: 80, y: 300, label: "Fabric", color: "#3b82f6", tier1: 0 },
      { x: 200, y: 300, label: "Edge", color: "#f59e0b", tier1: 0 },
      { x: 340, y: 300, label: "Labs", color: "#06b6d4", tier1: 1 },
      { x: 460, y: 300, label: "Cloud", color: "#818cf8", tier1: 2 },
      { x: 580, y: 300, label: "Orbit", color: "#a78bfa", tier1: 2 },
    ];

    const drawLine = (x1: number, y1: number, x2: number, y2: number, color: string, pulse: number) => {
      const alpha = prefersReduced ? 0.25 : 0.15 + Math.sin(pulse) * 0.1;
      ctx.beginPath();
      ctx.strokeStyle = color.replace(")", `,${alpha})`).replace("rgb", "rgba").replace("#", "");
      // use hex directly
      ctx.strokeStyle = color + "44";
      if (!prefersReduced) {
        // animated pulse along line
        const grad = ctx.createLinearGradient(x1, y1, x2, y2);
        const pos = (Math.sin(pulse) + 1) / 2;
        grad.addColorStop(Math.max(0, pos - 0.15), color + "22");
        grad.addColorStop(pos, color + "99");
        grad.addColorStop(Math.min(1, pos + 0.15), color + "22");
        ctx.strokeStyle = grad;
      }
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.lineDashOffset = prefersReduced ? 0 : -t * 8;
      ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
      ctx.setLineDash([]);
    };

    const drawNode = (x: number, y: number, r: number, color: string, label: string, sub?: string, pulse?: number) => {
      const glow = prefersReduced ? 0 : Math.sin((pulse ?? 0) + t * 2) * 0.3 + 0.7;
      // Outer glow ring
      ctx.beginPath();
      ctx.arc(x, y, r + 6, 0, Math.PI * 2);
      ctx.fillStyle = color + "18";
      ctx.fill();
      // Main circle
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = color + "33";
      ctx.fill();
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.strokeStyle = color + (prefersReduced ? "88" : Math.round(glow * 200).toString(16).padStart(2, "0"));
      ctx.lineWidth = 1.5;
      ctx.stroke();
      // Center dot
      ctx.beginPath();
      ctx.arc(x, y, r * 0.35, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
      // Label
      ctx.fillStyle = "rgba(240,244,255,0.9)";
      ctx.font = "500 13px -apple-system, system-ui, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(label, x, y + r + 16);
      if (sub) {
        ctx.fillStyle = "rgba(240,244,255,0.35)";
        ctx.font = "400 10px -apple-system, system-ui, sans-serif";
        ctx.fillText(sub, x, y + r + 29);
      }
    };

    const draw = () => {
      t += 0.012;
      ctx.clearRect(0, 0, W, H);

      // Draw tier1 → center lines
      TIER1.forEach((n, i) => {
        drawLine(CENTER.x, CENTER.y + 18, n.x, n.y - 14, n.color, t * 0.8 + i * 1.2);
      });
      // Draw tier2 → tier1 lines
      TIER2.forEach((n, i) => {
        const parent = TIER1[n.tier1];
        drawLine(parent.x, parent.y + 14, n.x, n.y - 12, n.color, t * 0.8 + i * 0.9);
      });

      // Center node (larger)
      drawNode(CENTER.x, CENTER.y, 22, "#2563eb", CENTER.label, CENTER.sub, 0);

      // Tier 1
      TIER1.forEach((n, i) => drawNode(n.x, n.y, 16, n.color, n.label, n.sub, i * 1.8));

      // Tier 2
      TIER2.forEach((n, i) => drawNode(n.x, n.y, 12, n.color, n.label, undefined, i * 1.4));

      if (!prefersReduced) raf = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(raf);
  }, [prefersReduced]);

  return (
    <canvas ref={canvasRef} width={680} height={340}
      style={{ width: "100%", maxWidth: "680px", height: "auto", display: "block", margin: "0 auto" }}
      aria-label="Ignara AI platform ecosystem diagram showing the relationship between Fabric, Labs, Cloud, Edge, and Orbit" />
  );
}

/* ── Main page ── */
export default function Platform() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div style={{ minHeight: "100vh", paddingTop: "88px" }}>

      {/* ── HERO ── */}
      <section style={{ position: "relative", padding: "80px 0 96px", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(37,99,235,0.13) 0%, rgba(6,182,212,0.03) 50%, transparent 70%)" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: "linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

        <div className="container-xl" style={{ position: "relative" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "32px" }}>
              <Link href="/" style={{ fontSize: "13px", color: "rgba(240,244,255,0.3)", textDecoration: "none" }}>Ignara AI</Link>
              <span style={{ color: "rgba(240,244,255,0.2)" }}>/</span>
              <span style={{ fontSize: "13px", color: "rgba(240,244,255,0.6)" }}>Platform</span>
            </div>

            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "5px 14px", borderRadius: "20px", background: "rgba(37,99,235,0.12)", border: "1px solid rgba(37,99,235,0.25)", color: "#60a5fa", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "28px" }}>
              Platform Ecosystem
            </div>

            <h1 style={{ fontSize: "clamp(44px, 7vw, 84px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.0, color: "#fff", marginBottom: "24px", maxWidth: "800px" }}>
              A platform strategy<br />for the long term
            </h1>
            <p style={{ fontSize: "clamp(16px, 1.8vw, 20px)", lineHeight: 1.65, color: "rgba(240,244,255,0.5)", maxWidth: "620px", marginBottom: "16px" }}>
              Ignara AI is building an ecosystem of infrastructure technologies — not a single product.
            </p>
            <p style={{ fontSize: "clamp(14px, 1.5vw, 16px)", lineHeight: 1.75, color: "rgba(240,244,255,0.35)", maxWidth: "580px", marginBottom: "48px" }}>
              Some initiatives are active research. Some are architectural directions. Some represent long-horizon aspirations. This page describes the platform strategy in full — what exists today, what is being designed, and what we are building toward.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <Link href="/contact"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 26px", borderRadius: "12px", background: "linear-gradient(135deg, #2563eb, #1a56c8)", color: "#fff", fontWeight: 700, fontSize: "14px", textDecoration: "none", boxShadow: "0 6px 20px rgba(37,99,235,0.35)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 28px rgba(37,99,235,0.5)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(37,99,235,0.35)"; }}>
                Partner with us <ArrowRight size={14} aria-hidden="true" />
              </Link>
              <Link href="/research"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 26px", borderRadius: "12px", background: "rgba(255,255,255,0.055)", color: "#fff", fontWeight: 500, fontSize: "14px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.12)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.09)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.055)"; }}>
                View research
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ECOSYSTEM DIAGRAM ── */}
      <section style={{ padding: "0 0 80px" }}>
        <div className="container-xl">
          <motion.div {...reveal()} style={{ marginBottom: "32px", textAlign: "center" }}>
            <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(240,244,255,0.3)", marginBottom: "8px" }}>Platform Architecture</p>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#fff" }}>The Ignara ecosystem</h2>
          </motion.div>
          <motion.div {...reveal(0.1)}>
            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "20px", padding: "48px 32px 40px", position: "relative", overflow: "hidden" }}>
              <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 60% 60% at 50% 30%, rgba(37,99,235,0.07) 0%, transparent 70%)" }} />
              <EcosystemDiagram />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PLATFORM CARDS ── */}
      <section className="section-pad" style={{ background: "rgba(0,0,0,0.2)" }}>
        <div className="container-xl">
          <motion.div {...reveal()} style={{ marginBottom: "56px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "5px 14px", borderRadius: "20px", background: "rgba(37,99,235,0.12)", border: "1px solid rgba(37,99,235,0.25)", color: "#60a5fa", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "20px" }}>
              Platform Overview
            </div>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#fff", maxWidth: "520px", lineHeight: 1.15 }}>
              Five platform initiatives
            </h2>
          </motion.div>

          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {platforms.map((p, i) => {
              const st = statusMap[p.status];
              const isOpen = activeId === p.id;
              return (
                <motion.div key={p.id} {...reveal(i * 0.07)}
                  style={{ background: isOpen ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)", border: `1px solid ${isOpen ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.07)"}`, borderRadius: "14px", overflow: "hidden", transition: "all 0.25s ease" }}>

                  {/* Header row */}
                  <button
                    onClick={() => setActiveId(isOpen ? null : p.id)}
                    style={{ width: "100%", display: "grid", gridTemplateColumns: "1fr auto", gap: "24px", padding: "28px 32px", background: "none", border: "none", cursor: "pointer", textAlign: "left", alignItems: "center" }}
                    aria-expanded={isOpen}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                      <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: p.color + "15", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <p.icon size={18} style={{ color: p.color }} aria-hidden="true" />
                      </div>
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                          <span style={{ fontSize: "17px", fontWeight: 600, color: "#fff", letterSpacing: "-0.02em" }}>{p.name}</span>
                          <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", padding: "3px 10px", borderRadius: "20px", background: st.bg, border: `1px solid ${st.border}`, color: st.color, fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                            <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: st.dot, display: "inline-block" }} aria-hidden="true" />
                            {p.status}
                          </span>
                        </div>
                        <p style={{ fontSize: "13px", color: "rgba(240,244,255,0.4)", marginTop: "3px" }}>{p.tagline}</p>
                      </div>
                    </div>
                    <div style={{ color: "rgba(240,244,255,0.3)", fontSize: "18px", transition: "transform 0.2s", transform: isOpen ? "rotate(45deg)" : "rotate(0deg)", flexShrink: 0 }}>+</div>
                  </button>

                  {/* Expanded content */}
                  {isOpen && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
                      style={{ padding: "0 32px 32px" }}>
                      <div style={{ height: "1px", background: "rgba(255,255,255,0.07)", marginBottom: "28px" }} />
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: "48px", alignItems: "start" }}>
                        <div>
                          <p style={{ fontSize: "15px", lineHeight: 1.75, color: "rgba(240,244,255,0.55)", marginBottom: "20px" }}>{p.description}</p>
                          {p.note && (
                            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 14px", borderRadius: "8px", background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.18)", marginBottom: "20px" }}>
                              <span style={{ fontSize: "12px", color: "#fcd34d" }}>⚠ {p.note}</span>
                            </div>
                          )}
                          {p.href && (
                            <Link href={p.href}
                              style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px", fontWeight: 600, color: p.color, textDecoration: "none" }}
                              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.7"; }}
                              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}>
                              Learn more <ExternalLink size={12} aria-hidden="true" />
                            </Link>
                          )}
                        </div>
                        <div>
                          <p style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(240,244,255,0.25)", marginBottom: "12px" }}>Focus areas</p>
                          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                            {p.focus.map((f) => (
                              <div key={f} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: p.color, flexShrink: 0, display: "inline-block" }} aria-hidden="true" />
                                <span style={{ fontSize: "13px", color: "rgba(240,244,255,0.5)" }}>{f}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── RESEARCH PHILOSOPHY ── */}
      <section className="section-pad">
        <div className="container-xl">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
            <motion.div {...reveal()}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "5px 14px", borderRadius: "20px", background: "rgba(37,99,235,0.12)", border: "1px solid rgba(37,99,235,0.25)", color: "#60a5fa", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "20px" }}>
                Research Philosophy
              </div>
              <h2 style={{ fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#fff", marginBottom: "24px", lineHeight: 1.15 }}>
                Infrastructure endures.<br />Applications evolve.
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  "Ignara AI is founded on the belief that lasting advances in AI depend equally on advances in infrastructure. The field's attention is overwhelmingly focused on models, training techniques, and applications — but the infrastructure layer underneath is largely borrowed from general-purpose systems not designed for AI.",
                  "Applications change quickly. Infrastructure must endure. A well-designed infrastructure platform built on correct abstractions provides leverage for every system built on top of it for decades.",
                  "Our research agenda is oriented around the infrastructure primitives that do not yet exist — or do not yet exist in a form adequate for the demands of the next generation of AI systems. We work at the layer beneath the model.",
                ].map((p, i) => (
                  <p key={i} style={{ fontSize: "15px", lineHeight: 1.8, color: "rgba(240,244,255,0.5)", margin: 0 }}>{p}</p>
                ))}
              </div>
            </motion.div>

            <motion.div {...reveal(0.1)}>
              <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                {[
                  { label: "AI Applications", sub: "Models, pipelines, products", depth: 0, color: "rgba(255,255,255,0.06)", border: "rgba(255,255,255,0.08)", textColor: "rgba(240,244,255,0.4)" },
                  { label: "AI Frameworks", sub: "PyTorch, JAX, TensorFlow", depth: 0, color: "rgba(255,255,255,0.04)", border: "rgba(255,255,255,0.07)", textColor: "rgba(240,244,255,0.35)" },
                  { label: "Ignara Platform", sub: "The layer we are building", depth: 0, color: "rgba(37,99,235,0.1)", border: "rgba(37,99,235,0.25)", textColor: "#60a5fa" },
                  { label: "Physical Infrastructure", sub: "GPU · CPU · NVMe · Network fabric", depth: 0, color: "rgba(255,255,255,0.025)", border: "rgba(255,255,255,0.06)", textColor: "rgba(240,244,255,0.28)" },
                ].map((layer, i) => (
                  <motion.div key={layer.label} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 + 0.15, duration: 0.5 }}
                    style={{ padding: layer.label === "Ignara Platform" ? "18px 24px" : "14px 24px", borderRadius: "10px", background: layer.color, border: `1px solid ${layer.border}` }}>
                    <div style={{ fontSize: layer.label === "Ignara Platform" ? "15px" : "13px", fontWeight: layer.label === "Ignara Platform" ? 600 : 500, color: layer.textColor, marginBottom: "2px" }}>{layer.label}</div>
                    <div style={{ fontSize: "11px", color: "rgba(240,244,255,0.25)", letterSpacing: "0.03em" }}>{layer.sub}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── DEVELOPMENT TIMELINE ── */}
      <section className="section-pad" style={{ background: "rgba(0,0,0,0.2)" }}>
        <div className="container-xl">
          <motion.div {...reveal()} style={{ marginBottom: "56px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "5px 14px", borderRadius: "20px", background: "rgba(37,99,235,0.12)", border: "1px solid rgba(37,99,235,0.25)", color: "#60a5fa", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "20px" }}>
              Development Timeline
            </div>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#fff", lineHeight: 1.15, maxWidth: "480px" }}>
              A measured path to production
            </h2>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "rgba(240,244,255,0.4)", maxWidth: "560px", marginTop: "16px" }}>
              Later stages represent goals and aspirations, not commitments. We will not announce a timeline we cannot keep.
            </p>
          </motion.div>

          <div style={{ position: "relative" }}>
            <div aria-hidden="true" style={{ position: "absolute", left: "20px", top: "8px", bottom: "8px", width: "1px", background: "linear-gradient(to bottom, #2563eb 30%, rgba(37,99,235,0.15) 70%, transparent)" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {timeline.map((t, i) => (
                <motion.div key={t.phase} {...reveal(i * 0.07)} style={{ paddingLeft: "56px", position: "relative" }}>
                  <div aria-hidden="true" style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", width: "17px", height: "17px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: t.active ? "#2563eb" : "rgba(255,255,255,0.06)", border: t.active ? "2px solid rgba(37,99,235,0.4)" : "1px solid rgba(255,255,255,0.1)", boxShadow: t.active ? "0 0 16px rgba(37,99,235,0.5)" : "none" }}>
                    {t.active && <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#fff" }} />}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "16px 24px", borderRadius: "10px", background: t.active ? "rgba(37,99,235,0.06)" : "rgba(255,255,255,0.02)", border: `1px solid ${t.active ? "rgba(37,99,235,0.15)" : "rgba(255,255,255,0.06)"}` }}>
                    <div style={{ minWidth: "140px" }}>
                      <div style={{ fontSize: "14px", fontWeight: 600, color: t.active ? "#fff" : "rgba(240,244,255,0.4)", letterSpacing: "-0.01em" }}>{t.phase}</div>
                      <div style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: t.active ? "#60a5fa" : "rgba(240,244,255,0.2)", marginTop: "2px" }}>{t.label}</div>
                    </div>
                    <div style={{ height: "32px", width: "1px", background: "rgba(255,255,255,0.07)", flexShrink: 0 }} aria-hidden="true" />
                    <p style={{ fontSize: "13.5px", lineHeight: 1.6, color: t.active ? "rgba(240,244,255,0.55)" : "rgba(240,244,255,0.28)", margin: 0 }}>{t.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATUS LEGEND ── */}
      <section className="section-pad">
        <div className="container-xl">
          <motion.div {...reveal()} style={{ marginBottom: "40px" }}>
            <h2 style={{ fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#fff" }}>Understanding platform status</h2>
            <p style={{ fontSize: "14px", color: "rgba(240,244,255,0.4)", marginTop: "10px" }}>We use precise language to describe where each initiative stands.</p>
          </motion.div>
          <div className="grid-2">
            {[
              { status: "Architecture & Research", color: "#60a5fa", bg: "rgba(37,99,235,0.1)", border: "rgba(37,99,235,0.22)", meaning: "Active work is underway. The team is designing systems, conducting research, and making architectural decisions. No production software exists yet." },
              { status: "Research Initiative", color: "#22d3ee", bg: "rgba(6,182,212,0.1)", border: "rgba(6,182,212,0.22)", meaning: "A dedicated research program with defined focus areas. Producing findings, prototypes, and technical documentation. Not a product announcement." },
              { status: "Future Vision", color: "#fcd34d", bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.2)", meaning: "A described direction for where the platform could go. Informed by research but not under active development. No timeline or commitment implied." },
              { status: "Long-Term Vision", color: "#a5b4fc", bg: "rgba(129,140,248,0.08)", border: "rgba(129,140,248,0.2)", meaning: "An aspirational research area exploring what may be possible over a multi-year horizon. Speculative and exploratory by nature." },
            ].map((s, i) => (
              <motion.div key={s.status} {...reveal(i * 0.08)}
                style={{ padding: "28px 32px", borderRadius: "14px", background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "4px 12px", borderRadius: "20px", background: s.bg, border: `1px solid ${s.border}`, color: s.color, fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
                  <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: s.color, display: "inline-block" }} aria-hidden="true" />
                  {s.status}
                </div>
                <p style={{ fontSize: "14px", lineHeight: 1.7, color: "rgba(240,244,255,0.5)", margin: 0 }}>{s.meaning}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-pad" style={{ background: "rgba(0,0,0,0.2)" }}>
        <div className="container-md" style={{ textAlign: "center" }}>
          <motion.div {...reveal()}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "5px 14px", borderRadius: "20px", background: "rgba(37,99,235,0.12)", border: "1px solid rgba(37,99,235,0.25)", color: "#60a5fa", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "20px", justifyContent: "center" }}>
              Get Involved
            </div>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 42px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#fff", marginBottom: "18px", lineHeight: 1.15 }}>
              Help shape the future<br />of AI infrastructure
            </h2>
            <p style={{ fontSize: "clamp(14px, 1.6vw, 17px)", lineHeight: 1.75, color: "rgba(240,244,255,0.5)", marginBottom: "16px", maxWidth: "520px", margin: "0 auto 16px" }}>
              Whether you are an infrastructure engineer, AI systems researcher, enterprise technology leader, or potential partner — we welcome conversations about the next generation of intelligent infrastructure.
            </p>
            <p style={{ fontSize: "14px", color: "rgba(240,244,255,0.3)", marginBottom: "44px" }}>
              <a href="mailto:contact@ignara.ai" style={{ color: "#60a5fa", textDecoration: "none" }}>contact@ignara.ai</a>
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", justifyContent: "center" }}>
              <Link href="/contact"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 28px", borderRadius: "12px", background: "linear-gradient(135deg, #2563eb, #1a56c8)", color: "#fff", fontWeight: 700, fontSize: "15px", textDecoration: "none", boxShadow: "0 6px 20px rgba(37,99,235,0.35)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 30px rgba(37,99,235,0.5)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(37,99,235,0.35)"; }}>
                Start a conversation <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <Link href="/fabric"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 28px", borderRadius: "12px", background: "rgba(255,255,255,0.055)", color: "#fff", fontWeight: 500, fontSize: "15px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.12)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.09)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.055)"; }}>
                Explore Ignara Fabric
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
