"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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

const principles = [
  { num: "01", title: "Infrastructure over application", body: "Applications rise and fall. The infrastructure that runs them compounds. We build for the layer that endures across technology cycles." },
  { num: "02", title: "Research and engineering unified", body: "The best infrastructure companies are also research companies. We don't separate scientific exploration from production systems." },
  { num: "03", title: "Distributed by default", body: "The future of AI is not a monolith. It is a fabric of cooperating systems running at the edge, in data centers, and everywhere in between." },
  { num: "04", title: "Autonomy as an outcome", body: "Infrastructure should manage itself. Our long-term roadmap is toward self-optimizing, autonomous compute fabric that requires minimal human intervention." },
  { num: "05", title: "Open where it matters", body: "The best infrastructure evolves through community. We commit to openness at the layers where interoperability creates the most leverage." },
];

const roadmap = [
  { phase: "Near-term", title: "Ignara Fabric", body: "A data pipeline acceleration layer for ML training workloads — reducing I/O bottlenecks and accelerating time-to-model.", dot: true },
  { phase: "Mid-term", title: "Space Intelligence", body: "Real-time satellite tracking and space situational awareness powered by AI inference at the edge.", dot: false },
  { phase: "Long-term", title: "Autonomous Infrastructure", body: "Self-managing, distributed AI compute fabric that adapts to workload demands without human intervention.", dot: false },
];

export default function Vision() {
  return (
    <div style={{ minHeight: "100vh", paddingTop: "96px" }}>

      {/* Hero */}
      <section className="section-pad-sm" style={{ position: "relative", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(6,182,212,0.08) 0%, transparent 70%)" }} />
        <div className="container-xl" style={{ position: "relative" }}>
          <motion.div {...reveal()}>
            <div className="section-tag">Vision</div>
            <h1 className="display-xl" style={{ color: "#fff", marginBottom: "24px" }}>
              Where we are <span className="gt-white">going</span>
            </h1>
            <p className="body-lg" style={{ color: "rgba(240,244,255,0.5)", maxWidth: "600px" }}>
              To become a global leader in AI infrastructure and advanced intelligent systems — building the foundational technology that enables the next era of human progress.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision statement */}
      <section className="section-pad">
        <div className="container-xl">
          <motion.div {...reveal()}>
            <div style={{ ...card, padding: "72px 80px", textAlign: "center", position: "relative", overflow: "hidden" }}>
              <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(37,99,235,0.08) 0%, transparent 70%)" }} />
              <div style={{ position: "relative" }}>
                <div className="section-tag" style={{ justifyContent: "center" }}>Our Vision</div>
                <p className="display-md" style={{ color: "#fff", maxWidth: "720px", margin: "0 auto", lineHeight: 1.4 }}>
                  AI infrastructure should be as reliable as the internet, as programmable as software, and as invisible as electricity. That is what we are building toward.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="section-pad" style={{ background: "rgba(0,0,0,0.2)" }}>
        <div className="container-xl">
          <motion.div {...reveal()} style={{ marginBottom: "64px" }}>
            <div className="section-tag">Guiding Principles</div>
            <h2 className="display-lg" style={{ color: "#fff" }}>What shapes our decisions</h2>
          </motion.div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(255,255,255,0.07)", borderRadius: "16px", overflow: "hidden" }}>
            {principles.map((p, i) => (
              <motion.div key={p.num} {...reveal(i * 0.07)}
                style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: "32px", padding: "32px 40px", background: "var(--bg-1)", transition: "background 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--bg-2)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--bg-1)"; }}>
                <div style={{ fontFamily: "monospace", fontSize: "13px", color: "rgba(255,255,255,0.15)", paddingTop: "2px" }}>{p.num}</div>
                <div>
                  <h3 style={{ color: "#fff", fontWeight: 600, fontSize: "16px", marginBottom: "8px", letterSpacing: "-0.01em" }}>{p.title}</h3>
                  <p className="body-sm" style={{ color: "rgba(240,244,255,0.5)" }}>{p.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="section-pad">
        <div className="container-xl">
          <motion.div {...reveal()} style={{ marginBottom: "64px" }}>
            <div className="section-tag">Roadmap</div>
            <h2 className="display-lg" style={{ color: "#fff" }}>Building in phases</h2>
          </motion.div>
          <div style={{ position: "relative" }}>
            <div aria-hidden="true" style={{ position: "absolute", left: "16px", top: "8px", bottom: "8px", width: "1px", background: "linear-gradient(to bottom, #2563eb, rgba(6,182,212,0.3), transparent)" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {roadmap.map((r, i) => (
                <motion.div key={r.phase} {...reveal(i * 0.1)} style={{ paddingLeft: "52px", position: "relative" }}>
                  <div aria-hidden="true" style={{ position: "absolute", left: "8px", top: "6px", width: "18px", height: "18px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: r.dot ? "#2563eb" : "rgba(255,255,255,0.07)", border: r.dot ? "2px solid rgba(37,99,235,0.4)" : "1px solid rgba(255,255,255,0.12)", boxShadow: r.dot ? "0 0 24px rgba(37,99,235,0.5)" : "none" }}>
                    {r.dot && <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#fff" }} />}
                  </div>
                  <div style={{ ...card, background: r.dot ? "rgba(37,99,235,0.06)" : "rgba(255,255,255,0.025)", border: r.dot ? "1px solid rgba(37,99,235,0.18)" : "1px solid rgba(255,255,255,0.07)" }}>
                    <p className="label" style={{ color: r.dot ? "#60a5fa" : "rgba(255,255,255,0.3)", marginBottom: "10px" }}>{r.phase}</p>
                    <h3 style={{ color: "#fff", fontWeight: 600, fontSize: "18px", marginBottom: "10px", letterSpacing: "-0.02em" }}>{r.title}</h3>
                    <p className="body-sm" style={{ color: "rgba(240,244,255,0.5)" }}>{r.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad" style={{ textAlign: "center" }}>
        <div className="container-sm">
          <motion.div {...reveal()}>
            <h2 className="display-md" style={{ color: "#fff", marginBottom: "16px" }}>Aligned on the mission?</h2>
            <p className="body-md" style={{ color: "rgba(240,244,255,0.45)", marginBottom: "40px" }}>We want to hear from builders, researchers, and investors who see what we see.</p>
            <Link href="/contact"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 28px", borderRadius: "12px", background: "#2563eb", color: "#fff", fontWeight: 600, fontSize: "15px", textDecoration: "none" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#1d4ed8"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(37,99,235,0.35)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#2563eb"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
              Let&apos;s Talk <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
