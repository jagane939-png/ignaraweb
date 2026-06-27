import { DocPage } from "@/components/DocPage";
export default function Page() {
  return <DocPage slug="future-directions" title="Future Directions" status="Vision document" updated="June 2026"
    toc={[{id:"autonomous-infrastructure",label:"Autonomous infrastructure"},{id:"edge-computing",label:"Edge computing"},{id:"space-computing",label:"Space computing"}]}
    content={[
      {type:"h2",text:"Autonomous infrastructure"},
      {type:"p",text:"The long-horizon goal for Fabric is infrastructure that manages itself — detecting anomalies, predicting failures, rebalancing workloads, and optimizing resource utilization without requiring constant human intervention. This is an architectural target, not a shipping feature."},
      {type:"h2",text:"Edge computing"},
      {type:"p",text:"Ignara Edge explores how AI infrastructure principles could extend to constrained edge environments — where latency, connectivity, and resource limits create a different set of infrastructure problems. This is a research direction without active development."},
      {type:"h2",text:"Space computing"},
      {type:"p",text:"Ignara Orbit is a long-horizon research exploration into resilient computing for extreme environments, including space-based infrastructure concepts. This is aspirational research. No active development exists. No timeline is implied."},
    ]}
    prev={{slug:"research-agenda",title:"Research Agenda"}}
  />;
}
