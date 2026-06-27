import { DocPage } from "@/components/DocPage";
export default function Page() {
  return <DocPage slug="scheduling" title="Scheduling" status="Architecture & Research" updated="June 2026"
    toc={[{id:"ai-scheduling-challenges",label:"AI scheduling challenges"},{id:"gang-scheduling",label:"Gang scheduling"},{id:"backfill",label:"Backfill scheduling"},{id:"priority-and-preemption",label:"Priority and preemption"}]}
    content={[
      {type:"h2",text:"AI scheduling challenges"},
      {type:"p",text:"AI workloads present scheduling challenges not well-handled by general-purpose schedulers. Training jobs must start all required resources simultaneously. Long-running jobs have different priority semantics than short batch jobs. GPU fragmentation is a major source of inefficiency in multi-tenant clusters."},
      {type:"h2",text:"Gang scheduling"},
      {type:"p",text:"Distributed training jobs require all worker processes to start simultaneously — a partially started job wastes the resources allocated to it. Fabric implements gang scheduling with admission control: a job is either fully admitted or not admitted at all."},
      {type:"h2",text:"Backfill scheduling"},
      {type:"p",text:"Backfill scheduling improves cluster utilization by allowing lower-priority jobs to run in resources that would otherwise be idle while waiting for a high-priority job to have sufficient resources. Fabric's scheduler implements backfill with configurable time bounds to prevent starvation."},
      {type:"h2",text:"Priority and preemption"},
      {type:"p",text:"Fabric supports multiple priority tiers with configurable preemption policies. Higher-priority workloads can preempt lower-priority workloads when resources are constrained. Preemption policies can be tuned to balance fairness, efficiency, and job completion guarantees."},
    ]}
    prev={{slug:"control-plane",title:"Control Plane"}}
    next={{slug:"storage",title:"Storage Fabric"}}
  />;
}
