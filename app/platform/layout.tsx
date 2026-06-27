import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Platform Ecosystem — Ignara AI",
  description: "An overview of the Ignara AI platform ecosystem — intelligent infrastructure technologies spanning compute orchestration, edge AI, research, and future computing architectures.",
  openGraph: {
    title: "Platform Ecosystem — Ignara AI",
    description: "The long-term platform architecture and research roadmap of Ignara AI.",
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
