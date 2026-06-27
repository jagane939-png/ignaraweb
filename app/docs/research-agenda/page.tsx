import { DocPage } from "@/components/DocPage";
export default function Page() {
  return <DocPage slug="research-agenda" title="Research Agenda" status="Research document" updated="June 2026"
    toc={[{id:"active-areas",label:"Active research areas"},{id:"memory",label:"Memory architecture"},{id:"scheduling-research",label:"Scheduling research"},{id:"storage-research",label:"Storage research"}]}
    content={[
      {type:"h2",text:"Active research areas"},
      {type:"p",text:"Ignara Labs is conducting research across five primary areas. Each area addresses a fundamental infrastructure challenge for AI workloads."},
      {type:"h2",text:"Memory architecture"},
      {type:"list",items:["CXL-based memory disaggregation for AI inference clusters","KV-cache subsystem design for LLM serving (paged attention, eviction policies)","Memory tiering strategies for heterogeneous memory hierarchies","Bandwidth-compute tradeoffs in disaggregated memory systems"]},
      {type:"h2",text:"Scheduling research"},
      {type:"list",items:["Gang scheduling algorithms for large distributed training jobs","Network-topology-aware placement for collective communication workloads","Fairshare scheduling with preemption in multi-tenant GPU clusters","Spot/preemptible workload admission control and checkpointing"]},
      {type:"h2",text:"Storage research"},
      {type:"list",items:["Prefetching strategies for training data pipelines","Distributed checkpoint protocols with fast recovery","Storage tiering for training workloads (NVMe, DRAM, remote object store)","I/O amplification patterns in large-scale model training"]},
    ]}
    prev={{slug:"roadmap-doc",title:"Development Roadmap"}}
    next={{slug:"future-directions",title:"Future Directions"}}
  />;
}
