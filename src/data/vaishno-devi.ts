import type { LandingPage } from "./types";

const UPDATED = "2026-10-06";

const vdPlaces: LandingPage["places"] = [
  { name: "Mata Vaishno Devi Bhawan", type: "HinduTemple" },
  { name: "Bhairon Nath Temple", type: "HinduTemple" },
];

const vdInclusions = [
  "Hotel in Katra as per chosen category, breakfast and dinner",
  "Help with the mandatory RFID yatra card",
  "Private vehicle for all transfers and sightseeing",
  "Pickup and drop at Katra or Jammu station or Jammu airport",
  "Trip coordinator on phone and WhatsApp",
];

const vdExclusions = [
  "Pony, palki, pithu, battery car and ropeway tickets",
  "Helicopter tickets (booked through the Shrine Board's official portal)",
  "Train or flight tickets unless stated",
  "Lunch, tips, personal expenses and GST",
];

export const vaishnoDeviPages: LandingPage[] = [
  {
    path: "/vaishno-devi-yatra/",
    cluster: "vaishno-devi",
    name: "Vaishno Devi Yatra",
    title: "Vaishno Devi Tour Package from Delhi | Trek or Helicopter",
    description:
      "Vaishno Devi packages by Vande Bharat, train or car: Katra stays, RFID yatra card help, helicopter or trek options and Bhairon darshan.",
    h1: "Vaishno Devi Yatra Packages",
    eyebrow: "Katra · Trikuta hills · Jammu & Kashmir",
    intro:
      "Mata Vaishno Devi's holy cave sits in the Trikuta hills above Katra, about 12 km up a well-lit, paved path. It is open all year and draws millions of pilgrims. We plan Katra stays, your RFID yatra card, helicopter or pony options and the Bhairon temple darshan, so the only thing you need to do is walk and chant \"Jai Mata Di\".",
    keyFacts: [
      { label: "Trek", value: "About 12 km from Katra to Bhawan" },
      { label: "Altitude", value: "About 1,580 m at the Bhawan" },
      { label: "Open", value: "All year, 24 hours" },
      { label: "Base town", value: "Katra" },
      { label: "Fastest train", value: "Vande Bharat, New Delhi to Katra" },
      { label: "Must carry", value: "RFID yatra card and photo ID" },
    ],
    cards: ["/vaishno-devi-yatra/from-delhi/", "/vaishno-devi-yatra/by-helicopter/", "/vaishno-devi-yatra/with-amritsar/"],
    sections: [
      {
        h2: "About Mata Vaishno Devi",
        blocks: [
          { type: "p", text: "The Goddess is worshipped in the cave as three natural rock forms, the **Pindis**, representing Maha Kali, Maha Lakshmi and Maha Saraswati. Legend holds that the young devotee Vaishnavi meditated here and was pursued by Bhairon Nath, whom she defeated at the cave's mouth. Before he died he asked for forgiveness, and the Goddess blessed him. That is why pilgrims complete the yatra with darshan at the Bhairon temple above the Bhawan." },
        ],
      },
      {
        h2: "Ways to reach the Bhawan",
        blocks: [
          {
            type: "table",
            head: ["Option", "From", "Time up", "Notes"],
            rows: [
              ["Walk", "Katra (Banganga)", "5–7 hrs", "Via Ardhkuwari, or the gentler new Tarakote route"],
              ["Pony or palki", "Katra", "3–4 hrs", "Fixed rates, pay at the counter"],
              ["Battery car", "Ardhkuwari", "About 20 min", "On the new track; limited seats, book on the day"],
              ["Helicopter", "Katra helipad to Sanjichhat", "About 8 min + 2.5 km walk", "Book only through the Shrine Board's official portal"],
              ["Ropeway", "Bhawan to Bhairon temple", "A few minutes", "Saves the steep 1.5 km climb"],
            ],
          },
        ],
      },
      {
        h2: "RFID yatra card: required for every pilgrim",
        blocks: [
          { type: "p", text: "Every pilgrim needs an RFID yatra card from the Shri Mata Vaishno Devi Shrine Board. You can register online in advance, or collect the card free from the registration counters at Katra with your photo ID. It is checked at Banganga, and the yatra must be started within a set time of issue. Read our [Vaishno Devi yatra guide](/guides/vaishno-devi-yatra-guide/)." },
        ],
      },
      {
        h2: "Best time to visit Vaishno Devi",
        blocks: [
          { type: "ul", items: ["**March to June:** pleasant days and busy weekends", "**July to August:** monsoon showers, with fewer crowds but slippery paths", "**September to October:** clear weather, but Navratri brings very large crowds", "**November to February:** cold, with snow possible at Bhairon. The quietest and, for many, the most peaceful time"] },
        ],
      },
    ],
    faqs: [
      { q: "How many days are needed for Vaishno Devi yatra?", a: "Two nights in Katra are enough for the darshan and Bhairon temple. From Delhi, plan 3 nights / 4 days by train or car." },
      { q: "Is the RFID card compulsory for Vaishno Devi?", a: "Yes. Every pilgrim needs an RFID yatra card. It is free and available online or at the Katra counters." },
      { q: "How do I book the Vaishno Devi helicopter?", a: "Only through the official Shri Mata Vaishno Devi Shrine Board portal. Be careful of fake websites offering helicopter tickets." },
      { q: "Can elderly pilgrims do the Vaishno Devi yatra?", a: "Yes. Use the helicopter to Sanjichhat, a pony or palki, or the battery car from Ardhkuwari. We plan the yatra around their comfort." },
      { q: "Is Vaishno Devi open at night?", a: "Yes. The track is open 24 hours and well lit, and many pilgrims walk at night to avoid the daytime heat and crowds." },
    ],
    related: ["/char-dham-yatra/", "/do-dham-yatra/", "/pilgrimages/"],
    enquiry: "Vaishno Devi Yatra",
    art: "vaishno",
    places: vdPlaces,
    updated: UPDATED,
  },

  {
    path: "/vaishno-devi-yatra/from-delhi/",
    parent: "/vaishno-devi-yatra/",
    cluster: "vaishno-devi",
    name: "Vaishno Devi from Delhi",
    title: "Vaishno Devi Package from Delhi | 3N/4D by Train or Car",
    description:
      "Vaishno Devi from Delhi in 4 days: Vande Bharat or overnight train to Katra, Katra hotel, RFID card help, Bhairon darshan and an optional Shiv Khori trip.",
    h1: "Vaishno Devi Tour Package from Delhi (3 Nights / 4 Days)",
    eyebrow: "Delhi → Katra → Bhawan → Bhairon → Delhi",
    intro:
      "The direct Vande Bharat train has made Vaishno Devi an easy long weekend from Delhi. This package takes you to Katra in a day, gives you a full day for the yatra with a night trek option, and adds Shiv Khori or a rest day before the return.",
    keyFacts: [
      { label: "Duration", value: "3 nights / 4 days" },
      { label: "Travel", value: "Vande Bharat, overnight train or car" },
      { label: "Delhi to Katra", value: "~650 km by road" },
      { label: "Add-on", value: "Shiv Khori cave temple" },
    ],
    itinerary: {
      nights: 3,
      days: 4,
      start: "Delhi",
      end: "Delhi",
      mode: "Train + road",
      route: ["Delhi", "Katra", "Bhawan", "Bhairon", "Katra", "Shiv Khori", "Delhi"],
      priceFrom: null,
      days_: [
        { day: "Day 1", title: "Delhi to Katra", text: "Board the train to Shri Mata Vaishno Devi Katra station. On arrival we take you to the RFID counter and then the hotel. Early dinner and rest.", overnight: "Katra" },
        { day: "Day 2", title: "Vaishno Devi yatra", text: "Start the walk from Banganga, stopping at Ardhkuwari, or take a pony or the helicopter. Darshan of the Holy Pindis, then the ropeway or walk up to the Bhairon temple. Return to Katra.", overnight: "Katra" },
        { day: "Day 3", title: "Shiv Khori or rest day", text: "Day trip to the Shiv Khori cave temple (about 80 km) with its natural Shiva lingam, or rest after the trek.", overnight: "Katra" },
        { day: "Day 4", title: "Return to Delhi", text: "Transfer to Katra station for the train back to Delhi." },
      ],
      inclusions: [...vdInclusions, "Train tickets can be booked on request at actual fare"],
      exclusions: vdExclusions,
    },
    sections: [
      {
        h2: "Train or car from Delhi?",
        blocks: [
          { type: "p", text: "The Vande Bharat train from New Delhi to Katra takes about 8 hours and is the most comfortable option. Overnight trains save a hotel night. A car takes 11 to 12 hours on the road, but suits families who want to stop at Amritsar on the way. See our [Vaishno Devi with Amritsar package](/vaishno-devi-yatra/with-amritsar/)." },
        ],
      },
    ],
    faqs: [
      { q: "How far is Vaishno Devi from Delhi?", a: "About 650 km to Katra by road. By Vande Bharat train it takes about 8 hours." },
      { q: "Can Vaishno Devi be done in 2 days from Delhi?", a: "Yes, with an overnight train each way and the yatra in between, but it is tiring. 3 nights is more comfortable." },
    ],
    related: ["/vaishno-devi-yatra/with-amritsar/", "/vaishno-devi-yatra/by-helicopter/", "/do-dham-yatra/from-delhi/"],
    enquiry: "Vaishno Devi from Delhi (3N/4D)",
    art: "vaishno",
    places: vdPlaces,
    updated: UPDATED,
  },

  {
    path: "/vaishno-devi-yatra/by-helicopter/",
    parent: "/vaishno-devi-yatra/",
    cluster: "vaishno-devi",
    name: "Vaishno Devi by Helicopter",
    title: "Vaishno Devi Helicopter Package | Katra to Sanjichhat",
    description:
      "Vaishno Devi by helicopter: Katra to Sanjichhat flights, official Shrine Board booking, the walk to the Bhawan and help for seniors.",
    h1: "Vaishno Devi Yatra by Helicopter",
    eyebrow: "Katra → Sanjichhat · About 8 minutes",
    intro:
      "The helicopter from Katra to Sanjichhat cuts the 12 km climb to a short flight and a walk of about 2.5 km to the Bhawan. Tickets are released only on the Shri Mata Vaishno Devi Shrine Board's official portal and sell out quickly. We plan your trip around the slot you get, and arrange a pony or palki if helicopter tickets aren't available.",
    keyFacts: [
      { label: "Route", value: "Katra helipad → Sanjichhat" },
      { label: "Flight", value: "About 8 minutes" },
      { label: "Walk after landing", value: "About 2.5 km to the Bhawan" },
      { label: "Booking", value: "Shrine Board official portal only" },
    ],
    sections: [
      {
        h2: "How helicopter booking works",
        blocks: [
          { type: "ol", items: ["Register for the yatra and get your RFID card details", "Book on the Shrine Board's official portal when the slots for your date open", "Report at the Katra helipad well before your slot with your photo ID", "Walk, take a pony or a palki from Sanjichhat to the Bhawan"] },
          { type: "callout", tone: "warn", title: "Fake helicopter booking websites", text: "Many websites pretend to sell Vaishno Devi helicopter tickets. Book only through the Shrine Board's official website. No agent can guarantee you a helicopter seat." },
        ],
      },
    ],
    faqs: [
      { q: "Is the Vaishno Devi helicopter available every day?", a: "Yes, weather permitting, during daylight hours. Flights are suspended in rain, fog and strong wind." },
      { q: "Can elderly pilgrims walk from Sanjichhat?", a: "The path is mostly level or downhill to the Bhawan. Ponies and palkis are also available at Sanjichhat." },
    ],
    related: ["/vaishno-devi-yatra/", "/vaishno-devi-yatra/from-delhi/"],
    enquiry: "Vaishno Devi helicopter yatra",
    art: "vaishno",
    places: vdPlaces,
    updated: UPDATED,
  },

  {
    path: "/vaishno-devi-yatra/with-amritsar/",
    parent: "/vaishno-devi-yatra/",
    cluster: "vaishno-devi",
    name: "Vaishno Devi with Amritsar",
    title: "Vaishno Devi and Amritsar Tour Package | 5N/6D from Delhi",
    description:
      "Combine Vaishno Devi with the Golden Temple and Wagah border in 6 days from Delhi by car. Katra and Amritsar hotels, RFID card help and private transfers.",
    h1: "Vaishno Devi with Amritsar Golden Temple (5 Nights / 6 Days)",
    eyebrow: "Delhi → Amritsar → Katra → Delhi",
    intro:
      "A popular family route: darshan at Sri Harmandir Sahib (the Golden Temple), the Wagah border ceremony, then on to Katra for Mata Vaishno Devi. It's all by private car, so you never handle luggage on a train.",
    keyFacts: [
      { label: "Duration", value: "5 nights / 6 days" },
      { label: "Travel", value: "Private car from Delhi" },
      { label: "Amritsar to Katra", value: "~210 km · 5 hrs" },
      { label: "Best months", value: "October to March" },
    ],
    itinerary: {
      nights: 5,
      days: 6,
      start: "Delhi",
      end: "Delhi",
      mode: "Road",
      route: ["Delhi", "Amritsar", "Wagah", "Katra", "Bhawan", "Delhi"],
      priceFrom: null,
      days_: [
        { day: "Day 1", title: "Delhi to Amritsar", text: "Drive along the Grand Trunk Road. Evening Palki Sahib ceremony at the Golden Temple.", overnight: "Amritsar", drive: "~450 km · 8–9 hrs" },
        { day: "Day 2", title: "Amritsar", text: "Early morning at the Golden Temple, Jallianwala Bagh and Durgiana Temple. Afternoon trip to the Wagah border ceremony.", overnight: "Amritsar" },
        { day: "Day 3", title: "Amritsar to Katra", text: "Drive to Katra and collect your RFID yatra card.", overnight: "Katra", drive: "~210 km · 5 hrs" },
        { day: "Day 4", title: "Vaishno Devi yatra", text: "Walk or ride to the Bhawan for darshan, then the Bhairon temple.", overnight: "Katra" },
        { day: "Day 5", title: "Rest day or Shiv Khori", text: "Rest, or take a day trip to Shiv Khori.", overnight: "Katra" },
        { day: "Day 6", title: "Katra to Delhi", text: "Drive back to Delhi, or take the train from Katra.", drive: "~650 km by road" },
      ],
      inclusions: [...vdInclusions, "Amritsar hotel with breakfast and dinner"],
      exclusions: vdExclusions,
    },
    sections: [],
    faqs: [
      { q: "Should we do Amritsar before or after Vaishno Devi?", a: "Either works. Amritsar first breaks the long drive from Delhi nicely, and you finish the trip with the yatra." },
    ],
    related: ["/vaishno-devi-yatra/from-delhi/", "/vaishno-devi-yatra/"],
    enquiry: "Vaishno Devi with Amritsar (5N/6D)",
    art: "vaishno",
    places: [...(vdPlaces ?? []), { name: "Golden Temple (Sri Harmandir Sahib)", type: "TouristAttraction" }],
    updated: UPDATED,
  },
];
