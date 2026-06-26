import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Ignara AI — investors, researchers, enterprise partners, and collaborators welcome.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
