type Gtag = (cmd: "event", name: string, params?: Record<string, unknown>) => void;

/** Sends a GA4 event when gtag is loaded (see NEXT_PUBLIC_GA_ID); otherwise a no-op. */
export function track(name: "click_call" | "click_whatsapp" | "enquiry_submit", params?: Record<string, unknown>) {
  const gtag = (globalThis as { gtag?: Gtag }).gtag;
  gtag?.("event", name, params);
}
