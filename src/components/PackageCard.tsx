import Link from "next/link";
import { formatINR } from "@/data";
import type { LandingPage } from "@/data/types";
import { Art } from "./Art";

export function PackageCard({ page }: { page: LandingPage }) {
  const it = page.itinerary;
  const duration = it ? `${it.nights}N / ${it.days}D` : page.keyFacts?.find((f) => f.label === "Duration")?.value;
  return (
    <Link href={page.path} className="card group flex flex-col overflow-hidden">
      <div className="relative h-32 overflow-hidden">
        <Art art={page.art} className="h-full w-full transition-transform duration-500 group-hover:scale-105" />
        {it && <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-glacier">{it.mode}</span>}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="font-display text-lg leading-snug text-stone-900 group-hover:text-sindoor">{page.name}</h3>
        {it && <p className="line-clamp-2 text-sm text-stone-500">{it.route.join(" → ")}</p>}
        {!it && <p className="line-clamp-2 text-sm text-stone-500">{page.eyebrow}</p>}
        <div className="mt-auto flex items-end justify-between pt-3 text-sm">
          <span className="font-semibold text-stone-700">{duration}</span>
          <span className="font-semibold text-sindoor">{it?.priceFrom ? `from ${formatINR(it.priceFrom)}` : "View plan →"}</span>
        </div>
      </div>
    </Link>
  );
}
