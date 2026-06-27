import { DocPage } from "@/components/DocPage";
export default function Page() {
  return <DocPage slug="storage" title="Storage Fabric" status="Architecture & Research" updated="June 2026"
    toc={[{id:"ai-storage-requirements",label:"AI storage requirements"},{id:"architecture",label:"Architecture"},{id:"caching-tiers",label:"Caching tiers"},{id:"training-pipeline",label:"Training pipeline"}]}
    content={[
      {type:"h2",text:"AI storage requirements"},
      {type:"p",text:"AI training workloads have storage requirements that differ significantly from transactional or analytical workloads. Key characteristics include: high sequential read throughput, large object sizes (model checkpoints, dataset shards), and sensitivity to read latency (GPU starvation from slow data loading)."},
      {type:"h2",text:"Architecture"},
      {type:"p",text:"The Fabric storage layer is organized as a distributed object store with a tiered caching architecture. Data is stored in a durable remote tier and cached locally on compute nodes using available NVMe and DRAM capacity."},
      {type:"h2",text:"Caching tiers"},
      {type:"list",items:["Remote storage — durable, high-capacity object storage for dataset and checkpoint persistence","NVMe cache — fast local SSD cache for frequently accessed data shards","DRAM cache — in-memory cache for hot data paths and streaming prefetch buffers"]},
      {type:"h2",text:"Training pipeline"},
      {type:"p",text:"The storage layer includes a training-aware pipeline that prefetches data shards in the order they will be consumed by the training job. This eliminates GPU idle time from data loading and keeps compute utilization high throughout the training run."},
    ]}
    prev={{slug:"scheduling",title:"Scheduling"}}
    next={{slug:"networking",title:"Network Fabric"}}
  />;
}
