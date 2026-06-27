import { DocPage } from "@/components/DocPage";
export default function Page() {
  return <DocPage slug="security" title="Security Model" status="Architecture & Research" updated="June 2026"
    toc={[{id:"threat-model",label:"Threat model"},{id:"identity",label:"Identity"},{id:"isolation",label:"Isolation"},{id:"audit",label:"Audit"}]}
    content={[
      {type:"h2",text:"Threat model"},
      {type:"p",text:"Fabric is designed for multi-tenant environments where workloads from different teams, organizations, or trust levels share physical infrastructure. The security model assumes that workloads are not necessarily trusted and must be isolated from each other."},
      {type:"h2",text:"Identity"},
      {type:"p",text:"Every workload, service, and operator in Fabric has a verifiable identity. Identities are issued by the platform identity service and are short-lived, automatically rotated, and cryptographically verifiable. No long-lived credentials are used within the platform."},
      {type:"h2",text:"Isolation"},
      {type:"p",text:"Workload isolation is enforced at multiple levels: compute isolation through hardware virtualization and resource limits, network isolation through policy-enforced segmentation, and storage isolation through access controls and namespace separation."},
      {type:"h2",text:"Audit"},
      {type:"p",text:"All privileged operations on the platform are recorded in a tamper-evident audit log. Audit logs include the identity of the actor, the operation performed, the affected resources, and the timestamp. Audit logs are written to a separate, append-only store."},
    ]}
    prev={{slug:"observability",title:"Observability"}}
    next={{slug:"roadmap-doc",title:"Development Roadmap"}}
  />;
}
