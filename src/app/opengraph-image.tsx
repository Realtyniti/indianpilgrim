import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name}: Char Dham, Kedarnath and Vaishno Devi yatras`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "linear-gradient(180deg,#fde7c8 0%,#d6e6ea 100%)", fontFamily: "serif" }}>
        <div style={{ fontSize: 34, color: "#a8431a", letterSpacing: 4 }}>INDIANPILGRIM.COM</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, color: "#241c15", lineHeight: 1.1 }}>Char Dham · Do Dham · Vaishno Devi</div>
          <div style={{ fontSize: 34, color: "#4a3f35", marginTop: 20 }}>Hindu pilgrimage tours, planned with care</div>
        </div>
        <div style={{ height: 90, background: "#1d5263", clipPath: "polygon(0 60%,15% 10%,28% 55%,42% 0,58% 50%,72% 15%,86% 55%,100% 20%,100% 100%,0 100%)" }} />
      </div>
    ),
    size,
  );
}
