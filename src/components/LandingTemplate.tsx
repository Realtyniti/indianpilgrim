import Link from "next/link";
import { formatINR, pageByPath } from "@/data";
import { guides } from "@/data/guides";
import { absoluteUrl, site, whatsappLink } from "@/data/site";
import type { LandingPage } from "@/data/types";
import { plain } from "@/lib/inline";
import { Art } from "./Art";
import { Sections, sectionId } from "./Blocks";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { WaIcon } from "./ContactBar";
import { EnquiryForm } from "./EnquiryForm";
import { Faq } from "./Faq";
import { JsonLd } from "./JsonLd";
import { PackageCard } from "./PackageCard";

function trailFor(page: LandingPage): Crumb[] {
  const trail: Crumb[] = [];
  let parent = page.parent ? pageByPath(page.parent) : undefined;
  if (page.parent === "/pilgrimages/") trail.push({ name: "Pilgrimages", path: "/pilgrimages/" });
  while (parent) {
    trail.unshift({ name: parent.name, path: parent.path });
    parent = parent.parent ? pageByPath(parent.parent) : undefined;
  }
  return [...trail, { name: page.name, path: page.path }];
}

function schemaFor(page: LandingPage) {
  const out: object[] = [];
  const it = page.itinerary;
  out.push({
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: page.h1,
    description: page.description,
    url: absoluteUrl(page.path),
    touristType: ["Pilgrims", "Religious tourism"],
    provider: { "@id": `${site.url}/#organization` },
    ...(page.places?.length && {
      itinerary: {
        "@type": "ItemList",
        itemListElement: page.places.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: { "@type": p.type ?? "Place", name: p.name },
        })),
      },
    }),
    ...(it?.priceFrom && {
      offers: {
        "@type": "Offer",
        price: it.priceFrom,
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        url: absoluteUrl(page.path),
      },
    }),
  });
  if (page.faqs.length) {
    out.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: plain(f.a) },
      })),
    });
  }
  return out;
}

