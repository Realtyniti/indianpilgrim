import type { Metadata } from "next";
import { absoluteUrl, site } from "@/data/site";

export function buildMetadata({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}): Metadata {
  const url = absoluteUrl(path);
  // Append the brand only when the full title still fits in Google's ~60 character display.
  const branded = `${title} | ${site.name}`;
  return {
    title: { absolute: title.includes(site.name) || branded.length > 62 ? title : branded },
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: site.name, type, locale: "en_IN" },
    twitter: { card: "summary_large_image", title, description },
  };
}
