import Link from "next/link";
import { absoluteUrl } from "@/data/site";
import { JsonLd } from "./JsonLd";

export type Crumb = { name: string; path: string };

export function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  const all = [{ name: "Home", path: "/" }, ...trail];
  return (
    <>
      <nav aria-label="Breadcrumb" className="text-sm text-stone-500">
        <ol className="flex flex-wrap gap-x-2 gap-y-1">
          {all.map((c, i) => (
            <li key={c.path} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true">›</span>}
              {i === all.length - 1 ? (
                <span aria-current="page" className="text-stone-700">
                  {c.name}
                </span>
              ) : (
                <Link href={c.path} className="hover:text-sindoor">
                  {c.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.name,
            item: absoluteUrl(c.path),
          })),
        }}
      />
    </>
  );
}
