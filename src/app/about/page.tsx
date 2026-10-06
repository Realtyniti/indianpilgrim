import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { site } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Indian Pilgrim | Pilgrimage-Only Tour Specialists",
  description: "Who we are, why we plan only pilgrimages, and how we look after pilgrims on the Char Dham, Kedarnath and Vaishno Devi yatras.",
  path: "/about/",
});

export default function About() {
  return (
    <div className="container-x max-w-4xl pt-6">
      <Breadcrumbs trail={[{ name: "About us", path: "/about/" }]} />
      <h1 className="mt-6 font-display text-4xl text-stone-900 sm:text-5xl">About {site.name}</h1>
      <div className="prose-section mt-6">
        <p>
          {site.name} plans Hindu pilgrimages, and nothing else. We started with the Uttarakhand Char Dham and the Vaishno Devi yatra, and
          today plan pilgrimages across India, to Pashupatinath in Nepal and to Kailash Mansarovar.
        </p>
        <p>
          Many of the people who contact us are planning a yatra for their parents. So we plan the way a careful family member would: realistic
          daily distances, rest days at altitude, hotels we have checked ourselves, and an honest answer when a plan is not a good idea.
        </p>
        <h2>How we work</h2>
        <ul>
          <li>Every quote names the hotels, the vehicle and what is not included</li>
          <li>We complete yatra registrations and plan darshan around the quietest times</li>
          <li>A coordinator stays reachable throughout your trip</li>
          <li>We send pilgrims to official booking channels for government-controlled tickets, such as the IRCTC Kedarnath helicopter</li>
        </ul>
        {site.registrations.length > 0 && (
          <>
            <h2>Registrations</h2>
            <ul>
              {site.registrations.map((r) => (
                <li key={r.label}>
                  {r.label}: {r.value}
                </li>
              ))}
            </ul>
          </>
        )}
        <p>
          <Link href="/contact/" className="link">Contact our yatra team</Link> or{" "}
          <Link href="/plan-my-yatra/" className="link">ask for a free yatra plan</Link>.
        </p>
      </div>
    </div>
  );
}