export function LandingTemplate({ page }: { page: LandingPage }) {
  const it = page.itinerary;
  const cards = (page.cards ?? []).map(pageByPath).filter((p): p is LandingPage => !!p);
  const related = (page.related ?? [])
    .map((path) => {
      if (path.startsWith("/guides/")) {
        const g = guides.find((x) => `/guides/${x.slug}/` === path);
        return g && { path, name: g.h1 };
      }
      const p = pageByPath(path);
      return p && { path, name: p.name };
    })
    .filter((x): x is { path: string; name: string } => !!x);
  const clusterGuides = guides.filter((g) => g.hub === page.path || (page.parent && g.hub === page.parent)).slice(0, 4);
  const toc = [
    ...(it ? [{ id: "itinerary", label: "Itinerary" }] : []),
    ...(it?.tiers ? [{ id: "tiers", label: "Hotels & tiers" }] : []),
    ...(it ? [{ id: "inclusions", label: "Inclusions" }] : []),
    ...page.sections.slice(0, 5).map((s) => ({ id: sectionId(s), label: s.h2.replace(/\?$/, "") })),
    ...(page.faqs.length ? [{ id: "faq", label: "FAQ" }] : []),
  ];

  return (
    <>
      <JsonLd data={schemaFor(page)} />
      <section className="relative overflow-hidden border-b border-stone-200">
        <Art art={page.art} className="absolute inset-0 h-full w-full opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-50/70 via-stone-50/85 to-stone-50" />
        <div className="container-x relative pb-10 pt-6">
          <Breadcrumbs trail={trailFor(page)} />
          {page.eyebrow && <p className="eyebrow mt-6">{page.eyebrow}</p>}
          <h1 className="mt-2 max-w-4xl font-display text-4xl leading-tight text-stone-900 sm:text-5xl">{page.h1}</h1>
          <p className="mt-4 max-w-prose text-lg text-stone-700">{page.intro}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={whatsappLink(`Namaste, I'd like details for: ${page.enquiry}`)} target="_blank" rel="noopener" className="btn btn-whatsapp">
              <WaIcon /> Get the plan on WhatsApp
            </a>
            <a href={`tel:${site.phoneE164}`} className="btn btn-outline">
              Call {site.phoneDisplay}
            </a>
          </div>
          {page.keyFacts && (
            <dl className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-px overflow-hidden rounded-xl border border-stone-200 bg-stone-200">
              {page.keyFacts.map((f) => (
                <div key={f.label} className="bg-white/95 p-3">
                  <dt className="text-[11px] font-semibold uppercase tracking-wider text-stone-500">{f.label}</dt>
                  <dd className="mt-1 text-sm font-medium text-stone-900">{f.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </section>

      {toc.length > 2 && (
        <nav aria-label="On this page" className="border-b border-stone-200 bg-white">
          <div className="container-x flex gap-2 overflow-x-auto py-3 text-sm">
            {toc.map((t) => (
              <a key={t.id} href={`#${t.id}`} className="whitespace-nowrap rounded-full border border-stone-200 px-3 py-1 text-stone-700 hover:border-sindoor hover:text-sindoor">
                {t.label}
              </a>
            ))}
          </div>
        </nav>
      )}

      <div className="container-x mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
        <article className="prose-body min-w-0">
          {cards.length > 0 && (
            <section className="prose-section" id="packages">
              <h2>{page.cluster === "international" ? "Journeys we plan" : `${page.name} packages`}</h2>
              <div className="not-prose grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {cards.map((c) => (
                  <PackageCard key={c.path} page={c} />
                ))}
              </div>
            </section>
          )}

          {it && (
            <section id="itinerary" className="prose-section">
              <h2>Day-by-day itinerary</h2>
              <p className="text-stone-500">
                {it.nights} nights / {it.days} days · {it.mode} · {it.start} to {it.end}
                {it.priceFrom ? ` · from ${formatINR(it.priceFrom)} per person` : " · price on request; we share it on WhatsApp"}
              </p>
              <ol className="timeline not-prose">
                {it.days_.map((d) => (
                  <li key={d.day}>
                    <p className="text-xs font-semibold uppercase tracking-wider text-sindoor">{d.day}</p>
                    <h3 className="font-display text-lg text-stone-900">{d.title}</h3>
                    <p className="mt-1 text-stone-700">{d.text}</p>
                    {(d.overnight || d.drive) && (
                      <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-stone-500">
                        {d.drive && <span>Drive: {d.drive}</span>}
                        {d.overnight && <span>Overnight: {d.overnight}</span>}
                      </p>
                    )}
                  </li>
                ))}
              </ol>
              <p className="text-sm text-stone-500">Distances and drive times are approximate and depend on road and weather conditions.</p>
            </section>
          )}

          {it?.tiers && (
            <section id="tiers" className="prose-section">
              <h2>Choose your comfort level</h2>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Tier</th>
                      <th scope="col">Stay</th>
                      <th scope="col">Vehicle</th>
                      <th scope="col">Meals</th>
                    </tr>
                  </thead>
                  <tbody>
                    {it.tiers.map((t) => (
                      <tr key={t.name}>
                        <th scope="row">{t.name}</th>
                        <td>{t.stay}</td>
                        <td>{t.transport}</td>
                        <td>{t.meals}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>Every quote names the exact hotel for each night, so you know what you are paying for.</p>
            </section>
          )}

          {it && (
            <section id="inclusions" className="prose-section">
              <h2>What's included</h2>
              <div className="not-prose grid gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="mb-2 font-semibold text-glacier">Included</h3>
                  <ul className="check-list">
                    {it.inclusions.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-stone-700">Not included</h3>
                  <ul className="cross-list">
                    {it.exclusions.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          )}

          <Sections sections={page.sections} />
          <Faq items={page.faqs} />

          {(related.length > 0 || clusterGuides.length > 0) && (
            <section className="prose-section">
              <h2>Keep planning</h2>
              <div className="not-prose grid gap-6 sm:grid-cols-2">
                {related.length > 0 && (
                  <div>
                    <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-stone-500">Related yatras</h3>
                    <ul className="space-y-2">
                      {related.map((r) => (
                        <li key={r.path}>
                          <Link href={r.path} className="link">
                            {r.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {clusterGuides.length > 0 && (
                  <div>
                    <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-stone-500">Yatra guides</h3>
                    <ul className="space-y-2">
                      {clusterGuides.map((g) => (
                        <li key={g.slug}>
                          <Link href={`/guides/${g.slug}/`} className="link">
                            {g.h1}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          )}
          <p className="text-sm text-stone-500">
            Last updated {new Date(page.updated).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
          </p>
        </article>

        <aside id="enquire" className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <p className="font-display text-xl text-stone-900">Get a free yatra plan</p>
            <p className="mb-4 mt-1 text-sm text-stone-500">Day-by-day plan, named hotels and a clear price, usually the same day.</p>
            <EnquiryForm defaultYatra={page.enquiry} compact />
          </div>
          <div className="mt-4 rounded-2xl bg-glacier-soft p-5 text-sm text-glacier-dark">
            <p className="font-semibold">Why pilgrims book with us</p>
            <ul className="mt-2 space-y-1.5">
              <li>✓ Only pilgrimage tours, nothing else</li>
              <li>✓ Hotels named in writing before you pay</li>
              <li>✓ Registration and darshan help included</li>
              <li>✓ Coordinator on call through the yatra</li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}
