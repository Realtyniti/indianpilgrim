"use client";

import { usePathname } from "next/navigation";
import { site, whatsappLink } from "@/data/site";
import { track } from "@/lib/track";

/** Sticky Call / WhatsApp / Enquire bar on mobile; floating WhatsApp button on desktop. */
export function ContactBar() {
  const path = usePathname();
  const msg = `Namaste, I'm interested in a yatra. (Page: ${site.url}${path})`;
  return (
    <>
      <div
        className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-stone-200 bg-white text-sm font-semibold lg:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      >
        <a href={`tel:${site.phoneE164}`} onClick={() => track("click_call")} className="flex items-center justify-center gap-2 py-3.5 text-glacier">
          <PhoneIcon /> Call
        </a>
        <a
          href={whatsappLink(msg)}
          onClick={() => track("click_whatsapp")}
          target="_blank"
          rel="noopener"
          className="flex items-center justify-center gap-2 bg-[#1f8f4e] py-3.5 text-white"
        >
          <WaIcon /> WhatsApp
        </a>
        <a href="#enquire" className="flex items-center justify-center bg-sindoor py-3.5 text-white">
          Enquire
        </a>
      </div>
      <a
        href={whatsappLink(msg)}
        onClick={() => track("click_whatsapp")}
        target="_blank"
        rel="noopener"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-[#1f8f4e] text-white shadow-lg hover:scale-105 lg:flex"
      >
        <WaIcon className="h-7 w-7" />
      </a>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path fill="currentColor" d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z" />
    </svg>
  );
}

export function WaIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z" />
    </svg>
  );
}
