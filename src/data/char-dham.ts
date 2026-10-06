import type { LandingPage } from "./types";
import { roadExclusions, roadInclusions, roadTiers } from "./shared";

const UPDATED = "2026-10-06";

const charDhamPlaces: LandingPage["places"] = [
  { name: "Yamunotri Temple", type: "HinduTemple" },
  { name: "Gangotri Temple", type: "HinduTemple" },
  { name: "Kedarnath Temple", type: "HinduTemple" },
  { name: "Badrinath Temple", type: "HinduTemple" },
];

export const charDhamPages: LandingPage[] = [
  {
    path: "/char-dham-yatra/",
    cluster: "char-dham",
    name: "Char Dham Yatra",
    title: "Char Dham Yatra Package 2027 | Road & Helicopter Tours",
    description:
      "Plan Yamunotri, Gangotri, Kedarnath and Badrinath with verified hotels, registration help and elder-friendly pacing. 10–12 day packages from Haridwar and Delhi.",
    h1: "Char Dham Yatra Packages for 2027",
    eyebrow: "Yamunotri · Gangotri · Kedarnath · Badrinath",
    intro:
      "The Char Dham Yatra takes you to the four Himalayan shrines of Uttarakhand, from the source of the Yamuna to Lord Vishnu's seat at Badrinath. By road it takes 10 to 12 days from Haridwar, or 5 to 6 days by helicopter. We plan the route, hotels, registration and darshan timing, so you can focus on the yatra itself.",
    keyFacts: [
      { label: "Season", value: "Late April / May to early November" },
      { label: "Duration", value: "10–12 days by road · 5–6 by helicopter" },
      { label: "Highest shrine", value: "Kedarnath, 3,583 m" },
      { label: "Longest walk", value: "About 16 km each way to Kedarnath" },
      { label: "Registration", value: "Mandatory, free, Uttarakhand government" },
      { label: "Starting points", value: "Haridwar, Rishikesh, Dehradun, Delhi" },
    ],
    cards: [
      "/char-dham-yatra/from-haridwar/",
      "/char-dham-yatra/from-delhi/",
      "/char-dham-yatra/by-helicopter/",
      "/char-dham-yatra/private-charter/",
      "/char-dham-yatra/for-senior-citizens/",
      "/do-dham-yatra/",
    ],
    sections: [
      {
        h2: "What is the Char Dham Yatra?",
        blocks: [
          {
            type: "p",
            text: "In Uttarakhand, **Char Dham** means the four shrines of the Garhwal Himalaya: **Yamunotri** (Goddess Yamuna), **Gangotri** (Goddess Ganga), **Kedarnath** (Lord Shiva, one of the twelve Jyotirlingas) and **Badrinath** (Lord Vishnu as Badri Narayan). It is often called the Chota Char Dham to tell it apart from the all-India Char Dham of Badrinath, Dwarka, Puri and Rameswaram established by Adi Shankaracharya.",
          },
          {
            type: "p",
            text: "Tradition takes pilgrims from west to east: Yamunotri, then Gangotri, then Kedarnath, ending at Badrinath. This order also makes sense on the map, so every package we run follows it.",
          },
        ],
      },
      {
        h2: "How many days does the Char Dham Yatra take?",
        blocks: [
          {
            type: "table",
            head: ["Way of travel", "Typical duration", "Starts from", "Who it suits"],
            rows: [
              ["By road", "10 nights / 11 days", "Haridwar or Rishikesh", "Most families and groups"],
              ["By road from Delhi", "11 nights / 12 days", "Delhi", "Pilgrims flying or training into Delhi"],
              ["Shared helicopter", "5 nights / 6 days", "Dehradun (Sahastradhara)", "Short on time, limited walking"],
              ["Private charter", "2–5 days", "Dehradun", "Families wanting privacy and flexible timing"],
            ],
          },
          {
            type: "p",
            text: "We don't recommend squeezing the road yatra below 9 nights. Hill drives are slow, Kedarnath needs a full day each way, and a rest day protects you from altitude sickness. See the [day-by-day Haridwar itinerary](/char-dham-yatra/from-haridwar/).",
          },
        ],
      },
      {
        h2: "Best time for the Char Dham Yatra",
        blocks: [
          {
            type: "table",
            head: ["Month", "Conditions", "Our view"],
            rows: [
              ["Late April – May", "Shrines open; cool days, cold nights; peak crowds", "Good, book early"],
              ["June", "Warmer, very busy until school holidays end", "Good with a firm plan"],
              ["July – August", "Monsoon; landslide risk on hill roads", "Only with flexible dates"],
              ["September", "Rains ease, clear views, fewer pilgrims", "Excellent"],
              ["October – early November", "Crisp and clear; cold nights; shrines close after Diwali", "Excellent until closing"],
            ],
          },
          {
            type: "p",
            text: "Opening dates are announced each year. Badrinath's date is fixed on Basant Panchami, Kedarnath's on Maha Shivratri, and Yamunotri and Gangotri open on Akshaya Tritiya. Read our [opening and closing dates guide](/guides/char-dham-opening-closing-dates/).",
          },
        ],
      },
      {
        h2: "Char Dham registration is mandatory",
        blocks: [
          {
            type: "p",
            text: "Every pilgrim, of every age, must register with the Uttarakhand government before the yatra. Registration is **free** and is checked at points along the route. We complete it for our guests using the details and ID you share with us. If you're travelling on your own, follow our [step-by-step registration guide](/guides/char-dham-registration/).",
          },
          {
            type: "callout",
            tone: "warn",
            title: "Beware of fake helicopter websites",
            text: "Kedarnath shuttle helicopter tickets are sold only through IRCTC HeliYatra. Websites and social media pages that sell \"confirmed Kedarnath heli tickets\" are a common scam. Charter and Char Dham helicopter packages are different products, sold by licensed operators.",
          },
        ],
      },
      {
        h2: "How much does the Char Dham Yatra cost?",
        blocks: [
          {
            type: "p",
            text: "The cost depends mostly on the vehicle, hotel category, group size and whether you add a helicopter or pony at Kedarnath. A family of four sharing one vehicle pays far less per person than a couple travelling alone. We quote a clear per-person price with every hotel named, so you can compare quotes properly.",
          },
          {
            type: "ul",
            items: [
              "**Road packages:** priced by tier (Standard, Deluxe, Premium) and group size",
              "**On-route extras:** pony, palki or pithu at Yamunotri and Kedarnath are paid at government-fixed rates at the counters",
              "**Helicopter packages:** priced per seat and confirmed only once the operator releases the schedule",
            ],
          },
          { type: "p", text: "See the full [Char Dham Yatra cost breakdown](/guides/char-dham-yatra-cost/)." },
        ],
      },
      {
        h2: "Fitness, altitude and health",
        blocks: [
          {
            type: "p",
            text: "Kedarnath is at 3,583 m and the walk from Gaurikund is about 16 km uphill. Yamunotri needs a walk of about 6 km. Gangotri and Badrinath can be reached by road. Start walking daily a month before you travel, carry your regular medicines and a prescription, and tell us about any heart, lung or blood pressure condition so we can plan rest days.",
          },
          {
            type: "ul",
            items: [
              "Ponies, palkis and pithus are available for those who cannot walk",
              "Drink water often, avoid alcohol and climb slowly",
              "Headache, breathlessness at rest or confusion means descend and see a doctor; health posts are run along the Kedarnath route",
            ],
          },
          { type: "p", text: "Planning for parents? Read the [Char Dham Yatra for senior citizens](/char-dham-yatra/for-senior-citizens/) page." },
        ],
      },
      {
        h2: "What to pack for Char Dham",
        blocks: [
          {
            type: "ul",
            items: [
              "Warm layers: thermal inners, fleece, a down or padded jacket, woollen cap and gloves, even in May",
              "A light rain jacket and a poncho",
              "Broken-in walking shoes with grip, plus slippers for temple queues",
              "Government photo ID (the same one used for registration)",
              "Personal medicines, a small first-aid kit, sunscreen and lip balm",
              "Some cash: ATMs are unreliable above Guptkashi and Uttarkashi",
            ],
          },
          { type: "p", text: "See the [full Char Dham packing list](/guides/char-dham-packing-list/)." },
        ],
      },
    ],
    faqs: [
      { q: "Which is the correct order of Char Dham Yatra?", a: "Yamunotri, Gangotri, Kedarnath and then Badrinath, travelling west to east. This follows tradition and is also the most efficient route by road." },
      { q: "How many days are needed for Char Dham Yatra?", a: "Plan 10 nights / 11 days from Haridwar by road, or 11 nights / 12 days from Delhi. By shared helicopter it takes 5 nights / 6 days from Dehradun." },
      { q: "Is registration compulsory for Char Dham Yatra?", a: "Yes. Every pilgrim must register with the Uttarakhand government. Registration is free and is checked on the route. We handle it for our guests." },
      { q: "Can senior citizens do the Char Dham Yatra?", a: "Yes. Gangotri and Badrinath can be reached by road. For Kedarnath and Yamunotri, ponies, palkis or a Kedarnath helicopter shuttle reduce the walking. We add rest days and keep drives shorter for older pilgrims." },
      { q: "When does Char Dham Yatra start in 2027?", a: "Yamunotri and Gangotri open on Akshaya Tritiya, usually late April or early May. Kedarnath's and Badrinath's dates are announced on Maha Shivratri and Basant Panchami. We update this page as soon as the dates are declared." },
      { q: "Is it safe to do Char Dham Yatra in monsoon?", a: "July and August bring landslides and road closures. Travel is possible, but keep two or three buffer days and follow official advisories. We recommend September and October instead." },
      { q: "Do you provide Char Dham packages from other cities?", a: "Yes. Most pilgrims start from Haridwar or Delhi, but we arrange pickups from Dehradun airport, Rishikesh and railway stations. Tell us your city on WhatsApp and we will plan the connection." },
    ],
    related: ["/do-dham-yatra/", "/kedarnath-yatra/", "/badrinath-yatra/", "/yamunotri-gangotri-yatra/"],
    enquiry: "Char Dham Yatra",
    art: "char-dham",
    places: charDhamPlaces,
    updated: UPDATED,
  },

  {
    path: "/char-dham-yatra/from-haridwar/",
    parent: "/char-dham-yatra/",
    cluster: "char-dham",
    name: "Char Dham Yatra from Haridwar",
    title: "Char Dham Yatra from Haridwar | 10N/11D Package",
    description:
      "Day-by-day Char Dham Yatra from Haridwar with a night at Kedarnath, registration help and a private hill vehicle. Compare three hotel tiers.",
    h1: "Char Dham Yatra Package from Haridwar (10 Nights / 11 Days)",
    eyebrow: "Haridwar → Yamunotri → Gangotri → Kedarnath → Badrinath → Haridwar",
    intro:
      "Haridwar is the traditional starting point of the Char Dham Yatra. This itinerary starts with Ganga aarti at Har Ki Pauri, follows the classic west-to-east route, and includes one night at Kedarnath, so you can attend the early morning darshan without rushing back down the trail.",
    keyFacts: [
      { label: "Duration", value: "10 nights / 11 days" },
      { label: "Start / end", value: "Haridwar" },
      { label: "Total drive", value: "About 1,250 km" },
      { label: "Walking", value: "Yamunotri ~6 km, Kedarnath ~16 km each way" },
    ],
    itinerary: {
      nights: 10,
      days: 11,
      start: "Haridwar",
      end: "Haridwar",
      mode: "Road",
      route: ["Haridwar", "Barkot", "Yamunotri", "Uttarkashi", "Gangotri", "Guptkashi", "Kedarnath", "Badrinath", "Rudraprayag", "Haridwar"],
      priceFrom: null,
      days_: [
        { day: "Day 1", title: "Arrive in Haridwar, evening Ganga aarti", text: "Pickup from Haridwar station or your hotel. Check in, rest, then attend the evening aarti at Har Ki Pauri. Trip briefing with your coordinator, and a check of registration documents.", overnight: "Haridwar" },
        { day: "Day 2", title: "Haridwar to Barkot", text: "Drive via Dehradun and Mussoorie with a stop at Kempty Falls viewpoint, then descend to the Yamuna valley.", overnight: "Barkot", drive: "~210 km · 7–8 hrs" },
        { day: "Day 3", title: "Yamunotri darshan", text: "Drive to Janki Chatti and walk about 6 km (or take a pony or palki) to Yamunotri. Take a dip in the Surya Kund hot spring and cook rice in its waters as prasad, then have darshan of Goddess Yamuna and worship at Divya Shila. Return to Barkot.", overnight: "Barkot", drive: "~45 km each way + 6 km walk" },
        { day: "Day 4", title: "Barkot to Uttarkashi", text: "Drive along the Yamuna and Bhagirathi valleys. In the evening, visit the Kashi Vishwanath temple in Uttarkashi.", overnight: "Uttarkashi", drive: "~100 km · 4–5 hrs" },
        { day: "Day 5", title: "Gangotri darshan", text: "Drive through Harsil's apple orchards to Gangotri. Take a holy dip in the Bhagirathi, have darshan of Goddess Ganga, and see Bhagirath Shila, where King Bhagirath is said to have meditated. Return to Uttarkashi.", overnight: "Uttarkashi", drive: "~100 km each way" },
        { day: "Day 6", title: "Uttarkashi to Guptkashi", text: "A long scenic drive via Tehri lake and Rudraprayag, where the Alaknanda and Mandakini meet. Early dinner and rest before the Kedarnath trek.", overnight: "Guptkashi", drive: "~220 km · 8–9 hrs" },
        { day: "Day 7", title: "Trek to Kedarnath", text: "Early drive to Sonprayag, shared jeep to Gaurikund, then walk about 16 km (or take a pony, palki or a pre-booked IRCTC helicopter) to Kedarnath. Evening aarti at the temple.", overnight: "Kedarnath", drive: "~30 km + 16 km walk" },
        { day: "Day 8", title: "Kedarnath darshan, return to Guptkashi", text: "Darshan in the early morning. Visit the Bhairavnath temple and the samadhi of Adi Shankaracharya, then walk down to Gaurikund and drive to Guptkashi.", overnight: "Guptkashi" },
        { day: "Day 9", title: "Guptkashi to Badrinath", text: "Drive via Ukhimath and Chopta, or via Rudraprayag, depending on road status, to Badrinath. Bathe in Tapt Kund, then evening darshan of Badri Narayan.", overnight: "Badrinath", drive: "~200 km · 7–8 hrs" },
        { day: "Day 10", title: "Mana village, drive to Rudraprayag", text: "Early morning darshan, then visit Mana village with Vyas Gufa, Ganesh Gufa and Bheem Pul. Brahma Kapal pind daan can be arranged on request. Drive down past Vishnuprayag, Nandprayag and Karnaprayag.", overnight: "Rudraprayag or Srinagar", drive: "~160 km · 6 hrs" },
        { day: "Day 11", title: "Return to Haridwar", text: "Drive via Devprayag, where the Bhagirathi and Alaknanda meet to form the Ganga. Drop at Haridwar station or hotel by evening.", drive: "~160 km · 5–6 hrs" },
      ],
      tiers: roadTiers,
      inclusions: roadInclusions,
      exclusions: roadExclusions,
    },
    sections: [
      {
        h2: "Why start from Haridwar?",
        blocks: [
          { type: "p", text: "Haridwar is well connected by train from across India, and Dehradun's Jolly Grant airport is about an hour away. Starting here saves a full day of driving compared with starting in Delhi, and the evening aarti at Har Ki Pauri makes a fitting start to the yatra." },
        ],
      },
      {
        h2: "Changing the itinerary",
        blocks: [
          {
            type: "ul",
            items: [
              "**Skip the Kedarnath night stay:** do the walk up and back in one day. It's possible for fit walkers, but long.",
              "**Add Tungnath and Chopta:** add one day between Kedarnath and Badrinath.",
              "**Add Rishikesh:** add a night for the Parmarth Niketan aarti and Laxman Jhula.",
              "**Kedarnath by helicopter:** we plan the day around your IRCTC shuttle slot.",
            ],
          },
        ],
      },
    ],
    faqs: [
      { q: "How far is Kedarnath from Haridwar?", a: "About 240 km to Sonprayag by road (8–9 hours), then a short jeep ride to Gaurikund and about 16 km on foot to the temple." },
      { q: "Can I do Char Dham from Haridwar in fewer days?", a: "9 nights is the realistic minimum by road. Anything shorter means very long drives and no buffer for weather. For a shorter trip, consider the Do Dham (Kedarnath and Badrinath) yatra or a helicopter package." },
      { q: "Do you include the night stay at Kedarnath?", a: "Yes, this itinerary includes one night at Kedarnath, so you can have the early-morning darshan without rushing. Stays there are simple camps or guesthouses." },
      { q: "Is the Haridwar pickup from the railway station?", a: "Yes. We pick up from Haridwar railway station, any Haridwar or Rishikesh hotel, or Dehradun airport for a small extra charge." },
    ],
    related: ["/char-dham-yatra/from-delhi/", "/do-dham-yatra/from-haridwar/", "/char-dham-yatra/by-helicopter/"],
    enquiry: "Char Dham Yatra from Haridwar (10N/11D)",
    art: "char-dham",
    places: charDhamPlaces,
    updated: UPDATED,
  },

  {
    path: "/char-dham-yatra/from-delhi/",
    parent: "/char-dham-yatra/",
    cluster: "char-dham",
    name: "Char Dham Yatra from Delhi",
    title: "Char Dham Yatra from Delhi | 11N/12D Tour Package",
    description:
      "Char Dham Yatra from Delhi in 11 nights / 12 days, with pickup anywhere in Delhi NCR, a private vehicle and hotels named in every tier.",
    h1: "Char Dham Yatra Package from Delhi (11 Nights / 12 Days)",
    eyebrow: "Delhi → Haridwar → Four Dhams → Delhi",
    intro:
      "For pilgrims arriving in Delhi by flight or train, or living in Delhi NCR, this package adds a comfortable drive to Haridwar at the start and back to Delhi at the end. In between it follows our full Haridwar itinerary, with the same vehicle and driver for all 12 days.",
    keyFacts: [
      { label: "Duration", value: "11 nights / 12 days" },
      { label: "Pickup", value: "Delhi airport, NDLS / Nizamuddin, NCR home" },
      { label: "Delhi to Haridwar", value: "~220 km · 5–6 hrs" },
      { label: "Best months", value: "May, June, September, October" },
    ],
    itinerary: {
      nights: 11,
      days: 12,
      start: "Delhi",
      end: "Delhi",
      mode: "Road",
      route: ["Delhi", "Haridwar", "Barkot", "Yamunotri", "Uttarkashi", "Gangotri", "Guptkashi", "Kedarnath", "Badrinath", "Rudraprayag", "Haridwar", "Delhi"],
      priceFrom: null,
      days_: [
        { day: "Day 1", title: "Delhi to Haridwar", text: "Morning pickup in Delhi NCR. Drive via Meerut and Roorkee, then attend the evening aarti at Har Ki Pauri.", overnight: "Haridwar", drive: "~220 km · 5–6 hrs" },
        { day: "Day 2–3", title: "Barkot and Yamunotri", text: "Drive to Barkot. The next day, walk about 6 km from Janki Chatti to Yamunotri for darshan and the Surya Kund ritual.", overnight: "Barkot" },
        { day: "Day 4–5", title: "Uttarkashi and Gangotri", text: "Drive to Uttarkashi, visit the Kashi Vishwanath temple, then a day trip to Gangotri via Harsil.", overnight: "Uttarkashi" },
        { day: "Day 6", title: "Uttarkashi to Guptkashi", text: "Drive via Tehri and Rudraprayag.", overnight: "Guptkashi", drive: "~220 km · 8–9 hrs" },
        { day: "Day 7–8", title: "Kedarnath", text: "Walk about 16 km from Gaurikund to Kedarnath for evening aarti. Darshan the next morning, then descend to Guptkashi.", overnight: "Kedarnath, then Guptkashi" },
        { day: "Day 9–10", title: "Badrinath and Mana", text: "Drive to Badrinath for evening darshan. The next morning visit Mana village, then drive down to Rudraprayag.", overnight: "Badrinath, then Rudraprayag" },
        { day: "Day 11", title: "Rudraprayag to Haridwar", text: "Drive via Devprayag. Free evening in Haridwar for shopping and a final Ganga snan.", overnight: "Haridwar" },
        { day: "Day 12", title: "Haridwar to Delhi", text: "Drive back to Delhi. Drop at the airport, a station or your home." },
      ],
      tiers: roadTiers,
      inclusions: [...roadInclusions.filter((i) => !i.startsWith("Pickup")), "Pickup and drop anywhere in Delhi NCR"],
      exclusions: roadExclusions,
    },
    sections: [
      {
        h2: "Should you start from Delhi or Haridwar?",
        blocks: [
          { type: "p", text: "If you can reach Haridwar easily by train (Shatabdi and Vande Bharat trains run from Delhi), starting from Haridwar saves two days and some cost. Start from Delhi if you are flying in, travelling with elderly parents who prefer door-to-door pickup, or want one vehicle for the whole journey." },
        ],
      },
    ],
    faqs: [
      { q: "How many days is Char Dham Yatra from Delhi?", a: "11 nights and 12 days by road is comfortable. Delhi to Haridwar adds about 5–6 hours of driving at each end." },
      { q: "Can international pilgrims start from Delhi airport?", a: "Yes. We meet you at arrivals, and a night in Delhi or Haridwar before the drive is recommended after a long-haul flight." },
      { q: "Is there a helicopter option from Delhi?", a: "Helicopter Char Dham packages start from Dehradun. We can arrange a road transfer from Delhi to Dehradun (about 6 hours), or you can take a short domestic flight." },
    ],
    related: ["/char-dham-yatra/from-haridwar/", "/do-dham-yatra/from-delhi/", "/hindu-pilgrimage-tours-india/"],
    enquiry: "Char Dham Yatra from Delhi (11N/12D)",
    art: "char-dham",
    places: charDhamPlaces,
    updated: UPDATED,
  },

  {
    path: "/char-dham-yatra/by-helicopter/",
    parent: "/char-dham-yatra/",
    cluster: "char-dham",
    name: "Char Dham Yatra by Helicopter",
    title: "Char Dham Yatra by Helicopter | 5N/6D from Dehradun",
    description:
      "All four dhams in 6 days by helicopter from Dehradun. Shared seats, stays near each shrine, darshan arrangements and transfers included.",
    h1: "Char Dham Yatra by Helicopter from Dehradun",
    eyebrow: "5 nights / 6 days · Shared helicopter",
    intro:
      "A helicopter turns a 10-day road journey into six days, with most of the long hill drives replaced by short flights between helipads near each shrine. It suits pilgrims with limited time or limited walking ability. Because seats are limited and schedules depend on the weather, we confirm your seats only once the operator confirms them.",
    keyFacts: [
      { label: "Duration", value: "5 nights / 6 days" },
      { label: "Base", value: "Sahastradhara helipad, Dehradun" },
      { label: "Helipads used", value: "Kharsali, Harsil, Kedarnath/Phata area, Badrinath" },
      { label: "Baggage", value: "Strict per-person limit (soft bag only)" },
    ],
    itinerary: {
      nights: 5,
      days: 6,
      start: "Dehradun",
      end: "Dehradun",
      mode: "Helicopter",
      route: ["Dehradun", "Kharsali (Yamunotri)", "Harsil (Gangotri)", "Kedarnath", "Badrinath", "Dehradun"],
      priceFrom: null,
      days_: [
        { day: "Day 1", title: "Arrive in Dehradun", text: "Airport or station pickup, hotel check-in and a briefing on baggage and weight limits. Optional visit to Tapkeshwar Mahadev.", overnight: "Dehradun" },
        { day: "Day 2", title: "Fly to Kharsali, Yamunotri darshan", text: "Morning flight from Sahastradhara to Kharsali. Walk, pony or palki to Yamunotri for darshan.", overnight: "Kharsali" },
        { day: "Day 3", title: "Fly to Harsil, Gangotri darshan", text: "Short flight to Harsil, then drive about 25 km to Gangotri for darshan and puja on the Bhagirathi.", overnight: "Harsil" },
        { day: "Day 4", title: "Fly to Kedarnath", text: "Flight to the Kedarnath valley and transfer to the shrine. Darshan arrangements, then return to your hotel.", overnight: "Guptkashi / Phata area" },
        { day: "Day 5", title: "Fly to Badrinath", text: "Flight to Badrinath. Bathe in Tapt Kund, darshan, and a visit to Mana village.", overnight: "Badrinath" },
        { day: "Day 6", title: "Return to Dehradun", text: "Morning darshan if time allows, then fly back to Sahastradhara. Drop at the airport or station." },
      ],
      inclusions: [
        "Helicopter seats on all sectors as per the operator schedule",
        "Hotel stays near each shrine with all vegetarian meals",
        "Ground transfers from helipads to the temples",
        "Darshan arrangements as permitted by the temple committees",
        "Dehradun airport or station transfers",
        "Uttarakhand yatra registration help",
      ],
      exclusions: [
        "Pony or palki at Yamunotri",
        "Excess baggage and charges for passengers over the operator's weight limit",
        "Extra hotel nights caused by weather-cancelled flights",
        "Special puja fees, tips and insurance",
      ],
    },
    sections: [
      {
        h2: "What does a Char Dham helicopter package cost?",
        blocks: [
          { type: "p", text: "In 2026, shared-seat Char Dham helicopter packages from Dehradun were generally priced between about ₹1.8 lakh and ₹2.9 lakh per person, depending on the operator, the date and the hotels. Prices for 2027 are set when operators publish their schedules, usually in early spring. We share the exact price, operator name and flight plan in writing before you pay anything." },
        ],
      },
      {
        h2: "Rules you should know before booking",
        blocks: [
          {
            type: "ul",
            items: [
              "Every passenger is weighed. There is a body weight limit per seat, above which an extra charge applies.",
              "Baggage is limited to a small soft bag per person. Main luggage stays at the Dehradun hotel.",
              "Flights operate only in clear weather, usually in the morning. Keep a spare day after the yatra.",
              "Infants, pregnant pilgrims and passengers with certain medical conditions may need a fitness certificate.",
            ],
          },
          { type: "callout", tone: "warn", title: "Kedarnath shuttle vs Char Dham package", text: "The separate Kedarnath shuttle (from Phata, Sersi or Guptkashi) is booked only on IRCTC HeliYatra. A Char Dham helicopter package is a charter product from a licensed operator. Never pay anyone who claims to sell IRCTC shuttle tickets privately." },
        ],
      },
    ],
    faqs: [
      { q: "Where does the Char Dham helicopter yatra start?", a: "From the Sahastradhara helipad in Dehradun, about 45 minutes from Jolly Grant airport." },
      { q: "What happens if a flight is cancelled due to weather?", a: "Flights resume when the weather clears. Extra hotel nights are usually at your cost, which is why we recommend a buffer day and travel insurance." },
      { q: "Can senior citizens take the helicopter yatra?", a: "Yes. It is the easiest way for older pilgrims to complete all four dhams. Some walking is still needed at Yamunotri and Kedarnath, and ponies or palkis are available." },
      { q: "Is the helicopter yatra available in 2027?", a: "Operators announce 2027 schedules and fares in spring, a few weeks before the shrines open. Send us your dates and we will hold your place in the queue." },
    ],
    related: ["/char-dham-yatra/private-charter/", "/do-dham-yatra/by-helicopter/", "/kedarnath-yatra/by-helicopter/"],
    enquiry: "Char Dham Yatra by Helicopter",
    art: "char-dham",
    places: charDhamPlaces,
    updated: UPDATED,
  },

  {
    path: "/char-dham-yatra/private-charter/",
    parent: "/char-dham-yatra/",
    cluster: "char-dham",
    name: "Private Charter Char Dham Yatra",
    title: "Private Helicopter Char Dham Yatra | Luxury Charter",
    description:
      "All four dhams by private helicopter from Dehradun, on your schedule. Premium stays and a dedicated yatra escort for families and NRIs.",
    h1: "Luxury Char Dham Yatra by Private Helicopter Charter",
    eyebrow: "Private charter · 2 to 5 days",
    intro:
      "A private charter gives your family its own helicopter for the yatra: you choose the start date, the pace and how long to stay at each shrine. It is the most comfortable way for elderly parents, international visitors and anyone who wants a quiet, unhurried darshan, as far as weather and the permissions of the Civil Aviation and temple authorities allow.",
    keyFacts: [
      { label: "Seats", value: "Typically 4–6 passengers per aircraft" },
      { label: "Duration", value: "2–5 days, at your pace" },
      { label: "Escort", value: "Dedicated yatra manager from Dehradun" },
      { label: "Suits", value: "Families, NRIs, international devotees" },
    ],
    itinerary: {
      nights: 4,
      days: 5,
      start: "Dehradun",
      end: "Dehradun",
      mode: "Private charter",
      route: ["Dehradun", "Yamunotri", "Gangotri", "Kedarnath", "Badrinath", "Dehradun"],
      priceFrom: null,
      days_: [
        { day: "Day 1", title: "Arrive in Dehradun", text: "VIP meet at the airport, check-in at a premium hotel, and a briefing with your yatra manager.", overnight: "Dehradun" },
        { day: "Day 2", title: "Yamunotri and Gangotri", text: "Fly to Kharsali for Yamunotri darshan, then on to Harsil for Gangotri. With good weather both are possible in one day.", overnight: "Harsil" },
        { day: "Day 3", title: "Kedarnath", text: "Fly to Kedarnath, with time for darshan and a visit to the Bhairavnath temple.", overnight: "Kedarnath valley" },
        { day: "Day 4", title: "Badrinath", text: "Fly to Badrinath for darshan, Tapt Kund and Mana village. Evening aarti.", overnight: "Badrinath" },
        { day: "Day 5", title: "Return to Dehradun", text: "Morning abhishek or puja if booked, then fly back to Dehradun." },
      ],
      inclusions: [
        "Private helicopter on all sectors, subject to weather and aviation permissions",
        "Premium hotel stays with all vegetarian meals",
        "Dedicated yatra manager and ground team",
        "Luxury SUV transfers at every stop",
        "Help with booking special pujas through the temple committees",
        "Registration and all permits",
      ],
      exclusions: ["Temple puja fees and donations", "Extra nights due to weather", "International flights and visas", "Travel insurance"],
    },
    sections: [
      {
        h2: "Who chooses a private charter?",
        blocks: [
          { type: "ul", items: ["Families travelling with parents over 70", "NRI and international devotees with short holidays", "Families who want privacy and set their own timings", "Pilgrims who want to do special pujas without rushing"] },
        ],
      },
      {
        h2: "How charter pricing works",
        blocks: [
          { type: "p", text: "A charter is priced for the whole aircraft, based on flying hours, landing permissions and positioning, not per seat. A family of five usually pays less per person than for five seats on a shared package. Send us your dates and group size and we will return a written quote with the operator named." },
        ],
      },
    ],
    faqs: [
      { q: "Can we do Char Dham by private helicopter in one day?", a: "Operators sometimes offer one or two-day charters, but darshan time is very short. We recommend at least three days so you can be present at each shrine." },
      { q: "Is the charter available for foreign nationals?", a: "Yes. Foreign passport holders can travel on a charter. Carry your passport and visa for registration and hotel check-in." },
      { q: "Are VIP darshan or special pujas guaranteed?", a: "No operator can guarantee darshan timings, which are controlled by the temple committees. We book official pujas where they are offered and plan your arrival for the quietest slots." },
    ],
    related: ["/char-dham-yatra/by-helicopter/", "/hindu-pilgrimage-tours-india/", "/do-dham-yatra/by-helicopter/"],
    enquiry: "Private charter Char Dham Yatra",
    art: "char-dham",
    places: charDhamPlaces,
    updated: UPDATED,
  },

  {
    path: "/char-dham-yatra/for-senior-citizens/",
    parent: "/char-dham-yatra/",
    cluster: "char-dham",
    name: "Char Dham for Senior Citizens",
    title: "Char Dham Yatra for Senior Citizens | Gentle-Pace Tours",
    description:
      "Char Dham planned for parents and grandparents: shorter drives, rest days, ground-floor rooms, palki and helicopter options.",
    h1: "Char Dham Yatra for Senior Citizens",
    eyebrow: "Gentle pace · Rest days · Palki and helicopter options",
    intro:
      "Many people who book the Char Dham Yatra with us are planning it for their parents. This version adds rest days, keeps daily drives shorter, chooses hotels with lifts or ground-floor rooms, and books palkis or helicopter seats for the steep sections, so the yatra is remembered for the darshan, not the exhaustion.",
    keyFacts: [
      { label: "Duration", value: "12 nights / 13 days by road" },
      { label: "Longest drive", value: "About 6 hours" },
      { label: "Walking", value: "Optional, with palki or pony available" },
      { label: "Support", value: "Coordinator on call, oxygen in vehicle" },
    ],
    sections: [
      {
        h2: "How we adapt the yatra for older pilgrims",
        blocks: [
          {
            type: "ul",
            items: [
              "Extra nights at Barkot and Guptkashi to break up long drives",
              "Ground-floor or lift-access rooms booked in advance where available",
              "Palki or pony pre-arranged at Yamunotri and Kedarnath, or IRCTC helicopter slots planned for Kedarnath",
              "Portable oxygen can and pulse oximeter in the vehicle",
              "Soft, home-style vegetarian food, without onion or garlic on request",
              "Wheelchair-friendly darshan queues where the temple committees provide them",
            ],
          },
        ],
      },
      {
        h2: "Medical advice before you book",
        blocks: [
          { type: "p", text: "Pilgrims over 60, and anyone with heart disease, diabetes, asthma or high blood pressure, should consult their doctor before travelling to high altitude. The Uttarakhand government publishes health advisories for yatris each season, and screening posts operate on the Kedarnath route." },
          { type: "p", text: "If walking is a concern, the [Char Dham Yatra by helicopter](/char-dham-yatra/by-helicopter/) or the shorter [Do Dham Yatra](/do-dham-yatra/) may suit your parents better." },
        ],
      },
    ],
    faqs: [
      { q: "Is there an age limit for Char Dham Yatra?", a: "There is no fixed age limit for the road yatra. Helicopter operators may need a medical fitness certificate for very elderly passengers. Fitness matters more than age." },
      { q: "How do elderly pilgrims reach Kedarnath?", a: "By palki (doli), pony or the IRCTC helicopter shuttle from Phata, Sersi or Guptkashi. A palki takes the full walking route, so plan for the whole day." },
      { q: "Can a family member travel with elderly parents in the vehicle?", a: "Yes. We plan the vehicle size so there is space for the family to travel together, with room for a wheelchair if needed." },
    ],
    related: ["/char-dham-yatra/by-helicopter/", "/do-dham-yatra/", "/char-dham-yatra/from-haridwar/"],
    enquiry: "Char Dham Yatra for senior citizens",
    art: "char-dham",
    places: charDhamPlaces,
    updated: UPDATED,
  },
];
