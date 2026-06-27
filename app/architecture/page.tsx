"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

function ArchDiagram({ title, nodes, edges, note }: {
  title: string;
  nodes: { id: string; x: number; y: number; label: string; sub?: string; color: string; w?: number }[];
  edges: { from: string; to: string; label?: string }[];
  note?: string;
}) {
  const H = Math.max(...nodes.map(n => n.y)) + 70;
  const nodeMap = Object.fromEntries(nodes.map(n => [n.id, n]));
  return (
    <div style={{ marginBottom: "48px" }}>
      <h3 style={{ fontSize: "15px", fontWeight: 600, color: "#fff", marginBottom: "16px", letterSpacing: "-0.01em" }}>{title}</h3>
      <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "12px", padding: "24px", overflow: "hidden" }}>
        <svg width="100%" viewBox={`0 0 680 ${H}`} aria-label={`Architecture diagram: ${title}`}>
          <defs>
            <marker id={`arr-${title.replace(/\s/g,'-')}`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M2 1L8 5L2 9" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round"/>
            </marker>
          </defs>
          {edges.map((e, i) => {
            const from = nodeMap[e.from]; const to = nodeMap[e.to];
            if (!from || !to) return null;
            const x1 = from.x + (from.w ?? 120) / 2; const y1 = from.y + 28;
            const x2 = to.x + (to.w ?? 120) / 2; const y2 = to.y;
            return (
              <g key={i}>
                <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4 4" markerEnd={`url(#arr-${title.replace(/\s/g,'-')})`} />
                {e.label && <text x={(x1+x2)/2+4} y={(y1+y2)/2} fontSize="10" fill="rgba(240,244,255,0.3)" dominantBaseline="middle">{e.label}</text>}
              </g>
            );
          })}
          {nodes.map((n) => {
            const w = n.w ?? 120; const h = 50;
            return (
              <g key={n.id}>
                <rect x={n.x} y={n.y} width={w} height={h} rx="8" fill={n.color + "18"} stroke={n.color + "55"} strokeWidth="1"/>
                <text x={n.x + w/2} y={n.y + (n.sub ? 18 : 25)} textAnchor="middle" fontSize="12" fontWeight="600" fill="rgba(240,244,255,0.85)">{n.label}</text>
                {n.sub && <text x={n.x + w/2} y={n.y + 34} textAnchor="middle" fontSize="10" fill="rgba(240,244,255,0.35)">{n.sub}</text>}
              </g>
            );
          })}
        </svg>
        {note && <p style={{ fontSize: "11px", color: "rgba(240,244,255,0.28)", marginTop: "12px", fontStyle: "italic" }}>{note}</p>}
      </div>
    </div>
  );
}

