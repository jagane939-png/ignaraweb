import { DocPage } from "@/components/DocPage";
export default function Page() {
  return <DocPage slug="control-plane" title="Control Plane" status="Architecture & Research" updated="June 2026"
    toc={[{id:"responsibilities",label:"Responsibilities"},{id:"components",label:"Components"},{id:"state-management",label:"State management"},{id:"admission-control",label:"Admission control"}]}
    content={[
      {type:"h2",text:"Responsibilities"},
      {type:"p",text:"The Fabric control plane is responsible for maintaining consistent platform state, processing resource requests, scheduling workloads, and enforcing policy. It is the authoritative source of truth for what is running where."},
      {type:"h2",text:"Components"},
      {type:"list",items:["Resource Manager — tracks available compute, storage, and network capacity across the platform","Scheduler — assigns workloads to resources based on requirements, affinity, and priority","Admission Controller — validates and mutates workload specifications before scheduling","Configuration Store — distributed, consistent store for platform configuration and state","Policy Engine — evaluates resource requests against organizational policies"]},
      {type:"h2",text:"State management"},
      {type:"p",text:"The control plane maintains state using a distributed, consistent key-value store. State changes are applied through a reconciliation loop: the platform continuously compares desired state against actual state and applies changes to converge them."},
      {type:"h2",text:"Admission control"},
      {type:"p",text:"Before a workload reaches the scheduler, it passes through the admission controller. The admission controller validates resource requests, applies defaults, enforces quotas, and can mutate workload specifications based on platform policy."},
    ]}
    prev={{slug:"design-principles",title:"Design Principles"}}
    next={{slug:"scheduling",title:"Scheduling"}}
  />;
}
