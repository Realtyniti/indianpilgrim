import { inline } from "@/lib/inline";
import type { Block, Section } from "@/data/types";

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.type) {
          case "p":
            return <p key={i}>{inline(b.text)}</p>;
          case "ul":
            return (
              <ul key={i}>
                {b.items.map((t, j) => (
                  <li key={j}>{inline(t)}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i}>
                {b.items.map((t, j) => (
                  <li key={j}>{inline(t)}</li>
                ))}
              </ol>
            );
          case "table":
            return (
              <div key={i} className="table-wrap">
                <table>
                  {b.caption && <caption>{b.caption}</caption>}
                  <thead>
                    <tr>
                      {b.head.map((h) => (
                        <th key={h} scope="col">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((r, j) => (
                      <tr key={j}>
                        {r.map((c, k) => (k === 0 ? <th key={k} scope="row">{inline(c)}</th> : <td key={k}>{inline(c)}</td>))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "callout":
            return (
              <aside key={i} className={`callout ${b.tone === "warn" ? "callout-warn" : ""}`}>
                {b.title && <p className="callout-title">{b.title}</p>}
                <p>{inline(b.text)}</p>
              </aside>
            );
        }
      })}
    </>
  );
}

export const sectionId = (s: Section) =>
  s.id ?? s.h2.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export function Sections({ sections }: { sections: Section[] }) {
  return (
    <>
      {sections.map((s) => (
        <section key={s.h2} id={sectionId(s)} className="prose-section">
          <h2>{s.h2}</h2>
          <Blocks blocks={s.blocks} />
          {s.h3s?.map((sub) => (
            <div key={sub.h3}>
              <h3>{sub.h3}</h3>
              <Blocks blocks={sub.blocks} />
            </div>
          ))}
        </section>
      ))}
    </>
  );
}
