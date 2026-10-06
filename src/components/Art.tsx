import type { Art as ArtKind } from "@/data/types";

/**
 * Lightweight inline-SVG destination bands, used until real trip photography
 * is added. Each palette evokes the place: snow and dawn for the Himalayan
 * dhams, the Trikuta hills at dusk for Vaishno Devi, and so on.
 */
const palettes: Record<ArtKind, { sky: [string, string]; ridges: [string, string, string]; sun: string }> = {
  kedarnath: { sky: ["#f6d8b8", "#cfe1e6"], ridges: ["#9bb6bf", "#4f7683", "#1d3f4b"], sun: "#f2a65a" },
  badrinath: { sky: ["#fbe3c4", "#e8d3e1"], ridges: ["#c2a9b9", "#7c6a86", "#3a3150"], sun: "#e98b3a" },
  "char-dham": { sky: ["#fde7c8", "#d6e6ea"], ridges: ["#a7c0c6", "#5d8590", "#24485a"], sun: "#e8892f" },
  vaishno: { sky: ["#fbd6b0", "#f2c2b4"], ridges: ["#c9927c", "#8d5446", "#4c2b26"], sun: "#d9482b" },
  kailash: { sky: ["#dbe8f1", "#b9d2e3"], ridges: ["#e9eff3", "#8aa7ba", "#3b5468"], sun: "#f1c27d" },
  pashupati: { sky: ["#f8dcc0", "#ead8c3"], ridges: ["#b8a58f", "#7b6551", "#3d2f24"], sun: "#e5862c" },
  ganga: { sky: ["#fde4bf", "#f6cfa8"], ridges: ["#d6a77c", "#a46f4b", "#5a3a26"], sun: "#ef7d24" },
  temple: { sky: ["#fbe2c2", "#f3d0b0"], ridges: ["#d3a780", "#9c6a46", "#4f3322"], sun: "#e0662b" },
};

export function Art({ art, className = "" }: { art: ArtKind; className?: string }) {
  const p = palettes[art];
  const id = `sky-${art}`;
  const snow = art === "kailash" || art === "kedarnath" || art === "char-dham" || art === "badrinath";
  return (
    <svg viewBox="0 0 1200 360" preserveAspectRatio="xMidYMax slice" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={p.sky[0]} />
          <stop offset="1" stopColor={p.sky[1]} />
        </linearGradient>
      </defs>
      <rect width="1200" height="360" fill={`url(#${id})`} />
      <circle cx="880" cy="120" r="46" fill={p.sun} opacity="0.85" />
      <path d="M0 250 L140 150 L230 205 L360 95 L470 190 L560 140 L700 230 L820 120 L930 200 L1050 110 L1200 210 V360 H0Z" fill={p.ridges[0]} />
      {snow && (
        <path d="M330 120 L360 95 L392 122 L375 118 L360 130 L346 118Z M795 142 L820 120 L846 145 L830 141 L820 150 L808 141Z M1028 128 L1050 110 L1074 132 L1060 128 L1050 137 L1040 128Z" fill="#ffffff" opacity="0.9" />
      )}
      <path d="M0 290 L120 220 L250 270 L390 200 L520 265 L650 215 L780 280 L900 225 L1040 275 L1200 230 V360 H0Z" fill={p.ridges[1]} />
      {/* temple shikhara silhouette */}
      <g fill={p.ridges[2]} transform="translate(560 228)">
        <rect x="-34" y="40" width="68" height="40" />
        <path d="M-26 40 Q-24 0 0 -34 Q24 0 26 40Z" />
        <rect x="-1.5" y="-52" width="3" height="20" />
        <path d="M1.5 -52 L18 -46 L1.5 -40Z" fill={p.sun} />
      </g>
      <path d="M0 320 L160 280 L330 310 L520 292 L700 318 L880 290 L1040 315 L1200 296 V360 H0Z" fill={p.ridges[2]} />
    </svg>
  );
}
