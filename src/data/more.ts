import type { LandingPage } from "./types";

const UPDATED = "2026-10-06";

export const morePages: LandingPage[] = [
  {
    path: "/hindu-pilgrimage-tours-india/",
    cluster: "international",
    name: "Hindu Pilgrimage Tours India",
    title: "Hindu Pilgrimage Tours in India | Spiritual & Temple Tours",
    description:
      "Private Hindu pilgrimage and spiritual tours of India for NRI and international travellers: Char Dham, Kedarnath, Varanasi and temple tours.",
    h1: "Hindu Pilgrimage Tours of India for International Travellers",
    eyebrow: "For NRI families and international devotees",
    intro:
      "Whether you are an NRI family bringing your parents home for the Char Dham Yatra, or a devotee visiting India's temples for the first time, we plan every detail: airport pickup, registrations, temple etiquette, darshan timings, sattvic food and a coordinator who speaks your language. Every tour is private and planned around your dates.",
    keyFacts: [
      { label: "Tours", value: "Private, planned around your dates" },
      { label: "Pickup", value: "Delhi or Dehradun airport" },
      { label: "Languages", value: "English and Hindi" },
      { label: "Payments", value: "International cards and bank transfer" },
    ],
    cards: [
      "/char-dham-yatra/private-charter/",
      "/char-dham-yatra/by-helicopter/",
      "/do-dham-yatra/",
      "/vaishno-devi-yatra/",
      "/kashi-ayodhya-yatra/",
      "/jyotirlinga-yatra/",
    ],
    sections: [
      {
        h2: "Popular spiritual journeys for overseas pilgrims",
        blocks: [
          {
            type: "table",
            head: ["Journey", "Days", "Highlights"],
            rows: [
              ["[Char Dham by private helicopter](/char-dham-yatra/private-charter/)", "4–6", "All four Himalayan shrines with minimal walking"],
              ["[Kedarnath and Badrinath](/do-dham-yatra/)", "7–8", "Jyotirlinga and Vishnu shrines, plus the Panch Prayag"],
              ["[Varanasi, Prayagraj and Ayodhya](/kashi-ayodhya-yatra/)", "5–6", "Ganga aarti, Triveni Sangam, Ram Mandir"],
              ["[Vaishno Devi with Amritsar](/vaishno-devi-yatra/with-amritsar/)", "6", "Mata Vaishno Devi and the Golden Temple"],
              ["[Jyotirlinga circuits](/jyotirlinga-yatra/)", "5–12", "Mahakaleshwar, Omkareshwar, Somnath and more"],
              ["[Pashupatinath and Muktinath](/pashupatinath-nepal-tour/)", "5–7", "Nepal's holiest Shiva and Vishnu shrines"],
            ],
          },
        ],
      },
      {
        h2: "Planning advice for visitors from abroad",
        h3s: [
          { h3: "Visas and documents", blocks: [{ type: "p", text: "Most nationalities can apply for an Indian e-Visa online. OCI cardholders do not need a visa. Carry your passport for yatra registration and hotel check-in; Uttarakhand registration accepts passports for foreign nationals." }] },
          { h3: "Health and altitude", blocks: [{ type: "p", text: "Kedarnath (3,583 m) and Badrinath are high-altitude shrines. Give yourself a night or two in Haridwar or Rishikesh after a long flight, and buy travel insurance that covers trekking, helicopter flights and medical evacuation." }] },
          { h3: "Temple etiquette", blocks: [{ type: "p", text: "Dress modestly, with shoulders and knees covered. Remove footwear before entering temple premises, and ask before taking photographs; photography is not allowed inside most sanctums. Read our [temple etiquette guide](/guides/temple-etiquette-india/)." }] },
          { h3: "Who can enter?", blocks: [{ type: "p", text: "Most temples in this region welcome sincere visitors of all backgrounds. Some, including Pashupatinath in Kathmandu and certain temples in Kerala and Odisha, admit only Hindus to the inner sanctum. We tell you in advance wherever a rule like this applies." }] },
        ],
        blocks: [],
      },
    ],
    faqs: [
      { q: "Can foreigners do the Char Dham Yatra?", a: "Yes. Foreign nationals can visit all four dhams and must register with their passport details, as Indian pilgrims do." },
      { q: "Do you offer private pilgrimage tours rather than group tours?", a: "Yes, every tour we plan for international guests is private: your own vehicle, driver and coordinator." },
      { q: "What is the best time for a pilgrimage tour of India?", a: "For the Himalayan shrines: May–June and September–October. For Varanasi, Ayodhya, the Jyotirlingas and South India: October to March." },
      { q: "How do I pay from outside India?", a: "We accept international bank transfers and card payments, and send a written itinerary and invoice before any payment." },
    ],
    related: ["/char-dham-yatra/private-charter/", "/kailash-mansarovar-yatra/", "/pashupatinath-nepal-tour/"],
    enquiry: "Hindu pilgrimage tour of India (international)",
    art: "temple",
    updated: UPDATED,
  },

  {
    path: "/pashupatinath-nepal-tour/",
    cluster: "nepal",
    name: "Pashupatinath Nepal Tour",
    title: "Pashupatinath Temple Tour Package | Kathmandu & Muktinath",
    description:
      "Pashupatinath darshan and Bagmati aarti in Kathmandu, with optional Muktinath and Manakamana. No visa needed for Indian citizens.",
    h1: "Pashupatinath Temple Tour, Nepal",
    eyebrow: "Kathmandu · Bagmati river · UNESCO World Heritage",
    intro:
      "Pashupatinath, on the banks of the Bagmati in Kathmandu, is one of the most sacred Shiva temples in the world and part of the Kathmandu Valley UNESCO World Heritage Site. We plan Nepal pilgrimages from India of 4 to 8 days, combining Pashupatinath with Guhyeshwari, Budhanilkantha, Manakamana and the high Himalayan shrine of Muktinath.",
    keyFacts: [
      { label: "Location", value: "Kathmandu, Nepal" },
      { label: "Visa for Indians", value: "Not required" },
      { label: "Typical tour", value: "4–8 days" },
      { label: "Big festival", value: "Maha Shivaratri" },
    ],
    itinerary: {
      nights: 4,
      days: 5,
      start: "Kathmandu",
      end: "Kathmandu",
      mode: "Road",
      route: ["Kathmandu", "Pashupatinath", "Budhanilkantha", "Manakamana", "Kathmandu"],
      priceFrom: null,
      days_: [
        { day: "Day 1", title: "Arrive in Kathmandu", text: "Airport pickup. Evening Bagmati aarti at Pashupatinath.", overnight: "Kathmandu" },
        { day: "Day 2", title: "Pashupatinath darshan", text: "Morning darshan and rudrabhishek on request, then Guhyeshwari Shakti Peeth, Boudhanath and Budhanilkantha.", overnight: "Kathmandu" },
        { day: "Day 3", title: "Manakamana", text: "Drive towards Kurintar and take the cable car to the Manakamana temple.", overnight: "Kathmandu" },
        { day: "Day 4", title: "Kathmandu Durbar Square and Dakshinkali", text: "Heritage temples of the valley.", overnight: "Kathmandu" },
        { day: "Day 5", title: "Departure", text: "Transfer to the airport." },
      ],
      inclusions: ["Hotel with breakfast and dinner", "Private vehicle and driver", "Airport transfers", "Local guide for temple visits"],
      exclusions: ["Flights", "Cable car and temple fees", "Puja fees", "Lunch and personal expenses"],
    },
    sections: [
      {
        h2: "Who can enter Pashupatinath temple?",
        blocks: [
          { type: "p", text: "Only Hindus (and, by tradition, Buddhists of Nepali and Tibetan heritage) may enter the main temple courtyard. Visitors of other faiths can see the temple complex, the cremation ghats and the evening aarti from the east bank of the Bagmati. We plan the visit accordingly for mixed groups." },
        ],
      },
      {
        h2: "Documents for Indian pilgrims",
        blocks: [
          { type: "p", text: "Indian citizens do not need a visa for Nepal. Carry a valid passport or voter ID card; children can use other approved documents. Foreign nationals can get a visa on arrival at Kathmandu airport. Rules change from time to time, so we confirm the current requirements with your booking." },
        ],
      },
      {
        h2: "Add Muktinath",
        blocks: [
          { type: "p", text: "Muktinath, at about 3,700 m in Mustang, is sacred to both Hindus (as a Divya Desam of Lord Vishnu) and Buddhists. Fly from Kathmandu to Pokhara, then on to Jomsom, and drive up to the temple. Add 3 days, plus a weather buffer, because the Jomsom flights are often delayed." },
        ],
      },
    ],
    faqs: [
      { q: "Do Indians need a passport for Nepal?", a: "No visa is required. A valid passport or voter ID card is accepted for Indian citizens travelling by air." },
      { q: "When is the best time to visit Pashupatinath?", a: "October to April has clear weather. Maha Shivaratri brings huge crowds and a special atmosphere." },
      { q: "Can non-Hindus visit Pashupatinath?", a: "They can visit the complex and watch the aarti from the east bank, but cannot enter the main temple courtyard." },
    ],
    related: ["/kailash-mansarovar-yatra/", "/hindu-pilgrimage-tours-india/"],
    enquiry: "Pashupatinath Nepal tour",
    art: "pashupati",
    places: [{ name: "Pashupatinath Temple", type: "HinduTemple" }],
    updated: UPDATED,
  },

  {
    path: "/kailash-mansarovar-yatra/",
    cluster: "kailash",
    name: "Kailash Mansarovar Yatra",
    title: "Kailash Mansarovar Yatra 2027 | Routes, Eligibility & Cost",
    description:
      "Kailash Mansarovar Yatra explained: the MEA yatra via Lipulekh and Nathu La, private routes via Nepal, eligibility by passport, fitness, cost and how we help.",
    h1: "Kailash Mansarovar Yatra",
    eyebrow: "Mount Kailash · Lake Mansarovar · Tibet",
    intro:
      "Mount Kailash and Lake Mansarovar in western Tibet are sacred to Hindus, Buddhists, Jains and followers of Bon. The yatra resumed in 2025 after a five-year pause. Which routes are open depends on your passport and on that year's rules from India and China, so this page explains your options plainly before we discuss packages.",
    keyFacts: [
      { label: "Mount Kailash", value: "6,638 m" },
      { label: "Parikrama", value: "About 52 km over 3 days" },
      { label: "Highest point", value: "Dolma La pass, about 5,630 m" },
      { label: "Season", value: "June to September" },
    ],
    sections: [
      {
        h2: "Route 1: the MEA Kailash Mansarovar Yatra (Indian citizens)",
        blocks: [
          { type: "p", text: "India's Ministry of External Affairs runs the official yatra each summer via the **Lipulekh pass** (Uttarakhand) and the **Nathu La pass** (Sikkim). Applications open in spring on the official KMY website, and pilgrims are chosen by a computerised draw. In 2026 the Lipulekh route took about 22 days and the Nathu La route about 21 days. Travel agents cannot book this route, but we help applicants with fitness preparation, documents and the journey to Delhi." },
        ],
      },
      {
        h2: "Route 2: private tours via Nepal",
        blocks: [
          { type: "p", text: "Private Kailash tours run from Kathmandu, overland via Kerung or by flight and road via Simikot and Hilsa, with Chinese group visas and Tibet permits. **Eligibility for Indian and foreign passport holders on these routes depends on that season's rules**, which have changed often. We confirm current eligibility in writing before taking any booking or deposit." },
          { type: "callout", tone: "info", title: "Register your interest for 2027", text: "Tell us your passport nationality, age and preferred month. We'll come back to you with options once operators and governments confirm the 2027 rules." },
        ],
      },
      {
        h2: "Fitness and health",
        blocks: [
          { type: "p", text: "Kailash is the most demanding yatra we offer. The parikrama crosses the Dolma La pass at about 5,630 m, and the nights at Mansarovar are near freezing even in summer. Start training at least three months ahead, with long walks, stair climbing and breathing exercises. The MEA route includes compulsory medical tests in Delhi." },
        ],
      },
    ],
    faqs: [
      { q: "Can I book the MEA Kailash yatra through a travel agent?", a: "No. Indian citizens apply directly on the official MEA website, and pilgrims are selected by a computerised draw." },
      { q: "Can foreign nationals do the Kailash Mansarovar Yatra?", a: "Foreign passport holders cannot use the MEA route. They usually travel via Nepal or Lhasa with Chinese visas and Tibet permits, subject to the rules in force that year." },
      { q: "How long is the Kailash parikrama?", a: "About 52 km, usually walked over three days from Darchen, crossing the Dolma La pass." },
      { q: "What is the best time for Kailash Mansarovar?", a: "June to September, when the passes are open." },
    ],
    related: ["/pashupatinath-nepal-tour/", "/char-dham-yatra/", "/hindu-pilgrimage-tours-india/"],
    enquiry: "Kailash Mansarovar Yatra",
    art: "kailash",
    places: [{ name: "Mount Kailash", type: "TouristAttraction" }, { name: "Lake Mansarovar", type: "TouristAttraction" }],
    updated: UPDATED,
  },

  {
    path: "/jyotirlinga-yatra/",
    cluster: "india",
    parent: "/pilgrimages/",
    name: "Jyotirlinga Yatra",
    title: "12 Jyotirlinga Yatra Package | Circuits by Region",
    description:
      "Plan a Jyotirlinga yatra by region: Mahakaleshwar and Omkareshwar, the Maharashtra three, Somnath and Nageshwar, or all twelve.",
    h1: "Jyotirlinga Yatra Packages",
    eyebrow: "The twelve Jyotirlingas of Lord Shiva",
    intro:
      "The twelve Jyotirlingas are spread from Kedarnath in the Himalaya to Rameswaram near India's southern tip. Most pilgrims visit them in regional circuits over several years. We plan each circuit with darshan timings, aarti bookings where offered, and comfortable travel between them.",
    keyFacts: [
      { label: "Jyotirlingas", value: "12, across 8 states" },
      { label: "Circuits", value: "3–6 days each" },
      { label: "All twelve", value: "About 15–18 days" },
      { label: "Best time", value: "October to March (Kedarnath: May–Oct)" },
    ],
    sections: [
      {
        h2: "Jyotirlinga circuits",
        blocks: [
          {
            type: "table",
            head: ["Circuit", "Jyotirlingas", "Days"],
            rows: [
              ["Madhya Pradesh", "Mahakaleshwar (Ujjain), Omkareshwar", "3–4"],
              ["Maharashtra", "Trimbakeshwar, Grishneshwar, Bhimashankar", "5–6"],
              ["Gujarat", "Somnath, Nageshwar (with Dwarkadhish)", "4–5"],
              ["Uttar Pradesh", "Kashi Vishwanath (with Ayodhya, Prayagraj)", "4–6"],
              ["Himalaya", "[Kedarnath](/kedarnath-yatra/)", "4–7"],
              ["South and East", "Mallikarjuna, Rameswaram, Baidyanath", "Varies"],
            ],
          },
        ],
      },
    ],
    faqs: [
      { q: "Which are the 12 Jyotirlingas?", a: "Somnath, Mallikarjuna, Mahakaleshwar, Omkareshwar, Kedarnath, Bhimashankar, Kashi Vishwanath, Trimbakeshwar, Baidyanath, Nageshwar, Rameswaram and Grishneshwar." },
      { q: "How many days are needed to visit all 12 Jyotirlingas?", a: "About 15 to 18 days by flights and road. Most pilgrims split them into three or four regional trips." },
      { q: "Can Bhasma Aarti at Mahakaleshwar be booked?", a: "Bhasma Aarti places are booked through the temple's official system. We help with the process and plan your stay in Ujjain around it." },
    ],
    related: ["/kedarnath-yatra/", "/kashi-ayodhya-yatra/", "/pilgrimages/"],
    enquiry: "Jyotirlinga Yatra",
    art: "temple",
    updated: UPDATED,
  },

  {
    path: "/kashi-ayodhya-yatra/",
    cluster: "india",
    parent: "/pilgrimages/",
    name: "Kashi Ayodhya Yatra",
    title: "Varanasi Ayodhya Prayagraj Tour Package | Kashi Yatra",
    description:
      "Kashi Vishwanath, Ganga aarti, Triveni Sangam and the Ram Mandir in one 5-day yatra, with a private car and darshan help.",
    h1: "Kashi, Prayagraj and Ayodhya Yatra",
    eyebrow: "Varanasi · Prayagraj · Ayodhya",
    intro:
      "Three of Hinduism's most sacred cities, a few hours apart. Have darshan at Kashi Vishwanath and watch the Ganga aarti at Dashashwamedh Ghat, bathe at the Triveni Sangam in Prayagraj, and visit the Ram Mandir and Hanuman Garhi in Ayodhya.",
    keyFacts: [
      { label: "Duration", value: "4 nights / 5 days" },
      { label: "Start", value: "Varanasi airport or station" },
      { label: "End", value: "Ayodhya or Lucknow" },
      { label: "Best time", value: "October to March" },
    ],
    itinerary: {
      nights: 4,
      days: 5,
      start: "Varanasi",
      end: "Ayodhya",
      mode: "Road",
      route: ["Varanasi", "Sarnath", "Prayagraj", "Ayodhya"],
      priceFrom: null,
      days_: [
        { day: "Day 1", title: "Arrive in Varanasi", text: "Evening Ganga aarti at Dashashwamedh Ghat.", overnight: "Varanasi" },
        { day: "Day 2", title: "Kashi Vishwanath and the ghats", text: "Sunrise boat ride, darshan at Kashi Vishwanath through the corridor, Kaal Bhairav and Sankat Mochan. Afternoon at Sarnath.", overnight: "Varanasi" },
        { day: "Day 3", title: "Varanasi to Prayagraj", text: "Snan at the Triveni Sangam, the Bade Hanuman temple, and Anand Bhavan.", overnight: "Prayagraj", drive: "~120 km · 3 hrs" },
        { day: "Day 4", title: "Prayagraj to Ayodhya", text: "Evening at the Saryu aarti on Ram ki Paidi.", overnight: "Ayodhya", drive: "~170 km · 4 hrs" },
        { day: "Day 5", title: "Ram Mandir and departure", text: "Darshan at Shri Ram Janmabhoomi Mandir and Hanuman Garhi, then a drop at Ayodhya airport or station." },
      ],
      inclusions: ["Hotels with breakfast and dinner", "Private AC car and driver", "Boat ride in Varanasi", "Local guide in Varanasi"],
      exclusions: ["Flights and trains", "Special darshan or puja fees", "Lunch and personal expenses"],
    },
    sections: [],
    faqs: [
      { q: "How many days are enough for Varanasi and Ayodhya?", a: "4 nights is comfortable for Varanasi, Prayagraj and Ayodhya. Varanasi alone needs at least 2 nights." },
      { q: "Is a sugam darshan pass available at Kashi Vishwanath?", a: "The temple trust offers paid sugam darshan and aarti bookings through its official website. We help you book them." },
    ],
    related: ["/jyotirlinga-yatra/", "/pilgrimages/", "/hindu-pilgrimage-tours-india/"],
    enquiry: "Kashi Ayodhya Prayagraj Yatra",
    art: "ganga",
    places: [{ name: "Kashi Vishwanath Temple", type: "HinduTemple" }, { name: "Shri Ram Janmabhoomi Mandir", type: "HinduTemple" }],
    updated: UPDATED,
  },

  {
    path: "/amarnath-yatra/",
    cluster: "india",
    parent: "/pilgrimages/",
    name: "Amarnath Yatra",
    title: "Amarnath Yatra Package | Baltal & Pahalgam Routes, Helicopter",
    description:
      "Amarnath Yatra planning: Baltal and Pahalgam routes, SASB registration, the health certificate, helicopter options and Srinagar stays.",
    h1: "Amarnath Yatra",
    eyebrow: "Holy cave · About 3,880 m · July–August",
    intro:
      "The Amarnath cave in the Kashmir Himalaya holds an ice lingam that forms naturally each year. The yatra runs for a few weeks in July and August and is managed by the Shri Amarnathji Shrine Board (SASB). Registration, a compulsory health certificate and the shrine board's age rules apply to every pilgrim.",
    keyFacts: [
      { label: "Altitude", value: "About 3,880 m" },
      { label: "Season", value: "July to August (dates set yearly)" },
      { label: "Routes", value: "Baltal (short) · Pahalgam (traditional)" },
      { label: "Registration", value: "SASB, with health certificate" },
    ],
    sections: [
      {
        h2: "Baltal or Pahalgam?",
        blocks: [
          { type: "table", head: ["Route", "Walk", "Days", "Notes"], rows: [["Baltal", "About 14 km each way", "1–2", "Shorter but steep"], ["Pahalgam (Chandanwari)", "About 32 km each way", "3–4", "Traditional route, gentler gradient, via Sheshnag and Panchtarni"], ["Helicopter", "About 6 km from Panchtarni", "1", "Book only through official channels"]] },
        ],
      },
    ],
    faqs: [
      { q: "When does Amarnath Yatra 2027 start?", a: "The Shrine Board usually announces dates in spring. The yatra runs for several weeks in July and August." },
      { q: "Is a medical certificate compulsory for Amarnath?", a: "Yes. A Compulsory Health Certificate from an authorised doctor is required for registration." },
    ],
    related: ["/vaishno-devi-yatra/", "/pilgrimages/"],
    enquiry: "Amarnath Yatra",
    art: "kailash",
    places: [{ name: "Amarnath Cave", type: "HinduTemple" }],
    updated: UPDATED,
  },
];
