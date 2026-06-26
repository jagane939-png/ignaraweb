"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import {
  ArrowRight, Cpu, Network, FlaskConical, Layers,
  Shield, Zap, Globe2, Search, TrendingUp, Lock,
  Database, Satellite, Binary, Infinity as InfIcon
} from "lucide-react";

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, delay, ease: "easeOut" as const },
});

/* ─── shared styles ─── */
const S = {
  card: {
    background: "rgba(255,255,255,0.025)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "16px",
    padding: "32px",
    transition: "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
  } as React.CSSProperties,
  btnPrimary: {
    display: "inline-flex", alignItems: "center", gap: "8px",
    padding: "14px 28px", borderRadius: "12px",
    background: "linear-gradient(135deg, #2563eb 0%, #1a56c8 100%)",
    color: "#fff", fontWeight: 700, fontSize: "15px", textDecoration: "none",
    letterSpacing: "-0.01em",
    boxShadow: "0 1px 0 rgba(255,255,255,0.15) inset, 0 6px 20px rgba(37,99,235,0.35)",
    transition: "all 0.2s ease",
  } as React.CSSProperties,
  btnGhost: {
    display: "inline-flex", alignItems: "center", gap: "8px",
    padding: "14px 28px", borderRadius: "12px",
    background: "rgba(255,255,255,0.06)", color: "#fff",
    fontWeight: 500, fontSize: "15px", textDecoration: "none",
    border: "1px solid rgba(255,255,255,0.14)",
    transition: "all 0.2s ease",
  } as React.CSSProperties,
  tag: {
    display: "inline-flex", alignItems: "center", gap: "8px",
    padding: "5px 14px", borderRadius: "20px",
    background: "rgba(37,99,235,0.12)", border: "1px solid rgba(37,99,235,0.25)",
    color: "#60a5fa", fontSize: "11px", fontWeight: 600,
    letterSpacing: "0.12em", textTransform: "uppercase" as const,
    marginBottom: "20px",
  } as React.CSSProperties,
};

const hoverCard = (e: React.MouseEvent, enter: boolean) => {
  const el = e.currentTarget as HTMLElement;
  el.style.transform = enter ? "translateY(-4px)" : "translateY(0)";
  el.style.borderColor = enter ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.08)";
  el.style.boxShadow = enter ? "0 20px 40px rgba(0,0,0,0.3)" : "none";
};

const builds = [
  { icon: Cpu, title: "AI Infrastructure", sub: "Compute & Systems", body: "Fault-tolerant compute platforms engineered for AI workloads — optimized for throughput, latency, and horizontal scalability across heterogeneous hardware.", color: "#3b82f6", bg: "rgba(59,130,246,0.08)" },
  { icon: Network, title: "Distributed Intelligence", sub: "Platform Architecture", body: "Coordination systems for distributed AI inference and training across multi-node clusters — enabling models to operate at scale without centralized bottlenecks.", color: "#06b6d4", bg: "rgba(6,182,212,0.08)" },
  { icon: FlaskConical, title: "Research Systems", sub: "Applied Research", body: "Purpose-built tooling for ML research pipelines — data ingestion, experiment versioning, reproducibility guarantees, and orchestration at research scale.", color: "#818cf8", bg: "rgba(129,140,248,0.08)" },
  { icon: Layers, title: "Future Computing", sub: "Long-horizon R&D", body: "Exploratory research into CXL-based memory disaggregation, autonomous infrastructure, and compute architectures designed for the decade ahead.", color: "#34d399", bg: "rgba(52,211,153,0.08)" },
];

const techFocus = [
  { icon: Database, title: "Data Pipeline Acceleration", body: "Ignara Fabric eliminates I/O bottlenecks in ML training — keeping GPUs saturated and reducing time-to-model by an order of magnitude." },
  { icon: Satellite, title: "Space Intelligence Systems", body: "Real-time satellite tracking and orbital analytics via TLE ingestion, sgp4 propagation, and AI-driven anomaly detection for operational contexts." },
  { icon: Binary, title: "Memory Architecture Research", body: "Investigating CXL as a vehicle for disaggregating memory from compute — enabling independent memory scaling across large GPU clusters." },
  { icon: InfIcon, title: "Inference Optimization", body: "KV-cache subsystem research, paged attention mechanisms, and token memory efficiency work for LLM inference at deployment scale." },
];

