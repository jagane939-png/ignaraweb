import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "System Architecture — Ignara AI",
  description: "Technical architecture diagrams for the Ignara Fabric platform — control plane, compute, storage, and observability.",
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
