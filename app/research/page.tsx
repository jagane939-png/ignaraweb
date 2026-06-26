"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Database, Satellite, MemoryStick, Brain } from "lucide-react";

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const areas = [
  {
    icon: Database, title: "Data Pipeline Acceleration", subtitle: "Ignara Fabric",
    body: "ML training is bottlenecked at data loading more often than compute. Ignara Fabric is a pipeline acceleration layer that eliminates I/O wait time during training, keeping GPUs saturated and reducing time-to-model.",
    tags: ["PyTorch", "FastAPI", "Prometheus", "Grafana", "Docker"],
    status: "Active",
  },
  {
    icon: Satellite, title: "Space Situational Awareness", subtitle: "Ignara Space Intelligence",
    body: "Real-time satellite tracking and orbital analytics powered by TLE ingestion, sgp4 propagation, and AI-driven anomaly detection. Built for operational use in defense, commercial, and research contexts.",
    tags: ["sgp4", "TLE", "FastAPI", "Real-time", "Edge AI"],
    status: "Active",
  },
  {
    icon: MemoryStick, title: "Disaggregated Memory", subtitle: "CXL Memory Research",
    body: "Exploring Compute Express Link (CXL) as a vehicle for disaggregating memory from compute — enabling AI systems to scale memory capacity independently and eliminate stranded DRAM in large GPU clusters.",
    tags: ["CXL", "Memory Fabric", "NUMA", "HBM"],
    status: "Exploratory",
  },
  {
    icon: Brain, title: "Inference Memory Orchestration", subtitle: "KV-Cache Optimization",
    body: "Research into software-defined memory orchestration for LLM inference — KV-cache subsystem optimization, paged attention mechanisms, and token memory efficiency at deployment scale.",
    tags: ["LLM", "KV-Cache", "Paged Attention", "Inference"],
    status: "Exploratory",
  },
];

const statusStyle: Record<string, { bg: string; color: string; border: string }> = {
  Active: { bg: "rgba(16,185,129,0.1)", color: "#34d399", border: "rgba(16,185,129,0.2)" },
  Exploratory: { bg: "rgba(37,99,235,0.1)", color: "#60a5fa", border: "rgba(37,99,235,0.2)" },
};

export default function Research() {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
          style={{ background: "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(37,99,235,0.1) 0%, transparent 70%)" }} />
        <div className="max-w-6xl mx-auto relative">
          <motion.div {...inView()}>
            <p className="text-cyan-400 text-[11px] font-semibold uppercase tracking-[0.14em] mb-4">Research</p>
            <h1 className="font-bold text-white mb-6 tracking-tight leading-[1.05]" style={{ fontSize: "clamp(40px, 6vw, 64px)" }}>
              What we are <span className="gradient-text">building</span>
            </h1>
            <p className="text-[18px] max-w-2xl leading-relaxed" style={{ color: "rgba(240,244,255,0.5)" }}>
              Our research spans the full AI infrastructure stack — from data pipelines and memory architecture to satellite intelligence and autonomous systems.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
            {areas.map((a, i) => {
              const s = statusStyle[a.status];
              return (
                <motion.div key={a.title} {...inView(i * 0.08)}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="rounded-2xl p-8 transition-all duration-300"
                  style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                      <a.icon size={19} className="text-blue-400" aria-hidden="true" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full"
                      style={{ background: s.bg, color: s.color, border: `1px solid ${s.border}` }}>
                      {a.status}
                    </span>
                  </div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] mb-1 text-cyan-400/70">{a.subtitle}</p>
                  <h3 className="text-white font-semibold text-[18px] mb-3 tracking-tight">{a.title}</h3>
                  <p className="text-[14px] leading-relaxed mb-6" style={{ color: "rgba(240,244,255,0.42)" }}>{a.body}</p>
                  <div className="flex flex-wrap gap-2">
                    {a.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-lg text-[11px]"
                        style={{ background: "rgba(255,255,255,0.04)", color: "rgba(240,244,255,0.35)", border: "1px solid rgba(255,255,255,0.07)" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div {...inView()} className="rounded-3xl p-12 md:p-16 relative overflow-hidden"
            style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
              style={{ background: "radial-gradient(ellipse 60% 60% at 100% 100%, rgba(6,182,212,0.07) 0%, transparent 60%)" }} />
            <div className="relative max-w-2xl">
              <p className="text-cyan-400 text-[11px] font-semibold uppercase tracking-[0.14em] mb-5">Research Philosophy</p>
              <h2 className="text-[28px] font-bold text-white mb-5 tracking-tight">We build to learn. We learn to build.</h2>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: "rgba(240,244,255,0.5)" }}>
                At Ignara AI, research and engineering are not separate disciplines. Every exploratory project produces runnable artifacts with reproducible benchmarks. Every production system produces insights that feed back into research.
              </p>
              <p className="text-[15px] leading-relaxed mb-8" style={{ color: "rgba(240,244,255,0.5)" }}>
                The most important advances in AI infrastructure come from teams willing to go deep on hard problems — memory hierarchy, data throughput, distributed coordination — and bring both systems-level rigor and scientific curiosity to the work.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-[14px] transition-all duration-200">
                Collaborate With Us <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
