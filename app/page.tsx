"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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

const builds = [
  { icon: Cpu, title: "AI Infrastructure", sub: "Compute & Systems", body: "Fault-tolerant compute platforms engineered for AI workloads — optimized for throughput, latency, and horizontal scalability across heterogeneous hardware.", color: "#3b82f6", bg: "rgba(59,130,246,0.07)" },
  { icon: Network, title: "Distributed Intelligence", sub: "Platform Architecture", body: "Coordination systems for distributed AI inference and training across multi-node clusters — enabling models to operate at scale without centralized bottlenecks.", color: "#06b6d4", bg: "rgba(6,182,212,0.07)" },
  { icon: FlaskConical, title: "Research Systems", sub: "Applied Research", body: "Purpose-built tooling for ML research pipelines — data ingestion, experiment versioning, reproducibility guarantees, and orchestration at research scale.", color: "#818cf8", bg: "rgba(129,140,248,0.07)" },
  { icon: Layers, title: "Future Computing", sub: "Long-horizon R&D", body: "Exploratory research into CXL-based memory disaggregation, autonomous infrastructure, and compute architectures designed for the decade ahead.", color: "#34d399", bg: "rgba(52,211,153,0.07)" },
];

const techFocus = [
  { icon: Database, title: "Data Pipeline Acceleration", body: "Ignara Fabric eliminates I/O bottlenecks in ML training — keeping GPUs saturated and reducing time-to-model by an order of magnitude." },
  { icon: Satellite, title: "Space Intelligence Systems", body: "Real-time satellite tracking and orbital analytics via TLE ingestion, sgp4 propagation, and AI-driven anomaly detection for operational contexts." },
  { icon: Binary, title: "Memory Architecture Research", body: "Investigating CXL as a vehicle for disaggregating memory from compute — enabling independent memory scaling across large GPU clusters." },
  { icon: InfIcon, title: "Inference Optimization", body: "KV-cache subsystem research, paged attention mechanisms, and token memory efficiency work for LLM inference at deployment scale." },
];

const principles = [
  { icon: Zap, t: "High Performance", b: "Purpose-built for AI workloads — not adapted from general-purpose infrastructure. Every layer is optimized for throughput and latency." },
  { icon: Shield, t: "Reliability", b: "Fault tolerance and graceful degradation engineered at every layer — because production AI systems have zero tolerance for silent failure." },
  { icon: Lock, t: "Security", b: "Isolation, auditability, and least-privilege access patterns baked into the architecture — not applied as an afterthought." },
  { icon: Search, t: "Research-driven", b: "Every design decision is grounded in systems research and validated empirically. Benchmarks, not claims." },
  { icon: TrendingUp, t: "Long-term thinking", b: "We optimize for decade-scale infrastructure bets. The problems worth solving take time to solve correctly." },
  { icon: Globe2, t: "Scale by design", b: "Systems scale horizontally from single-node prototype to planetary deployment without requiring architectural rewrites." },
];

const timeline = [
  { phase: "Today", label: "Foundation", active: true, title: "AI Infrastructure & Intelligent Systems", body: "Ignara Fabric for ML pipeline acceleration. Ignara Space Intelligence for real-time orbital analytics. Foundation for the layer above." },
  { phase: "Next", label: "Expansion", active: false, title: "Distributed AI Platforms & Automation", body: "Multi-node distributed inference. CXL memory disaggregation. Automated orchestration of heterogeneous compute at scale." },
  { phase: "Future", label: "Long horizon", active: false, title: "Autonomous Infrastructure & Advanced Computing", body: "Self-managing compute fabric. Autonomous infrastructure. Next-generation memory architectures. Planetary-scale AI systems." },
];

