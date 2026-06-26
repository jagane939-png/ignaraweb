"use client";

import { motion } from "framer-motion";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Cpu, FlaskConical, Network, Shield, Zap, Globe2 } from "lucide-react";

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  }),
};

const features = [
  {
    icon: Cpu,
    title: "AI Infrastructure",
    description: "Designing scalable, fault-tolerant computing platforms purpose-built for the demands of modern AI workloads at any scale.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: FlaskConical,
    title: "Research & Innovation",
    description: "Advancing AI architectures, memory subsystems, and distributed training methodologies that push the boundary of what's possible.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    icon: Network,
    title: "Future Computing",
    description: "Long-horizon research into autonomous systems, disaggregated memory, and distributed computing paradigms for the next decade.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
];

const pillars = [
  { icon: Zap, title: "Performance", description: "Infrastructure that doesn't compromise — built for peak throughput." },
  { icon: Shield, title: "Reliability", description: "Enterprise-grade resilience at the foundation of every system." },
  { icon: Globe2, title: "Scale", description: "Distributed by design, from single-node to planetary deployment." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <AnimatedBackground />
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 40%, rgba(37,99,235,0.12) 0%, transparent 70%)" }} />
        <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-24 text-center">
          <motion.div custom={0} initial="hidden" animate="visible" variants={fade} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-white/10 text-xs text-white/60 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse-glow" aria-hidden="true" />
            Next-generation AI infrastructure
          </motion.div>
          <motion.h1 custom={0.1} initial="hidden" animate="visible" variants={fade} className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
            <span className="gradient-text">Building the Future</span>
            <br />
            <span className="text-white">of AI Infrastructure</span>
          </motion.h1>
          <motion.p custom={0.2} initial="hidden" animate="visible" variants={fade} className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Ignara AI develops intelligent infrastructure, advanced AI systems, and next-generation computing platforms that enable the future of artificial intelligence.
          </motion.p>
          <motion.div custom={0.3} initial="hidden" animate="visible" variants={fade} className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/vision" size="lg" icon>Explore Our Vision</Button>
            <Button href="/contact" size="lg" variant="ghost">Contact Us</Button>
          </motion.div>
          <motion.div custom={0.5} initial="hidden" animate="visible" variants={fade} className="mt-20 grid grid-cols-3 max-w-lg mx-auto gap-8 border-t border-white/8 pt-10">
            {[{ value: "∞", label: "Scale" }, { value: "0ms", label: "Latency goal" }, { value: "AI-first", label: "Architecture" }].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/30 text-xs uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="absolute bottom-10 left-1/2 -translate-x-1/2" aria-hidden="true">
          <div className="w-[1px] h-10 bg-gradient-to-b from-white/20 to-transparent mx-auto" />
        </motion.div>
      </section>

      {/* Why Ignara AI */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-16">
            <p className="text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-3">Why Ignara AI</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Engineered for what comes next</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <Card key={f.title} delay={i * 0.1}>
                <div className="p-8">
                  <div className={`w-10 h-10 rounded-xl ${f.bg} flex items-center justify-center mb-6`}>
                    <f.icon className={f.color} size={20} aria-hidden="true" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-3">{f.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{f.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(37,99,235,0.07) 0%, transparent 70%)" }} />
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-6">Our Mission</p>
            <blockquote className="text-white text-2xl md:text-4xl font-medium leading-[1.3] mb-8">
              &ldquo;To create intelligent infrastructure that powers the next generation of AI innovation.&rdquo;
            </blockquote>
            <p className="text-white/40 text-base max-w-xl mx-auto">
              Every system we build, every line of research we pursue, is oriented toward a single goal — making advanced AI more accessible, reliable, and impactful.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
            {pillars.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} className="bg-[#0B1220] p-10">
                <p.icon className="text-blue-400 mb-4" size={22} aria-hidden="true" />
                <h3 className="text-white font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision teaser */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="glass rounded-3xl p-12 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ background: "radial-gradient(ellipse 70% 70% at 100% 0%, rgba(6,182,212,0.08) 0%, transparent 60%)" }} />
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-4">Our Vision</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">A global leader in AI infrastructure and intelligent systems</h2>
                <p className="text-white/40 text-base leading-relaxed mb-8">We are building the foundational layer that the next generation of AI companies will run on — composable, distributed, and built for longevity.</p>
                <Button href="/vision" icon>Read Our Vision</Button>
              </div>
              <div className="flex flex-col gap-4">
                {["Scalable AI infrastructure for global deployment", "Research-driven approach to emerging compute paradigms", "Long-term commitment to open and autonomous systems"].map((item, i) => (
                  <motion.div key={item} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} className="flex items-start gap-3 p-4 rounded-xl bg-white/4 border border-white/6">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400" aria-hidden="true" />
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
            <p className="text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-3">Leadership</p>
            <h2 className="text-3xl font-bold text-white">Behind the mission</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="max-w-sm mx-auto">
            <div className="glass rounded-2xl p-8 text-center gradient-border">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mx-auto mb-5 text-2xl font-bold text-white">J</div>
              <h3 className="text-white font-semibold text-lg mb-1">Jagan E</h3>
              <p className="text-cyan-400 text-sm mb-4">Founder &amp; CEO</p>
              <p className="text-white/40 text-sm leading-relaxed">Building the future of AI infrastructure.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="glass rounded-3xl p-14 relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ background: "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(37,99,235,0.1) 0%, transparent 70%)" }} />
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let&apos;s Build the Future Together</h2>
                <p className="text-white/40 mb-8 text-base">Reach out to explore partnerships, investment opportunities, or to learn more about what we&apos;re building.</p>
                <Button href="/contact" size="lg" icon>Contact Us</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
