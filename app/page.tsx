"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import {
  ArrowRight, Cpu, Network, FlaskConical, Layers,
  Shield, Zap, Globe2, Search, TrendingUp, Lock
} from "lucide-react";

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const buildingCards = [
  {
    icon: Cpu, title: "AI Infrastructure", subtitle: "Compute & Systems",
    body: "Fault-tolerant compute platforms designed from the ground up for AI workloads — built for throughput, latency, and scale.",
    color: "#3b82f6", bg: "rgba(59,130,246,0.08)",
  },
  {
    icon: Network, title: "Distributed Intelligence", subtitle: "Platform Architecture",
    body: "Coordination layers for distributed AI inference and training — enabling models to run across heterogeneous hardware at scale.",
    color: "#06b6d4", bg: "rgba(6,182,212,0.08)",
  },
  {
    icon: FlaskConical, title: "Research Systems", subtitle: "Applied Research",
    body: "Infrastructure tooling for ML research pipelines — data ingestion, versioning, reproducibility, and experiment orchestration.",
    color: "#8b5cf6", bg: "rgba(139,92,246,0.08)",
  },
  {
    icon: Layers, title: "Future Computing", subtitle: "Long-horizon R&D",
    body: "Exploratory work in disaggregated memory, CXL fabric, and autonomous infrastructure for the decade ahead.",
    color: "#10b981", bg: "rgba(16,185,129,0.08)",
  },
];

const principles = [
  { icon: Zap, title: "High Performance", body: "Systems tuned for throughput and latency — purpose-built for AI, not general-purpose." },
  { icon: Shield, title: "Reliability", body: "Fault tolerance and graceful degradation at every layer of the infrastructure stack." },
  { icon: Lock, title: "Security", body: "Security-first architecture with isolation, auditability, and least-privilege access patterns." },
  { icon: Search, title: "Research-driven", body: "Every design decision is grounded in systems research and empirical validation." },
  { icon: TrendingUp, title: "Long-term thinking", body: "We optimize for 10-year infrastructure bets, not 10-month product cycles." },
  { icon: Globe2, title: "Scalable by design", body: "Horizontal scaling from prototype to planetary deployment without re-architecture." },
];

