import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Art } from "@/components/Art";
import { Sections, sectionId } from "@/components/Blocks";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { pageByPath } from "@/data";
import { guideBySlug, guides } from "@/data/guides";
import { absoluteUrl, site } from "@/data/site";
import { inline, plain } from "@/lib/inline";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;
export const generateStaticParams = () => guides.map((g) => ({ slug: g.slug }));

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const g = guideBySlug((await params).slug);
  if (!g) return {};
  return buildMetadata({ title: g.title, description: g.description, path: `/guides/${g.slug}/`, type: "article" });
}

export default async function GuidePage({ params }: Props) {
  const g = guideBySlug((await params).slug);
  if (!g) notFound();
  const hub = pageByPath(g.hub);
  const path = `/guides/${g.slug}/`;
  const updated = new Date(g.updated).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

  const schema: object[] = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: g.h1,
      description: g.description,
      dateModified: g.updated,
      mainEntityOfPage: absoluteUrl(path),
      author: { "@type": "Organization", name: g.author, url: site.url },
      publisher: { "@id": `${site.url}/#organization` },
      inLanguage: "en-IN",
    },
  ];
  if (g.faqs?.length) {
    schema.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: g.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: plain(f.a) } })),
    });
  }

  return (
    <>
      <JsonLd data={schema} />
      <div className="relative h-28 overflow-hidden border-b border-stone-200 sm:h-36">
        <Art art={g.art} className="h-full w-full" />
      </div>
      <div className="container-x mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px]">
        <article className="min-w-0">
          <Breadcrumbs trail={[{ name: "Yatra guides", path: "/guides/" }, { name: g.h1, path }]} />
          <h1 className="mt-6 font-display text-4xl leading-tight text-stone-900 sm:text-[44px]">{g.h1}</h1>
          <p className="mt-3 text-sm text-stone-500">
            By {g.author} · Updated {updated} · {g.readMinutes} min read
          </p>
          <div className="mt-6 max-w-prose rounded-xl border border-glacier/20 bg-glacier-soft p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-glacier">In short</p>
            <p className="mt-2 text-[17px] text-glacier-dark">{inline(g.summary)}</p>
          </div>
          <nav aria-label="Contents" className="mt-8 max-w-prose">
            <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">Contents</p>
            <ol className="mt-2 list-decimal space-y-1 pl-5 text-[15px]">
              {g.sections.map((s) => (
                <li key={s.h2}>
                  <a href={`#${sectionId(s)}`} className="link">
                    {s.h2}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <div className="mt-10">
            <Sections sections={g.sections} />
            {g.faqs && <Faq items={g.faqs} />}
            {g.sources && (
              <section className="prose-section">
                <h2>Official sources</h2>
                <ul>
                  {g.sources.map((s) => (
                    <li key={s.url}>
                      <a href={s.url} className="link" rel="noopener" target="_blank">
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-stone-500">Rules and dates are set by these authorities and can change. Always check them before you travel.</p>
              </section>
            )}
          </div>
        </article>
        <aside id="enquire" className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          {hub && (
            <Link href={hub.path} className="card block p-5">
              <p className="eyebrow">Ready to go?</p>
              <p className="mt-1 font-display text-xl text-stone-900">{hub.name} packages</p>
              <p className="mt-1 text-sm text-stone-500">{hub.description}</p>
            </Link>
          )}
          <div className="rounded-2xl border border-stone-200 bg-white p-5">
            <p className="font-display text-xl text-stone-900">Ask our yatra team</p>
            <p className="mb-4 mt-1 text-sm text-stone-500">Free advice, with no obligation to book.</p>
            <EnquiryForm defaultYatra={hub?.enquiry} compact />
          </div>
        </aside>
      </div>
    </>
  );
}
