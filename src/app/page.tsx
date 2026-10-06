import type { Metadata } from "next";
import Link from "next/link";
import { Art } from "@/components/Art";
import { WaIcon } from "@/components/ContactBar";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { PackageCard } from "@/components/PackageCard";
import { pageByPath } from "@/data";
import { guides } from "@/data/guides";
import { season, site, whatsappLink } from "@/data/site";
import type { Art as ArtKind, LandingPage } from "@/data/types";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Char Dham, Kedarnath & Vaishno Devi Yatra | Indian Pilgrim",
  description:
    "Pilgrimage-only specialists for Char Dham, Do Dham (Kedarnath & Badrinath) and Vaishno Devi yatras. Get a free yatra plan on WhatsApp.",
  path: "/",
});

const hubs: { path: string; label: string; sub: string; art: ArtKind }[] = [
  { path: "/char-dham-yatra/", label: "Char Dham Yatra", sub: "Yamunotri · Gangotri · Kedarnath · Badrinath", art: "char-dham" },
  { path: "/do-dham-yatra/", label: "Do Dham Yatra", sub: "Kedarnath & Badrinath", art: "kedarnath" },
  { path: "/vaishno-devi-yatra/", label: "Vaishno Devi Yatra", sub: "Katra · Bhawan · Bhairon", art: "vaishno" },
];

const featured = [
  "/char-dham-yatra/from-haridwar/",
  "/do-dham-yatra/from-haridwar/",
  "/vaishno-devi-yatra/from-delhi/",
  "/char-dham-yatra/by-helicopter/",
  "/char-dham-yatra/from-delhi/",
  "/kedarnath-yatra/",
]
  .map(pageByPath)
  .filter((p): p is LandingPage => !!p);

const ways = [
  { path: "/char-dham-yatra/from-haridwar/", title: "By road", text: "The classic yatra in 10–12 days, with time at every shrine." },
  { path: "/char-dham-yatra/by-helicopter/", title: "By helicopter", text: "All four dhams in 6 days from Dehradun, with little walking." },
  { path: "/char-dham-yatra/private-charter/", title: "Private charter", text: "Your own helicopter, your own pace. For families and NRIs." },
  { path: "/char-dham-yatra/for-senior-citizens/", title: "For senior citizens", text: "Shorter drives, rest days, palki and helicopter options." },
];

const more: { path: string; label: string; art: ArtKind }[] = [
  { path: "/jyotirlinga-yatra/", label: "Jyotirlinga Yatra", art: "temple" },
  { path: "/kashi-ayodhya-yatra/", label: "Kashi · Prayagraj · Ayodhya", art: "ganga" },
  { path: "/amarnath-yatra/", label: "Amarnath Yatra", art: "kailash" },
  { path: "/pashupatinath-nepal-tour/", label: "Pashupatinath, Nepal", art: "pashupati" },
  { path: "/kailash-mansarovar-yatra/", label: "Kailash Mansarovar", art: "kailash" },
];

const promises = [
  { title: "Pilgrimage is all we do", text: "No beach holidays, no honeymoon packages. Every route is planned around darshan, aarti and the rituals that matter to you." },
  { title: "Hotels named before you pay", text: "Your quote lists the exact hotel for every night, the vehicle and what is excluded. No \"or similar\"." },
  { title: "Registration and darshan help", text: "We complete the mandatory yatra registrations and plan your days around the quietest darshan times." },
  { title: "Someone to call, all the way", text: "A coordinator stays reachable on phone and WhatsApp through the whole yatra, including when the weather changes plans." },
];

