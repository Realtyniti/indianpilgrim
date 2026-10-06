import type { MetadataRoute } from "next";
import { pages } from "@/data";
import { guides } from "@/data/guides";
import { absoluteUrl } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const priority = (path: string) =>
    ["/char-dham-yatra/", "/do-dham-yatra/", "/vaishno-devi-yatra/"].includes(path) ? 0.9 : path.split("/").length > 3 ? 0.7 : 0.8;
  return [
    { url: absoluteUrl("/"), changeFrequency: "weekly", priority: 1 },
    ...pages.map((p) => ({ url: absoluteUrl(p.path), lastModified: p.updated, changeFrequency: "monthly" as const, priority: priority(p.path) })),
    { url: absoluteUrl("/pilgrimages/"), changeFrequency: "monthly", priority: 0.6 },
    { url: absoluteUrl("/guides/"), changeFrequency: "weekly", priority: 0.6 },
    ...guides.map((g) => ({ url: absoluteUrl(`/guides/${g.slug}/`), lastModified: g.updated, changeFrequency: "monthly" as const, priority: 0.6 })),
    ...["/about/", "/contact/", "/plan-my-yatra/"].map((p) => ({ url: absoluteUrl(p), changeFrequency: "yearly" as const, priority: 0.4 })),
  ];
}
