import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ignara.ai";
  const routes = [
    "", "/about", "/vision", "/research", "/contact", "/privacy", "/terms",
    "/platform", "/fabric", "/labs", "/roadmap", "/architecture",
    "/docs", "/blog",
    "/docs/what-is-ignara-fabric", "/docs/architecture-overview", "/docs/design-principles",
    "/docs/control-plane", "/docs/scheduling", "/docs/storage", "/docs/networking",
    "/docs/observability", "/docs/security", "/docs/roadmap", "/docs/research-agenda", "/docs/future-directions",
    "/blog/why-ai-infrastructure-needs-a-fabric-layer",
    "/blog/distributed-scheduling-for-ai-workloads",
    "/blog/observability-for-intelligent-systems",
    "/blog/infrastructure-principles",
  ];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : route.startsWith("/docs") || route.startsWith("/blog") ? 0.6 : 0.8,
  }));
}