const principles = [
  { icon: Zap, t: "High Performance", b: "Purpose-built for AI workloads. Every layer is optimized for throughput and latency, not general-purpose compute." },
  { icon: Shield, t: "Reliability", b: "Fault tolerance and graceful degradation engineered at every layer — zero tolerance for silent failure." },
  { icon: Lock, t: "Security", b: "Isolation, auditability, and least-privilege access patterns baked into the architecture from day one." },
  { icon: Search, t: "Research-driven", b: "Every design decision is grounded in systems research and validated empirically. Benchmarks, not claims." },
  { icon: TrendingUp, t: "Long-term thinking", b: "We optimize for decade-scale infrastructure bets. The problems worth solving take time to solve correctly." },
  { icon: Globe2, t: "Scale by design", b: "Horizontal scaling from single-node prototype to planetary deployment without architectural rewrites." },
];

const timeline = [
  { phase: "Today", label: "Foundation", active: true, title: "AI Infrastructure & Intelligent Systems", body: "Ignara Fabric for ML pipeline acceleration. Ignara Space Intelligence for real-time orbital analytics. Foundation for the layer above." },
  { phase: "Next", label: "Expansion", active: false, title: "Distributed AI Platforms & Automation", body: "Multi-node distributed inference. CXL memory disaggregation. Automated orchestration of heterogeneous compute at scale." },
  { phase: "Future", label: "Long horizon", active: false, title: "Autonomous Infrastructure & Advanced Computing", body: "Self-managing compute fabric. Autonomous infrastructure. Next-generation memory architectures. Planetary-scale AI systems." },
];

const futureAI = [
  { title: "AI Factories", body: "Vertically integrated compute facilities purpose-built for AI — where power, cooling, and networking are co-designed with the workload." },
  { title: "Distributed Inference", body: "Model serving disaggregated across geographic regions — bringing inference closer to data, reducing latency, eliminating central failure." },
  { title: "Autonomous Infrastructure", body: "Infrastructure that self-monitors, self-heals, and self-optimizes — reducing operational burden of large-scale AI systems." },
  { title: "Edge Intelligence", body: "AI inference at the network edge — in satellites, sensors, and endpoints — without round-trips to central compute." },
  { title: "Advanced Networking", body: "Ultra-low-latency interconnects enabling model parallelism and gradient synchronization at network speed." },
  { title: "Space Computing", body: "Long-horizon research into orbital compute — AI systems processing data closer to where satellites collect it." },
];

