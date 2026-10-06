import type { Metadata, Viewport } from "next";
import { Mukta, Spectral } from "next/font/google";
import Script from "next/script";
import { ContactBar } from "@/components/ContactBar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/data/site";
import "./globals.css";

const display = Spectral({ subsets: ["latin"], weight: ["500", "600"], variable: "--font-display", display: "swap" });
const body = Mukta({ subsets: ["latin", "devanagari"], weight: ["400", "500", "600", "700"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name}: Char Dham, Do Dham & Vaishno Devi Yatra`, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  formatDetection: { telephone: false },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
  },
};

export const viewport: Viewport = { themeColor: "#a8431a", width: "device-width", initialScale: 1, viewportFit: "cover" };

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const organization = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": `${site.url}/#organization`,
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  logo: `${site.url}/icon.svg`,
  description: site.description,
  telephone: site.phoneE164,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  areaServed: ["IN", "NP"],
  knowsAbout: ["Char Dham Yatra", "Do Dham Yatra", "Kedarnath Yatra", "Badrinath Yatra", "Vaishno Devi Yatra", "Kailash Mansarovar Yatra", "Hindu pilgrimage"],
  ...(site.social.length && { sameAs: site.social }),
  ...(site.foundedYear && { foundingDate: String(site.foundedYear) }),
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.name,
  publisher: { "@id": `${site.url}/#organization` },
  inLanguage: "en-IN",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${body.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-white focus:px-4 focus:py-2">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <ContactBar />
        <JsonLd data={[organization, website]} />
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
