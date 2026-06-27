import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Ignara Labs — Research Initiative",
  description: "Ignara Labs explores AI infrastructure, distributed systems, and future computing architectures. The research arm of Ignara AI.",
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
