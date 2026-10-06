"use client";

import { useState, type FormEvent } from "react";
import { site, whatsappLink } from "@/data/site";
import { track } from "@/lib/track";
import { WaIcon } from "./ContactBar";

const YATRAS = [
  "Char Dham Yatra",
  "Do Dham Yatra (Kedarnath & Badrinath)",
  "Vaishno Devi Yatra",
  "Kedarnath Yatra",
  "Char Dham by Helicopter",
  "Jyotirlinga Yatra",
  "Kashi · Ayodhya Yatra",
  "Pashupatinath, Nepal",
  "Kailash Mansarovar Yatra",
  "Other / not sure yet",
];

/**
 * Enquiry form. Until a lead inbox is connected, submitting opens WhatsApp
 * with the enquiry pre-written, so no enquiry is ever silently lost.
 */
export function EnquiryForm({ defaultYatra, compact = false }: { defaultYatra?: string; compact?: boolean }) {
  const [sent, setSent] = useState(false);
  const yatras = defaultYatra && !YATRAS.includes(defaultYatra) ? [defaultYatra, ...YATRAS] : YATRAS;

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const lines = [
      "Namaste! I'd like a yatra plan.",
      `Name: ${f.get("name")}`,
      `Phone: ${f.get("phone")}`,
      `Yatra: ${f.get("yatra")}`,
      f.get("month") && `Travel month: ${f.get("month")}`,
      f.get("travellers") && `Travellers: ${f.get("travellers")}`,
      f.get("city") && `Starting city: ${f.get("city")}`,
      f.get("notes") && `Notes: ${f.get("notes")}`,
    ].filter(Boolean);
    track("enquiry_submit", { yatra: f.get("yatra") });
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener");
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3" aria-label="Yatra enquiry">
      <div className={`grid gap-3 ${compact ? "" : "sm:grid-cols-2"}`}>
        <Field id="enq-name" label="Your name" name="name" required autoComplete="name" />
        <Field id="enq-phone" label="Phone / WhatsApp" name="phone" type="tel" required autoComplete="tel" inputMode="tel" />
        <label className="field">
          <span>Yatra</span>
          <select id="enq-yatra" name="yatra" defaultValue={defaultYatra ?? YATRAS[0]}>
            {yatras.map((y) => (
              <option key={y}>{y}</option>
            ))}
          </select>
        </label>
        <Field id="enq-month" label="Travel month" name="month" placeholder="e.g. May 2027" />
        {!compact && (
          <>
            <Field id="enq-travellers" label="Number of travellers" name="travellers" inputMode="numeric" placeholder="e.g. 2 adults, 2 seniors" />
            <Field id="enq-city" label="Starting city" name="city" placeholder="e.g. Delhi, Haridwar, London" />
          </>
        )}
      </div>
      {!compact && (
        <label className="field">
          <span>Anything we should know? (optional)</span>
          <textarea id="enq-notes" name="notes" rows={3} placeholder="Senior citizens, helicopter, special puja…" />
        </label>
      )}
      <button type="submit" className="btn btn-whatsapp w-full justify-center">
        <WaIcon /> Send enquiry on WhatsApp
      </button>
      <p className="text-xs text-stone-500" aria-live="polite">
        {sent
          ? "WhatsApp should have opened with your enquiry. Tap send there to reach us. If it didn't open, call us on " + site.phoneDisplay + "."
          : `Opens WhatsApp with your details filled in. Prefer email? Write to ${site.email}.`}
      </p>
    </form>
  );
}

function Field({ id, label, ...props }: { id: string; label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="field" htmlFor={id}>
      <span>{label}</span>
      <input id={id} {...props} />
    </label>
  );
}
