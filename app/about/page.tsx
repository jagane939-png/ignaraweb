"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Target, Eye, Users, Lightbulb } from "lucide-react";

const values = [
  { icon: Target, title: "Mission-Driven", description: "Every decision we make traces back to our mission: intelligent infrastructure for the next era of AI." },
  { icon: Eye, title: "Long-Term Thinking", description: "We optimize for decades, not quarters. The infrastructure problems worth solving take time to solve right." },
  { icon: Users, title: "Builder Culture", description: "We ship real, runnable systems. Prototypes are starting points, not deliverables." },
  { icon: Lightbulb, title: "Research at the Core", description: "Engineering excellence and scientific rigor are inseparable at Ignara AI." },
];

export default function About() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(37,99,235,0.1) 0%, transparent 70%)" }} />
        <div className="max-w-6xl mx-auto text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-4">About</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              We are <span className="gradient-text">Ignara AI</span>
            </h1>
            <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
              A startup building the foundational infrastructure that will power the next generation of artificial intelligence systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-4">Our Story</p>
            <h2 className="text-3xl font-bold text-white mb-6">Started with a conviction</h2>
            <div className="space-y-4 text-white/50 text-base leading-relaxed">
              <p>AI is undergoing a phase transition. The next decade will demand infrastructure that doesn&apos;t yet exist — systems designed from the ground up for distributed inference, autonomous operation, and planetary scale.</p>
              <p>Ignara AI was founded on the conviction that the infrastructure layer is the highest-leverage point in the AI stack. Get the foundation right, and everything built on top of it benefits.</p>
              <p>We are a team of engineers and researchers who have spent years at the intersection of systems software, AI infrastructure, and applied research. We build what we believe in.</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="glass rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ background: "radial-gradient(ellipse at top right, rgba(6,182,212,0.08) 0%, transparent 60%)" }} />
            <div className="relative space-y-6">
              {[{ label: "Founded", value: "2024" }, { label: "Focus", value: "AI Infrastructure" }, { label: "Stage", value: "Pre-launch" }, { label: "Headquarters", value: "United States" }].map((item) => (
                <div key={item.label} className="flex items-center justify-between py-3 border-b border-white/6 last:border-0">
                  <span className="text-white/40 text-sm">{item.label}</span>
                  <span className="text-white font-medium text-sm">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-14">
            <p className="text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-3">What We Stand For</p>
            <h2 className="text-3xl font-bold text-white">Our values</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <Card key={v.title} delay={i * 0.1}>
                <div className="p-8 flex gap-6">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <v.icon className="text-blue-400" size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base mb-2">{v.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed">{v.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="glass rounded-3xl p-12 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ background: "radial-gradient(ellipse 60% 60% at 0% 100%, rgba(37,99,235,0.08) 0%, transparent 60%)" }} />
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
              <div className="text-center md:text-left">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mx-auto md:mx-0 mb-4 text-3xl font-bold text-white">J</div>
                <h3 className="text-white font-bold text-xl mb-1">Jagan E</h3>
                <p className="text-cyan-400 text-sm">Founder &amp; CEO</p>
                <a href="mailto:jagan@ignara.ai" className="text-white/30 text-xs mt-2 block hover:text-white/60 transition-colors">jagan@ignara.ai</a>
              </div>
              <div className="md:col-span-2">
                <p className="text-white/50 text-base leading-relaxed mb-4">
                  Jagan brings a deep background in AI infrastructure, systems software, and applied research. Before founding Ignara AI, he built automation and AI systems at scale in the clinical research and life sciences space, where the stakes of reliability and performance are highest.
                </p>
                <p className="text-white/50 text-base leading-relaxed">
                  His work spans ML pipeline acceleration, satellite intelligence platforms, and FinOps tooling — all unified by a belief that infrastructure is the highest-leverage investment a technology organization can make.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold text-white mb-4">Interested in what we&apos;re building?</h2>
          <p className="text-white/40 mb-8">We&apos;re always open to conversations with the right people.</p>
          <Button href="/contact" size="lg" icon>Get in Touch</Button>
        </motion.div>
      </section>
    </div>
  );
}
