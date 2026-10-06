import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EnquiryForm } from "@/components/EnquiryForm";
import { site, whatsappLink } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Indian Pilgrim | Call, WhatsApp or Visit",
  description: `Talk to our yatra team about Char Dham, Kedarnath, Badrinath and Vaishno Devi. Call or WhatsApp ${site.phoneDisplay}, or send an enquiry.`,
  path: "/contact/",
});

export default function Contact() {
  const a = site.address;
  const mapQuery = a && encodeURIComponent(`${site.name}, ${a.street}, ${a.locality}, ${a.region}`);
  return (
    <div className="container-x pt-6">
      <Breadcrumbs trail={[{ name: "Contact", path: "/contact/" }]} />
      <h1 className="mt-6 font-display text-4xl text-stone-900 sm:text-5xl">Contact us</h1>
      <div className="mt-8 grid gap-10 lg:grid-cols-2">
        <div className="space-y-6 text-[17px]">
          <div>
            <p className="eyebrow">Call</p>
            <a href={`tel:${site.phoneE164}`} className="font-display text-2xl text-stone-900">{site.phoneDisplay}</a>
            {site.hours && <p className="text-sm text-stone-500">{site.hours}</p>}
          </div>
          <div>
            <p className="eyebrow">WhatsApp</p>
            <a href={whatsappLink("Namaste, I'd like help planning a yatra.")} target="_blank" rel="noopener" className="link">Start a WhatsApp chat</a>
          </div>
          <div>
            <p className="eyebrow">Email</p>
            <a href={`mailto:${site.email}`} className="link">{site.email}</a>
          </div>
          {a && (
          <div>
            <p className="eyebrow">Office</p>
            <address className="not-italic">
              {a.street}
              <br />
              {a.locality}, {a.region} {a.postalCode}, India
            </address>
            <a href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`} target="_blank" rel="noopener" className="link text-sm">Open in Google Maps</a>
          </div>
          )}
        </div>
        <div id="enquire" className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="font-display text-2xl text-stone-900">Send an enquiry</p>
          <p className="mb-4 mt-1 text-sm text-stone-500">Tell us your yatra, month and group size.</p>
          <EnquiryForm />
        </div>
      </div>
    </div>
  );
}
