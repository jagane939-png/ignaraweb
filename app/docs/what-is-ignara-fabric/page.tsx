import { DocPage } from "@/components/DocPage";
export default function Page() {
  return <DocPage
    slug="what-is-ignara-fabric"
    title="What is Ignara Fabric?"
    status="Architecture & Research"
    updated="June 2026"
    toc={[{id:"overview",label:"Overview"},{id:"motivation",label:"Motivation"},{id:"what-it-is-not",label:"What it is not"},{id:"core-components",label:"Core components"},{id:"current-status",label:"Current status"}]}
    content={[
      {type:"h2",text:"Overview"},
      {type:"p",text:"Ignara Fabric is an infrastructure platform being designed to serve as the programmable substrate for AI workloads. It aims to unify compute orchestration, storage management, network coordination, scheduling, observability, and security into a single cohesive operating layer."},
      {type:"p",text:"The goal is to provide the infrastructure layer that AI systems depend on — sitting between physical hardware and the frameworks, models, and applications that run on top."},
      {type:"h2",text:"Motivation"},
      {type:"p",text:"General-purpose infrastructure was not designed for AI. The characteristics of AI workloads differ significantly from the web services and batch jobs that shaped existing infrastructure tools:"},
      {type:"list",items:["GPU clusters require workload-aware scheduling primitives not present in Kubernetes","Training jobs have I/O patterns that starve general-purpose storage systems","Distributed training requires network primitives tuned for collective communication","Long-running jobs with frequent checkpoints need different failure recovery than stateless services","Multi-tenant AI platforms require isolation models not well-served by existing tools"]},
      {type:"h2",text:"What it is not"},
      {type:"p",text:"Fabric is not a Kubernetes distribution, a cloud provider, or a managed service. It is a platform that sits below these concerns and provides the infrastructure primitives required to build reliable AI systems."},
      {type:"h2",text:"Core components"},
      {type:"list",items:["AI Compute — workload-aware compute orchestration across GPU/CPU/accelerator pools","Storage Fabric — distributed storage optimized for AI data flows and training pipelines","Network Fabric — collective communication primitives for distributed training and inference","AI Scheduler — gang scheduling, backfill, and priority management for AI jobs","Inference Gateway — request routing, batching, and model versioning for serving","Observability — structured telemetry across all platform components","Security — identity, isolation, and access control for multi-tenant deployments"]},
      {type:"h2",text:"Current status"},
      {type:"p",text:"Ignara Fabric is in the architecture and research phase. The team is actively designing system components, conducting research on key technical problems, and producing reference designs. No production software is available."},
    ]}
    next={{slug:"architecture-overview",title:"Architecture Overview"}}
  />;
}
