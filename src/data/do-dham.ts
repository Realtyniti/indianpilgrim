import type { LandingPage } from "./types";
import { roadExclusions, roadInclusions, roadTiers } from "./shared";

const UPDATED = "2026-10-06";

const doDhamPlaces: LandingPage["places"] = [
  { name: "Kedarnath Temple", type: "HinduTemple" },
  { name: "Badrinath Temple", type: "HinduTemple" },
];

export const doDhamPages: LandingPage[] = [
  {
    path: "/do-dham-yatra/",
    cluster: "do-dham",
    name: "Do Dham Yatra",
    title: "Do Dham Yatra Package | Kedarnath & Badrinath Tour",
    description:
      "6–7 day Kedarnath and Badrinath yatra from Haridwar or Delhi. Road or helicopter, sattvic meals and darshan support. Compare tiers and get a free plan.",
    h1: "Do Dham Yatra: Kedarnath and Badrinath Packages",
    eyebrow: "Kedarnath · Badrinath",
    intro:
      "The Do Dham Yatra joins the two most important shrines of the Char Dham: Kedarnath, where Lord Shiva is worshipped as a Jyotirlinga, and Badrinath, the abode of Lord Vishnu. It needs about half the time of the full Char Dham, which makes it the most popular choice for working families and first-time Himalayan pilgrims.",
    keyFacts: [
      { label: "Duration", value: "6 nights / 7 days by road" },
      { label: "By helicopter", value: "1 night / 2 days possible" },
      { label: "Kedarnath walk", value: "About 16 km each way" },
      { label: "Badrinath", value: "Reachable by road" },
      { label: "Season", value: "May to early November" },
      { label: "Starts from", value: "Haridwar, Rishikesh, Delhi" },
    ],
    cards: ["/do-dham-yatra/from-haridwar/", "/do-dham-yatra/from-delhi/", "/do-dham-yatra/by-helicopter/", "/kedarnath-yatra/", "/badrinath-yatra/", "/char-dham-yatra/"],
    sections: [
      {
        h2: "Why Kedarnath and Badrinath together?",
        blocks: [
          { type: "p", text: "Tradition holds that a pilgrimage to Kedarnath is complete only with darshan at Badrinath as well. The two shrines are about 200 km apart by road, linked through Rudraprayag or the scenic Ukhimath–Chopta road, so they fit naturally into one trip." },
          { type: "p", text: "Kedarnath is one of the twelve Jyotirlingas and the first of the Panch Kedar. Badrinath is one of the 108 Divya Desams revered by Vaishnavas and one of the four dhams of Adi Shankaracharya. Many families do the Do Dham Yatra first and return for [Yamunotri and Gangotri](/yamunotri-gangotri-yatra/) in a later year." },
        ],
      },
      {
        h2: "Do Dham Yatra by road, helicopter or a mix",
        blocks: [
          {
            type: "table",
            head: ["Option", "Duration", "Walking", "Best for"],
            rows: [
              ["By road from Haridwar", "6N / 7D", "16 km each way to Kedarnath (pony or palki available)", "Most pilgrims"],
              ["By road from Delhi", "7N / 8D", "Same", "Door-to-door from Delhi NCR"],
              ["Road + Kedarnath helicopter", "5N / 6D", "Short walk from the Kedarnath helipad", "Seniors and those short of time"],
              ["Helicopter from Dehradun", "1N / 2D", "Minimal", "Very limited time"],
            ],
          },
        ],
      },
      {
        h2: "Best time for the Do Dham Yatra",
        blocks: [
          { type: "p", text: "May, June, September and October are the best months. Kedarnath closes on Bhai Dooj and Badrinath a few days later in November. Avoid July and August unless your dates are flexible, because monsoon landslides often close the roads to Kedarnath and Badrinath for hours or days." },
        ],
      },
      {
        h2: "Getting to Kedarnath: walk, pony, palki or helicopter",
        blocks: [
          { type: "p", text: "From Sonprayag, shared jeeps take pilgrims to Gaurikund, where the walk begins. The paved trail climbs about 16 km through Jungle Chatti, Bheembali and Linchauli to the temple. Read our [Kedarnath trek guide](/guides/kedarnath-trek-guide/) for each stage." },
          { type: "ul", items: ["**Walking:** 6–9 hours up for most pilgrims", "**Pony:** around 5–6 hours, fixed government rates", "**Palki or doli:** carried by four bearers, the slowest but easiest", "**Helicopter:** shuttle from Phata, Sersi or Guptkashi, booked only on IRCTC HeliYatra"] },
        ],
      },
    ],
    faqs: [
      { q: "How many days are needed for Do Dham Yatra?", a: "6 nights / 7 days from Haridwar by road is comfortable, with one night at Kedarnath. From Delhi, add one day." },
      { q: "Which comes first, Kedarnath or Badrinath?", a: "Kedarnath first, then Badrinath. This follows tradition, and it means the hardest part of the yatra comes while you are fresh." },
      { q: "Is Badrinath easier than Kedarnath?", a: "Yes. Badrinath is reachable by road, right up to the town. Kedarnath needs a 16 km walk or a pony, palki or helicopter." },
      { q: "Can I do Do Dham Yatra by helicopter in one day?", a: "Same-day packages exist, but darshan time is short and depends entirely on the weather. We recommend one night at Badrinath." },
      { q: "Is registration needed for Do Dham Yatra?", a: "Yes. The mandatory Uttarakhand yatra registration covers the shrines you plan to visit. We do it for our guests." },
    ],
    related: ["/char-dham-yatra/", "/kedarnath-yatra/", "/badrinath-yatra/"],
    enquiry: "Do Dham Yatra (Kedarnath & Badrinath)",
    art: "kedarnath",
    places: doDhamPlaces,
    updated: UPDATED,
  },

  {
    path: "/do-dham-yatra/from-haridwar/",
    parent: "/do-dham-yatra/",
    cluster: "do-dham",
    name: "Do Dham Yatra from Haridwar",
    title: "Do Dham Yatra from Haridwar | 6N/7D Kedarnath Badrinath",
    description:
      "Kedarnath and Badrinath from Haridwar in 7 days, with a night at Kedarnath, Mana village and stops at the Panch Prayag. Private vehicle and vegetarian meals.",
    h1: "Do Dham Yatra Package from Haridwar (6 Nights / 7 Days)",
    eyebrow: "Haridwar → Guptkashi → Kedarnath → Badrinath → Haridwar",
    intro:
      "Our most-booked itinerary. You leave Haridwar along the Ganga, stay a night beside the Kedarnath temple, see the Panch Prayag confluences and finish with darshan at Badrinath and a visit to Mana, the last village before the Tibet border.",
    keyFacts: [
      { label: "Duration", value: "6 nights / 7 days" },
      { label: "Start / end", value: "Haridwar" },
      { label: "Total drive", value: "About 750 km" },
      { label: "Kedarnath night", value: "Included" },
    ],
    itinerary: {
      nights: 6,
      days: 7,
      start: "Haridwar",
      end: "Haridwar",
      mode: "Road",
      route: ["Haridwar", "Guptkashi", "Kedarnath", "Guptkashi", "Badrinath", "Rudraprayag", "Haridwar"],
      priceFrom: null,
      days_: [
        { day: "Day 1", title: "Haridwar to Guptkashi", text: "Early start along the Ganga via Rishikesh, Devprayag and Rudraprayag. Evening at the Vishwanath and Ardhanarishwar temples in Guptkashi.", overnight: "Guptkashi", drive: "~210 km · 8 hrs" },
        { day: "Day 2", title: "Walk to Kedarnath", text: "Drive to Sonprayag and take a shared jeep to Gaurikund. Walk about 16 km to Kedarnath, or take a pony, palki or IRCTC helicopter. Evening aarti.", overnight: "Kedarnath" },
        { day: "Day 3", title: "Kedarnath darshan, back to Guptkashi", text: "Early morning darshan, then visit the Bhairavnath temple and Adi Shankaracharya's samadhi. Walk down and drive to Guptkashi.", overnight: "Guptkashi" },
        { day: "Day 4", title: "Guptkashi to Badrinath", text: "Drive via Ukhimath, Chopta and Chamoli, or via Rudraprayag, depending on road status. Evening darshan after a bath in Tapt Kund.", overnight: "Badrinath", drive: "~200 km · 7–8 hrs" },
        { day: "Day 5", title: "Mana village, drive to Rudraprayag", text: "Morning darshan, then Mana village: Vyas Gufa, Ganesh Gufa, Bheem Pul and the Saraswati river. Brahma Kapal pind daan can be arranged on request.", overnight: "Rudraprayag", drive: "~160 km · 6 hrs" },
        { day: "Day 6", title: "Rudraprayag to Rishikesh / Haridwar", text: "Stop at the Devprayag confluence, then the evening aarti at Parmarth Niketan or Har Ki Pauri.", overnight: "Haridwar", drive: "~160 km · 5–6 hrs" },
        { day: "Day 7", title: "Departure", text: "Drop at Haridwar station or Dehradun airport." },
      ],
      tiers: roadTiers,
      inclusions: roadInclusions,
      exclusions: roadExclusions,
    },
    sections: [
      {
        h2: "The Panch Prayag on the way",
        blocks: [
          { type: "p", text: "The Alaknanda meets five rivers on its way to forming the Ganga. On this route you pass all five: **Vishnuprayag** (Dhauliganga), **Nandprayag** (Nandakini), **Karnaprayag** (Pindar), **Rudraprayag** (Mandakini) and **Devprayag** (Bhagirathi), where the river first takes the name Ganga." },
        ],
      },
    ],
    faqs: [
      { q: "How far is Kedarnath from Haridwar?", a: "About 240 km by road to Sonprayag, then a jeep to Gaurikund and a 16 km walk." },
      { q: "Can this trip be done in 5 days?", a: "Yes, by doing Kedarnath up and down in one day, or by using the IRCTC helicopter. It is tiring, so we recommend 6 nights." },
      { q: "Are meals included on the Do Dham package?", a: "Breakfast and dinner are included at every hotel. Lunch is taken on the road at dhabas we know well." },
    ],
    related: ["/do-dham-yatra/from-delhi/", "/char-dham-yatra/from-haridwar/", "/kedarnath-yatra/"],
    enquiry: "Do Dham Yatra from Haridwar (6N/7D)",
    art: "kedarnath",
    places: doDhamPlaces,
    updated: UPDATED,
  },

  {
    path: "/do-dham-yatra/from-delhi/",
    parent: "/do-dham-yatra/",
    cluster: "do-dham",
    name: "Do Dham Yatra from Delhi",
    title: "Do Dham Yatra from Delhi | Kedarnath Badrinath 7N/8D",
    description:
      "Kedarnath and Badrinath from Delhi in 8 days, with pickup anywhere in Delhi NCR, a private vehicle, a night at Kedarnath and Mana village. Get a free itinerary.",
    h1: "Do Dham Yatra Package from Delhi (7 Nights / 8 Days)",
    eyebrow: "Delhi → Haridwar → Kedarnath → Badrinath → Delhi",
    intro:
      "The same well-paced Kedarnath and Badrinath itinerary, with door-to-door pickup and drop in Delhi NCR. It's a good choice for families who want one vehicle and one driver from home and back.",
    keyFacts: [
      { label: "Duration", value: "7 nights / 8 days" },
      { label: "Pickup", value: "Anywhere in Delhi NCR" },
      { label: "Delhi to Haridwar", value: "~220 km · 5–6 hrs" },
      { label: "Kedarnath night", value: "Included" },
    ],
    itinerary: {
      nights: 7,
      days: 8,
      start: "Delhi",
      end: "Delhi",
      mode: "Road",
      route: ["Delhi", "Haridwar", "Guptkashi", "Kedarnath", "Badrinath", "Rudraprayag", "Delhi"],
      priceFrom: null,
      days_: [
        { day: "Day 1", title: "Delhi to Haridwar", text: "Pickup in Delhi NCR. Evening Ganga aarti at Har Ki Pauri.", overnight: "Haridwar", drive: "~220 km · 5–6 hrs" },
        { day: "Day 2", title: "Haridwar to Guptkashi", text: "Drive along the Ganga via Devprayag and Rudraprayag.", overnight: "Guptkashi", drive: "~210 km · 8 hrs" },
        { day: "Day 3–4", title: "Kedarnath", text: "Walk or ride to Kedarnath for evening aarti. Morning darshan the next day, then return to Guptkashi.", overnight: "Kedarnath, then Guptkashi" },
        { day: "Day 5–6", title: "Badrinath and Mana", text: "Drive to Badrinath for evening darshan. Morning visit to Mana village, then drive down to Rudraprayag.", overnight: "Badrinath, then Rudraprayag" },
        { day: "Day 7", title: "Rudraprayag to Haridwar", text: "Stop at Devprayag, with a free evening in Haridwar or Rishikesh.", overnight: "Haridwar" },
        { day: "Day 8", title: "Haridwar to Delhi", text: "Drive back and drop at your home, the airport or a station." },
      ],
      tiers: roadTiers,
      inclusions: [...roadInclusions.filter((i) => !i.startsWith("Pickup")), "Pickup and drop anywhere in Delhi NCR"],
      exclusions: roadExclusions,
    },
    sections: [
      {
        h2: "Faster from Delhi by train",
        blocks: [
          { type: "p", text: "If you are comfortable on a train, take a morning Shatabdi or Vande Bharat to Haridwar and join our [Do Dham Yatra from Haridwar](/do-dham-yatra/from-haridwar/). This saves a day and some cost, and we meet you on the platform." },
        ],
      },
    ],
    faqs: [
      { q: "How far is Kedarnath from Delhi?", a: "About 460 km by road to Sonprayag, usually split over two days with a night in Haridwar or Rishikesh." },
      { q: "Do you pick up from Gurugram and Noida?", a: "Yes. Pickup and drop anywhere in Delhi NCR are included." },
    ],
    related: ["/do-dham-yatra/from-haridwar/", "/char-dham-yatra/from-delhi/", "/vaishno-devi-yatra/from-delhi/"],
    enquiry: "Do Dham Yatra from Delhi (7N/8D)",
    art: "kedarnath",
    places: doDhamPlaces,
    updated: UPDATED,
  },

  {
    path: "/do-dham-yatra/by-helicopter/",
    parent: "/do-dham-yatra/",
    cluster: "do-dham",
    name: "Do Dham Yatra by Helicopter",
    title: "Do Dham Yatra by Helicopter from Dehradun | 1N/2D",
    description:
      "Kedarnath and Badrinath by helicopter from Dehradun in 2 days, with a night at Badrinath. Shared seats or a private charter.",
    h1: "Do Dham Yatra by Helicopter from Dehradun",
    eyebrow: "1 night / 2 days · Shared seats or private charter",
    intro:
      "The quickest way to have darshan at both Kedarnath and Badrinath. Fly from Dehradun to Kedarnath in the morning, on to Badrinath for the evening aarti, and back to Dehradun the next day.",
    keyFacts: [
      { label: "Duration", value: "1 night / 2 days" },
      { label: "Base", value: "Sahastradhara, Dehradun" },
      { label: "Walking", value: "Short distances from the helipads" },
      { label: "Weather buffer", value: "Keep one spare day" },
    ],
    itinerary: {
      nights: 1,
      days: 2,
      start: "Dehradun",
      end: "Dehradun",
      mode: "Helicopter",
      route: ["Dehradun", "Kedarnath", "Badrinath", "Dehradun"],
      priceFrom: null,
      days_: [
        { day: "Day 1", title: "Dehradun to Kedarnath and Badrinath", text: "Early report at the Sahastradhara helipad. Fly to Kedarnath for darshan, then fly to Badrinath, check in, and attend the evening darshan and aarti.", overnight: "Badrinath" },
        { day: "Day 2", title: "Badrinath to Dehradun", text: "Early morning darshan, visit Mana village, then fly back to Dehradun." },
      ],
      inclusions: ["Helicopter seats on all sectors", "Badrinath hotel with dinner and breakfast", "Helipad-to-temple transfers", "Darshan arrangements as permitted", "Registration help"],
      exclusions: ["Hotel nights before or after the trip", "Excess baggage and weight charges", "Puja fees and insurance"],
    },
    sections: [
      {
        h2: "Things to know",
        blocks: [
          { type: "ul", items: ["Flights depend on the weather and usually operate in the morning", "Strict baggage limit: carry a small soft bag", "Passengers are weighed, and charges apply above the operator's limit", "Book early: seats for May, June and October fill months ahead"] },
        ],
      },
    ],
    faqs: [
      { q: "Can Kedarnath and Badrinath be done in one day by helicopter?", a: "Some operators run same-day packages, but there is very little darshan time. We recommend staying one night at Badrinath." },
      { q: "Is this the same as the IRCTC Kedarnath helicopter?", a: "No. The IRCTC shuttle runs only between the Kedarnath valley helipads and Kedarnath. This package is a charter product starting from Dehradun." },
    ],
    related: ["/char-dham-yatra/by-helicopter/", "/kedarnath-yatra/by-helicopter/", "/char-dham-yatra/private-charter/"],
    enquiry: "Do Dham Yatra by Helicopter",
    art: "kedarnath",
    places: doDhamPlaces,
    updated: UPDATED,
  },

  {
    path: "/kedarnath-yatra/",
    cluster: "do-dham",
    name: "Kedarnath Yatra",
    title: "Kedarnath Tour Package from Haridwar & Delhi | Kedarnath Yatra",
    description:
      "Kedarnath yatra packages from Haridwar and Delhi with a night at Kedarnath, pony, palki or helicopter options, and a trek plan for every fitness level.",
    h1: "Kedarnath Yatra Packages",
    eyebrow: "Jyotirlinga · 3,583 m · Rudraprayag district",
    intro:
      "Kedarnath stands at 3,583 metres at the head of the Mandakini valley, ringed by snow peaks. It is one of the twelve Jyotirlingas of Lord Shiva, and the walk from Gaurikund is the heart of the yatra for most pilgrims. We plan Kedarnath trips of 3 to 5 days from Haridwar, Rishikesh and Delhi.",
    keyFacts: [
      { label: "Altitude", value: "3,583 m" },
      { label: "Walk", value: "About 16 km from Gaurikund" },
      { label: "Season", value: "May to Bhai Dooj (Oct/Nov)" },
      { label: "Nearest road", value: "Sonprayag / Gaurikund" },
    ],
    itinerary: {
      nights: 3,
      days: 4,
      start: "Haridwar",
      end: "Haridwar",
      mode: "Road",
      route: ["Haridwar", "Guptkashi", "Kedarnath", "Guptkashi", "Haridwar"],
      priceFrom: null,
      days_: [
        { day: "Day 1", title: "Haridwar to Guptkashi", text: "Drive via Devprayag and Rudraprayag.", overnight: "Guptkashi", drive: "~210 km · 8 hrs" },
        { day: "Day 2", title: "Walk to Kedarnath", text: "Sonprayag to Gaurikund by shared jeep, then walk or ride 16 km to Kedarnath. Evening aarti.", overnight: "Kedarnath" },
        { day: "Day 3", title: "Darshan and descent", text: "Early darshan, Bhairavnath temple, then walk down and drive to Guptkashi.", overnight: "Guptkashi" },
        { day: "Day 4", title: "Return to Haridwar", text: "Drive back to Haridwar.", drive: "~210 km · 8 hrs" },
      ],
      tiers: roadTiers,
      inclusions: roadInclusions,
      exclusions: roadExclusions,
    },
    cards: ["/kedarnath-yatra/by-helicopter/", "/do-dham-yatra/", "/char-dham-yatra/"],
    sections: [
      {
        h2: "The story of Kedarnath",
        blocks: [
          { type: "p", text: "Legend says the Pandavas came to the Himalaya after the Mahabharata war, seeking Lord Shiva's forgiveness. Shiva took the form of a bull to avoid them and sank into the earth, and the hump of the bull is worshipped at Kedarnath as a triangular, self-manifested lingam. The other parts appeared at the four other Panch Kedar temples: Tungnath, Rudranath, Madhyamaheshwar and Kalpeshwar." },
          { type: "p", text: "The present stone temple is believed to date from the time of Adi Shankaracharya, whose samadhi lies behind it. It survived the 2013 floods, sheltered, as pilgrims believe, by the large rock now worshipped as Bheem Shila." },
        ],
      },
      {
        h2: "How to reach Kedarnath",
        blocks: [
          { type: "ul", items: ["**By road:** to Sonprayag (about 210 km from Haridwar), then shared jeep to Gaurikund", "**On foot:** about 16 km from Gaurikund; ponies, palkis and pithus are available", "**By helicopter:** shuttle from Phata, Sersi or Guptkashi, booked on IRCTC HeliYatra", "**Nearest airport:** Jolly Grant, Dehradun (about 240 km)", "**Nearest railway:** Rishikesh Yog Nagari or Haridwar"] },
          { type: "p", text: "Full details in our [Kedarnath trek guide](/guides/kedarnath-trek-guide/)." },
        ],
      },
    ],
    faqs: [
      { q: "How many days are needed for Kedarnath yatra?", a: "3 nights / 4 days from Haridwar, with one night at Kedarnath. It can be done in 3 days by returning the same day, but that makes for a very long day." },
      { q: "When does Kedarnath temple close in 2026?", a: "Kedarnath closes on Bhai Dooj, 11 November 2026, after which the deity moves to the Omkareshwar temple at Ukhimath for the winter." },
      { q: "Is the Kedarnath walk difficult?", a: "It is a steady climb on a paved trail. Fit walkers take 6 to 9 hours to go up. Ponies and palkis are available for those who cannot walk." },
      { q: "Where can I stay at Kedarnath?", a: "GMVN cottages, private camps and simple guesthouses near the temple. We pre-book these for our guests during the season." },
    ],
    related: ["/do-dham-yatra/", "/badrinath-yatra/", "/guides/kedarnath-trek-guide/"],
    enquiry: "Kedarnath Yatra",
    art: "kedarnath",
    places: [{ name: "Kedarnath Temple", type: "HinduTemple" }],
    updated: UPDATED,
  },

  {
    path: "/kedarnath-yatra/by-helicopter/",
    parent: "/kedarnath-yatra/",
    cluster: "do-dham",
    name: "Kedarnath by Helicopter",
    title: "Kedarnath by Helicopter | IRCTC Shuttle & Charter Packages",
    description:
      "Kedarnath by helicopter, explained: the IRCTC shuttle from Phata, Sersi and Guptkashi, Dehradun charters, and how to avoid fake ticket sellers.",
    h1: "Kedarnath Yatra by Helicopter",
    eyebrow: "IRCTC shuttle · Dehradun charter",
    intro:
      "There are two ways to fly to Kedarnath. The shuttle from helipads in the Kedarnath valley is booked only on IRCTC HeliYatra and takes about 8 to 10 minutes each way. A charter from Dehradun is sold as a package by licensed operators. We help with both: we plan your road trip around your IRCTC slot, or book a Dehradun charter for you.",
    keyFacts: [
      { label: "Shuttle helipads", value: "Phata, Sersi, Guptkashi" },
      { label: "Shuttle booking", value: "IRCTC HeliYatra only" },
      { label: "Flight time", value: "About 8–10 min each way" },
      { label: "Charter base", value: "Sahastradhara, Dehradun" },
    ],
    sections: [
      {
        h2: "How IRCTC Kedarnath helicopter booking works",
        blocks: [
          { type: "ol", items: ["Complete your Uttarakhand yatra registration first; the registration number is needed to book", "Create an account on the IRCTC HeliYatra website when booking opens for your dates", "Choose the helipad and slot; each user ID can book a limited number of passengers", "Carry the same photo ID on the day; boarding passes are checked at the helipad"] },
          { type: "callout", tone: "warn", title: "Avoid helicopter ticket scams", text: "Every season, pilgrims lose money to fake websites and social media pages selling Kedarnath helicopter tickets. Only IRCTC HeliYatra sells shuttle tickets. No travel agent, including us, can sell you an IRCTC shuttle ticket." },
        ],
      },
      {
        h2: "Our Kedarnath helicopter packages",
        blocks: [
          { type: "p", text: "Once you have your IRCTC slot, we plan everything around it: the drive to Phata or Guptkashi, a hotel near the helipad the night before, and onward travel to Badrinath. If you would rather not deal with booking windows, a [Do Dham helicopter package](/do-dham-yatra/by-helicopter/) from Dehradun is booked through the operator directly." },
        ],
      },
    ],
    faqs: [
      { q: "Can a travel agent book the Kedarnath helicopter?", a: "Not the IRCTC shuttle; it is booked only by the pilgrim on IRCTC HeliYatra. Charter packages from Dehradun can be booked through licensed agents." },
      { q: "Do I need registration before booking the Kedarnath helicopter?", a: "Yes. A valid Uttarakhand yatra registration is required to book the shuttle." },
      { q: "Is there a weight limit on the Kedarnath helicopter?", a: "Yes. Passengers and baggage are weighed, and the limits are published on the booking site each season." },
    ],
    related: ["/kedarnath-yatra/", "/do-dham-yatra/by-helicopter/", "/char-dham-yatra/by-helicopter/"],
    enquiry: "Kedarnath helicopter yatra",
    art: "kedarnath",
    places: [{ name: "Kedarnath Temple", type: "HinduTemple" }],
    updated: UPDATED,
  },

  {
    path: "/badrinath-yatra/",
    cluster: "do-dham",
    name: "Badrinath Yatra",
    title: "Badrinath Tour Package | Badrinath Pilgrimage & Mana Village",
    description:
      "Badrinath yatra from Haridwar: darshan of Badri Narayan, Tapt Kund, Mana village and Brahma Kapal. Reachable by road, suitable for all ages.",
    h1: "Badrinath Yatra Packages",
    eyebrow: "Badri Narayan · Alaknanda valley · Chamoli",
    intro:
      "Badrinath, on the banks of the Alaknanda between the Nar and Narayan peaks, is the most sacred Vishnu shrine in the Himalaya. It can be reached by road right up to the town, which makes it the easiest of the four dhams for elderly pilgrims and families with children.",
    keyFacts: [
      { label: "Altitude", value: "About 3,100 m" },
      { label: "Access", value: "By road to the town" },
      { label: "From Haridwar", value: "About 320 km · 10–11 hrs" },
      { label: "Season", value: "May to mid-November" },
    ],
    itinerary: {
      nights: 4,
      days: 5,
      start: "Haridwar",
      end: "Haridwar",
      mode: "Road",
      route: ["Haridwar", "Joshimath", "Badrinath", "Rudraprayag", "Haridwar"],
      priceFrom: null,
      days_: [
        { day: "Day 1", title: "Haridwar to Joshimath (Jyotirmath)", text: "Drive past Devprayag, Rudraprayag, Karnaprayag and Nandprayag. Visit Adi Shankaracharya's math in the evening.", overnight: "Joshimath", drive: "~270 km · 9–10 hrs" },
        { day: "Day 2", title: "Joshimath to Badrinath", text: "Short drive to Badrinath. Bathe in Tapt Kund, then darshan and evening aarti.", overnight: "Badrinath", drive: "~45 km · 1.5 hrs" },
        { day: "Day 3", title: "Mana village and Brahma Kapal", text: "Early morning darshan, Mana village, Vyas Gufa and Bheem Pul. Pind daan at Brahma Kapal on request.", overnight: "Badrinath" },
        { day: "Day 4", title: "Badrinath to Rudraprayag", text: "Drive down, stopping at the confluences.", overnight: "Rudraprayag", drive: "~160 km · 6 hrs" },
        { day: "Day 5", title: "Return to Haridwar", text: "Drive via Devprayag to Haridwar.", drive: "~160 km · 5–6 hrs" },
      ],
      tiers: roadTiers,
      inclusions: roadInclusions,
      exclusions: roadExclusions,
    },
    sections: [
      {
        h2: "Places to visit around Badrinath",
        blocks: [
          { type: "ul", items: ["**Tapt Kund:** hot springs below the temple, where pilgrims bathe before darshan", "**Brahma Kapal:** a riverside ghat for pind daan and shraddh rituals for ancestors", "**Mana village:** Vyas Gufa, Ganesh Gufa, Bheem Pul and the Saraswati river", "**Mata Murti temple:** dedicated to the mother of Nar and Narayan", "**Vasudhara Falls:** a 5 km walk from Mana for fit pilgrims"] },
        ],
      },
    ],
    faqs: [
      { q: "Is there a walk at Badrinath?", a: "No. The road goes right to Badrinath town, and the temple is a short walk from the parking area." },
      { q: "Can pind daan be done at Badrinath?", a: "Yes. Brahma Kapal on the Alaknanda is one of the most important places for pind daan. We can arrange a priest on request." },
      { q: "When does Badrinath close in 2026?", a: "The closing date is announced on Vijayadashami. It is expected in mid-November 2026." },
    ],
    related: ["/do-dham-yatra/", "/kedarnath-yatra/", "/char-dham-yatra/"],
    enquiry: "Badrinath Yatra",
    art: "badrinath",
    places: [{ name: "Badrinath Temple", type: "HinduTemple" }, { name: "Mana Village", type: "TouristAttraction" }],
    updated: UPDATED,
  },

  {
    path: "/yamunotri-gangotri-yatra/",
    cluster: "char-dham",
    parent: "/char-dham-yatra/",
    name: "Yamunotri Gangotri Yatra",
    title: "Yamunotri Gangotri Yatra Package | Do Dham from Haridwar",
    description:
      "Yamunotri and Gangotri from Haridwar in 6 days: the Surya Kund ritual, Gangotri darshan and Harsil, with a private vehicle and hotels in Barkot and Uttarkashi.",
    h1: "Yamunotri and Gangotri Yatra",
    eyebrow: "Goddess Yamuna · Goddess Ganga",
    intro:
      "Yamunotri and Gangotri are the western pair of the Char Dham, the sources of India's two holiest rivers. Many families complete them as a separate trip after doing Kedarnath and Badrinath, or the other way round.",
    keyFacts: [
      { label: "Duration", value: "5 nights / 6 days" },
      { label: "Walking", value: "About 6 km each way at Yamunotri" },
      { label: "Gangotri", value: "Reachable by road" },
      { label: "Season", value: "Akshaya Tritiya to Diwali" },
    ],
    itinerary: {
      nights: 5,
      days: 6,
      start: "Haridwar",
      end: "Haridwar",
      mode: "Road",
      route: ["Haridwar", "Barkot", "Yamunotri", "Uttarkashi", "Gangotri", "Haridwar"],
      priceFrom: null,
      days_: [
        { day: "Day 1", title: "Haridwar to Barkot", text: "Drive via Dehradun and Mussoorie.", overnight: "Barkot", drive: "~210 km · 7–8 hrs" },
        { day: "Day 2", title: "Yamunotri darshan", text: "Walk 6 km from Janki Chatti. Surya Kund, Divya Shila and darshan.", overnight: "Barkot" },
        { day: "Day 3", title: "Barkot to Uttarkashi", text: "Evening at Kashi Vishwanath temple.", overnight: "Uttarkashi", drive: "~100 km · 4–5 hrs" },
        { day: "Day 4", title: "Gangotri darshan", text: "Drive via Harsil, holy dip in the Bhagirathi and darshan.", overnight: "Uttarkashi" },
        { day: "Day 5", title: "Uttarkashi to Rishikesh", text: "Drive via Tehri lake. Evening aarti at Parmarth Niketan.", overnight: "Rishikesh / Haridwar", drive: "~170 km · 6 hrs" },
        { day: "Day 6", title: "Departure", text: "Drop at Haridwar or Dehradun." },
      ],
      tiers: roadTiers,
      inclusions: roadInclusions,
      exclusions: roadExclusions,
    },
    sections: [
      {
        h2: "Gaumukh: the source of the Ganga",
        blocks: [
          { type: "p", text: "Fit pilgrims can add the 18 km trek from Gangotri to Gaumukh, the snout of the Gangotri glacier. Entry needs a permit from the Gangotri National Park office, and daily numbers are capped. Add two days to the itinerary." },
        ],
      },
    ],
    faqs: [
      { q: "Is Yamunotri harder than Kedarnath?", a: "No. Yamunotri's walk is about 6 km but steep in places. Kedarnath is about 16 km." },
      { q: "When do Yamunotri and Gangotri open?", a: "On Akshaya Tritiya, usually in late April or early May. Gangotri closes on the day after Diwali, and Yamunotri on Bhai Dooj." },
    ],
    related: ["/char-dham-yatra/", "/do-dham-yatra/"],
    enquiry: "Yamunotri Gangotri Yatra",
    art: "ganga",
    places: [{ name: "Yamunotri Temple", type: "HinduTemple" }, { name: "Gangotri Temple", type: "HinduTemple" }],
    updated: UPDATED,
  },
];
