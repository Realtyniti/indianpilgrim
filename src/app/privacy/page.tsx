import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Privacy policy", description: "How Indian Pilgrim handles the details you share when you enquire about a yatra.", robots: { index: false, follow: true }, alternates: { canonical: "/privacy/" } };

export default function Privacy() {
  return (
    <LegalPage title="Privacy policy" path="/privacy/">
      <p>This website does not store the details you type into its enquiry forms. When you send an enquiry, your details open in WhatsApp on your own device, and you choose whether to send them to us.</p>
      <p>When you contact us by WhatsApp, phone or email, we use your details only to plan and operate your yatra, including sharing the necessary details with hotels, transport providers and government registration systems.</p>
      <p>If analytics are enabled, the site uses Google Analytics to understand which pages are useful. It does not identify you personally.</p>
      <p>To ask about or delete your data, write to {site.email}.</p>
    </LegalPage>
  );
}
