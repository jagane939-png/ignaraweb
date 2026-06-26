"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Target, Eye, Cpu, Lightbulb } from "lucide-react";

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const values = [
  { icon: Target, title: "Infrastructure over application", body: "Applications rise and fall. The infrastructure beneath them compounds. We build for the layer that endures across technology cycles." },
  { icon: Eye, title: "Long-term systems thinking", body: "We optimize for decade-scale infrastructure bets, not quarterly product cycles. The problems worth solving take time to solve correctly." },
  { icon: Cpu, title: "Rigorous engineering culture", body: "We ship real, runnable systems. Every prototype becomes production-quality code. Benchmarks, not claims." },
  { icon: Lightbulb, title: "Research at the foundation", body: "Scientific rigor and engineering excellence are inseparable at Ignara AI. We ground every decision in published research and empirical testing." },
];

export default function About() {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
          style={{ background: "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(37,99,235,0.1) 0%, transparent 70%)" }} />
        <div className="max-w-6xl mx-auto relative">
          <motion.div {...inView()}>
            <p className="text-cyan-400 text-[11px] font-semibold uppercase tracking-[0.14em] mb-4">About</p>
            <h1 className="font-bold text-white mb-6 tracking-tight leading-[1.05]" style={{ fontSize: "clamp(40px, 6vw, 64px)" }}>
              We are <span className="gradient-text">Ignara AI</span>
            </h1>
            <p className="text-[18px] max-w-2xl leading-relaxed" style={{ color: "rgba(240,244,255,0.5)" }}>
              An AI infrastructure company building the foundational systems that the next generation of AI requires — reliable, scalable, and research-driven.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <motion.div {...inView()}>
            <p className="text-cyan-400 text-[11px] font-semibold uppercase tracking-[0.14em] mb-5">Our Story</p>
            <h2 className="text-[28px] font-bold text-white mb-6 tracking-tight">Started with a conviction about infrastructure</h2>
            <div className="space-y-5 text-[15px] leading-relaxed" style={{ color: "rgba(240,244,255,0.5)" }}>
              <p>AI is undergoing a phase transition. The next decade will demand infrastructure that doesn&apos;t yet exist — systems designed from first principles for distributed inference, autonomous operation, and planetary scale.</p>
              <p>Ignara AI was founded on the conviction that the infrastructure layer is the highest-leverage point in the AI stack. Get the foundation right, and everything built on top of it benefits. Get it wrong, and no amount of model quality compensates.</p>
              <p>We build what we believe in: real, runnable systems with reproducible benchmarks and production-grade reliability.</p>
            </div>
          </motion.div>
          <motion.div {...inView(0.1)}>
            <div className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.08)" }}>
              {[
                { label: "Founded", value: "2024" },
                { label: "Focus", value: "AI Infrastructure" },
                { label: "Stage", value: "Pre-launch" },
                { label: "Location", value: "United States" },
                { label: "Contact", value: "contact@ignara.ai" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between py-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <span className="text-sm" style={{ color: "rgba(240,244,255,0.35)" }}>{item.label}</span>
                  <span className="text-white font-medium text-sm">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...inView()} className="mb-14">
            <p className="text-cyan-400 text-[11px] font-semibold uppercase tracking-[0.14em] mb-4">What We Stand For</p>
            <h2 className="text-[28px] font-bold text-white tracking-tight">Core principles</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <motion.div key={v.title} {...inView(i * 0.08)}
                className="p-7 rounded-2xl flex gap-6"
                style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <v.icon size={18} className="text-blue-400" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-[16px] mb-2">{v.title}</h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: "rgba(240,244,255,0.4)" }}>{v.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...inView()} className="rounded-3xl p-12 md:p-16 relative overflow-hidden"
            style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
              style={{ background: "radial-gradient(ellipse 60% 60% at 0% 100%, rgba(37,99,235,0.08) 0%, transparent 60%)" }} />
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
              <div className="text-center md:text-left">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mx-auto md:mx-0 mb-4 text-3xl font-bold text-white shadow-lg shadow-blue-500/25">J</div>
                <h3 className="text-white font-bold text-xl mb-1">Jagan E</h3>
                <p className="text-cyan-400 text-sm mb-1">Founder &amp; CEO</p>
                <a href="mailto:jagan@ignara.ai" className="text-[12px] transition-colors" style={{ color: "rgba(240,244,255,0.25)" }}>jagan@ignara.ai</a>
              </div>
              <div className="md:col-span-2">
                <p className="text-[15px] leading-relaxed mb-4" style={{ color: "rgba(240,244,255,0.5)" }}>
                  Jagan brings a deep background in AI infrastructure, systems software, and applied research. He has built automation and AI systems in clinical research and life sciences, where reliability and accuracy have the highest stakes.
                </p>
                <p className="text-[15px] leading-relaxed" style={{ color: "rgba(240,244,255,0.5)" }}>
                  His work spans ML pipeline acceleration (Ignara Fabric), satellite intelligence platforms (Ignara Space Intelligence), and enterprise FinOps tooling — all unified by a belief that infrastructure is the highest-leverage investment any technology organization can make.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 text-center">
        <motion.div {...inView()}>
          <h2 className="text-[26px] font-bold text-white mb-4">Interested in what we&apos;re building?</h2>
          <p className="mb-8 text-[15px]" style={{ color: "rgba(240,244,255,0.4)" }}>We&apos;re open to conversations with engineers, investors, and potential partners.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-[15px] transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/25">
            Get in Touch <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
