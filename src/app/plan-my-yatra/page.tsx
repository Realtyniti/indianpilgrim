import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EnquiryForm } from "@/components/EnquiryForm";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Plan My Yatra | Free Pilgrimage Itinerary & Quote",
  description: "Tell us your yatra, dates and group, and get a free day-by-day plan with named hotels and a clear per-person price.",
  path: "/plan-my-yatra/",
});

const steps = [
  { t: "Tell us the basics", d: "Your yatra, travel month, group size, starting city and any health needs." },
  { t: "Get your plan", d: "A day-by-day route with named hotels, the vehicle and a per-person price." },
  { t: "Adjust and confirm", d: "Change anything you like. Pay a deposit only once you are happy with the plan." },
];

export default function PlanMyYatra() {
  return (
    <div className="container-x max-w-5xl pt-6">
      <Breadcrumbs trail={[{ name: "Plan my yatra", path: "/plan-my-yatra/" }]} />
      <h1 className="mt-6 font-display text-4xl text-stone-900 sm:text-5xl">Plan my yatra</h1>
      <ol className="mt-8 grid gap-4 sm:grid-cols-3">
        {steps.map((s, i) => (
          <li key={s.t} className="rounded-xl border border-stone-200 bg-white p-4">
            <p className="font-display text-2xl text-sindoor">{i + 1}</p>
            <p className="mt-1 font-semibold text-stone-900">{s.t}</p>
            <p className="mt-1 text-sm text-stone-500">{s.d}</p>
          </li>
        ))}
      </ol>
      <div id="enquire" className="mt-8 rounded-2xl border border-stone-200 bg-white p-6">
        <EnquiryForm />
      </div>
    </div>
  );
}