const timeline = [
  {
    phase: "Today", label: "Foundation", active: true,
    title: "AI Infrastructure & Intelligent Systems",
    body: "Building Ignara Fabric — a data pipeline acceleration layer for ML training — and Ignara Space Intelligence for real-time satellite tracking and orbital analytics.",
  },
  {
    phase: "Next", label: "Expansion", active: false,
    title: "Distributed AI Platforms & Automation",
    body: "Extending the stack to support distributed inference, memory disaggregation via CXL, and automated orchestration of compute workloads across heterogeneous hardware.",
  },
  {
    phase: "Future", label: "Long horizon", active: false,
    title: "Advanced Computing & Autonomous Infrastructure",
    body: "Long-horizon research into self-managing compute fabric, autonomous infrastructure, and next-generation memory architectures for planetary-scale AI systems.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" style={{ paddingTop: "5rem" }}>
        <AnimatedBackground />
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ background: "radial-gradient(ellipse 90% 60% at 50% 38%, rgba(37,99,235,0.14) 0%, rgba(6,182,212,0.04) 45%, transparent 70%)" }} />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
          <div className="w-[560px] h-[560px] rounded-full" style={{ border: "1px solid rgba(37,99,235,0.12)" }} />
          <div className="absolute w-[780px] h-[780px] rounded-full" style={{ border: "1px solid rgba(6,182,212,0.06)" }} />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center py-24">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-8"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse-slow" aria-hidden="true" />
            <span className="text-xs font-medium tracking-wide" style={{ color: "rgba(240,244,255,0.5)" }}>
              AI Infrastructure · Intelligent Systems · Future Computing
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.08 }}
            className="font-bold tracking-tight leading-[1.02] mb-7"
            style={{ fontSize: "clamp(48px, 8vw, 88px)" }}
          >
            <span className="gradient-text">Building the Future</span>
            <br />
            <span className="text-white">of AI Infrastructure</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.16 }}
            className="text-[18px] md:text-[20px] leading-relaxed max-w-2xl mx-auto mb-10"
            style={{ color: "rgba(240,244,255,0.5)" }}
          >
            Ignara AI is engineering intelligent infrastructure for scalable AI systems,
            distributed computing, and the next generation of autonomous technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.24 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link href="/vision"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-[15px] transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/25">
              Explore Vision <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-white font-medium text-[15px] transition-all duration-200 hover:bg-white/6"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
              Contact Ignara AI
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-24 grid grid-cols-3 max-w-md mx-auto gap-8 pt-10"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
          >
            {[{ v: "AI-first", l: "Architecture" }, { v: "Research", l: "Driven" }, { v: "Long-term", l: "Systems thinking" }].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-white font-bold text-xl mb-1 tracking-tight">{s.v}</div>
                <div className="text-[11px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.25)" }}>{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2" aria-hidden="true">
          <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>
      </section>

      {/* WHAT WE'RE BUILDING */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...inView()} className="mb-16">
            <p className="text-cyan-400 text-[11px] font-semibold uppercase tracking-[0.14em] mb-4">What Ignara AI Is Building</p>
            <h2 className="font-bold text-white tracking-tight leading-tight max-w-xl" style={{ fontSize: "clamp(30px, 4vw, 44px)" }}>
              Infrastructure for the AI-native era
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {buildingCards.map((c, i) => (
              <motion.div key={c.title} {...inView(i * 0.08)}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="rounded-2xl p-7 transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-5" style={{ background: c.bg }}>
                  <c.icon size={18} style={{ color: c.color }} aria-hidden="true" />
                </div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.12em] mb-1" style={{ color: c.color + "99" }}>{c.subtitle}</div>
                <h3 className="text-white font-semibold text-[17px] mb-3">{c.title}</h3>
                <p className="text-[14px] leading-relaxed" style={{ color: "rgba(240,244,255,0.42)" }}>{c.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
          style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(37,99,235,0.07) 0%, transparent 70%)" }} />
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div {...inView()}>
            <p className="text-cyan-400 text-[11px] font-semibold uppercase tracking-[0.14em] mb-8">Mission</p>
            <blockquote className="font-semibold text-white leading-[1.35] mb-6" style={{ fontSize: "clamp(22px, 3.5vw, 36px)" }}>
              &ldquo;Intelligent infrastructure that powers the next generation of AI innovation — scalable, reliable, and built for the long term.&rdquo;
            </blockquote>
            <p className="text-[15px] leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(240,244,255,0.38)" }}>
              We build the foundational systems that AI companies, researchers, and engineers depend on — not the application layer, but the infrastructure beneath it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* VISION TIMELINE */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...inView()} className="mb-16">
            <p className="text-cyan-400 text-[11px] font-semibold uppercase tracking-[0.14em] mb-4">Vision Timeline</p>
            <h2 className="font-bold text-white tracking-tight" style={{ fontSize: "clamp(30px, 4vw, 44px)" }}>Where we are going</h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px"
              style={{ background: "linear-gradient(to bottom, rgba(37,99,235,0.5), rgba(6,182,212,0.2), transparent)" }} aria-hidden="true" />
            <div className="space-y-10">
              {timeline.map((t, i) => (
                <motion.div key={t.phase} {...inView(i * 0.12)} className="relative pl-16 md:pl-24">
                  <div className="absolute left-[18px] md:left-[26px] top-1 w-4 h-4 rounded-full flex items-center justify-center"
                    style={{
                      background: t.active ? "rgba(37,99,235,0.9)" : "rgba(255,255,255,0.08)",
                      border: t.active ? "2px solid rgba(37,99,235,0.5)" : "1px solid rgba(255,255,255,0.12)",
                      boxShadow: t.active ? "0 0 20px rgba(37,99,235,0.5)" : "none",
                    }} aria-hidden="true">
                    {t.active && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                  <div className="rounded-2xl p-7"
                    style={{
                      background: t.active ? "rgba(37,99,235,0.07)" : "rgba(255,255,255,0.025)",
                      border: t.active ? "1px solid rgba(37,99,235,0.2)" : "1px solid rgba(255,255,255,0.07)",
                    }}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-[0.14em] px-2.5 py-1 rounded-full"
                        style={{ background: t.active ? "rgba(37,99,235,0.2)" : "rgba(255,255,255,0.06)", color: t.active ? "#60a5fa" : "rgba(255,255,255,0.3)" }}>
                        {t.phase}
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.1em]" style={{ color: "rgba(255,255,255,0.25)" }}>{t.label}</span>
                    </div>
                    <h3 className="text-white font-semibold text-[18px] mb-3 tracking-tight">{t.title}</h3>
                    <p className="text-[14px] leading-relaxed" style={{ color: "rgba(240,244,255,0.42)" }}>{t.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ENGINEERING PRINCIPLES */}
      <section className="py-32 px-6" style={{ background: "rgba(0,0,0,0.2)" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div {...inView()} className="text-center mb-16">
            <p className="text-cyan-400 text-[11px] font-semibold uppercase tracking-[0.14em] mb-4">Engineering Principles</p>
            <h2 className="font-bold text-white tracking-tight" style={{ fontSize: "clamp(30px, 4vw, 44px)" }}>Built on first principles</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {principles.map((p, i) => (
              <motion.div key={p.title} {...inView(i * 0.06)}
                className="p-7 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 flex items-center justify-center mb-5">
                  <p.icon size={17} className="text-blue-400" aria-hidden="true" />
                </div>
                <h3 className="text-white font-semibold text-[16px] mb-2.5">{p.title}</h3>
                <p className="text-[13px] leading-relaxed" style={{ color: "rgba(240,244,255,0.4)" }}>{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...inView()} className="text-center mb-14">
            <p className="text-cyan-400 text-[11px] font-semibold uppercase tracking-[0.14em] mb-4">Leadership</p>
            <h2 className="text-[32px] font-bold text-white">Behind the mission</h2>
          </motion.div>
          <motion.div {...inView(0.1)} className="max-w-sm mx-auto">
            <div className="rounded-2xl p-8 text-center" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.09)" }}>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mx-auto mb-5 text-[26px] font-bold text-white shadow-lg shadow-blue-500/25">J</div>
              <h3 className="text-white font-semibold text-[18px] mb-1">Jagan E</h3>
              <p className="text-cyan-400 text-sm mb-4">Founder &amp; CEO</p>
              <p className="text-[13px] leading-relaxed" style={{ color: "rgba(240,244,255,0.4)" }}>
                Engineer and researcher building AI infrastructure systems across clinical research, satellite intelligence, and distributed computing.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div {...inView()}>
            <div className="rounded-3xl p-14 md:p-20 text-center relative overflow-hidden"
              style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
                style={{ background: "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(37,99,235,0.1) 0%, transparent 70%)" }} />
              <div className="relative">
                <h2 className="font-bold text-white mb-5 tracking-tight leading-tight" style={{ fontSize: "clamp(28px, 4vw, 40px)" }}>
                  Let&apos;s build the future<br />of AI together
                </h2>
                <p className="text-[15px] leading-relaxed mb-10 max-w-lg mx-auto" style={{ color: "rgba(240,244,255,0.42)" }}>
                  We&apos;re open to conversations with investors, enterprise customers, research partners, and engineers who share our long-term perspective.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link href="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-[15px] transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/25">
                    Contact Ignara AI <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                  <Link href="/research"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-medium text-[15px] transition-all duration-200"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    View Research
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
