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
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, delay, ease: "easeOut" as const },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
});

/* ─── DATA ──────────────────────────────────────────── */
const builds = [
  {
    icon: Cpu, title: "AI Infrastructure", sub: "Compute & Systems",
    body: "Fault-tolerant compute platforms engineered for AI workloads — optimized for throughput, latency, and horizontal scalability across heterogeneous hardware.",
    color: "#3b82f6", bg: "rgba(59,130,246,0.07)",
  },
  {
    icon: Network, title: "Distributed Intelligence", sub: "Platform Architecture",
    body: "Coordination systems for distributed AI inference and training across multi-node clusters — enabling models to operate at scale without centralized bottlenecks.",
    color: "#06b6d4", bg: "rgba(6,182,212,0.07)",
  },
  {
    icon: FlaskConical, title: "Research Systems", sub: "Applied Research",
    body: "Purpose-built tooling for ML research pipelines — data ingestion, experiment versioning, reproducibility guarantees, and orchestration at research scale.",
    color: "#818cf8", bg: "rgba(129,140,248,0.07)",
  },
  {
    icon: Layers, title: "Future Computing", sub: "Long-horizon R&D",
    body: "Exploratory research into CXL-based memory disaggregation, autonomous infrastructure, and compute architectures designed for the decade ahead.",
    color: "#34d399", bg: "rgba(52,211,153,0.07)",
  },
];

const techFocus = [
  { icon: Database, title: "Data Pipeline Acceleration", body: "Ignara Fabric eliminates I/O bottlenecks in ML training — keeping GPUs saturated and reducing time-to-model by an order of magnitude." },
  { icon: Satellite, title: "Space Intelligence Systems", body: "Real-time satellite tracking and orbital analytics via TLE ingestion, sgp4 propagation, and AI-driven anomaly detection for operational contexts." },
  { icon: Binary, title: "Memory Architecture Research", body: "Investigating CXL as a vehicle for disaggregating memory from compute — enabling independent memory scaling across large GPU clusters." },
  { icon: InfIcon, title: "Inference Optimization", body: "KV-cache subsystem research, paged attention mechanisms, and token memory efficiency work for LLM inference at deployment scale." },
];

const principles = [
  { icon: Zap, t: "High Performance", b: "Purpose-built for AI workloads, not adapted from general-purpose infrastructure. Every layer is optimized for throughput and latency." },
  { icon: Shield, t: "Reliability", b: "Fault tolerance and graceful degradation engineered at every layer — because production AI systems have zero tolerance for silent failure." },
  { icon: Lock, t: "Security", b: "Isolation, auditability, and least-privilege access patterns baked into the architecture — not applied as an afterthought." },
  { icon: Search, t: "Research-driven", b: "Every design decision is grounded in systems research and validated empirically. Benchmarks, not claims." },
  { icon: TrendingUp, t: "Long-term thinking", b: "We optimize for decade-scale infrastructure bets. The problems worth solving take time to solve correctly." },
  { icon: Globe2, t: "Scale by design", b: "Systems scale horizontally from single-node prototype to planetary deployment without requiring architectural rewrites." },
];

const timeline = [
  {
    phase: "Today", label: "Foundation", active: true,
    title: "AI Infrastructure & Intelligent Systems",
    body: "Ignara Fabric for ML pipeline acceleration. Ignara Space Intelligence for real-time orbital analytics. Foundation for the layer above.",
  },
  {
    phase: "Next", label: "Expansion", active: false,
    title: "Distributed AI Platforms & Automation",
    body: "Multi-node distributed inference. CXL memory disaggregation. Automated orchestration of heterogeneous compute at scale.",
  },
  {
    phase: "Future", label: "Long horizon", active: false,
    title: "Autonomous Infrastructure & Advanced Computing",
    body: "Self-managing compute fabric. Autonomous infrastructure. Next-generation memory architectures. Planetary-scale AI systems.",
  },
];

