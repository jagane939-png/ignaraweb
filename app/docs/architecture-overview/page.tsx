import { DocPage } from "@/components/DocPage";
export default function Page() {
  return <DocPage slug="architecture-overview" title="Architecture Overview" status="Architecture & Research" updated="June 2026"
    toc={[{id:"design-goals",label:"Design goals"},{id:"layered-architecture",label:"Layered architecture"},{id:"control-plane",label:"Control plane"},{id:"data-plane",label:"Data plane"},{id:"api-surface",label:"API surface"}]}
    content={[
      {type:"h2",text:"Design goals"},
      {type:"p",text:"The Ignara Fabric architecture is designed around four primary goals: performance, composability, observability, and operational simplicity. Every architectural decision is evaluated against these goals."},
      {type:"h2",text:"Layered architecture"},
      {type:"p",text:"Fabric is organized into two primary planes: the control plane and the data plane. The control plane manages platform state, configuration, and orchestration decisions. The data plane handles the actual movement of compute, storage, and network resources."},
      {type:"h2",text:"Control plane"},
      {type:"p",text:"The control plane is responsible for maintaining a consistent view of platform state and translating high-level workload specifications into concrete resource allocations. Key control plane components include the scheduler, resource manager, configuration store, and admission controller."},
      {type:"h2",text:"Data plane"},
      {type:"p",text:"The data plane implements the actual infrastructure primitives — GPU allocation, storage I/O, network routing, and inter-service communication. The data plane is designed for minimal overhead and maximum throughput."},
      {type:"h2",text:"API surface"},
      {type:"p",text:"Fabric exposes a structured API surface for workload submission, resource queries, observability access, and platform configuration. The API design prioritizes programmatic access and automation over human-facing interfaces."},
    ]}
    prev={{slug:"what-is-ignara-fabric",title:"What is Ignara Fabric?"}}
    next={{slug:"design-principles",title:"Design Principles"}}
  />;
}
