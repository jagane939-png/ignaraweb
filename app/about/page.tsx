"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Target, Eye, Cpu, Lightbulb } from "lucide-react";

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, delay, ease: "easeOut" as const },
});

const card: React.CSSProperties = {
  background: "rgba(255,255,255,0.025)",
  border: "1px solid rgba(255,255,255,0.07)",
  borderRadius: "16px",
  padding: "32px",
  transition: "transform 0.25s ease, border-color 0.25s ease",
};

const values = [
  { icon: Target, title: "Infrastructure over application", body: "Applications rise and fall. The infrastructure beneath them compounds. We build for the layer that endures across technology cycles." },
  { icon: Eye, title: "Long-term systems thinking", body: "We optimize for decade-scale infrastructure bets, not quarterly product cycles. The problems worth solving take time to solve correctly." },
  { icon: Cpu, title: "Rigorous engineering culture", body: "We ship real, runnable systems. Every prototype becomes production-quality code. Benchmarks, not claims." },
  { icon: Lightbulb, title: "Research at the foundation", body: "Scientific rigor and engineering excellence are inseparable at Ignara AI. We ground every decision in published research and empirical testing." },
];

export default function About() {
  return (
    <div style={{ minHeight: "100vh", paddingTop: "96px" }}>

      {/* Hero */}
      <section className="section-pad-sm" style={{ position: "relative", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(37,99,235,0.1) 0%, transparent 70%)" }} />
        <div className="container-xl" style={{ position: "relative" }}>
          <motion.div {...reveal()}>
            <div className="section-tag">About</div>
            <h1 className="display-xl" style={{ color: "#fff", marginBottom: "24px" }}>
              We are <span className="gt-white">Ignara AI</span>
            </h1>
            <p className="body-lg" style={{ color: "rgba(240,244,255,0.5)", maxWidth: "600px" }}>
              An AI infrastructure company building the foundational systems that the next generation of AI requires — reliable, scalable, and research-driven.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-pad">
        <div className="container-xl">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>
            <motion.div {...reveal()}>
              <div className="section-tag">Our Story</div>
              <h2 className="display-md" style={{ color: "#fff", marginBottom: "24px" }}>Started with a conviction about infrastructure</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {[
                  "AI is undergoing a phase transition. The next decade will demand infrastructure that doesn't yet exist — systems designed from first principles for distributed inference, autonomous operation, and planetary scale.",
                  "Ignara AI was founded on the conviction that the infrastructure layer is the highest-leverage point in the AI stack. Get the foundation right, and everything built on top of it benefits. Get it wrong, and no amount of model quality compensates.",
                  "We build what we believe in: real, runnable systems with reproducible benchmarks and production-grade reliability.",
                ].map((p, i) => (
                  <p key={i} className="body-md" style={{ color: "rgba(240,244,255,0.5)" }}>{p}</p>
                ))}
              </div>
            </motion.div>

            <motion.div {...reveal(0.1)}>
              <div style={{ ...card, padding: "0" }}>
                {[
                  { label: "Founded", value: "2024" },
                  { label: "Focus", value: "AI Infrastructure" },
                  { label: "Stage", value: "Pre-launch" },
                  { label: "Location", value: "United States" },
                  { label: "General", value: "contact@ignara.ai" },
                  { label: "Founder", value: "jagan@ignara.ai" },
                ].map((item, i, arr) => (
                  <div key={item.label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 28px", borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                    <span className="body-sm" style={{ color: "rgba(240,244,255,0.35)" }}>{item.label}</span>
                    <span className="body-sm" style={{ color: "#fff", fontWeight: 500 }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad" style={{ background: "rgba(0,0,0,0.2)" }}>
        <div className="container-xl">
          <motion.div {...reveal()} style={{ marginBottom: "64px" }}>
            <div className="section-tag">What We Stand For</div>
            <h2 className="display-lg" style={{ color: "#fff" }}>Core principles</h2>
          </motion.div>
          <div className="grid-2">
            {values.map((v, i) => (
              <motion.div key={v.title} {...reveal(i * 0.08)} style={{ ...card, display: "flex", gap: "24px" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: "rgba(37,99,235,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <v.icon size={18} style={{ color: "#60a5fa" }} aria-hidden="true" />
                </div>
                <div>
                  <h3 style={{ color: "#fff", fontWeight: 600, fontSize: "15px", marginBottom: "8px", letterSpacing: "-0.01em" }}>{v.title}</h3>
                  <p className="body-sm" style={{ color: "rgba(240,244,255,0.5)" }}>{v.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section-pad">
        <div className="container-xl">
          <motion.div {...reveal()}>
            <div style={{ ...card, padding: "56px 64px", position: "relative", overflow: "hidden" }}>
              <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 60% 60% at 0% 100%, rgba(37,99,235,0.08) 0%, transparent 60%)" }} />
              <div style={{ position: "relative", display: "grid", gridTemplateColumns: "200px 1fr", gap: "48px", alignItems: "center" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ width: "72px", height: "72px", borderRadius: "16px", background: "linear-gradient(135deg, #2563eb, #06b6d4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px", fontWeight: 700, color: "#fff", margin: "0 auto 16px", boxShadow: "0 8px 24px rgba(37,99,235,0.3)" }}>J</div>
                  <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "18px", marginBottom: "4px" }}>Jagan E</h3>
                  <p className="body-sm" style={{ color: "#06b6d4", marginBottom: "6px" }}>Founder &amp; CEO</p>
                  <a href="mailto:jagan@ignara.ai" className="body-sm" style={{ color: "rgba(240,244,255,0.25)", textDecoration: "none" }}>jagan@ignara.ai</a>
                </div>
                <div>
                  <p className="body-md" style={{ color: "rgba(240,244,255,0.5)", marginBottom: "16px" }}>
                    Jagan brings a deep background in AI infrastructure, systems software, and applied research. He has built automation and AI systems in clinical research and life sciences, where reliability and accuracy have the highest stakes.
                  </p>
                  <p className="body-md" style={{ color: "rgba(240,244,255,0.5)" }}>
                    His work spans ML pipeline acceleration (Ignara Fabric), satellite intelligence platforms (Ignara Space Intelligence), and enterprise FinOps tooling — all unified by a belief that infrastructure is the highest-leverage investment any technology organization can make.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad" style={{ textAlign: "center" }}>
        <div className="container-sm">
          <motion.div {...reveal()}>
            <h2 className="display-md" style={{ color: "#fff", marginBottom: "16px" }}>Interested in what we&apos;re building?</h2>
            <p className="body-md" style={{ color: "rgba(240,244,255,0.45)", marginBottom: "40px" }}>We&apos;re open to conversations with engineers, investors, and potential partners.</p>
            <Link href="/contact"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 28px", borderRadius: "12px", background: "#2563eb", color: "#fff", fontWeight: 600, fontSize: "15px", textDecoration: "none", transition: "background 0.2s, box-shadow 0.2s" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#1d4ed8"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(37,99,235,0.35)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#2563eb"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
              Get in Touch <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
