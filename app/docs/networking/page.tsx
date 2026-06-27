import { DocPage } from "@/components/DocPage";
export default function Page() {
  return <DocPage slug="networking" title="Network Fabric" status="Architecture & Research" updated="June 2026"
    toc={[{id:"ai-network-requirements",label:"AI network requirements"},{id:"collective-communication",label:"Collective communication"},{id:"bandwidth-management",label:"Bandwidth management"}]}
    content={[
      {type:"h2",text:"AI network requirements"},
      {type:"p",text:"Distributed training generates intensive all-to-all communication patterns — gradient synchronization, parameter broadcasting, and collective reductions — that place different demands on the network than traditional east-west service traffic."},
      {type:"h2",text:"Collective communication"},
      {type:"p",text:"Fabric provides platform-level support for collective communication primitives: AllReduce, AllGather, ReduceScatter, and Broadcast. These operations are optimized for the network topology of the underlying hardware cluster, minimizing communication time during distributed training."},
      {type:"h2",text:"Bandwidth management"},
      {type:"p",text:"Network bandwidth is a shared resource in multi-tenant clusters. Fabric implements bandwidth-aware job placement to co-locate communicating workers and bandwidth allocation policies to prevent training jobs from starving each other of network capacity."},
    ]}
    prev={{slug:"storage",title:"Storage Fabric"}}
    next={{slug:"observability",title:"Observability"}}
  />;
}
