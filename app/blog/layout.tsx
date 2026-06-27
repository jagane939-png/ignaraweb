import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Engineering Blog — Ignara AI",
  description: "Technical writing from the Ignara AI team on AI infrastructure, distributed systems, and platform engineering.",
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
