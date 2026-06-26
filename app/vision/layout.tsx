import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Vision",
  description: "Ignara AI's vision: becoming a global leader in AI infrastructure and intelligent systems.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
