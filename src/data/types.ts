/**
 * Content blocks. Text fields accept two inline marks:
 *   [label](/internal-or-https-url)  and  **bold**
 */
export type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; head: string[]; rows: string[][]; caption?: string }
  | { type: "callout"; tone?: "info" | "warn"; title?: string; text: string };

export type Section = { h2: string; id?: string; blocks: Block[]; h3s?: { h3: string; blocks: Block[] }[] };

export type Faq = { q: string; a: string };

export type ItineraryDay = {
  day: string; // "Day 1" or "Day 3–4"
  title: string;
  text: string;
  overnight?: string;
  drive?: string; // approximate distance / time
};

export type Tier = { name: string; stay: string; transport: string; meals: string };

export type Itinerary = {
  nights: number;
  days: number;
  start: string;
  end: string;
  mode: "Road" | "Helicopter" | "Private charter" | "Road + helicopter" | "Train + road";
  route: string[];
  /** Indicative per-person price in INR. null = "price on request". */
  priceFrom: number | null;
  days_: ItineraryDay[];
  tiers?: Tier[];
  inclusions: string[];
  exclusions: string[];
};

export type KeyFact = { label: string; value: string };

export type LandingPage = {
  path: string; // "/char-dham-yatra/" — always leading and trailing slash
  parent?: string; // breadcrumb parent path
  cluster: Cluster;
  /** Short name used in nav, cards and breadcrumbs. */
  name: string;
  title: string; // <title>, ~60 chars
  description: string; // meta description, ~155 chars
  h1: string;
  eyebrow?: string;
  intro: string;
  keyFacts?: KeyFact[];
  itinerary?: Itinerary;
  /** Paths of child/sibling pages shown as package cards. */
  cards?: string[];
  sections: Section[];
  faqs: Faq[];
  related?: string[];
  /** Pre-filled WhatsApp/enquiry subject. */
  enquiry: string;
  /** Destination art used for the hero band. */
  art: Art;
  /** Places visited, for TouristTrip schema. */
  places?: { name: string; type?: "HinduTemple" | "TouristAttraction" | "Place" }[];
  updated: string; // ISO date
};

export type Cluster =
  | "char-dham"
  | "do-dham"
  | "vaishno-devi"
  | "india"
  | "nepal"
  | "kailash"
  | "international";

export type Art = "kedarnath" | "badrinath" | "char-dham" | "vaishno" | "kailash" | "pashupati" | "ganga" | "temple";

export type Guide = {
  slug: string;
  cluster: Cluster;
  title: string;
  description: string;
  h1: string;
  summary: string; // answer-first box
  author: string;
  updated: string;
  readMinutes: number;
  sections: Section[];
  faqs?: Faq[];
  /** The commercial page this guide supports. */
  hub: string;
  art: Art;
  sources?: { label: string; url: string }[];
};
