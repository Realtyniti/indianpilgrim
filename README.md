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

## Deploy to Hostinger (static hosting)

`npm run build` writes the whole site as plain HTML to `out/` (including `.htaccess` for HTTPS, www and redirects).

1. Run `npm run build`, then zip the **contents** of `out/` (not the folder itself).
2. hPanel → Websites → indianpilgrim.com → File Manager → open `public_html`.
3. Delete the Hostinger parking/default files (e.g. `default.php`, `index.php`), upload the zip, and **Extract** it inside `public_html`.
   `public_html` must directly contain `index.html`, `.htaccess`, `_next/`, `char-dham-yatra/`, etc.
4. hPanel → Security → SSL: make sure the free SSL certificate is active for `indianpilgrim.com` and `www.indianpilgrim.com`.
5. Visit https://www.indianpilgrim.com, then add the site to Google Search Console and submit `https://www.indianpilgrim.com/sitemap.xml`.

The same build also deploys unchanged to Vercel or any static host.
