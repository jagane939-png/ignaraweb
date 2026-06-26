import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Research",
  description: "Ignara AI research spanning data pipeline acceleration, space intelligence, memory orchestration, and distributed AI.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
