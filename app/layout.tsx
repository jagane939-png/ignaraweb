import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: { default: "Ignara AI — Building the Future of AI Infrastructure", template: "%s | Ignara AI" },
  description: "Ignara AI develops intelligent infrastructure, distributed AI systems, advanced computing platforms, and long-term research that power the next generation of artificial intelligence.",
  keywords: ["AI infrastructure", "distributed AI", "intelligent systems", "ML infrastructure", "future computing", "AI research"],
  authors: [{ name: "Jagan E", url: "https://ignara.ai" }],
  creator: "Jagan E",
  metadataBase: new URL("https://ignara.ai"),
  openGraph: {
    type: "website", locale: "en_US", url: "https://ignara.ai", siteName: "Ignara AI",
    title: "Ignara AI — Building the Future of AI Infrastructure",
    description: "Intelligent infrastructure, distributed AI systems, and advanced computing platforms for the next era of artificial intelligence.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ignara AI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ignara AI — Building the Future of AI Infrastructure",
    description: "Intelligent infrastructure, distributed AI systems, and advanced computing platforms.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#070d1a" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Ignara AI",
          "url": "https://ignara.ai",
          "description": "AI infrastructure company building intelligent systems, distributed computing platforms, and advanced research for the next generation of artificial intelligence.",
          "founder": { "@type": "Person", "name": "Jagan E" },
          "email": "contact@ignara.ai",
          "sameAs": ["https://github.com/jagane939-png"],
        }) }} />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
