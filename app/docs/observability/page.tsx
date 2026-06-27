import { DocPage } from "@/components/DocPage";
export default function Page() {
  return <DocPage slug="observability" title="Observability" status="Architecture & Research" updated="June 2026"
    toc={[{id:"philosophy",label:"Philosophy"},{id:"metrics",label:"Metrics"},{id:"traces",label:"Traces"},{id:"logs",label:"Logs"}]}
    content={[
      {type:"h2",text:"Philosophy"},
      {type:"p",text:"Fabric treats observability as a first-class design constraint. Every component emits structured telemetry at every level of the stack. Platform operators should be able to diagnose any issue without modifying the platform or deploying additional tooling."},
      {type:"h2",text:"Metrics"},
      {type:"p",text:"The platform exports structured metrics covering GPU utilization, memory pressure, network throughput, storage I/O, scheduler queue depth, and job lifecycle events. Metrics are emitted in a format compatible with Prometheus and compatible ingestion systems."},
      {type:"h2",text:"Traces"},
      {type:"p",text:"Distributed tracing covers the path of a workload from submission through scheduling, execution, and completion. Traces enable diagnosis of latency issues across platform component boundaries."},
      {type:"h2",text:"Logs"},
      {type:"p",text:"All platform components emit structured logs with consistent schemas. Log levels, retention, and aggregation are configurable. Platform logs are available for both real-time diagnosis and historical analysis."},
    ]}
    prev={{slug:"networking",title:"Network Fabric"}}
    next={{slug:"security",title:"Security Model"}}
  />;
}
