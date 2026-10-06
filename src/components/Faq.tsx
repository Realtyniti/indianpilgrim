import type { Faq as FaqItem } from "@/data/types";
import { inline } from "@/lib/inline";

export function Faq({ items, heading = "Frequently asked questions" }: { items: FaqItem[]; heading?: string }) {
  if (!items.length) return null;
  return (
    <section id="faq" className="prose-section">
      <h2>{heading}</h2>
      <div className="faq">
        {items.map((f) => (
          <details key={f.q}>
            <summary>
              <h3>{f.q}</h3>
            </summary>
            <p>{inline(f.a)}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
