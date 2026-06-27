"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";


const posts = [
  {
    slug: "why-ai-infrastructure-needs-a-fabric-layer",
    title: "Why AI Infrastructure Needs a Fabric Layer",
    date: "June 2026", readTime: "8 min read",
    tag: "Infrastructure",
    excerpt: "General-purpose infrastructure was not designed for AI. We explore the specific characteristics of AI workloads that require a new class of infrastructure platform — and what a Fabric layer should provide.",
  },
  {
    slug: "distributed-scheduling-for-ai-workloads",
    title: "Distributed Scheduling for AI Workloads",
    date: "June 2026", readTime: "10 min read",
    tag: "Scheduling",
    excerpt: "Gang scheduling, backfill, and preemption are scheduling primitives designed for the specific failure modes of distributed AI training. We examine the algorithms and tradeoffs involved in building a production AI scheduler.",
  },
  {
    slug: "observability-for-intelligent-systems",
    title: "Observability for Intelligent Systems",
    date: "May 2026", readTime: "7 min read",
    tag: "Observability",
    excerpt: "Infrastructure observability is a design constraint, not a feature. We describe how we approach telemetry design in Ignara Fabric — and why observability requires architectural commitment from day one.",
  },
  {
    slug: "infrastructure-principles",
    title: "Infrastructure Principles",
    date: "May 2026", readTime: "6 min read",
    tag: "Engineering",
    excerpt: "The six engineering principles that guide every design decision in the Ignara platform — and why each one exists. Infrastructure built on clear principles is infrastructure that can be reasoned about.",
  },
];

const tagColors: Record<string, { bg: string; color: string; border: string }> = {
  "Infrastructure": { bg: "rgba(37,99,235,0.1)", color: "#60a5fa", border: "rgba(37,99,235,0.22)" },
  "Scheduling":     { bg: "rgba(6,182,212,0.1)", color: "#22d3ee", border: "rgba(6,182,212,0.22)" },
  "Observability":  { bg: "rgba(52,211,153,0.1)", color: "#34d399", border: "rgba(52,211,153,0.22)" },
  "Engineering":    { bg: "rgba(129,140,248,0.1)", color: "#a5b4fc", border: "rgba(129,140,248,0.22)" },
};

export default function Blog() {
  return (
    <div style={{ minHeight: "100vh", paddingTop: "88px" }}>
      <section style={{ padding: "64px 0 48px", position: "relative", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(37,99,235,0.09) 0%, transparent 70%)" }} />
        <div className="container-xl" style={{ position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
            <Link href="/" style={{ fontSize: "13px", color: "rgba(240,244,255,0.3)", textDecoration: "none" }}>Ignara AI</Link>
            <span style={{ color: "rgba(240,244,255,0.2)" }}>/</span>
            <span style={{ fontSize: "13px", color: "rgba(240,244,255,0.6)" }}>Blog</span>
          </div>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, letterSpacing: "-0.04em", color: "#fff", marginBottom: "16px", lineHeight: 1.05 }}>Engineering Blog</h1>
          <p style={{ fontSize: "17px", lineHeight: 1.7, color: "rgba(240,244,255,0.5)", maxWidth: "520px" }}>
            Technical writing from the Ignara AI team on AI infrastructure, distributed systems, and platform engineering.
          </p>
        </div>
      </section>

      <section style={{ padding: "48px 0 96px" }}>
        <div className="container-xl">
          <div style={{ display: "flex", flexDirection: "column", gap: "4px", maxWidth: "800px" }}>
            {posts.map((post) => {
              const tc = tagColors[post.tag] ?? tagColors["Engineering"];
              return (
                <Link key={post.slug} href={`/blog/${post.slug}`}
                  style={{ display: "block", padding: "28px 32px", borderRadius: "14px", background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", textDecoration: "none", transition: "all 0.2s" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)"; (e.currentTarget as HTMLElement).style.transform = "translateX(4px)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.025)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)"; (e.currentTarget as HTMLElement).style.transform = "translateX(0)"; }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                    <span style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", padding: "3px 10px", borderRadius: "20px", background: tc.bg, border: `1px solid ${tc.border}`, color: tc.color }}>{post.tag}</span>
                    <span style={{ fontSize: "12px", color: "rgba(240,244,255,0.28)" }}>{post.date}</span>
                    <span style={{ fontSize: "12px", color: "rgba(240,244,255,0.2)" }}>·</span>
                    <span style={{ fontSize: "12px", color: "rgba(240,244,255,0.28)" }}>{post.readTime}</span>
                  </div>
                  <h2 style={{ fontSize: "18px", fontWeight: 700, letterSpacing: "-0.02em", color: "#fff", marginBottom: "10px", lineHeight: 1.3 }}>{post.title}</h2>
                  <p style={{ fontSize: "14px", lineHeight: 1.7, color: "rgba(240,244,255,0.45)", marginBottom: "16px" }}>{post.excerpt}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "13px", fontWeight: 500, color: "#60a5fa" }}>
                    Read article <ArrowRight size={12} aria-hidden="true" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
