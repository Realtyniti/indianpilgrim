import { charDhamPages } from "./char-dham";
import { doDhamPages } from "./do-dham";
import { vaishnoDeviPages } from "./vaishno-devi";
import { morePages } from "./more";
import type { LandingPage } from "./types";

export const pages: LandingPage[] = [...charDhamPages, ...doDhamPages, ...vaishnoDeviPages, ...morePages];

const byPath = new Map(pages.map((p) => [p.path, p]));

export const pageByPath = (path: string) => byPath.get(path);

export const pageBySegments = (segments: string[]) => byPath.get(`/${segments.join("/")}/`);

/** Index pages listed on /pilgrimages/ (P4+ destinations). */
export const otherPilgrimages = pages.filter((p) => p.cluster === "india");

export const formatINR = (n: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
