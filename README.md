# indianpilgrim.com

SEO-first website for **Indian Pilgrim**, a pilgrimage-only tour operator. Priority yatras:

1. Char Dham Yatra
2. Do Dham Yatra (Kedarnath & Badrinath)
3. Vaishno Devi Yatra
4. Other Indian pilgrimages (Jyotirlinga, Kashi–Ayodhya, Amarnath)
5. Pashupatinath, Nepal
6. Kailash Mansarovar Yatra

## Stack

Next.js (App Router, fully static generation) · TypeScript · Tailwind CSS. No database is needed. Enquiries open
WhatsApp with the form details pre-filled.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build, all pages pre-rendered
```

## Where content lives

| File | What it holds |
|---|---|
| `src/data/site.ts` | Business name, phone, WhatsApp, email, address, registrations, season banner |
| `src/data/char-dham.ts` | Char Dham hub + Haridwar, Delhi, helicopter, charter, senior-citizen pages |
| `src/data/do-dham.ts` | Do Dham hub + variants, Kedarnath, Badrinath, Yamunotri–Gangotri |
| `src/data/vaishno-devi.ts` | Vaishno Devi hub + Delhi, helicopter, Amritsar pages |
| `src/data/more.ts` | International landing page, Pashupatinath, Kailash, Jyotirlinga, Kashi–Ayodhya, Amarnath |
| `src/data/guides.ts` | Blog / planning guides |

Every landing page is one object (`LandingPage` in `src/data/types.ts`): URL, title, meta description, H1, key
facts, itinerary, tiers, inclusions, content sections, FAQs and related links. Adding a page = adding an object.
Text supports `[link](/path/)` and `**bold**`.

## SEO built in

- Clean, year-free URLs with trailing slashes (`/char-dham-yatra/from-haridwar/`); the season year lives in titles/H1s
- One H1 per page, question-led H2s, canonical tags, Open Graph/Twitter cards
- JSON-LD: `TravelAgency`, `WebSite`, `TouristTrip` (with temple itinerary), `BreadcrumbList`, `FAQPage`, `Article`
- Auto-generated `/sitemap.xml` and `/robots.txt`, `/llms.txt`
- Hub-and-spoke internal linking: hubs → package pages → guides → back to hubs; breadcrumbs everywhere
- Self-hosted fonts, inline SVG artwork (no image weight), static HTML — fast Core Web Vitals
- Mobile sticky Call / WhatsApp / Enquire bar; GA4 events `click_call`, `click_whatsapp`, `enquiry_submit`

## Before launch — must do

- [ ] `src/data/site.ts`: real phone, WhatsApp, email, office address, legal name, registrations (GST, Uttarakhand Tourism, etc.), social links
- [ ] Set `priceFrom` on itineraries once prices are final (shows "from ₹…" and adds `Offer` schema)
- [ ] Confirm service promises match what the team actually provides (oxygen can in vehicle, coordinator availability, pickups)
- [ ] Replace `AUTHOR` in `src/data/guides.ts` with a real named team member (E-E-A-T)
- [ ] Add real trip photos (WebP/AVIF, descriptive filenames and alt text) to replace the SVG artwork
- [ ] Replace terms / cancellation pages with the real booking terms
- [ ] Re-check 2026 closing dates and 2027 opening dates against official announcements

## Deploy (Vercel) and connect the Hostinger domain

1. Import this repository in Vercel (framework preset: Next.js, no settings needed).
2. Vercel → Project → Settings → Domains: add `www.indianpilgrim.com` and `indianpilgrim.com` (redirect apex → www).
3. Hostinger → Domains → indianpilgrim.com → DNS / Nameservers. Remove the parking records, then add:
   - `A` record, name `@`, value `76.76.21.21`
   - `CNAME` record, name `www`, value `cname.vercel-dns.com`
   (Use the exact values Vercel shows on the Domains screen if they differ.)
4. After DNS propagates, add the site to Google Search Console and submit `https://www.indianpilgrim.com/sitemap.xml`.
