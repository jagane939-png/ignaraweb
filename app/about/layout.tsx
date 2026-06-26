import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About",
  description: "Learn about Ignara AI — our story, values, and the team behind the mission.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