const homeFaqs = [
  { q: "Which yatra should I choose first: Char Dham or Do Dham?", a: "If you have 10 or more days and reasonable fitness, the full [Char Dham Yatra](/char-dham-yatra/) is the complete pilgrimage. With 6–7 days, or with elderly parents, the [Do Dham Yatra](/do-dham-yatra/) to Kedarnath and Badrinath is the most rewarding choice." },
  { q: "When should I book the Char Dham Yatra for 2027?", a: "Start planning in December or January. Hotels near Kedarnath and helicopter seats for May, June and October fill up early. The shrines open in late April or May." },
  { q: "Do you arrange Vaishno Devi helicopter tickets?", a: "Helicopter tickets are sold only through the Shri Mata Vaishno Devi Shrine Board's official portal. We plan your trip around the slot you book, and arrange a pony or palki as a backup." },
  { q: "Do you plan pilgrimages for international travellers?", a: "Yes. We plan private pilgrimage tours for NRI families and international devotees, with airport pickup and help with visas and temple etiquette. See [Hindu pilgrimage tours of India](/hindu-pilgrimage-tours-india/)." },
  { q: "How do I get a price?", a: "Send us your yatra, month and group size on WhatsApp or through the form. We reply with a day-by-day plan, named hotels and a per-person price." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <Art art="char-dham" className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 bg-stone-50/90 lg:bg-transparent lg:bg-gradient-to-r lg:from-stone-50 lg:via-stone-50/90 lg:to-stone-50/20" />
        <div className="container-x relative grid gap-10 pb-14 pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:pt-16">
          <div>
            <p className="eyebrow">Hindu pilgrimage specialists · India &amp; the Himalaya</p>
            <h1 className="mt-3 font-display text-4xl leading-[1.1] text-stone-900 sm:text-5xl lg:text-[56px]">
              Char Dham, Kedarnath and Vaishno Devi yatras, planned with care
            </h1>
            <p className="mt-5 max-w-prose text-lg text-stone-700">
              Choose your yatra and we'll plan the rest: the route, the hotels, the registration and the darshan timings. Our pacing suits
              elderly parents and our advice is honest, from the first call until you are home.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {hubs.map((h) => (
                <Link key={h.path} href={h.path} className="card group overflow-hidden">
                  <Art art={h.art} className="hidden h-16 w-full sm:block" />
                  <div className="p-3">
                    <p className="font-display text-lg leading-tight text-stone-900 group-hover:text-sindoor">{h.label}</p>
                    <p className="mt-0.5 text-xs text-stone-500">{h.sub}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href={whatsappLink("Namaste, I'd like help planning a yatra.")} target="_blank" rel="noopener" className="btn btn-whatsapp">
                <WaIcon /> Chat on WhatsApp
              </a>
              <a href={`tel:${site.phoneE164}`} className="btn btn-outline">
                Call {site.phoneDisplay}
              </a>
            </div>
          </div>
          <div id="enquire" className="self-start rounded-2xl border border-stone-200 bg-white/95 p-5 shadow-sm backdrop-blur">
            <p className="font-display text-2xl text-stone-900">Get a free yatra plan</p>
            <p className="mb-4 mt-1 text-sm text-stone-500">A day-by-day route, named hotels and a clear per-person price.</p>
            <EnquiryForm />
          </div>
        </div>
      </section>

      {/* Season bar */}
      <div className="border-y border-marigold/40 bg-marigold-soft">
        <div className="container-x flex flex-col gap-1 py-3 text-sm sm:flex-row sm:items-center sm:gap-3">
          <span className="font-semibold text-sindoor-dark">{season.label}</span>
          <span className="text-stone-700">{season.status}</span>
          <Link href="/guides/char-dham-opening-closing-dates/" className="link sm:ml-auto">
            Opening &amp; closing dates
          </Link>
        </div>
      </div>

      {/* Featured */}
      <section className="container-x mt-14">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="eyebrow">Most-booked yatras</p>
            <h2 className="mt-1 font-display text-3xl text-stone-900">Yatra packages for {season.nextYear}</h2>
          </div>
          <Link href="/char-dham-yatra/" className="link">
            All Char Dham packages →
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <PackageCard key={p.path} page={p} />
          ))}
        </div>
      </section>

      {/* Ways to travel */}
      <section className="container-x mt-16">
        <p className="eyebrow">Char Dham, your way</p>
        <h2 className="mt-1 font-display text-3xl text-stone-900">Choose how you travel</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ways.map((w) => (
            <Link key={w.path} href={w.path} className="card group p-5">
              <p className="font-display text-xl text-stone-900 group-hover:text-sindoor">{w.title}</p>
              <p className="mt-2 text-[15px] text-stone-700">{w.text}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="mt-16 bg-glacier-dark py-14 text-white">
        <div className="container-x">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-marigold">Why travel with us</p>
          <h2 className="mt-1 font-display text-3xl">A yatra is not a holiday. We plan it like one would for family.</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {promises.map((p) => (
              <div key={p.title}>
                <p className="text-lg font-semibold">{p.title}</p>
                <p className="mt-2 text-[15px] text-white/80">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More journeys */}
      <section className="container-x mt-16">
        <p className="eyebrow">Beyond the Char Dham</p>
        <h2 className="mt-1 font-display text-3xl text-stone-900">More sacred journeys</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-5">
          {more.map((m) => (
            <Link key={m.path} href={m.path} className="card group overflow-hidden">
              <Art art={m.art} className="h-20 w-full" />
              <p className="p-3 font-display leading-tight text-stone-900 group-hover:text-sindoor">{m.label}</p>
            </Link>
          ))}
        </div>
        <p className="mt-4 text-[15px] text-stone-700">
          Travelling from abroad? See our <Link href="/hindu-pilgrimage-tours-india/" className="link">Hindu pilgrimage tours for international travellers</Link>.
        </p>
      </section>

      {/* Guides */}
      <section className="container-x mt-16">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="eyebrow">Plan with confidence</p>
            <h2 className="mt-1 font-display text-3xl text-stone-900">Yatra guides</h2>
          </div>
          <Link href="/guides/" className="link">
            All guides →
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {guides.slice(0, 4).map((g) => (
            <Link key={g.slug} href={`/guides/${g.slug}/`} className="card group p-5">
              <p className="font-display text-lg leading-snug text-stone-900 group-hover:text-sindoor">{g.h1}</p>
              <p className="mt-2 line-clamp-3 text-sm text-stone-500">{g.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-x mt-16 max-w-4xl">
        <Faq items={homeFaqs} />
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: homeFaqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") },
          })),
        }}
      />
    </>
  );
}