const diagrams = [
  {
    title: "Control Plane Architecture",
    note: "Architecture concept — not a shipping implementation",
    nodes: [
      { id: "api", x: 250, y: 10, label: "API Server", sub: "Entry point", color: "#3b82f6", w: 140 },
      { id: "admit", x: 50, y: 100, label: "Admission", sub: "Controller", color: "#06b6d4", w: 120 },
      { id: "sched", x: 220, y: 100, label: "Scheduler", sub: "Job placement", color: "#3b82f6", w: 120 },
      { id: "resmgr", x: 390, y: 100, label: "Resource Mgr", sub: "Capacity tracking", color: "#818cf8", w: 130 },
      { id: "store", x: 50, y: 210, label: "State Store", sub: "Distributed KV", color: "#34d399", w: 120 },
      { id: "policy", x: 220, y: 210, label: "Policy Engine", sub: "Rules evaluation", color: "#f59e0b", w: 120 },
      { id: "reconcile", x: 390, y: 210, label: "Reconciler", sub: "Desired→Actual", color: "#818cf8", w: 130 },
    ],
    edges: [
      { from: "api", to: "admit" }, { from: "api", to: "sched" }, { from: "api", to: "resmgr" },
      { from: "admit", to: "store" }, { from: "sched", to: "policy" }, { from: "resmgr", to: "reconcile" },
      { from: "store", to: "reconcile", label: "state" },
    ],
  },
  {
    title: "Compute Fabric",
    note: "Conceptual diagram — represents design direction",
    nodes: [
      { id: "sched", x: 250, y: 10, label: "AI Scheduler", sub: "Gang scheduling", color: "#3b82f6", w: 140 },
      { id: "gpu0", x: 20, y: 110, label: "GPU Node 0", sub: "A100 × 8", color: "#06b6d4", w: 130 },
      { id: "gpu1", x: 180, y: 110, label: "GPU Node 1", sub: "A100 × 8", color: "#06b6d4", w: 130 },
      { id: "gpu2", x: 340, y: 110, label: "GPU Node 2", sub: "H100 × 8", color: "#818cf8", w: 130 },
      { id: "gpu3", x: 500, y: 110, label: "GPU Node 3", sub: "H100 × 8", color: "#818cf8", w: 130 },
      { id: "fabric", x: 180, y: 220, label: "Network Fabric", sub: "RDMA / RoCE", color: "#34d399", w: 280 },
    ],
    edges: [
      { from: "sched", to: "gpu0" }, { from: "sched", to: "gpu1" },
      { from: "sched", to: "gpu2" }, { from: "sched", to: "gpu3" },
      { from: "gpu0", to: "fabric" }, { from: "gpu1", to: "fabric" },
      { from: "gpu2", to: "fabric" }, { from: "gpu3", to: "fabric" },
    ],
  },
  {
    title: "Storage Fabric",
    note: "Tiered caching architecture — design concept",
    nodes: [
      { id: "train", x: 240, y: 10, label: "Training Job", sub: "Data loader", color: "#3b82f6", w: 140 },
      { id: "dram", x: 100, y: 110, label: "DRAM Cache", sub: "Hot path", color: "#34d399", w: 130 },
      { id: "nvme", x: 270, y: 110, label: "NVMe Cache", sub: "Warm path", color: "#06b6d4", w: 130 },
      { id: "remote", x: 190, y: 220, label: "Object Store", sub: "Durable / cold", color: "#818cf8", w: 240 },
      { id: "ckpt", x: 460, y: 110, label: "Checkpoint", sub: "Manager", color: "#f59e0b", w: 130 },
    ],
    edges: [
      { from: "train", to: "dram", label: "reads" },
      { from: "train", to: "nvme" },
      { from: "dram", to: "remote" },
      { from: "nvme", to: "remote" },
      { from: "train", to: "ckpt", label: "writes" },
      { from: "ckpt", to: "remote" },
    ],
  },
  {
    title: "Observability Architecture",
    note: "Telemetry pipeline design concept",
    nodes: [
      { id: "fabric", x: 180, y: 10, label: "Fabric Components", sub: "All subsystems", color: "#3b82f6", w: 280 },
      { id: "metrics", x: 20, y: 110, label: "Metrics", sub: "Prometheus", color: "#34d399", w: 120 },
      { id: "traces", x: 180, y: 110, label: "Traces", sub: "OTLP", color: "#06b6d4", w: 120 },
      { id: "logs", x: 340, y: 110, label: "Logs", sub: "Structured", color: "#818cf8", w: 120 },
      { id: "store", x: 80, y: 220, label: "Time Series DB", sub: "Long-term storage", color: "#34d399", w: 150 },
      { id: "trace_store", x: 260, y: 220, label: "Trace Store", sub: "Jaeger / Tempo", color: "#06b6d4", w: 150 },
      { id: "alert", x: 470, y: 160, label: "Alerting", sub: "Policy-based", color: "#f59e0b", w: 120 },
    ],
    edges: [
      { from: "fabric", to: "metrics" }, { from: "fabric", to: "traces" }, { from: "fabric", to: "logs" },
      { from: "metrics", to: "store" }, { from: "traces", to: "trace_store" },
      { from: "metrics", to: "alert" }, { from: "logs", to: "alert" },
    ],
  },
];

export default function Architecture() {
  return (
    <div style={{ minHeight: "100vh", paddingTop: "88px" }}>
      <section style={{ padding: "64px 0 48px", position: "relative", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(37,99,235,0.09) 0%, transparent 70%)" }} />
        <div className="container-xl" style={{ position: "relative" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "28px" }}>
              <Link href="/" style={{ fontSize: "13px", color: "rgba(240,244,255,0.3)", textDecoration: "none" }}>Ignara AI</Link>
              <span style={{ color: "rgba(240,244,255,0.2)" }}>/</span>
              <Link href="/platform" style={{ fontSize: "13px", color: "rgba(240,244,255,0.3)", textDecoration: "none" }}>Platform</Link>
              <span style={{ color: "rgba(240,244,255,0.2)" }}>/</span>
              <span style={{ fontSize: "13px", color: "rgba(240,244,255,0.6)" }}>Architecture</span>
            </div>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "7px", padding: "5px 14px", borderRadius: "20px", background: "rgba(37,99,235,0.12)", border: "1px solid rgba(37,99,235,0.25)", color: "#60a5fa", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "24px" }}>
              Architecture & Research
            </span>
            <h1 style={{ fontSize: "clamp(36px, 5.5vw, 64px)", fontWeight: 800, letterSpacing: "-0.04em", color: "#fff", marginBottom: "20px", lineHeight: 1.05 }}>System Architecture</h1>
            <p style={{ fontSize: "17px", lineHeight: 1.7, color: "rgba(240,244,255,0.5)", maxWidth: "580px" }}>
              Technical architecture diagrams for the Ignara Fabric platform. These represent current architectural thinking, not shipping implementations.
            </p>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: "48px 0 96px" }}>
        <div className="container-xl">
          {diagrams.map((d, i) => (
            <motion.div key={d.title} {...reveal(i * 0.08)}>
              <ArchDiagram {...d} />
            </motion.div>
          ))}
          <motion.div {...reveal(0.3)} style={{ padding: "20px 24px", borderRadius: "10px", background: "rgba(37,99,235,0.06)", border: "1px solid rgba(37,99,235,0.14)" }}>
            <p style={{ fontSize: "13px", color: "rgba(240,244,255,0.45)", margin: 0 }}>
              <strong style={{ color: "rgba(240,244,255,0.65)" }}>Note:</strong> These diagrams represent architecture concepts and design directions. Ignara Fabric is in the architecture and research phase. Implementation details will evolve as the platform matures.
              See <Link href="/docs/architecture-overview" style={{ color: "#60a5fa", textDecoration: "none" }}>Architecture Overview</Link> for written documentation.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
