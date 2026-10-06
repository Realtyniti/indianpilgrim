import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingTemplate } from "@/components/LandingTemplate";
import { pageBySegments, pages } from "@/data";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return pages.map((p) => ({ slug: p.path.split("/").filter(Boolean) }));
}

type Props = { params: Promise<{ slug: string[] }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = pageBySegments((await params).slug);
  if (!page) return {};
  return buildMetadata({ title: page.title, description: page.description, path: page.path });
}

export default async function LandingRoute({ params }: Props) {
  const page = pageBySegments((await params).slug);
  if (!page) notFound();
  return <LandingTemplate page={page} />;
}