const futureAI = [
  { title: "AI Factories", body: "Vertically integrated compute facilities purpose-built for AI training and inference — where power, cooling, and networking are co-designed with the workload." },
  { title: "Distributed Inference", body: "Model serving disaggregated across geographic regions — bringing inference closer to data sources, reducing latency, eliminating central failure points." },
  { title: "Autonomous Infrastructure", body: "Infrastructure that self-monitors, self-heals, and self-optimizes — reducing the operational burden of running large-scale AI systems." },
  { title: "Edge Intelligence", body: "AI inference at the edge of the network — in satellites, sensors, and endpoints — without requiring round-trips to central compute." },
  { title: "Advanced Networking", body: "Ultra-low-latency interconnects for distributed AI — enabling model parallelism and gradient synchronization at network speed." },
  { title: "Space Computing", body: "Long-horizon research into orbital compute — AI systems that operate in space, processing data closer to where satellites collect it." },
];

const card: React.CSSProperties = {
  background: "rgba(255,255,255,0.025)",
  border: "1px solid rgba(255,255,255,0.07)",
  borderRadius: "16px",
  padding: "32px",
  transition: "transform 0.25s ease, border-color 0.25s ease",
};

const btnPrimary: React.CSSProperties = {
  display: "inline-flex", alignItems: "center", gap: "8px",
  padding: "14px 28px", borderRadius: "12px",
  background: "#2563eb", color: "white",
  fontWeight: 600, fontSize: "15px",
  border: "none", cursor: "pointer", textDecoration: "none",
  transition: "background 0.2s, box-shadow 0.2s",
};