const futureAI = [
  { title: "AI Factories", body: "Vertically integrated compute facilities purpose-built for AI training and inference — where power, cooling, and networking are co-designed with the workload." },
  { title: "Distributed Inference", body: "Model serving disaggregated across geographic regions — bringing inference closer to data sources, reducing latency, and eliminating central failure points." },
  { title: "Autonomous Infrastructure", body: "Infrastructure that self-monitors, self-heals, and self-optimizes — reducing the operational burden of running large-scale AI systems." },
  { title: "Edge Intelligence", body: "AI inference running at the edge of the network — in satellites, sensors, and endpoints — without requiring round-trips to central compute." },
  { title: "Advanced Networking", body: "Ultra-low-latency interconnects for distributed AI — enabling model parallelism and gradient synchronization at network speed." },
  { title: "Space Computing", body: "Long-horizon research into orbital compute — AI systems that operate in space, processing data closer to where satellites collect it." },
];

/* ─── COMPONENT ─────────────────────────────────────── */
export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroO = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <section ref={heroRef} className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden">
        <AnimatedBackground />

        {/* Atmospheric depth layers */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
          style={{ background: "radial-gradient(ellipse 100% 65% at 50% 35%, rgba(37,99,235,0.13) 0%, rgba(6,182,212,0.03) 40%, transparent 65%)" }} />
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
          style={{ background: "radial-gradient(ellipse 60% 40% at 20% 80%, rgba(37,99,235,0.05) 0%, transparent 60%)" }} />

        <motion.div style={{ y: heroY, opacity: heroO }} className="relative max-w-5xl mx-auto px-6 text-center">
          <div style={{ paddingTop: "7rem", paddingBottom: "6rem" }}>
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-10"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: "var(--accent)" }} aria-hidden="true" />
              <span className="label" style={{ color: "var(--text-3)" }}>AI Infrastructure · Intelligent Systems · Future Computing</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="display-xl gt-white mb-6"
            >
              Building the Future<br />of AI Infrastructure
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
              className="body-lg max-w-2xl mx-auto mb-12"
              style={{ color: "var(--text-2)" }}
            >
              Ignara AI develops intelligent infrastructure, distributed AI systems,
              advanced computing platforms, and long-term research that power the next
              generation of artificial intelligence.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4 mb-24"
            >
              <Link href="/vision"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold text-[15px] transition-all duration-200"
                style={{ background: "var(--primary)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--primary-h)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(37,99,235,0.35)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--primary)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
              >
                Explore Our Vision <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-medium text-[15px] transition-all duration-200"
                style={{ background: "var(--surface-2)", border: "1px solid var(--border-2)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-2)"; }}
              >
                Contact Ignara AI
              </Link>
            </motion.div>

            {/* Stat row */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="grid grid-cols-3 max-w-sm mx-auto gap-6 pt-8"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              {[
                { v: "AI-first", l: "Architecture" },
                { v: "Research", l: "Driven" },
                { v: "Long-term", l: "Thinking" },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <div className="text-white font-bold text-lg mb-1 tracking-tight">{s.v}</div>
                  <div className="label" style={{ color: "var(--text-3)" }}>{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none" aria-hidden="true"
        >
          <div className="w-px h-14 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>
      </section>

      {/* ══════════ WHAT WE BUILD ══════════ */}
      <section className="py-36 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...reveal()} className="mb-20">
            <div className="section-tag">What Ignara AI Is Building</div>
            <h2 className="display-lg text-white max-w-2xl">
              Infrastructure for the<br />AI-native era
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {builds.map((c, i) => (
              <motion.div key={c.title} {...reveal(i * 0.07)}
                className="rounded-2xl p-8 card-hover"
                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-6" style={{ background: c.bg }}>
                  <c.icon size={19} style={{ color: c.color }} aria-hidden="true" />
                </div>
                <p className="label mb-2" style={{ color: c.color + "99" }}>{c.sub}</p>
                <h3 className="text-white font-semibold text-[18px] mb-3 tracking-tight">{c.title}</h3>
                <p className="body-sm" style={{ color: "var(--text-2)" }}>{c.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ TECHNOLOGY FOCUS ══════════ */}
      <section className="py-36 px-6" style={{ background: "rgba(0,0,0,0.25)" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div {...reveal()} className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <div>
              <div className="section-tag">Technology Focus</div>
              <h2 className="display-lg text-white">Active systems<br />in development</h2>
            </div>
            <p className="body-md" style={{ color: "var(--text-2)" }}>
              We build and ship real systems. Every research direction produces runnable artifacts with reproducible benchmarks — not whitepapers.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "var(--border)", borderRadius: "16px", overflow: "hidden" }}>
            {techFocus.map((t, i) => (
              <motion.div key={t.title} {...reveal(i * 0.07)}
                className="p-8 transition-colors duration-200"
                style={{ background: "var(--bg-1)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--bg-2)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--bg-1)"; }}
              >
                <t.icon size={18} className="mb-5" style={{ color: "var(--accent)" }} aria-hidden="true" />
                <h3 className="text-white font-semibold text-[16px] mb-2.5 tracking-tight">{t.title}</h3>
                <p className="body-sm" style={{ color: "var(--text-2)" }}>{t.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ VISION TIMELINE ══════════ */}
      <section className="py-36 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...reveal()} className="mb-20">
            <div className="section-tag">Vision Timeline</div>
            <h2 className="display-lg text-white">Where we are going</h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-5 md:left-7 top-2 bottom-2 w-px"
              style={{ background: "linear-gradient(to bottom, #2563eb, rgba(6,182,212,0.3), transparent)" }}
              aria-hidden="true" />
            <div className="space-y-8">
              {timeline.map((t, i) => (
                <motion.div key={t.phase} {...reveal(i * 0.1)} className="relative pl-14 md:pl-20">
                  <div className="absolute left-[14px] md:left-[22px] top-2 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{
                      background: t.active ? "#2563eb" : "var(--bg-2)",
                      border: t.active ? "2px solid rgba(37,99,235,0.4)" : "1px solid var(--border-2)",
                      boxShadow: t.active ? "0 0 24px rgba(37,99,235,0.5)" : "none",
                    }} aria-hidden="true">
                    {t.active && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                  <div className="rounded-2xl p-8"
                    style={{
                      background: t.active ? "rgba(37,99,235,0.06)" : "var(--surface)",
                      border: t.active ? "1px solid rgba(37,99,235,0.18)" : "1px solid var(--border)",
                    }}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="label px-3 py-1 rounded-full"
                        style={{
                          background: t.active ? "rgba(37,99,235,0.15)" : "var(--surface-2)",
                          color: t.active ? "#60a5fa" : "var(--text-3)",
                        }}>
                        {t.phase}
                      </span>
                      <span className="label" style={{ color: "var(--text-3)" }}>{t.label}</span>
                    </div>
                    <h3 className="text-white font-semibold text-[19px] mb-3 tracking-tight">{t.title}</h3>
                    <p className="body-sm" style={{ color: "var(--text-2)" }}>{t.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ ENGINEERING PRINCIPLES ══════════ */}
      <section className="py-36 px-6" style={{ background: "rgba(0,0,0,0.2)" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div {...reveal()} className="text-center mb-20">
            <div className="section-tag" style={{ justifyContent: "center" }}>Engineering Principles</div>
            <h2 className="display-lg text-white">Built on first principles</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {principles.map((p, i) => (
              <motion.div key={p.t} {...reveal(i * 0.06)}
                className="p-8 rounded-2xl card-hover"
                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(37,99,235,0.1)" }}>
                  <p.icon size={16} style={{ color: "#60a5fa" }} aria-hidden="true" />
                </div>
                <h3 className="text-white font-semibold text-[16px] mb-2.5 tracking-tight">{p.t}</h3>
                <p className="body-sm" style={{ color: "var(--text-2)" }}>{p.b}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ RESEARCH PHILOSOPHY ══════════ */}
      <section className="py-36 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl p-12 md:p-20 relative overflow-hidden"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
              style={{ background: "radial-gradient(ellipse 70% 80% at 100% 0%, rgba(37,99,235,0.07) 0%, transparent 60%)" }} />
            <motion.div {...reveal()} className="relative grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="section-tag">Research Philosophy</div>
                <h2 className="display-md text-white mb-6">We build to learn.<br />We learn to build.</h2>
                <p className="body-md mb-5" style={{ color: "var(--text-2)" }}>
                  At Ignara AI, research and engineering are not separate disciplines. Every exploratory project produces runnable artifacts with reproducible benchmarks. Every production system produces insights that feed back into our research agenda.
                </p>
                <p className="body-md" style={{ color: "var(--text-2)" }}>
                  We believe the highest-leverage infrastructure advances come from teams willing to go deep on hard problems — memory hierarchy, data throughput, distributed coordination — with both systems rigor and scientific curiosity.
                </p>
              </div>
              <div className="space-y-4">
                {["Long-term research over short-term optimization", "Infrastructure before applications", "Scalable intelligence as a design constraint", "Distributed systems as the default architecture", "Autonomous computing as the end goal"].map((item, i) => (
                  <motion.div key={item} {...reveal(i * 0.08)}
                    className="flex items-start gap-4 p-4 rounded-xl"
                    style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}>
                    <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: "var(--accent)" }} aria-hidden="true" />
                    <p className="body-sm text-white/70">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════ FUTURE OF AI INFRASTRUCTURE ══════════ */}
      <section className="py-36 px-6" style={{ background: "rgba(0,0,0,0.25)" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div {...reveal()} className="mb-6">
            <div className="section-tag">Research Direction</div>
            <h2 className="display-lg text-white max-w-xl">The future of AI infrastructure</h2>
          </motion.div>
          <motion.p {...reveal(0.08)} className="body-lg max-w-2xl mb-20" style={{ color: "var(--text-2)" }}>
            These are the infrastructure paradigms we believe will define the next decade of AI. We are researching and building toward them today.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {futureAI.map((f, i) => (
              <motion.div key={f.title} {...reveal(i * 0.07)}
                className="p-7 rounded-2xl card-hover"
                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                <div className="w-8 h-px mb-6" style={{ background: "linear-gradient(90deg, var(--primary), var(--accent))" }} aria-hidden="true" />
                <h3 className="text-white font-semibold text-[16px] mb-3 tracking-tight">{f.title}</h3>
                <p className="body-sm" style={{ color: "var(--text-2)" }}>{f.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FOUNDER VISION ══════════ */}
      <section className="py-36 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...reveal()}>
            <div className="rounded-3xl p-12 md:p-16 relative overflow-hidden gb"
              style={{ background: "var(--surface)" }}>
              <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
                style={{ background: "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(6,182,212,0.05) 0%, transparent 60%)" }} />
              <div className="relative">
                <div className="section-tag" style={{ justifyContent: "flex-start" }}>Founder Vision</div>
                <blockquote className="display-md text-white mb-10 max-w-2xl">
                  &ldquo;The infrastructure layer is the highest-leverage point in the AI stack. Get the foundation right, and everything built on top of it benefits.&rdquo;
                </blockquote>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-[22px] font-bold text-white flex-shrink-0"
                    style={{ boxShadow: "0 8px 24px rgba(37,99,235,0.3)" }}>J</div>
                  <div>
                    <div className="text-white font-semibold text-[16px]">Jagan E</div>
                    <div className="body-sm mt-0.5" style={{ color: "var(--accent)" }}>Founder &amp; CEO, Ignara AI</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="py-36 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...reveal()}>
            <div className="section-tag" style={{ justifyContent: "center" }}>Contact</div>
            <h2 className="display-md text-white mb-6">
              Let&apos;s build the future<br />of AI together
            </h2>
            <p className="body-lg mb-12 max-w-xl mx-auto" style={{ color: "var(--text-2)" }}>
              We are open to conversations with investors, enterprise customers, research partners, and engineers who share our long-term perspective on AI infrastructure.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-[15px] transition-all duration-200"
                style={{ background: "var(--primary)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--primary-h)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(37,99,235,0.35)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--primary)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
              >
                Contact Ignara AI <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <Link href="/research"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-medium text-[15px] transition-all duration-200"
                style={{ background: "var(--surface-2)", border: "1px solid var(--border-2)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-2)"; }}
              >
                View Research
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
