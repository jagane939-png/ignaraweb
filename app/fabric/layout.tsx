import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Ignara Fabric — AI Infrastructure Platform",
  description: "Ignara Fabric is an intelligent infrastructure platform that orchestrates compute, storage, network, and scheduling resources for AI workloads. Currently in architecture and research phase.",
  openGraph: {
    title: "Ignara Fabric — AI Infrastructure Platform",
    description: "Orchestrating intelligent infrastructure for AI workloads. Compute, storage, network, scheduling — unified.",
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
