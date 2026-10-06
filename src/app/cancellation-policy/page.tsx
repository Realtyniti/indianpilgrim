import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Cancellation policy", description: "How cancellations and refunds work for Indian Pilgrim yatra bookings.", robots: { index: false, follow: true }, alternates: { canonical: "/cancellation-policy/" } };

// TODO: publish the actual cancellation and refund slabs before launch.
export default function Cancellation() {
  return (
    <LegalPage title="Cancellation policy" path="/cancellation-policy/">
      <p>Cancellation and refund terms are set out in writing in your quote before you pay any deposit.</p>
      <p>Helicopter tickets and some hotel bookings follow the cancellation rules of the operator or hotel. We tell you which rules apply to your booking before you confirm.</p>
    </LegalPage>
  );
}
