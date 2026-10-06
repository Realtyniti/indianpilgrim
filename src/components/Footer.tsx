import Link from "next/link";
import { site } from "@/data/site";
import { Logo } from "./Header";

const cols = [
  {
    title: "Char Dham",
    links: [
      ["/char-dham-yatra/", "Char Dham Yatra packages"],
      ["/char-dham-yatra/from-haridwar/", "Char Dham from Haridwar"],
      ["/char-dham-yatra/from-delhi/", "Char Dham from Delhi"],
      ["/char-dham-yatra/by-helicopter/", "Char Dham by helicopter"],
      ["/char-dham-yatra/private-charter/", "Private charter"],
      ["/char-dham-yatra/for-senior-citizens/", "For senior citizens"],
    ],
  },
  {
    title: "Kedarnath · Badrinath",
    links: [
      ["/do-dham-yatra/", "Do Dham Yatra"],
      ["/do-dham-yatra/from-haridwar/", "Do Dham from Haridwar"],
      ["/do-dham-yatra/from-delhi/", "Do Dham from Delhi"],
      ["/kedarnath-yatra/", "Kedarnath Yatra"],
      ["/kedarnath-yatra/by-helicopter/", "Kedarnath by helicopter"],
      ["/badrinath-yatra/", "Badrinath Yatra"],
    ],
  },
  {
    title: "More yatras",
    links: [
      ["/vaishno-devi-yatra/", "Vaishno Devi Yatra"],
      ["/vaishno-devi-yatra/from-delhi/", "Vaishno Devi from Delhi"],
      ["/jyotirlinga-yatra/", "Jyotirlinga Yatra"],
      ["/kashi-ayodhya-yatra/", "Kashi · Ayodhya"],
      ["/pashupatinath-nepal-tour/", "Pashupatinath, Nepal"],
      ["/kailash-mansarovar-yatra/", "Kailash Mansarovar"],
    ],
  },
  {
    title: "Plan",
    links: [
      ["/guides/", "Yatra guides"],
      ["/guides/char-dham-registration/", "Char Dham registration"],
      ["/hindu-pilgrimage-tours-india/", "International pilgrims"],
      ["/about/", "About us"],
      ["/contact/", "Contact"],
      ["/plan-my-yatra/", "Plan my yatra"],
    ],
  },
];

export function Footer() {
  const a = site.address;
  return (
    <footer className="mt-20 border-t border-stone-200 bg-stone-100 pb-28 pt-12 lg:pb-12">
      <div className="container-x grid gap-10 lg:grid-cols-[1.2fr_repeat(4,1fr)]">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-xs text-sm text-stone-500">{site.description}</p>
          <address className="not-italic text-sm leading-relaxed text-stone-700">
            {a.street}, {a.locality}, {a.region} {a.postalCode}
            <br />
            <a href={`tel:${site.phoneE164}`} className="font-semibold">
              {site.phoneDisplay}
            </a>
            <br />
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <br />
            <span className="text-stone-500">{site.hours}</span>
          </address>
        </div>
        {cols.map((c) => (
          <nav key={c.title} aria-label={c.title}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-stone-500">{c.title}</p>
            <ul className="space-y-2 text-sm">
              {c.links.map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="text-stone-700 hover:text-sindoor">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="container-x mt-10 flex flex-col gap-3 border-t border-stone-200 pt-6 text-xs text-stone-500 sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.legalName}. Temple timings, registration rules and season dates are set by
          the temple committees and governments and may change.
        </p>
        <p className="flex gap-4">
          <Link href="/terms/">Terms</Link>
          <Link href="/privacy/">Privacy</Link>
          <Link href="/cancellation-policy/">Cancellation policy</Link>
        </p>
      </div>
    </footer>
  );
}
