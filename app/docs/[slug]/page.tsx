import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

const DOCS: Record<string, {
  title: string; status: string; updated: string;
  toc: { id: string; label: string }[];
  content: { type: string; text?: string; items?: string[]; code?: string; lang?: string }[];
  prev?: { slug: string; title: string }; next?: { slug: string; title: string };
}> = {
  "what-is-ignara-fabric": {
    title: "What is Ignara Fabric?",
    status: "Architecture & Research",
    updated: "June 2026",
    toc: [
      { id: "overview", label: "Overview" },
      { id: "motivation", label: "Motivation" },
      { id: "what-it-is-not", label: "What it is not" },
      { id: "core-components", label: "Core components" },
      { id: "current-status", label: "Current status" },
    ],
    content: [
      { type: "h2", text: "Overview" },
      { type: "p", text: "Ignara Fabric is an infrastructure platform being designed to serve as the programmable substrate for AI workloads. It aims to unify compute orchestration, storage management, network coordination, scheduling, observability, and security into a single cohesive operating layer." },
      { type: "p", text: "The goal is to provide the infrastructure layer that AI systems depend on — sitting between physical hardware and the frameworks, models, and applications that run on top." },
      { type: "h2", text: "Motivation" },
      { type: "p", text: "General-purpose infrastructure was not designed for AI. The characteristics of AI workloads differ significantly from the web services and batch jobs that shaped existing infrastructure tools:" },
      { type: "list", items: ["GPU clusters require workload-aware scheduling primitives not present in Kubernetes", "Training jobs have I/O patterns that starve general-purpose storage systems", "Distributed training requires network primitives tuned for collective communication", "Long-running jobs with frequent checkpoints need different failure recovery than stateless services", "Multi-tenant AI platforms require isolation models not well-served by existing tools"] },
      { type: "p", text: "Fabric is being designed from first principles to address these characteristics — not to adapt general-purpose infrastructure to AI use cases." },
      { type: "h2", text: "What it is not" },
      { type: "p", text: "Fabric is not a Kubernetes distribution, a cloud provider, or a managed service. It is a platform that sits below these concerns and provides the infrastructure primitives required to build reliable AI systems." },
      { type: "h2", text: "Core components" },
      { type: "list", items: ["AI Compute — workload-aware compute orchestration across GPU/CPU/accelerator pools", "Storage Fabric — distributed storage optimized for AI data flows and training pipelines", "Network Fabric — collective communication primitives for distributed training and inference", "AI Scheduler — gang scheduling, backfill, and priority management for AI jobs", "Inference Gateway — request routing, batching, and model versioning for serving", "Observability — structured telemetry across all platform components", "Security — identity, isolation, and access control for multi-tenant deployments"] },
      { type: "h2", text: "Current status" },
      { type: "p", text: "Ignara Fabric is in the architecture and research phase. The team is actively designing system components, conducting research on key technical problems, and producing reference designs. No production software is available." },
    ],
    next: { slug: "architecture-overview", title: "Architecture Overview" },
  },
  "architecture-overview": {
    title: "Architecture Overview",
    status: "Architecture & Research",
    updated: "June 2026",
    toc: [
      { id: "design-goals", label: "Design goals" },
      { id: "layered-architecture", label: "Layered architecture" },
      { id: "control-plane", label: "Control plane" },
      { id: "data-plane", label: "Data plane" },
      { id: "api-surface", label: "API surface" },
    ],
    content: [
      { type: "h2", text: "Design goals" },
      { type: "p", text: "The Ignara Fabric architecture is designed around four primary goals: performance, composability, observability, and operational simplicity. Every architectural decision is evaluated against these goals." },
      { type: "h2", text: "Layered architecture" },
      { type: "p", text: "Fabric is organized into two primary planes: the control plane and the data plane. The control plane manages platform state, configuration, and orchestration decisions. The data plane handles the actual movement of compute, storage, and network resources." },
      { type: "h2", text: "Control plane" },
      { type: "p", text: "The control plane is responsible for maintaining a consistent view of platform state and translating high-level workload specifications into concrete resource allocations. Key control plane components include the scheduler, resource manager, configuration store, and admission controller." },
      { type: "h2", text: "Data plane" },
      { type: "p", text: "The data plane implements the actual infrastructure primitives — GPU allocation, storage I/O, network routing, and inter-service communication. The data plane is designed for minimal overhead and maximum throughput." },
      { type: "h2", text: "API surface" },
      { type: "p", text: "Fabric exposes a structured API surface for workload submission, resource queries, observability access, and platform configuration. The API design prioritizes programmatic access and automation over human-facing interfaces." },
    ],
    prev: { slug: "what-is-ignara-fabric", title: "What is Ignara Fabric?" },
    next: { slug: "design-principles", title: "Design Principles" },
  },
  "design-principles": {
    title: "Design Principles",
    status: "Architecture & Research",
    updated: "June 2026",
    toc: [
      { id: "infrastructure-first", label: "Infrastructure first" },
      { id: "composability", label: "Composability" },
      { id: "observable-by-default", label: "Observable by default" },
      { id: "hardware-agnostic", label: "Hardware agnostic" },
      { id: "research-grounded", label: "Research grounded" },
      { id: "operational-simplicity", label: "Operational simplicity" },
    ],
    content: [
      { type: "h2", text: "Infrastructure first" },
      { type: "p", text: "Fabric does not abstract infrastructure into a black box. It exposes infrastructure as a first-class concern — programmable, inspectable, and tunable. Engineers working with AI infrastructure need control over the systems their workloads run on." },
      { type: "h2", text: "Composability" },
      { type: "p", text: "Platform components are independently useful and independently deployable. An organization can adopt the Fabric scheduler without adopting the Fabric storage layer. Composability ensures that Fabric meets organizations where they are rather than requiring wholesale adoption." },
      { type: "h2", text: "Observable by default" },
      { type: "p", text: "Observability is not a feature — it is a design constraint. Every Fabric component emits structured telemetry at every level. Platform operators should never need to guess at the internal state of the system." },
      { type: "h2", text: "Hardware agnostic" },
      { type: "p", text: "Fabric abstracts underlying hardware through well-defined interfaces. The platform supports NVIDIA, AMD, Intel, and custom accelerators through a consistent API. Hardware vendor selection is a configuration decision, not an architectural constraint." },
      { type: "h2", text: "Research grounded" },
      { type: "p", text: "Every significant design decision is grounded in published systems research. We do not invent solutions to problems that have been studied and solved. We build on the research community's work and contribute back where we can." },
      { type: "h2", text: "Operational simplicity" },
      { type: "p", text: "Infrastructure that requires constant human intervention does not scale. Fabric aims for self-healing, self-optimizing operation within defined policy bounds. The goal is to reduce operational burden without sacrificing control." },
    ],
    prev: { slug: "architecture-overview", title: "Architecture Overview" },
    next: { slug: "control-plane", title: "Control Plane" },
  },
  "control-plane": {
    title: "Control Plane",
    status: "Architecture & Research",
    updated: "June 2026",
    toc: [
      { id: "responsibilities", label: "Responsibilities" },
      { id: "components", label: "Components" },
      { id: "state-management", label: "State management" },
      { id: "admission-control", label: "Admission control" },
    ],
    content: [
      { type: "h2", text: "Responsibilities" },
      { type: "p", text: "The Fabric control plane is responsible for maintaining consistent platform state, processing resource requests, scheduling workloads, and enforcing policy. It is the authoritative source of truth for what is running where." },
      { type: "h2", text: "Components" },
      { type: "list", items: ["Resource Manager — tracks available compute, storage, and network capacity across the platform", "Scheduler — assigns workloads to resources based on requirements, affinity, and priority", "Admission Controller — validates and mutates workload specifications before scheduling", "Configuration Store — distributed, consistent store for platform configuration and state", "Policy Engine — evaluates resource requests against organizational policies"] },
      { type: "h2", text: "State management" },
      { type: "p", text: "The control plane maintains state using a distributed, consistent key-value store. State changes are applied through a reconciliation loop: the platform continuously compares desired state against actual state and applies changes to converge them." },
      { type: "h2", text: "Admission control" },
      { type: "p", text: "Before a workload reaches the scheduler, it passes through the admission controller. The admission controller validates resource requests, applies defaults, enforces quotas, and can mutate workload specifications based on platform policy." },
    ],
    prev: { slug: "design-principles", title: "Design Principles" },
    next: { slug: "scheduling", title: "Scheduling" },
  },
  "scheduling": {
    title: "Scheduling",
    status: "Architecture & Research",
    updated: "June 2026",
    toc: [
      { id: "ai-scheduling-challenges", label: "AI scheduling challenges" },
      { id: "gang-scheduling", label: "Gang scheduling" },
      { id: "backfill", label: "Backfill scheduling" },
      { id: "priority-and-preemption", label: "Priority and preemption" },
    ],
    content: [
      { type: "h2", text: "AI scheduling challenges" },
      { type: "p", text: "AI workloads present scheduling challenges not well-handled by general-purpose schedulers. Training jobs must start all required resources simultaneously (gang scheduling). Long-running jobs have different priority semantics than short batch jobs. GPU fragmentation is a major source of inefficiency in multi-tenant clusters." },
      { type: "h2", text: "Gang scheduling" },
      { type: "p", text: "Distributed training jobs require all worker processes to start simultaneously — a partially started job wastes the resources allocated to it. Fabric implements gang scheduling with admission control: a job is either fully admitted or not admitted at all." },
      { type: "h2", text: "Backfill scheduling" },
      { type: "p", text: "Backfill scheduling improves cluster utilization by allowing lower-priority jobs to run in resources that would otherwise be idle while waiting for a high-priority job to have sufficient resources. Fabric's scheduler implements backfill with configurable time bounds to prevent starvation." },
      { type: "h2", text: "Priority and preemption" },
      { type: "p", text: "Fabric supports multiple priority tiers with configurable preemption policies. Higher-priority workloads can preempt lower-priority workloads when resources are constrained. Preemption policies can be tuned to balance fairness, efficiency, and job completion guarantees." },
    ],
    prev: { slug: "control-plane", title: "Control Plane" },
    next: { slug: "storage", title: "Storage Fabric" },
  },
  "storage": {
    title: "Storage Fabric",
    status: "Architecture & Research",
    updated: "June 2026",
    toc: [
      { id: "ai-storage-requirements", label: "AI storage requirements" },
      { id: "architecture", label: "Architecture" },
      { id: "caching-tiers", label: "Caching tiers" },
      { id: "training-pipeline", label: "Training pipeline" },
    ],
    content: [
      { type: "h2", text: "AI storage requirements" },
      { type: "p", text: "AI training workloads have storage requirements that differ significantly from transactional or analytical workloads. Key characteristics include: high sequential read throughput (large batches of training data), large object sizes (model checkpoints, dataset shards), and sensitivity to read latency (GPU starvation from slow data loading)." },
      { type: "h2", text: "Architecture" },
      { type: "p", text: "The Fabric storage layer is organized as a distributed object store with a tiered caching architecture. Data is stored in a durable remote tier and cached locally on compute nodes using available NVMe and DRAM capacity." },
      { type: "h2", text: "Caching tiers" },
      { type: "list", items: ["Remote storage — durable, high-capacity object storage for dataset and checkpoint persistence", "NVMe cache — fast local SSD cache for frequently accessed data shards", "DRAM cache — in-memory cache for hot data paths and streaming prefetch buffers"] },
      { type: "h2", text: "Training pipeline" },
      { type: "p", text: "The storage layer includes a training-aware pipeline that prefetches data shards in the order they will be consumed by the training job. This eliminates GPU idle time from data loading and keeps compute utilization high throughout the training run." },
    ],
    prev: { slug: "scheduling", title: "Scheduling" },
    next: { slug: "networking", title: "Network Fabric" },
  },
  "networking": {
    title: "Network Fabric",
    status: "Architecture & Research",
    updated: "June 2026",
    toc: [
      { id: "ai-network-requirements", label: "AI network requirements" },
      { id: "collective-communication", label: "Collective communication" },
      { id: "bandwidth-management", label: "Bandwidth management" },
    ],
    content: [
      { type: "h2", text: "AI network requirements" },
      { type: "p", text: "Distributed training generates intensive all-to-all communication patterns — gradient synchronization, parameter broadcasting, and collective reductions — that place different demands on the network than traditional east-west service traffic." },
      { type: "h2", text: "Collective communication" },
      { type: "p", text: "Fabric provides platform-level support for collective communication primitives: AllReduce, AllGather, ReduceScatter, and Broadcast. These operations are optimized for the network topology of the underlying hardware cluster, minimizing communication time during distributed training." },
      { type: "h2", text: "Bandwidth management" },
      { type: "p", text: "Network bandwidth is a shared resource in multi-tenant clusters. Fabric implements bandwidth-aware job placement to co-locate communicating workers and bandwidth allocation policies to prevent training jobs from starving each other of network capacity." },
    ],
    prev: { slug: "storage", title: "Storage Fabric" },
    next: { slug: "observability", title: "Observability" },
  },
  "observability": {
    title: "Observability",
    status: "Architecture & Research",
    updated: "June 2026",
    toc: [
      { id: "philosophy", label: "Philosophy" },
      { id: "metrics", label: "Metrics" },
      { id: "traces", label: "Traces" },
      { id: "logs", label: "Logs" },
    ],
    content: [
      { type: "h2", text: "Philosophy" },
      { type: "p", text: "Fabric treats observability as a first-class design constraint. Every component emits structured telemetry at every level of the stack. Platform operators should be able to diagnose any issue without modifying the platform or deploying additional tooling." },
      { type: "h2", text: "Metrics" },
      { type: "p", text: "The platform exports structured metrics covering GPU utilization, memory pressure, network throughput, storage I/O, scheduler queue depth, and job lifecycle events. Metrics are emitted in a format compatible with Prometheus and compatible ingestion systems." },
      { type: "h2", text: "Traces" },
      { type: "p", text: "Distributed tracing covers the path of a workload from submission through scheduling, execution, and completion. Traces enable diagnosis of latency issues across platform component boundaries." },
      { type: "h2", text: "Logs" },
      { type: "p", text: "All platform components emit structured logs with consistent schemas. Log levels, retention, and aggregation are configurable. Platform logs are available for both real-time diagnosis and historical analysis." },
    ],
    prev: { slug: "networking", title: "Network Fabric" },
    next: { slug: "security", title: "Security Model" },
  },
  "security": {
    title: "Security Model",
    status: "Architecture & Research",
    updated: "June 2026",
    toc: [
      { id: "threat-model", label: "Threat model" },
      { id: "identity", label: "Identity" },
      { id: "isolation", label: "Isolation" },
      { id: "audit", label: "Audit" },
    ],
    content: [
      { type: "h2", text: "Threat model" },
      { type: "p", text: "Fabric is designed for multi-tenant environments where workloads from different teams, organizations, or trust levels share physical infrastructure. The security model assumes that workloads are not necessarily trusted and must be isolated from each other." },
      { type: "h2", text: "Identity" },
      { type: "p", text: "Every workload, service, and operator in Fabric has a verifiable identity. Identities are issued by the platform identity service and are short-lived, automatically rotated, and cryptographically verifiable. No long-lived credentials are used within the platform." },
      { type: "h2", text: "Isolation" },
      { type: "p", text: "Workload isolation is enforced at multiple levels: compute isolation through hardware virtualization and resource limits, network isolation through policy-enforced segmentation, and storage isolation through access controls and namespace separation." },
      { type: "h2", text: "Audit" },
      { type: "p", text: "All privileged operations on the platform are recorded in a tamper-evident audit log. Audit logs include the identity of the actor, the operation performed, the affected resources, and the timestamp. Audit logs are written to a separate, append-only store." },
    ],
    prev: { slug: "observability", title: "Observability" },
    next: { slug: "roadmap", title: "Development Roadmap" },
  },
  "roadmap": {
    title: "Development Roadmap",
    status: "Planning document",
    updated: "June 2026",
    toc: [
      { id: "current-phase", label: "Current phase" },
      { id: "next-milestones", label: "Next milestones" },
      { id: "future-work", label: "Future work" },
      { id: "not-on-roadmap", label: "Not on roadmap" },
    ],
    content: [
      { type: "h2", text: "Current phase" },
      { type: "p", text: "Ignara Fabric is in the architecture and research phase. Current work includes system design, component interface specification, and research on key technical problems (scheduling algorithms, storage I/O optimization, KV-cache memory management)." },
      { type: "h2", text: "Next milestones" },
      { type: "list", items: ["Complete control plane architecture specification", "Storage Fabric prototype (data pipeline acceleration)", "AI Scheduler reference implementation", "Observability pipeline design", "Integration test framework"] },
      { type: "h2", text: "Future work" },
      { type: "p", text: "Beyond the current phase, planned work includes: full platform integration, Inference Gateway development, multi-tenant support, production hardening, and developer preview program. These are goals, not commitments, and timelines are not published." },
      { type: "h2", text: "Not on roadmap" },
      { type: "p", text: "Ignara Cloud, Ignara Edge, and Ignara Orbit are future vision items. They are not on the current development roadmap. No dates, commitments, or feature specifications exist for these initiatives." },
    ],
    prev: { slug: "security", title: "Security Model" },
    next: { slug: "research-agenda", title: "Research Agenda" },
  },
  "research-agenda": {
    title: "Research Agenda",
    status: "Research document",
    updated: "June 2026",
    toc: [
      { id: "active-areas", label: "Active research areas" },
      { id: "memory", label: "Memory architecture" },
      { id: "scheduling-research", label: "Scheduling research" },
      { id: "storage-research", label: "Storage research" },
    ],
    content: [
      { type: "h2", text: "Active research areas" },
      { type: "p", text: "Ignara Labs is conducting research across five primary areas. Each area addresses a fundamental infrastructure challenge for AI workloads." },
      { type: "h2", text: "Memory architecture" },
      { type: "list", items: ["CXL-based memory disaggregation for AI inference clusters", "KV-cache subsystem design for LLM serving (paged attention, eviction policies)", "Memory tiering strategies for heterogeneous memory hierarchies", "Bandwidth-compute tradeoffs in disaggregated memory systems"] },
      { type: "h2", text: "Scheduling research" },
      { type: "list", items: ["Gang scheduling algorithms for large distributed training jobs", "Network-topology-aware placement for collective communication workloads", "Fairshare scheduling with preemption in multi-tenant GPU clusters", "Spot/preemptible workload admission control and checkpointing"] },
      { type: "h2", text: "Storage research" },
      { type: "list", items: ["Prefetching strategies for training data pipelines", "Distributed checkpoint protocols with fast recovery", "Storage tiering for training workloads (NVMe, DRAM, remote object store)", "I/O amplification patterns in large-scale model training"] },
    ],
    prev: { slug: "roadmap", title: "Development Roadmap" },
    next: { slug: "future-directions", title: "Future Directions" },
  },
  "future-directions": {
    title: "Future Directions",
    status: "Vision document",
    updated: "June 2026",
    toc: [
      { id: "autonomous-infrastructure", label: "Autonomous infrastructure" },
      { id: "edge-computing", label: "Edge computing" },
      { id: "space-computing", label: "Space computing" },
    ],
    content: [
      { type: "h2", text: "Autonomous infrastructure" },
      { type: "p", text: "The long-horizon goal for Fabric is infrastructure that manages itself — detecting anomalies, predicting failures, rebalancing workloads, and optimizing resource utilization without requiring constant human intervention. This is an architectural target, not a shipping feature." },
      { type: "h2", text: "Edge computing" },
      { type: "p", text: "Ignara Edge explores how AI infrastructure principles could extend to constrained edge environments — where latency, connectivity, and resource limits create a different set of infrastructure problems. This is a research direction without active development." },
      { type: "h2", text: "Space computing" },
      { type: "p", text: "Ignara Orbit is a long-horizon research exploration into resilient computing for extreme environments, including space-based infrastructure concepts. This is aspirational research. No active development exists. No timeline is implied." },
    ],
    prev: { slug: "research-agenda", title: "Research Agenda" },
  },
};

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
    { slug: "roadmap", title: "Development Roadmap" },
    { slug: "research-agenda", title: "Research Agenda" },
    { slug: "future-directions", title: "Future Directions" },
  ]},
];

