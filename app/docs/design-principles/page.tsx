import { DocPage } from "@/components/DocPage";
export default function Page() {
  return <DocPage slug="design-principles" title="Design Principles" status="Architecture & Research" updated="June 2026"
    toc={[{id:"infrastructure-first",label:"Infrastructure first"},{id:"composability",label:"Composability"},{id:"observable-by-default",label:"Observable by default"},{id:"hardware-agnostic",label:"Hardware agnostic"},{id:"research-grounded",label:"Research grounded"},{id:"operational-simplicity",label:"Operational simplicity"}]}
    content={[
      {type:"h2",text:"Infrastructure first"},
      {type:"p",text:"Fabric does not abstract infrastructure into a black box. It exposes infrastructure as a first-class concern — programmable, inspectable, and tunable. Engineers working with AI infrastructure need control over the systems their workloads run on."},
      {type:"h2",text:"Composability"},
      {type:"p",text:"Platform components are independently useful and independently deployable. An organization can adopt the Fabric scheduler without adopting the Fabric storage layer. Composability ensures that Fabric meets organizations where they are rather than requiring wholesale adoption."},
      {type:"h2",text:"Observable by default"},
      {type:"p",text:"Observability is not a feature — it is a design constraint. Every Fabric component emits structured telemetry at every level. Platform operators should never need to guess at the internal state of the system."},
      {type:"h2",text:"Hardware agnostic"},
      {type:"p",text:"Fabric abstracts underlying hardware through well-defined interfaces. The platform supports NVIDIA, AMD, Intel, and custom accelerators through a consistent API. Hardware vendor selection is a configuration decision, not an architectural constraint."},
      {type:"h2",text:"Research grounded"},
      {type:"p",text:"Every significant design decision is grounded in published systems research. We do not invent solutions to problems that have been studied and solved. We build on the research community's work and contribute back where we can."},
      {type:"h2",text:"Operational simplicity"},
      {type:"p",text:"Infrastructure that requires constant human intervention does not scale. Fabric aims for self-healing, self-optimizing operation within defined policy bounds. The goal is to reduce operational burden without sacrificing control."},
    ]}
    prev={{slug:"architecture-overview",title:"Architecture Overview"}}
    next={{slug:"control-plane",title:"Control Plane"}}
  />;
}
