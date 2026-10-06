import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Terms", description: "Terms for using the Indian Pilgrim website and booking a yatra.", robots: { index: false, follow: true }, alternates: { canonical: "/terms/" } };

// TODO: replace with booking terms reviewed by the business before launch.
export default function Terms() {
  return (
    <LegalPage title="Terms" path="/terms/">
      <p>The itineraries, timings and distances on this website are for planning and may change because of weather, road conditions, temple committee decisions and government rules.</p>
      <p>Your confirmed booking is governed by the written quote and booking terms we send you before you pay any deposit.</p>
    </LegalPage>
  );
}