export async function generateStaticParams() {
  return Object.keys(DOCS).map((slug) => ({ slug }));
}

export default function DocPage({ params }: { params: { slug: string } }) {
  const doc = DOCS[params.slug];
  if (!doc) notFound();

  const statusColors: Record<string, { bg: string; color: string; border: string }> = {
    "Architecture & Research": { bg: "rgba(37,99,235,0.1)", color: "#60a5fa", border: "rgba(37,99,235,0.22)" },
    "Research document": { bg: "rgba(6,182,212,0.1)", color: "#22d3ee", border: "rgba(6,182,212,0.22)" },
    "Planning document": { bg: "rgba(52,211,153,0.1)", color: "#34d399", border: "rgba(52,211,153,0.22)" },
    "Vision document": { bg: "rgba(245,158,11,0.08)", color: "#fcd34d", border: "rgba(245,158,11,0.2)" },
  };
  const sc = statusColors[doc.status] ?? statusColors["Architecture & Research"];

  return (
    <div style={{ minHeight: "100vh", paddingTop: "88px" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "48px 24px 96px", display: "grid", gridTemplateColumns: "220px 1fr", gap: "64px", alignItems: "start" }}>

        {/* Sidebar */}
        <nav aria-label="Documentation navigation" style={{ position: "sticky", top: "104px" }}>
          <Link href="/docs" style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "rgba(240,244,255,0.35)", textDecoration: "none", marginBottom: "24px" }}>
            <ArrowLeft size={12} aria-hidden="true" /> All docs
          </Link>
          {SIDEBAR.map((group) => (
            <div key={group.group} style={{ marginBottom: "24px" }}>
              <p style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(240,244,255,0.22)", marginBottom: "8px" }}>{group.group}</p>
              {group.items.map((item) => {
                const active = item.slug === params.slug;
                return (
                  <Link key={item.slug} href={`/docs/${item.slug}`}
                    style={{ display: "block", padding: "6px 10px", borderRadius: "7px", fontSize: "13px", color: active ? "#fff" : "rgba(240,244,255,0.42)", background: active ? "rgba(37,99,235,0.12)" : "transparent", textDecoration: "none", marginBottom: "1px", fontWeight: active ? 500 : 400, borderLeft: active ? "2px solid #3b82f6" : "2px solid transparent", transition: "all 0.15s" }}
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
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "32px" }}>
            <Link href="/" style={{ fontSize: "12px", color: "rgba(240,244,255,0.28)", textDecoration: "none" }}>Ignara AI</Link>
            <span style={{ color: "rgba(240,244,255,0.2)", fontSize: "12px" }}>/</span>
            <Link href="/docs" style={{ fontSize: "12px", color: "rgba(240,244,255,0.28)", textDecoration: "none" }}>Docs</Link>
            <span style={{ color: "rgba(240,244,255,0.2)", fontSize: "12px" }}>/</span>
            <span style={{ fontSize: "12px", color: "rgba(240,244,255,0.55)" }}>{doc.title}</span>
          </div>

          {/* Header */}
          <div style={{ marginBottom: "40px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px", flexWrap: "wrap" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", padding: "3px 10px", borderRadius: "20px", background: sc.bg, border: `1px solid ${sc.border}`, color: sc.color, fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                {doc.status}
              </span>
              <span style={{ fontSize: "12px", color: "rgba(240,244,255,0.25)" }}>Updated {doc.updated}</span>
            </div>
            <h1 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, letterSpacing: "-0.04em", color: "#fff", lineHeight: 1.1, marginBottom: "0" }}>{doc.title}</h1>
          </div>

          {/* TOC */}
          {doc.toc.length > 0 && (
            <div style={{ padding: "16px 20px", borderRadius: "10px", background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", marginBottom: "40px" }}>
              <p style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(240,244,255,0.3)", marginBottom: "10px" }}>On this page</p>
              {doc.toc.map((t) => (
                <a key={t.id} href={`#${t.id}`} style={{ display: "block", fontSize: "13px", color: "rgba(240,244,255,0.45)", textDecoration: "none", padding: "3px 0", lineHeight: 1.6 }}>{t.label}</a>
              ))}
            </div>
          )}

          {/* Doc content */}
          <div style={{ maxWidth: "680px" }}>
            {doc.content.map((block, i) => {
              const id = block.type === "h2" ? block.text?.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") : undefined;
              if (block.type === "h2") return (
                <h2 key={i} id={id} style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-0.025em", color: "#fff", marginTop: "48px", marginBottom: "16px", paddingTop: "8px" }}>{block.text}</h2>
              );
              if (block.type === "p") return (
                <p key={i} style={{ fontSize: "15px", lineHeight: 1.8, color: "rgba(240,244,255,0.6)", marginBottom: "16px" }}>{block.text}</p>
              );
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

          {/* Prev/Next */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginTop: "64px", paddingTop: "32px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            {doc.prev ? (
              <Link href={`/docs/${doc.prev.slug}`}
                style={{ display: "flex", flexDirection: "column", gap: "4px", padding: "16px 20px", borderRadius: "10px", background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", textDecoration: "none", transition: "all 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.14)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)"; }}
              >
                <span style={{ fontSize: "11px", color: "rgba(240,244,255,0.3)", display: "flex", alignItems: "center", gap: "4px" }}><ArrowLeft size={11} aria-hidden="true" /> Previous</span>
                <span style={{ fontSize: "14px", fontWeight: 500, color: "#fff" }}>{doc.prev.title}</span>
              </Link>
            ) : <div />}
            {doc.next ? (
              <Link href={`/docs/${doc.next.slug}`}
                style={{ display: "flex", flexDirection: "column", gap: "4px", padding: "16px 20px", borderRadius: "10px", background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", textDecoration: "none", textAlign: "right", transition: "all 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.14)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)"; }}
              >
                <span style={{ fontSize: "11px", color: "rgba(240,244,255,0.3)", display: "flex", alignItems: "center", gap: "4px", justifyContent: "flex-end" }}>Next <ArrowRight size={11} aria-hidden="true" /></span>
                <span style={{ fontSize: "14px", fontWeight: 500, color: "#fff" }}>{doc.next.title}</span>
              </Link>
            ) : <div />}
          </div>
        </main>
      </div>
    </div>
  );
}
