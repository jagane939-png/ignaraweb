"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/Button";

const principles = [
  { num: "01", title: "Infrastructure over application", body: "Applications rise and fall. The infrastructure that runs them compounds. We build for the layer that endures." },
  { num: "02", title: "Research and engineering unified", body: "The best infrastructure companies are also research companies. We don't separate scientific exploration from production systems." },
  { num: "03", title: "Distributed by default", body: "The future of AI is not a monolith. It is a fabric of cooperating systems running at the edge, in data centers, and everywhere in between." },
  { num: "04", title: "Autonomy as an outcome", body: "Infrastructure should manage itself. Our long-term roadmap is toward self-optimizing, autonomous compute fabric that requires minimal human intervention." },
  { num: "05", title: "Open where it matters", body: "The best infrastructure evolves through community. We commit to openness at the layers where interoperability creates the most leverage." },
];

const horizon = [
  { phase: "Near-term", title: "Ignara Fabric", description: "A data pipeline acceleration layer for ML training workloads — reducing I/O bottlenecks and accelerating time-to-model." },
  { phase: "Mid-term", title: "Space Intelligence", description: "Real-time satellite tracking and space situational awareness powered by AI inference at the edge." },
  { phase: "Long-term", title: "Autonomous Infrastructure", description: "Self-managing, distributed AI compute fabric that adapts to workload demands without human intervention." },
];

export default function Vision() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(6,182,212,0.08) 0%, transparent 70%)" }} />
        <div className="max-w-6xl mx-auto text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-4">Vision</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Where we are <span className="gradient-text">going</span>
            </h1>
            <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
              To become a global leader in AI infrastructure and advanced intelligent systems — building the foundational technology that enables the next era of human progress.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision statement */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="glass rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(37,99,235,0.08) 0%, transparent 70%)" }} />
            <div className="relative">
              <p className="text-white/20 text-xs uppercase tracking-widest mb-8">Our Vision</p>
              <p className="text-white text-2xl md:text-3xl font-medium leading-[1.4] max-w-3xl mx-auto">
                AI infrastructure should be as reliable as the internet, as programmable as software, and as invisible as electricity. That is what we are building toward.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-14">
            <p className="text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-3">Guiding Principles</p>
            <h2 className="text-3xl font-bold text-white">What shapes our decisions</h2>
          </motion.div>
          <div className="space-y-px bg-white/5 rounded-2xl overflow-hidden">
            {principles.map((p, i) => (
              <motion.div key={p.num} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }} className="bg-[#0B1220] p-8 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 group hover:bg-white/2 transition-colors">
                <div className="text-white/15 text-sm font-mono">{p.num}</div>
                <div className="md:col-span-3">
                  <h3 className="text-white font-semibold text-base mb-2">{p.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{p.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Horizon */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-14">
            <p className="text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-3">Roadmap</p>
            <h2 className="text-3xl font-bold text-white">Building in phases</h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/8" aria-hidden="true" />
            <div className="space-y-12">
              {horizon.map((h, i) => (
                <motion.div key={h.phase} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.5 }} className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                  <div className={`glass rounded-2xl p-8 ${i % 2 === 1 ? "md:col-start-2" : ""}`}>
                    <p className="text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-3">{h.phase}</p>
                    <h3 className="text-white font-bold text-xl mb-3">{h.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed">{h.description}</p>
                  </div>
                  <div className="hidden md:flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500 relative z-10 glow-primary" aria-hidden="true" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold text-white mb-4">Aligned on the mission?</h2>
          <p className="text-white/40 mb-8">We want to hear from builders, researchers, and investors who see what we see.</p>
          <Button href="/contact" size="lg" icon>Let&apos;s Talk</Button>
        </motion.div>
      </section>
    </div>
  );
}
