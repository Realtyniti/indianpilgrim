import Link from "next/link";
import { Fragment, type ReactNode } from "react";

const TOKEN = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*/g;

/** Renders [label](href) links and **bold** inside a content string. */
export function inline(text: string): ReactNode {
  const out: ReactNode[] = [];
  let last = 0;
  let key = 0;
  for (const m of text.matchAll(TOKEN)) {
    if (m.index! > last) out.push(text.slice(last, m.index));
    if (m[1]) {
      const href = m[2];
      out.push(
        href.startsWith("/") ? (
          <Link key={key++} href={href} className="link">
            {m[1]}
          </Link>
        ) : (
          <a key={key++} href={href} className="link" rel="noopener" target="_blank">
            {m[1]}
          </a>
        ),
      );
    } else {
      out.push(<strong key={key++}>{m[3]}</strong>);
    }
    last = m.index! + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return <Fragment>{out}</Fragment>;
}

/** Strips inline marks, for meta and JSON-LD text. */
export const plain = (text: string) => text.replace(TOKEN, (_, l, _h, b) => l ?? b);
