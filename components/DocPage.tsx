"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const SIDEBAR = [
  { group: "Getting Started", items: [
    { slug: "what-is-ignara-fabric", title: "What is Ignara Fabric?" },
    { slug: "architecture-overview", title: "Architecture Overview" },
    { slug: "design-principles", title: "Design Principles" },
  ]},
  { group: "Platform Components", items: [
    { slug: "control-plane", title: "Control Plane" },
    { slug: "scheduling", title: "Scheduling" },
    { slug: "storage", title: "Storage Fabric" },
    { slug: "networking", title: "Network Fabric" },
    { slug: "observability", title: "Observability" },
    { slug: "security", title: "Security Model" },
  ]},
  { group: "Research & Planning", items: [
    { slug: "roadmap-doc", title: "Development Roadmap" },
    { slug: "research-agenda", title: "Research Agenda" },
    { slug: "future-directions", title: "Future Directions" },
  ]},
];

const statusColors: Record<string, { bg: string; color: string; border: string }> = {
  "Architecture & Research": { bg: "rgba(37,99,235,0.1)", color: "#60a5fa", border: "rgba(37,99,235,0.22)" },
  "Research document": { bg: "rgba(6,182,212,0.1)", color: "#22d3ee", border: "rgba(6,182,212,0.22)" },
  "Planning document": { bg: "rgba(52,211,153,0.1)", color: "#34d399", border: "rgba(52,211,153,0.22)" },
  "Vision document": { bg: "rgba(245,158,11,0.08)", color: "#fcd34d", border: "rgba(245,158,11,0.2)" },
};

interface Block { type: string; text?: string; items?: string[] }
interface DocPageProps {
  slug: string;
  title: string;
  status: string;
  updated: string;
  toc: { id: string; label: string }[];
  content: Block[];
  prev?: { slug: string; title: string };
  next?: { slug: string; title: string };
}

export function DocPage({ slug, title, status, updated, toc, content, prev, next }: DocPageProps) {
  const sc = statusColors[status] ?? statusColors["Architecture & Research"];

  return (
    <div style={{ minHeight: "100vh", paddingTop: "88px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 24px 96px", display: "grid", gridTemplateColumns: "200px 1fr", gap: "56px", alignItems: "start" }}>

        {/* Sidebar */}
        <nav aria-label="Documentation navigation" style={{ position: "sticky", top: "104px" }}>
          <Link href="/docs" style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "rgba(240,244,255,0.35)", textDecoration: "none", marginBottom: "24px" }}>
            <ArrowLeft size={12} aria-hidden="true" /> All docs
          </Link>
          {SIDEBAR.map((group) => (
            <div key={group.group} style={{ marginBottom: "22px" }}>
              <p style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(240,244,255,0.22)", marginBottom: "8px" }}>{group.group}</p>
              {group.items.map((item) => {
                const active = item.slug === slug;
                return (
                  <Link key={item.slug} href={`/docs/${item.slug}`}
                    style={{ display: "block", padding: "6px 10px", borderRadius: "7px", fontSize: "13px", color: active ? "#fff" : "rgba(240,244,255,0.42)", background: active ? "rgba(37,99,235,0.12)" : "transparent", textDecoration: "none", marginBottom: "1px", fontWeight: active ? 500 : 400, borderLeft: active ? "2px solid #3b82f6" : "2px solid transparent" }}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>

        {/* Content */}
        <main>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "28px" }}>
            <Link href="/" style={{ fontSize: "12px", color: "rgba(240,244,255,0.28)", textDecoration: "none" }}>Ignara AI</Link>
            <span style={{ color: "rgba(240,244,255,0.2)", fontSize: "12px" }}>/</span>
            <Link href="/docs" style={{ fontSize: "12px", color: "rgba(240,244,255,0.28)", textDecoration: "none" }}>Docs</Link>
            <span style={{ color: "rgba(240,244,255,0.2)", fontSize: "12px" }}>/</span>
            <span style={{ fontSize: "12px", color: "rgba(240,244,255,0.55)" }}>{title}</span>
          </div>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px", flexWrap: "wrap" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", padding: "3px 10px", borderRadius: "20px", background: sc.bg, border: `1px solid ${sc.border}`, color: sc.color, fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>{status}</span>
              <span style={{ fontSize: "12px", color: "rgba(240,244,255,0.25)" }}>Updated {updated}</span>
            </div>
            <h1 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, letterSpacing: "-0.04em", color: "#fff", lineHeight: 1.1, marginBottom: "32px" }}>{title}</h1>
          </motion.div>

          {toc.length > 0 && (
            <div style={{ padding: "16px 20px", borderRadius: "10px", background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", marginBottom: "40px" }}>
              <p style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(240,244,255,0.3)", marginBottom: "10px" }}>On this page</p>
              {toc.map((t) => (
                <a key={t.id} href={`#${t.id}`} style={{ display: "block", fontSize: "13px", color: "rgba(240,244,255,0.45)", textDecoration: "none", padding: "3px 0", lineHeight: 1.6 }}>{t.label}</a>
              ))}
            </div>
          )}

          <div style={{ maxWidth: "660px" }}>
            {content.map((block, i) => {
              const id = block.type === "h2" ? block.text?.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") : undefined;
              if (block.type === "h2") return <h2 key={i} id={id} style={{ fontSize: "20px", fontWeight: 700, letterSpacing: "-0.025em", color: "#fff", marginTop: "44px", marginBottom: "14px" }}>{block.text}</h2>;
              if (block.type === "p") return <p key={i} style={{ fontSize: "15px", lineHeight: 1.8, color: "rgba(240,244,255,0.6)", marginBottom: "16px" }}>{block.text}</p>;
              if (block.type === "list") return (
                <ul key={i} style={{ margin: "0 0 20px", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                  {block.items?.map((item, ii) => (
                    <li key={ii} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#3b82f6", flexShrink: 0, marginTop: "9px", display: "inline-block" }} aria-hidden="true" />
                      <span style={{ fontSize: "15px", lineHeight: 1.7, color: "rgba(240,244,255,0.6)" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              );
              return null;
            })}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginTop: "56px", paddingTop: "28px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            {prev ? (
              <Link href={`/docs/${prev.slug}`} style={{ display: "flex", flexDirection: "column", gap: "4px", padding: "16px 20px", borderRadius: "10px", background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", textDecoration: "none" }}>
                <span style={{ fontSize: "11px", color: "rgba(240,244,255,0.3)", display: "flex", alignItems: "center", gap: "4px" }}><ArrowLeft size={11} aria-hidden="true" /> Previous</span>
                <span style={{ fontSize: "14px", fontWeight: 500, color: "#fff" }}>{prev.title}</span>
              </Link>
            ) : <div />}
            {next ? (
              <Link href={`/docs/${next.slug}`} style={{ display: "flex", flexDirection: "column", gap: "4px", padding: "16px 20px", borderRadius: "10px", background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", textDecoration: "none", textAlign: "right" }}>
                <span style={{ fontSize: "11px", color: "rgba(240,244,255,0.3)", display: "flex", alignItems: "center", gap: "4px", justifyContent: "flex-end" }}>Next <ArrowRight size={11} aria-hidden="true" /></span>
                <span style={{ fontSize: "14px", fontWeight: 500, color: "#fff" }}>{next.title}</span>
              </Link>
            ) : <div />}
          </div>
        </main>
      </div>
    </div>
  );
}
