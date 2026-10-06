import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { guides } from "@/data/guides";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Yatra Guides: Char Dham, Kedarnath & Vaishno Devi",
  description:
    "Practical pilgrimage guides: Char Dham registration, opening dates, the Kedarnath trek, Vaishno Devi RFID card, costs, packing lists and temple etiquette.",
  path: "/guides/",
});

const groups = [
  { cluster: "char-dham", title: "Char Dham Yatra" },
  { cluster: "do-dham", title: "Kedarnath and Badrinath" },
  { cluster: "vaishno-devi", title: "Vaishno Devi" },
  { cluster: "international", title: "For international pilgrims" },
] as const;

export default function GuidesIndex() {
  return (
    <div className="container-x pt-6">
      <Breadcrumbs trail={[{ name: "Yatra guides", path: "/guides/" }]} />
      <h1 className="mt-6 font-display text-4xl text-stone-900 sm:text-5xl">Yatra guides</h1>
      <p className="mt-4 max-w-prose text-lg text-stone-700">
        Honest, practical advice for planning your pilgrimage, written by our yatra team and updated every season.
      </p>
      {groups.map((grp) => {
        const list = guides.filter((g) => g.cluster === grp.cluster);
        if (!list.length) return null;
        return (
          <section key={grp.cluster} className="mt-12">
            <h2 className="font-display text-2xl text-stone-900">{grp.title}</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((g) => (
                <Link key={g.slug} href={`/guides/${g.slug}/`} className="card group p-5">
                  <p className="font-display text-lg leading-snug text-stone-900 group-hover:text-sindoor">{g.h1}</p>
                  <p className="mt-2 line-clamp-3 text-sm text-stone-500">{g.summary}</p>
                  <p className="mt-3 text-xs text-stone-500">{g.readMinutes} min read</p>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
