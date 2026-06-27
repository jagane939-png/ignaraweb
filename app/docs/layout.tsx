import type { Metadata } from "next";
export const metadata: Metadata = {
  title: { default: "Documentation — Ignara AI", template: "%s — Ignara AI Docs" },
  description: "Technical documentation for the Ignara AI platform ecosystem — architecture, design principles, and research directions.",
};
export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
