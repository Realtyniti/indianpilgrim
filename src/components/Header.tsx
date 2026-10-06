import Link from "next/link";
import { site } from "@/data/site";

const primary = [
  { href: "/char-dham-yatra/", label: "Char Dham" },
  { href: "/do-dham-yatra/", label: "Do Dham" },
  { href: "/vaishno-devi-yatra/", label: "Vaishno Devi" },
];

const more = [
  { href: "/kedarnath-yatra/", label: "Kedarnath Yatra" },
  { href: "/badrinath-yatra/", label: "Badrinath Yatra" },
  { href: "/char-dham-yatra/by-helicopter/", label: "Char Dham by Helicopter" },
  { href: "/jyotirlinga-yatra/", label: "Jyotirlinga Yatra" },
  { href: "/kashi-ayodhya-yatra/", label: "Kashi · Ayodhya" },
  { href: "/amarnath-yatra/", label: "Amarnath Yatra" },
  { href: "/pashupatinath-nepal-tour/", label: "Pashupatinath, Nepal" },
  { href: "/kailash-mansarovar-yatra/", label: "Kailash Mansarovar" },
  { href: "/hindu-pilgrimage-tours-india/", label: "For international pilgrims" },
];

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
      <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden="true">
        <circle cx="20" cy="20" r="20" fill="#a8431a" />
        <path d="M10 29 L20 11 L30 29Z" fill="#fcefd4" />
        <path d="M16 29 Q16 22 20 18 Q24 22 24 29Z" fill="#a8431a" />
        <rect x="19.3" y="6" width="1.4" height="6" fill="#fcefd4" />
        <path d="M20.7 6 L26 7.8 L20.7 9.6Z" fill="#e59a1c" />
      </svg>
      <span className="font-display text-xl leading-none text-stone-900">
        Indian<span className="text-sindoor">Pilgrim</span>
      </span>
    </Link>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200 bg-stone-50/95 backdrop-blur" style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}>
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-6 text-[15px] font-medium text-stone-700 lg:flex">
          {primary.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-sindoor">
              {l.label}
            </Link>
          ))}
          <details className="nav-more relative">
            <summary className="cursor-pointer list-none hover:text-sindoor">More yatras ▾</summary>
            <div className="absolute right-0 top-8 w-64 rounded-lg border border-stone-200 bg-white p-2 shadow-lg">
              {more.map((l) => (
                <Link key={l.href} href={l.href} className="block rounded px-3 py-2 hover:bg-stone-100">
                  {l.label}
                </Link>
              ))}
            </div>
          </details>
          <Link href="/guides/" className="hover:text-sindoor">
            Guides
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <a href={`tel:${site.phoneE164}`} className="hidden text-sm font-semibold text-glacier sm:block">
            {site.phoneDisplay}
          </a>
          <Link href="/plan-my-yatra/" className="btn btn-primary hidden sm:inline-flex">
            Plan my yatra
          </Link>
          <details className="nav-mobile lg:hidden">
            <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-md border border-stone-200" aria-label="Open menu">
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </summary>
            <div className="absolute inset-x-0 top-16 max-h-[80vh] overflow-y-auto border-b border-stone-200 bg-stone-50 px-4 pb-6 pt-2 shadow-lg">
              {[...primary, ...more, { href: "/guides/", label: "Yatra guides" }, { href: "/contact/", label: "Contact" }].map((l) => (
                <Link key={l.href} href={l.href} className="block border-b border-stone-100 py-3 text-base">
                  {l.label}
                </Link>
              ))}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