const btnSecondary: React.CSSProperties = {
  display: "inline-flex", alignItems: "center", gap: "8px",
  padding: "14px 28px", borderRadius: "12px",
  background: "rgba(255,255,255,0.055)", color: "white",
  fontWeight: 500, fontSize: "15px",
  border: "1px solid rgba(255,255,255,0.12)", cursor: "pointer", textDecoration: "none",
  transition: "border-color 0.2s",
};

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroO = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════ */}
      <section ref={heroRef} style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <AnimatedBackground />

        {/* Glow layers */}
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 100% 65% at 50% 35%, rgba(37,99,235,0.13) 0%, rgba(6,182,212,0.03) 40%, transparent 65%)" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 50% 40% at 15% 75%, rgba(37,99,235,0.05) 0%, transparent 60%)" }} />

        <motion.div style={{ opacity: heroO, position: "relative", width: "100%", paddingTop: "7rem", paddingBottom: "6rem" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
            {/* Badge */}
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 14px", borderRadius: "20px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", marginBottom: "36px" }}>
              <span className="pulse-dot" style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#06b6d4", display: "inline-block" }} aria-hidden="true" />
              <span className="label" style={{ color: "rgba(240,244,255,0.45)" }}>AI Infrastructure · Intelligent Systems · Future Computing</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="display-xl gt-white" style={{ marginBottom: "24px" }}>
              Building the Future<br />of AI Infrastructure
            </motion.h1>

            {/* Subtitle */}
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.2 }}
              className="body-lg" style={{ color: "rgba(240,244,255,0.5)", maxWidth: "640px", margin: "0 auto 48px" }}>
              Ignara AI develops intelligent infrastructure, distributed AI systems, advanced computing platforms, and long-term research that power the next generation of artificial intelligence.
            </motion.p>

            {/* CTAs */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.3 }}
              style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px", marginBottom: "80px" }}>
              <Link href="/vision" style={btnPrimary}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#1d4ed8"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(37,99,235,0.35)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#2563eb"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
                Explore Our Vision <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <Link href="/contact" style={btnSecondary}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.22)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)"; }}>
                Contact Ignara AI
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.5 }}
              style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", maxWidth: "360px", margin: "0 auto", paddingTop: "32px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
              {[{ v: "AI-first", l: "Architecture" }, { v: "Research", l: "Driven" }, { v: "Long-term", l: "Thinking" }].map((s) => (
                <div key={s.l} style={{ textAlign: "center" }}>
                  <div style={{ color: "#fff", fontWeight: 700, fontSize: "17px", marginBottom: "4px", letterSpacing: "-0.02em" }}>{s.v}</div>
                  <div className="label" style={{ color: "rgba(240,244,255,0.25)" }}>{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          style={{ position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)", pointerEvents: "none" }} aria-hidden="true">
          <div style={{ width: "1px", height: "56px", background: "linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)" }} />
        </motion.div>
      </section>

      {/* ══ WHAT WE BUILD ════════════════════════════════ */}
      <section className="section-pad">
        <div className="container-xl">
          <motion.div {...reveal()} style={{ marginBottom: "64px" }}>
            <div className="section-tag">What Ignara AI Is Building</div>
            <h2 className="display-lg" style={{ color: "#fff", maxWidth: "520px" }}>Infrastructure for the<br />AI-native era</h2>
          </motion.div>
          <div className="grid-2">
            {builds.map((c, i) => (
              <motion.div key={c.title} {...reveal(i * 0.07)} style={card}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.13)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)"; }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: c.bg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                  <c.icon size={18} style={{ color: c.color }} aria-hidden="true" />
                </div>
                <p className="label" style={{ color: c.color + "88", marginBottom: "6px" }}>{c.sub}</p>
                <h3 style={{ color: "#fff", fontWeight: 600, fontSize: "17px", marginBottom: "12px", letterSpacing: "-0.02em" }}>{c.title}</h3>
                <p className="body-sm" style={{ color: "rgba(240,244,255,0.5)" }}>{c.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TECHNOLOGY FOCUS ═════════════════════════════ */}
      <section className="section-pad" style={{ background: "rgba(0,0,0,0.25)" }}>
        <div className="container-xl">
          <motion.div {...reveal()} style={{ marginBottom: "64px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "end" }}>
            <div>
              <div className="section-tag">Technology Focus</div>
              <h2 className="display-lg" style={{ color: "#fff" }}>Active systems<br />in development</h2>
            </div>
            <p className="body-md" style={{ color: "rgba(240,244,255,0.5)" }}>
              We build and ship real systems. Every research direction produces runnable artifacts with reproducible benchmarks — not whitepapers.
            </p>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1px", background: "rgba(255,255,255,0.07)", borderRadius: "16px", overflow: "hidden" }}>
            {techFocus.map((t, i) => (
              <motion.div key={t.title} {...reveal(i * 0.07)}
                style={{ padding: "36px", background: "var(--bg-1)", transition: "background 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--bg-2)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--bg-1)"; }}>
                <t.icon size={18} style={{ color: "#06b6d4", marginBottom: "20px" }} aria-hidden="true" />
                <h3 style={{ color: "#fff", fontWeight: 600, fontSize: "15px", marginBottom: "10px", letterSpacing: "-0.01em" }}>{t.title}</h3>
                <p className="body-sm" style={{ color: "rgba(240,244,255,0.5)" }}>{t.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ VISION TIMELINE ══════════════════════════════ */}
      <section className="section-pad">
        <div className="container-xl">
          <motion.div {...reveal()} style={{ marginBottom: "64px" }}>
            <div className="section-tag">Vision Timeline</div>
            <h2 className="display-lg" style={{ color: "#fff" }}>Where we are going</h2>
          </motion.div>
          <div style={{ position: "relative" }}>
            <div aria-hidden="true" style={{ position: "absolute", left: "18px", top: "8px", bottom: "8px", width: "1px", background: "linear-gradient(to bottom, #2563eb, rgba(6,182,212,0.3), transparent)" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {timeline.map((t, i) => (
                <motion.div key={t.phase} {...reveal(i * 0.1)} style={{ paddingLeft: "56px", position: "relative" }}>
                  <div aria-hidden="true" style={{ position: "absolute", left: "10px", top: "6px", width: "18px", height: "18px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: t.active ? "#2563eb" : "rgba(255,255,255,0.07)", border: t.active ? "2px solid rgba(37,99,235,0.4)" : "1px solid rgba(255,255,255,0.12)", boxShadow: t.active ? "0 0 24px rgba(37,99,235,0.5)" : "none" }}>
                    {t.active && <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#fff" }} />}
                  </div>
                  <div style={{ ...card, background: t.active ? "rgba(37,99,235,0.06)" : "rgba(255,255,255,0.025)", border: t.active ? "1px solid rgba(37,99,235,0.18)" : "1px solid rgba(255,255,255,0.07)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                      <span className="label" style={{ padding: "3px 10px", borderRadius: "20px", background: t.active ? "rgba(37,99,235,0.15)" : "rgba(255,255,255,0.06)", color: t.active ? "#60a5fa" : "rgba(255,255,255,0.3)" }}>{t.phase}</span>
                      <span className="label" style={{ color: "rgba(255,255,255,0.25)" }}>{t.label}</span>
                    </div>
                    <h3 style={{ color: "#fff", fontWeight: 600, fontSize: "18px", marginBottom: "10px", letterSpacing: "-0.02em" }}>{t.title}</h3>
                    <p className="body-sm" style={{ color: "rgba(240,244,255,0.5)" }}>{t.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ ENGINEERING PRINCIPLES ═══════════════════════ */}
      <section className="section-pad" style={{ background: "rgba(0,0,0,0.2)" }}>
        <div className="container-xl">
          <motion.div {...reveal()} style={{ textAlign: "center", marginBottom: "64px" }}>
            <div className="section-tag" style={{ justifyContent: "center" }}>Engineering Principles</div>
            <h2 className="display-lg" style={{ color: "#fff" }}>Built on first principles</h2>
          </motion.div>
          <div className="grid-3">
            {principles.map((p, i) => (
              <motion.div key={p.t} {...reveal(i * 0.06)} style={card}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.13)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)"; }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(37,99,235,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                  <p.icon size={16} style={{ color: "#60a5fa" }} aria-hidden="true" />
                </div>
                <h3 style={{ color: "#fff", fontWeight: 600, fontSize: "15px", marginBottom: "10px", letterSpacing: "-0.01em" }}>{p.t}</h3>
                <p className="body-sm" style={{ color: "rgba(240,244,255,0.5)" }}>{p.b}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ RESEARCH PHILOSOPHY ══════════════════════════ */}
      <section className="section-pad">
        <div className="container-xl">
          <div style={{ ...card, padding: "64px 72px", position: "relative", overflow: "hidden" }}>
            <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 70% 80% at 100% 0%, rgba(37,99,235,0.07) 0%, transparent 60%)" }} />
            <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
              <motion.div {...reveal()}>
                <div className="section-tag">Research Philosophy</div>
                <h2 className="display-md" style={{ color: "#fff", marginBottom: "24px" }}>We build to learn.<br />We learn to build.</h2>
                <p className="body-md" style={{ color: "rgba(240,244,255,0.5)", marginBottom: "16px" }}>
                  At Ignara AI, research and engineering are not separate disciplines. Every exploratory project produces runnable artifacts with reproducible benchmarks. Every production system produces insights that feed back into our research agenda.
                </p>
                <p className="body-md" style={{ color: "rgba(240,244,255,0.5)" }}>
                  The highest-leverage advances come from teams willing to go deep on hard problems — memory hierarchy, data throughput, distributed coordination — with both systems rigor and scientific curiosity.
                </p>
              </motion.div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {["Long-term research over short-term optimization", "Infrastructure before applications", "Scalable intelligence as a design constraint", "Distributed systems as the default architecture", "Autonomous computing as the end goal"].map((item, i) => (
                  <motion.div key={item} {...reveal(i * 0.07)}
                    style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "14px 16px", borderRadius: "10px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                    <div aria-hidden="true" style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#06b6d4", flexShrink: 0, marginTop: "7px" }} />
                    <p className="body-sm" style={{ color: "rgba(240,244,255,0.65)" }}>{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FUTURE OF AI INFRASTRUCTURE ══════════════════ */}
      <section className="section-pad" style={{ background: "rgba(0,0,0,0.25)" }}>
        <div className="container-xl">
          <motion.div {...reveal()} style={{ marginBottom: "16px" }}>
            <div className="section-tag">Research Direction</div>
            <h2 className="display-lg" style={{ color: "#fff", maxWidth: "520px" }}>The future of AI infrastructure</h2>
          </motion.div>
          <motion.p {...reveal(0.08)} className="body-lg" style={{ color: "rgba(240,244,255,0.5)", maxWidth: "600px", marginBottom: "64px" }}>
            These are the infrastructure paradigms we believe will define the next decade of AI. We are researching and building toward them today.
          </motion.p>
          <div className="grid-3">
            {futureAI.map((f, i) => (
              <motion.div key={f.title} {...reveal(i * 0.07)} style={card}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.13)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)"; }}>
                <div aria-hidden="true" style={{ width: "32px", height: "1px", background: "linear-gradient(90deg, #2563eb, #06b6d4)", marginBottom: "24px" }} />
                <h3 style={{ color: "#fff", fontWeight: 600, fontSize: "15px", marginBottom: "12px", letterSpacing: "-0.01em" }}>{f.title}</h3>
                <p className="body-sm" style={{ color: "rgba(240,244,255,0.5)" }}>{f.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FOUNDER VISION ═══════════════════════════════ */}
      <section className="section-pad">
        <div className="container-md">
          <motion.div {...reveal()}>
            <div style={{ ...card, padding: "64px 72px", position: "relative", overflow: "hidden", border: "1px solid rgba(255,255,255,0.09)" }}>
              <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(6,182,212,0.05) 0%, transparent 60%)" }} />
              <div aria-hidden="true" style={{ position: "absolute", inset: 0, padding: "1px", borderRadius: "16px", background: "linear-gradient(135deg, rgba(37,99,235,0.3), rgba(6,182,212,0.2), transparent)", WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude", pointerEvents: "none" }} />
              <div style={{ position: "relative" }}>
                <div className="section-tag">Founder Vision</div>
                <blockquote className="display-md" style={{ color: "#fff", maxWidth: "680px", marginBottom: "40px", lineHeight: 1.3 }}>
                  &ldquo;The infrastructure layer is the highest-leverage point in the AI stack. Get the foundation right, and everything built on top of it benefits.&rdquo;
                </blockquote>
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "linear-gradient(135deg, #2563eb, #06b6d4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", fontWeight: 700, color: "#fff", boxShadow: "0 8px 24px rgba(37,99,235,0.3)", flexShrink: 0 }}>J</div>
                  <div>
                    <div style={{ color: "#fff", fontWeight: 600, fontSize: "15px" }}>Jagan E</div>
                    <div className="body-sm" style={{ color: "#06b6d4", marginTop: "2px" }}>Founder &amp; CEO, Ignara AI</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ CTA ══════════════════════════════════════════ */}
      <section className="section-pad">
        <div className="container-sm" style={{ textAlign: "center" }}>
          <motion.div {...reveal()}>
            <div className="section-tag" style={{ justifyContent: "center" }}>Contact</div>
            <h2 className="display-md" style={{ color: "#fff", marginBottom: "20px" }}>Let&apos;s build the future<br />of AI together</h2>
            <p className="body-lg" style={{ color: "rgba(240,244,255,0.5)", marginBottom: "48px", maxWidth: "480px", margin: "0 auto 48px" }}>
              We are open to conversations with investors, enterprise customers, research partners, and engineers who share our long-term perspective.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
              <Link href="/contact" style={btnPrimary}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#1d4ed8"; (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(37,99,235,0.35)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#2563eb"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
                Contact Ignara AI <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <Link href="/research" style={btnSecondary}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.22)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)"; }}>
                View Research
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
