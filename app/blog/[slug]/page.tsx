import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const POSTS: Record<string, { title: string; date: string; readTime: string; tag: string; content: { type: string; text?: string; items?: string[] }[] }> = {
  "why-ai-infrastructure-needs-a-fabric-layer": {
    title: "Why AI Infrastructure Needs a Fabric Layer",
    date: "June 2026", readTime: "8 min read", tag: "Infrastructure",
    content: [
      { type: "p", text: "The AI infrastructure stack has a problem. The tools available for running AI workloads at scale were largely designed for a different era of computing — one defined by stateless web services, relational databases, and batch jobs measured in seconds rather than days." },
      { type: "p", text: "The characteristics of AI workloads are fundamentally different. A distributed training job running across 512 GPUs has different scheduling requirements, storage access patterns, network usage, and failure modes than a web server handling HTTP requests. Adapting general-purpose infrastructure to these requirements is possible, but it is the wrong abstraction." },
      { type: "h2", text: "The characteristics that matter" },
      { type: "p", text: "AI workloads differ from traditional distributed systems workloads in several important ways:" },
      { type: "list", items: [
        "Gang scheduling requirements — distributed training jobs must start all worker processes simultaneously, or they waste the resources allocated to them",
        "Storage I/O sensitivity — GPU utilization collapses when data loading cannot keep pace with the training loop; this is a systems problem, not a model problem",
        "Collective communication patterns — gradient synchronization generates all-to-all communication that saturates networks in ways that east-west service traffic does not",
        "Long-running job semantics — training jobs run for hours or days, creating different failure recovery and preemption requirements than stateless services",
        "Resource fragmentation — GPU clusters fragment badly under naive bin-packing schedulers, leaving significant capacity stranded",
      ]},
      { type: "h2", text: "What Kubernetes gives you" },
      { type: "p", text: "Kubernetes was designed for stateless, horizontally scalable services. It handles container lifecycle, service discovery, and basic resource management well. For these use cases, it is an excellent tool." },
      { type: "p", text: "For AI workloads, it provides the wrong primitives. The scheduler does not understand gang scheduling. The storage system was not designed for the sequential read patterns of training pipelines. There is no native concept of collective communication." },
      { type: "p", text: "The result is a significant engineering effort to layer AI-specific semantics on top of Kubernetes primitives — one that every organization running AI at scale repeats independently." },
      { type: "h2", text: "What a Fabric layer provides" },
      { type: "p", text: "A Fabric layer sits between physical infrastructure and the AI frameworks, models, and applications that run on top. It provides the infrastructure primitives that AI workloads actually need:" },
      { type: "list", items: [
        "A scheduler that understands gang scheduling, backfill, and priority preemption for long-running jobs",
        "A storage layer that co-locates data with compute and prefetches training shards to eliminate GPU starvation",
        "Network primitives tuned for collective communication workloads",
        "An observability layer that makes GPU utilization, memory pressure, and job lifecycle visible",
        "A security model designed for multi-tenant AI compute",
      ]},
      { type: "p", text: "This is what Ignara Fabric is designed to be. Not another Kubernetes distribution. Not a managed cloud service. A programmable infrastructure substrate built from first principles for AI workloads." },
      { type: "h2", text: "Where we are" },
      { type: "p", text: "Ignara Fabric is in the architecture and research phase. We are designing the system, conducting research on the hard technical problems, and producing reference designs. This article describes the problem we are solving — not a shipping product." },
    ],
  },
  "distributed-scheduling-for-ai-workloads": {
    title: "Distributed Scheduling for AI Workloads",
    date: "June 2026", readTime: "10 min read", tag: "Scheduling",
    content: [
      { type: "p", text: "Scheduling is the core decision-making system of any compute platform. For AI workloads, the scheduling problem has properties that require different algorithms than those used in general-purpose cluster schedulers." },
      { type: "h2", text: "The gang scheduling requirement" },
      { type: "p", text: "Distributed training jobs are not embarrassingly parallel. Each worker process communicates with every other worker process during gradient synchronization. If any worker fails to start, or if workers start at different times, the job cannot make progress." },
      { type: "p", text: "This means distributed training jobs must be gang-scheduled — all required resources must be allocated atomically. The scheduler must either commit resources for all workers simultaneously, or not commit at all." },
      { type: "p", text: "Gang scheduling creates a tension with cluster utilization. In a cluster with fragmented resources, a large job may not be schedulable even when total available capacity exceeds the job's requirements. The resources exist, but they cannot be assembled into a gang." },
      { type: "h2", text: "Backfill scheduling" },
      { type: "p", text: "Backfill scheduling addresses this tension by allowing smaller jobs to run in spaces that would otherwise be idle while waiting for a large job's resources to become available." },
      { type: "p", text: "The algorithm works as follows: when a large job is waiting in the queue, the scheduler identifies which jobs in the queue could complete before the large job's resources become available. Those jobs are admitted ahead of the large job — improving utilization without delaying the high-priority job." },
      { type: "p", text: "Backfill scheduling requires the scheduler to track the expected completion time of running jobs. For AI training workloads, this is non-trivial: job duration depends on the number of training steps, which may not be known at submission time. The scheduler must use heuristics or user-provided estimates." },
      { type: "h2", text: "Priority and preemption" },
      { type: "p", text: "In multi-tenant clusters, different teams and workloads have different priority levels. High-priority jobs should not be delayed by lower-priority work that happened to start first." },
      { type: "p", text: "Preemption allows the scheduler to evict lower-priority jobs to make room for higher-priority arrivals. For AI training, preemption is expensive — a preempted job must restart from its last checkpoint, losing potentially hours of compute." },
      { type: "p", text: "This creates a design tradeoff: preemption policies must balance responsiveness to high-priority arrivals against the cost of checkpointing and restart. Fabric's scheduler implements configurable preemption policies that allow organizations to tune this tradeoff for their workload patterns." },
      { type: "h2", text: "Fairshare scheduling" },
      { type: "p", text: "In shared research clusters, fairness between teams is as important as efficiency. Fairshare scheduling tracks historical resource consumption and biases future allocations toward teams that have consumed less than their fair share." },
      { type: "p", text: "Implementing fairshare correctly for AI workloads requires careful thought about how to account for the bursty nature of large training runs — a team running a week-long training job should not be penalized for the next month based on that single run." },
    ],
  },
  "observability-for-intelligent-systems": {
    title: "Observability for Intelligent Systems",
    date: "May 2026", readTime: "7 min read", tag: "Observability",
    content: [
      { type: "p", text: "Observability is a property of a system, not a feature added to it. A system is observable if you can understand its internal state from its external outputs. For infrastructure platforms, this means being able to diagnose any problem without modifying the system or deploying additional tooling." },
      { type: "h2", text: "Why observability requires architectural commitment" },
      { type: "p", text: "Observability cannot be bolted on after the fact. A system designed without observability in mind produces metrics that don't align with failure modes, logs that omit critical context, and traces that don't capture the right causal relationships." },
      { type: "p", text: "In Fabric, observability is a first-class design constraint. Every component is designed to emit structured telemetry. The telemetry schema is defined before the component is implemented, not after." },
      { type: "h2", text: "The three pillars" },
      { type: "p", text: "Metrics, traces, and logs each answer different questions about a system's behavior:" },
      { type: "list", items: [
        "Metrics answer: what is the system doing right now, and how does that compare to normal? GPU utilization, memory pressure, network throughput, and queue depths are examples of infrastructure metrics that matter for AI workloads",
        "Traces answer: what happened to this specific request or job? A trace of a training job submission through the scheduler and into execution reveals where latency occurs and where failures happen",
        "Logs answer: what was the system doing when this specific event occurred? Structured logs with consistent schemas make it possible to correlate events across components",
      ]},
      { type: "h2", text: "AI-specific observability" },
      { type: "p", text: "AI infrastructure has observability requirements beyond what general-purpose monitoring covers. GPU utilization is a poor proxy for training efficiency — a GPU can be 100% utilized and making no useful progress if it is waiting for data. Storage I/O rates, data pipeline throughput, and batch size must be visible alongside GPU metrics." },
      { type: "p", text: "Training convergence is another category of observability that infrastructure platforms must surface. Loss curves, gradient norms, and learning rate schedules are signals that belong in the same observability stack as CPU and network metrics." },
    ],
  },
  "infrastructure-principles": {
    title: "Infrastructure Principles",
    date: "May 2026", readTime: "6 min read", tag: "Engineering",
    content: [
      { type: "p", text: "Infrastructure built on explicit principles is infrastructure that can be reasoned about. When a design decision is difficult, clear principles provide the criteria for making it. When two approaches are both technically valid, principles provide the tiebreaker." },
      { type: "p", text: "These are the six principles that guide every design decision in the Ignara platform." },
      { type: "h2", text: "1. Infrastructure first" },
      { type: "p", text: "Fabric does not abstract infrastructure into a black box. It exposes infrastructure as a first-class concern — programmable, inspectable, and tunable. Engineers who run AI workloads in production need control over the systems those workloads run on. Abstractions that hide infrastructure state make systems harder to operate, not easier." },
      { type: "h2", text: "2. Composability" },
      { type: "p", text: "Platform components should be independently useful. An organization should be able to adopt the Fabric scheduler without adopting the Fabric storage layer. This composability requirement shapes component interfaces: they must be clean enough to use without the rest of the platform." },
      { type: "h2", text: "3. Observable by default" },
      { type: "p", text: "Every component emits structured telemetry at every level. Observability is a design constraint, specified before implementation, not a feature added afterward. Platform operators should never need to guess at the internal state of the system." },
      { type: "h2", text: "4. Hardware agnostic" },
      { type: "p", text: "Fabric abstracts underlying hardware through well-defined interfaces. The choice of hardware vendor is a configuration decision, not an architectural constraint. This is not easy to achieve — different accelerators have meaningfully different programming models — but it is necessary for a platform with a long operating life." },
      { type: "h2", text: "5. Research grounded" },
      { type: "p", text: "Every significant design decision is grounded in published systems research. We do not invent solutions to problems the research community has already studied. We build on existing work and contribute back where we can." },
      { type: "h2", text: "6. Operational simplicity" },
      { type: "p", text: "Infrastructure that requires constant human intervention does not scale. The platform should tend toward a stable operating state and take corrective action automatically when it drifts from that state. This does not mean hiding complexity — it means designing systems that manage their own complexity within defined policy bounds." },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = POSTS[params.slug];
  if (!post) notFound();

  const tagColors: Record<string, string> = {
    "Infrastructure": "#60a5fa", "Scheduling": "#22d3ee",
    "Observability": "#34d399", "Engineering": "#a5b4fc",
  };
  const tc = tagColors[post.tag] ?? "#60a5fa";

  return (
    <div style={{ minHeight: "100vh", paddingTop: "88px" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "48px 24px 96px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "32px" }}>
          <Link href="/blog" style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "rgba(240,244,255,0.35)", textDecoration: "none" }}>
            <ArrowLeft size={13} aria-hidden="true" /> Engineering Blog
          </Link>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px", flexWrap: "wrap" }}>
          <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: tc }}>{post.tag}</span>
          <span style={{ color: "rgba(240,244,255,0.2)", fontSize: "13px" }}>·</span>
          <span style={{ fontSize: "13px", color: "rgba(240,244,255,0.3)" }}>{post.date}</span>
          <span style={{ color: "rgba(240,244,255,0.2)", fontSize: "13px" }}>·</span>
          <span style={{ fontSize: "13px", color: "rgba(240,244,255,0.3)" }}>{post.readTime}</span>
        </div>

        <h1 style={{ fontSize: "clamp(28px, 4.5vw, 44px)", fontWeight: 800, letterSpacing: "-0.04em", color: "#fff", lineHeight: 1.1, marginBottom: "48px" }}>{post.title}</h1>

        <div>
          {post.content.map((block, i) => {
            if (block.type === "h2") return (
              <h2 key={i} style={{ fontSize: "20px", fontWeight: 700, letterSpacing: "-0.02em", color: "#fff", marginTop: "48px", marginBottom: "16px" }}>{block.text}</h2>
            );
            if (block.type === "p") return (
              <p key={i} style={{ fontSize: "16px", lineHeight: 1.85, color: "rgba(240,244,255,0.62)", marginBottom: "20px" }}>{block.text}</p>
            );
            if (block.type === "list") return (
              <ul key={i} style={{ margin: "0 0 24px", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                {block.items?.map((item, ii) => (
                  <li key={ii} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: tc, flexShrink: 0, marginTop: "10px", display: "inline-block" }} aria-hidden="true" />
                    <span style={{ fontSize: "15px", lineHeight: 1.75, color: "rgba(240,244,255,0.62)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            );
            return null;
          })}
        </div>

        <div style={{ marginTop: "64px", paddingTop: "32px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "14px", color: "rgba(240,244,255,0.4)", textDecoration: "none" }}>
            <ArrowLeft size={14} aria-hidden="true" /> Back to Engineering Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
