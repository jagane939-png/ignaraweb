import { BlogPostLayout } from "@/components/BlogPost";
export default function Page() {
  return <BlogPostLayout title="Infrastructure Principles" date="May 2026" readTime="6 min read" tag="Engineering"
    content={[
      {type:"p",text:"Infrastructure built on explicit principles is infrastructure that can be reasoned about. When a design decision is difficult, clear principles provide the criteria for making it. When two approaches are both technically valid, principles provide the tiebreaker."},
      {type:"p",text:"These are the six principles that guide every design decision in the Ignara platform."},
      {type:"h2",text:"1. Infrastructure first"},
      {type:"p",text:"Fabric does not abstract infrastructure into a black box. It exposes infrastructure as a first-class concern — programmable, inspectable, and tunable. Engineers who run AI workloads in production need control over the systems those workloads run on. Abstractions that hide infrastructure state make systems harder to operate, not easier."},
      {type:"h2",text:"2. Composability"},
      {type:"p",text:"Platform components should be independently useful. An organization should be able to adopt the Fabric scheduler without adopting the Fabric storage layer. This composability requirement shapes component interfaces: they must be clean enough to use without the rest of the platform."},
      {type:"h2",text:"3. Observable by default"},
      {type:"p",text:"Every component emits structured telemetry at every level. Observability is a design constraint specified before implementation, not a feature added afterward. Platform operators should never need to guess at the internal state of the system."},
      {type:"h2",text:"4. Hardware agnostic"},
      {type:"p",text:"Fabric abstracts underlying hardware through well-defined interfaces. The choice of hardware vendor is a configuration decision, not an architectural constraint. Different accelerators have meaningfully different programming models — making this work correctly is hard, but it is necessary for a platform with a long operating life."},
      {type:"h2",text:"5. Research grounded"},
      {type:"p",text:"Every significant design decision is grounded in published systems research. We do not invent solutions to problems the research community has already studied. We build on existing work and contribute back where we can."},
      {type:"h2",text:"6. Operational simplicity"},
      {type:"p",text:"Infrastructure that requires constant human intervention does not scale. The platform should tend toward a stable operating state and take corrective action automatically when it drifts from that state. This does not mean hiding complexity — it means designing systems that manage their own complexity within defined policy bounds."},
    ]}
  />;
}
