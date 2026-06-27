import { DocPage } from "@/components/DocPage";
export default function Page() {
  return <DocPage slug="roadmap-doc" title="Development Roadmap" status="Planning document" updated="June 2026"
    toc={[{id:"current-phase",label:"Current phase"},{id:"next-milestones",label:"Next milestones"},{id:"future-work",label:"Future work"},{id:"not-on-roadmap",label:"Not on roadmap"}]}
    content={[
      {type:"h2",text:"Current phase"},
      {type:"p",text:"Ignara Fabric is in the architecture and research phase. Current work includes system design, component interface specification, and research on key technical problems including scheduling algorithms, storage I/O optimization, and KV-cache memory management."},
      {type:"h2",text:"Next milestones"},
      {type:"list",items:["Complete control plane architecture specification","Storage Fabric prototype (data pipeline acceleration)","AI Scheduler reference implementation","Observability pipeline design","Integration test framework"]},
      {type:"h2",text:"Future work"},
      {type:"p",text:"Beyond the current phase, planned work includes: full platform integration, Inference Gateway development, multi-tenant support, production hardening, and developer preview program. These are goals, not commitments, and timelines are not published."},
      {type:"h2",text:"Not on roadmap"},
      {type:"p",text:"Ignara Cloud, Ignara Edge, and Ignara Orbit are future vision items. They are not on the current development roadmap. No dates, commitments, or feature specifications exist for these initiatives."},
    ]}
    prev={{slug:"security",title:"Security Model"}}
    next={{slug:"research-agenda",title:"Research Agenda"}}
  />;
}