export default function Home() {
  return (
    <>
      {/* ══════════ HERO ══════════════════════════════════ */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <AnimatedBackground />

        {/* Atmospheric layers */}
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 100% 70% at 50% 30%, rgba(37,99,235,0.16) 0%, rgba(6,182,212,0.04) 45%, transparent 65%)" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 50% 40% at 80% 80%, rgba(6,182,212,0.04) 0%, transparent 60%)" }} />

        {/* Subtle orbital ring */}
        <div aria-hidden="true" style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: "min(700px, 90vw)", height: "min(700px, 90vw)", borderRadius: "50%", border: "1px solid rgba(37,99,235,0.1)", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: "min(950px, 120vw)", height: "min(950px, 120vw)", borderRadius: "50%", border: "1px solid rgba(6,182,212,0.05)", pointerEvents: "none" }} />

        <div style={{ position: "relative", width: "100%", maxWidth: "900px", margin: "0 auto", padding: "120px 24px 80px", textAlign: "center" }}>
          {/* Eyebrow */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 16px", borderRadius: "20px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", marginBottom: "32px" }}>
            <span className="pulse-dot" style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#06b6d4", display: "inline-block", flexShrink: 0 }} aria-hidden="true" />
            <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.13em", textTransform: "uppercase", color: "rgba(240,244,255,0.45)" }}>
              AI Infrastructure · Intelligent Systems · Future Computing
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            style={{ fontSize: "clamp(48px, 8.5vw, 92px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.0, marginBottom: "24px", background: "linear-gradient(160deg, #ffffff 0%, #c7d2fe 45%, #67e8f9 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Building the Future<br />of AI Infrastructure
          </motion.h1>

          {/* Subtitle */}
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.18 }}
            style={{ fontSize: "clamp(16px, 2vw, 19px)", lineHeight: 1.65, color: "rgba(240,244,255,0.52)", maxWidth: "580px", margin: "0 auto 44px" }}>
            Ignara AI develops intelligent infrastructure, distributed AI systems, advanced computing platforms, and long-term research that power the next generation of artificial intelligence.
          </motion.p>

          {/* CTAs */}
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.28 }}
            style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "14px", marginBottom: "72px" }}>
            <Link href="/vision" style={S.btnPrimary}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 0 rgba(255,255,255,0.15) inset, 0 10px 30px rgba(37,99,235,0.5)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 0 rgba(255,255,255,0.15) inset, 0 6px 20px rgba(37,99,235,0.35)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
              Explore Our Vision <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <Link href="/contact" style={S.btnGhost}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.22)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.14)"; }}>
              Contact Ignara AI
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.5 }}
            style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px", maxWidth: "360px", margin: "0 auto", paddingTop: "28px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            {[{ v: "AI-first", l: "Architecture" }, { v: "Research", l: "Driven" }, { v: "Long-term", l: "Thinking" }].map((s) => (
              <div key={s.l} style={{ textAlign: "center" }}>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: "16px", letterSpacing: "-0.025em", marginBottom: "4px" }}>{s.v}</div>
                <div style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(240,244,255,0.25)" }}>{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          style={{ position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)" }} aria-hidden="true">
          <div style={{ width: "1px", height: "48px", background: "linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)" }} />
        </motion.div>
      </section>

      {/* ══════════ WHAT WE BUILD ═════════════════════════ */}
      <section className="section-pad">
        <div className="container-xl">
          <motion.div {...reveal()} style={{ marginBottom: "56px" }}>
            <div style={S.tag}>What Ignara AI Is Building</div>
            <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#fff", maxWidth: "480px" }}>
              Infrastructure for the AI-native era
            </h2>
          </motion.div>
          <div className="grid-2">
            {builds.map((c, i) => (
              <motion.div key={c.title} {...reveal(i * 0.07)} style={S.card}
                onMouseEnter={(e) => hoverCard(e, true)} onMouseLeave={(e) => hoverCard(e, false)}>
                <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: c.bg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                  <c.icon size={18} style={{ color: c.color }} aria-hidden="true" />
                </div>
                <p style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: c.color + "99", marginBottom: "6px" }}>{c.sub}</p>
                <h3 style={{ color: "#fff", fontWeight: 600, fontSize: "17px", letterSpacing: "-0.02em", marginBottom: "12px" }}>{c.title}</h3>
                <p style={{ fontSize: "14px", lineHeight: 1.7, color: "rgba(240,244,255,0.5)" }}>{c.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ TECHNOLOGY FOCUS ══════════════════════ */}
      <section className="section-pad" style={{ background: "rgba(0,0,0,0.22)" }}>
        <div className="container-xl">
          <motion.div {...reveal()} style={{ marginBottom: "56px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "end" }}>
            <div>
              <div style={S.tag}>Technology Focus</div>
              <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#fff" }}>Active systems<br />in development</h2>
            </div>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "rgba(240,244,255,0.5)" }}>
              We build and ship real systems. Every research direction produces runnable artifacts with reproducible benchmarks — not whitepapers.
            </p>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "1px", background: "rgba(255,255,255,0.07)", borderRadius: "16px", overflow: "hidden" }}>
            {techFocus.map((t, i) => (
              <motion.div key={t.title} {...reveal(i * 0.07)}
                style={{ padding: "36px 40px", background: "#0a1220", transition: "background 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#0d1528"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#0a1220"; }}>
                <t.icon size={18} style={{ color: "#06b6d4", marginBottom: "18px" }} aria-hidden="true" />
                <h3 style={{ color: "#fff", fontWeight: 600, fontSize: "15px", letterSpacing: "-0.01em", marginBottom: "10px" }}>{t.title}</h3>
                <p style={{ fontSize: "13.5px", lineHeight: 1.7, color: "rgba(240,244,255,0.5)" }}>{t.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ VISION TIMELINE ═══════════════════════ */}
      <section className="section-pad">
        <div className="container-xl">
          <motion.div {...reveal()} style={{ marginBottom: "56px" }}>
            <div style={S.tag}>Vision Timeline</div>
            <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#fff" }}>Where we are going</h2>
          </motion.div>
          <div style={{ position: "relative" }}>
            <div aria-hidden="true" style={{ position: "absolute", left: "18px", top: "8px", bottom: "8px", width: "1px", background: "linear-gradient(to bottom, #2563eb, rgba(6,182,212,0.3), transparent)" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {timeline.map((t, i) => (
                <motion.div key={t.phase} {...reveal(i * 0.1)} style={{ paddingLeft: "56px", position: "relative" }}>
                  <div aria-hidden="true" style={{ position: "absolute", left: "10px", top: "8px", width: "18px", height: "18px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: t.active ? "#2563eb" : "rgba(255,255,255,0.07)", border: t.active ? "2px solid rgba(37,99,235,0.4)" : "1px solid rgba(255,255,255,0.12)", boxShadow: t.active ? "0 0 20px rgba(37,99,235,0.5)" : "none" }}>
                    {t.active && <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#fff" }} />}
                  </div>
                  <div style={{ ...S.card, background: t.active ? "rgba(37,99,235,0.07)" : S.card.background, border: t.active ? "1px solid rgba(37,99,235,0.2)" : S.card.border }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                      <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "3px 10px", borderRadius: "20px", background: t.active ? "rgba(37,99,235,0.18)" : "rgba(255,255,255,0.06)", color: t.active ? "#60a5fa" : "rgba(255,255,255,0.3)" }}>{t.phase}</span>
                      <span style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)" }}>{t.label}</span>
                    </div>
                    <h3 style={{ color: "#fff", fontWeight: 600, fontSize: "18px", letterSpacing: "-0.02em", marginBottom: "10px" }}>{t.title}</h3>
                    <p style={{ fontSize: "14px", lineHeight: 1.7, color: "rgba(240,244,255,0.5)" }}>{t.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ ENGINEERING PRINCIPLES ═══════════════ */}
      <section className="section-pad" style={{ background: "rgba(0,0,0,0.2)" }}>
        <div className="container-xl">
          <motion.div {...reveal()} style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ ...S.tag, justifyContent: "center" }}>Engineering Principles</div>
            <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#fff" }}>Built on first principles</h2>
          </motion.div>
          <div className="grid-3">
            {principles.map((p, i) => (
              <motion.div key={p.t} {...reveal(i * 0.06)} style={S.card}
                onMouseEnter={(e) => hoverCard(e, true)} onMouseLeave={(e) => hoverCard(e, false)}>
                <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(37,99,235,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}>
                  <p.icon size={16} style={{ color: "#60a5fa" }} aria-hidden="true" />
                </div>
                <h3 style={{ color: "#fff", fontWeight: 600, fontSize: "15px", letterSpacing: "-0.01em", marginBottom: "10px" }}>{p.t}</h3>
                <p style={{ fontSize: "13.5px", lineHeight: 1.7, color: "rgba(240,244,255,0.5)" }}>{p.b}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ RESEARCH PHILOSOPHY ══════════════════ */}
      <section className="section-pad">
        <div className="container-xl">
          <div style={{ ...S.card, padding: "64px 72px", position: "relative", overflow: "hidden" }}>
            <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 70% 80% at 100% 0%, rgba(37,99,235,0.07) 0%, transparent 60%)" }} />
            <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
              <motion.div {...reveal()}>
                <div style={S.tag}>Research Philosophy</div>
                <h2 style={{ fontSize: "clamp(24px,3vw,36px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#fff", marginBottom: "20px", lineHeight: 1.2 }}>We build to learn.<br />We learn to build.</h2>
                <p style={{ fontSize: "15px", lineHeight: 1.7, color: "rgba(240,244,255,0.5)", marginBottom: "14px" }}>
                  At Ignara AI, research and engineering are not separate disciplines. Every exploratory project produces runnable artifacts with reproducible benchmarks. Every production system produces insights that feed back into our research agenda.
                </p>
                <p style={{ fontSize: "15px", lineHeight: 1.7, color: "rgba(240,244,255,0.5)" }}>
                  The highest-leverage advances come from teams willing to go deep on hard problems — memory hierarchy, data throughput, distributed coordination — with both systems rigor and scientific curiosity.
                </p>
              </motion.div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {["Long-term research over short-term optimization", "Infrastructure before applications", "Scalable intelligence as a design constraint", "Distributed systems as the default architecture", "Autonomous computing as the end goal"].map((item, i) => (
                  <motion.div key={item} {...reveal(i * 0.07)}
                    style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "13px 16px", borderRadius: "10px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                    <div aria-hidden="true" style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#06b6d4", flexShrink: 0, marginTop: "8px" }} />
                    <p style={{ fontSize: "13.5px", lineHeight: 1.6, color: "rgba(240,244,255,0.65)" }}>{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ FUTURE OF AI ══════════════════════════ */}
      <section className="section-pad" style={{ background: "rgba(0,0,0,0.22)" }}>
        <div className="container-xl">
          <motion.div {...reveal()} style={{ marginBottom: "14px" }}>
            <div style={S.tag}>Research Direction</div>
            <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#fff", maxWidth: "500px" }}>The future of AI infrastructure</h2>
          </motion.div>
          <motion.p {...reveal(0.08)} style={{ fontSize: "clamp(16px,1.8vw,19px)", lineHeight: 1.65, color: "rgba(240,244,255,0.5)", maxWidth: "560px", marginBottom: "52px" }}>
            The infrastructure paradigms we believe will define the next decade. We are researching and building toward them today.
          </motion.p>
          <div className="grid-3">
            {futureAI.map((f, i) => (
              <motion.div key={f.title} {...reveal(i * 0.07)} style={S.card}
                onMouseEnter={(e) => hoverCard(e, true)} onMouseLeave={(e) => hoverCard(e, false)}>
                <div aria-hidden="true" style={{ width: "28px", height: "1px", background: "linear-gradient(90deg, #2563eb, #06b6d4)", marginBottom: "20px" }} />
                <h3 style={{ color: "#fff", fontWeight: 600, fontSize: "15px", letterSpacing: "-0.01em", marginBottom: "10px" }}>{f.title}</h3>
                <p style={{ fontSize: "13.5px", lineHeight: 1.7, color: "rgba(240,244,255,0.5)" }}>{f.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FOUNDER VISION ════════════════════════ */}
      <section className="section-pad">
        <div className="container-md">
          <motion.div {...reveal()}>
            <div style={{ ...S.card, padding: "64px 72px", position: "relative", overflow: "hidden" }}>
              {/* Gradient border */}
              <div aria-hidden="true" style={{ position: "absolute", inset: 0, padding: "1px", borderRadius: "16px", background: "linear-gradient(135deg, rgba(37,99,235,0.35), rgba(6,182,212,0.2), transparent 60%)", WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude", pointerEvents: "none" }} />
              <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(6,182,212,0.05) 0%, transparent 60%)" }} />
              <div style={{ position: "relative" }}>
                <div style={S.tag}>Founder Vision</div>
                <blockquote style={{ fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.3, color: "#fff", maxWidth: "640px", marginBottom: "40px" }}>
                  &ldquo;The infrastructure layer is the highest-leverage point in the AI stack. Get the foundation right, and everything built on top of it benefits.&rdquo;
                </blockquote>
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "linear-gradient(135deg, #2563eb, #06b6d4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", fontWeight: 800, color: "#fff", flexShrink: 0, boxShadow: "0 8px 24px rgba(37,99,235,0.3)" }}>J</div>
                  <div>
                    <div style={{ color: "#fff", fontWeight: 600, fontSize: "15px", letterSpacing: "-0.01em" }}>Jagan E</div>
                    <div style={{ fontSize: "13px", color: "#06b6d4", marginTop: "2px" }}>Founder &amp; CEO, Ignara AI</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════ CTA ═══════════════════════════════════ */}
      <section className="section-pad" style={{ textAlign: "center" }}>
        <div className="container-sm">
          <motion.div {...reveal()}>
            <div style={{ ...S.tag, justifyContent: "center" }}>Contact</div>
            <h2 style={{ fontSize: "clamp(26px,3.5vw,40px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#fff", marginBottom: "18px", lineHeight: 1.2 }}>
              Let&apos;s build the future<br />of AI together
            </h2>
            <p style={{ fontSize: "clamp(15px,1.8vw,18px)", lineHeight: 1.65, color: "rgba(240,244,255,0.5)", marginBottom: "44px", maxWidth: "460px", margin: "0 auto 44px" }}>
              Open to conversations with investors, enterprise customers, research partners, and engineers who share our long-term perspective.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", justifyContent: "center" }}>
              <Link href="/contact" style={S.btnPrimary}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 0 rgba(255,255,255,0.15) inset, 0 10px 30px rgba(37,99,235,0.5)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 0 rgba(255,255,255,0.15) inset, 0 6px 20px rgba(37,99,235,0.35)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
                Contact Ignara AI <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <Link href="/research" style={S.btnGhost}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.22)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.14)"; }}>
                View Research
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
