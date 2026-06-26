import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Ignara AI — Building the Future of AI Infrastructure",
    template: "%s | Ignara AI",
  },
  description:
    "Ignara AI develops intelligent infrastructure, advanced AI systems, and next-generation computing platforms that enable the future of artificial intelligence.",
  keywords: ["AI infrastructure", "artificial intelligence", "machine learning", "distributed AI", "autonomous infrastructure", "future computing", "AI research"],
  authors: [{ name: "Jagan E", url: "https://ignara.ai" }],
  creator: "Jagan E",
  publisher: "Ignara AI",
  metadataBase: new URL("https://ignara.ai"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ignara.ai",
    siteName: "Ignara AI",
    title: "Ignara AI — Building the Future of AI Infrastructure",
    description: "Intelligent infrastructure, advanced AI systems, and next-generation computing platforms.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ignara AI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ignara AI — Building the Future of AI Infrastructure",
    description: "Intelligent infrastructure, advanced AI systems, and next-generation computing platforms.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
