"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { Database, Satellite, Brain, MemoryStick } from "lucide-react";

const areas = [
  {
    icon: Database,
    title: "Data Pipeline Acceleration",
    subtitle: "Ignara Fabric",
    description: "ML training is often bottlenecked at data loading, not compute. Ignara Fabric is a pipeline acceleration layer that dramatically reduces I/O wait time during training, enabling GPUs to stay saturated.",
    tags: ["PyTorch", "FastAPI", "Prometheus", "CXL"],
    status: "Active",
  },
  {
    icon: Satellite,
    title: "Space Intelligence",
    subtitle: "Ignara Space Intelligence (ISI)",
    description: "Real-time satellite tracking and space situational awareness powered by TLE ingestion, orbital propagation with sgp4, and AI-driven anomaly detection. Built for operational use.",
    tags: ["sgp4", "TLE", "Real-time", "Edge AI"],
    status: "Active",
  },
  {
    icon: MemoryStick,
    title: "Disaggregated Memory",
    subtitle: "CXL Memory Research",
    description: "Exploring Compute Express Link (CXL) as a vehicle for disaggregating memory from compute — enabling AI systems to scale memory independently and reduce stranded capacity.",
    tags: ["CXL", "Memory Fabric", "NUMA", "HBM"],
    status: "Exploratory",
  },
  {
    icon: Brain,
    title: "Inference Memory Orchestration",
    subtitle: "KV-Cache Optimization",
    description: "Research into software-defined memory orchestration for LLM inference — specifically KV-cache subsystem optimization, paged attention, and token memory efficiency at scale.",
    tags: ["LLM", "KV-Cache", "Inference", "Memory"],
    status: "Exploratory",
  },
];

const statusColor: Record<string, string> = {
  Active: "bg-green-500/15 text-green-400 border-green-500/20",
  Exploratory: "bg-blue-500/15 text-blue-400 border-blue-500/20",
};

export default function Research() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(37,99,235,0.1) 0%, transparent 70%)" }} />
        <div className="max-w-6xl mx-auto text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-4">Research</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              What we are <span className="gradient-text">building</span>
            </h1>
            <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
              Our research spans the full stack of AI infrastructure — from data pipelines and memory architecture to satellite intelligence and autonomous systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {areas.map((area, i) => (
              <Card key={area.title} delay={i * 0.1}>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                      <area.icon className="text-blue-400" size={20} aria-hidden="true" />
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${statusColor[area.status]}`}>
                      {area.status}
                    </span>
                  </div>
                  <p className="text-cyan-400 text-xs font-medium mb-1">{area.subtitle}</p>
                  <h3 className="text-white font-semibold text-lg mb-3">{area.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-6">{area.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {area.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-md bg-white/5 text-white/40 text-xs border border-white/8">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="glass rounded-3xl p-12 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ background: "radial-gradient(ellipse 60% 60% at 100% 100%, rgba(6,182,212,0.07) 0%, transparent 60%)" }} />
            <div className="relative max-w-2xl">
              <p className="text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-4">Research Philosophy</p>
              <h2 className="text-3xl font-bold text-white mb-6">We build to learn, and learn to build</h2>
              <p className="text-white/50 text-base leading-relaxed mb-4">
                At Ignara AI, research and engineering are not separate disciplines. Every exploratory project produces runnable artifacts. Every production system produces insights that feed back into research.
              </p>
              <p className="text-white/50 text-base leading-relaxed mb-8">
                We believe the most important advances in AI infrastructure will come from teams willing to go deep on hard problems — memory hierarchy, data throughput, distributed coordination — and bring both systems-level rigor and scientific curiosity to the work.
              </p>
              <Button href="/contact" icon>Collaborate With Us</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold text-white mb-4">Working on similar problems?</h2>
          <p className="text-white/40 mb-8">We&apos;re interested in research partnerships, collaborations, and conversations with peers in the field.</p>
          <Button href="/contact" size="lg" icon>Reach Out</Button>
        </motion.div>
      </section>
    </div>
  );
}
