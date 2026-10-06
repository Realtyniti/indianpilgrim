import type { Guide } from "./types";

// TODO: replace with a real, named team member and their yatra experience.
const AUTHOR = "Indian Pilgrim Yatra Desk";

const OFFICIAL = {
  ukReg: { label: "Uttarakhand Tourism: yatra registration portal", url: "https://registrationandtouristcare.uk.gov.in/" },
  heli: { label: "IRCTC HeliYatra (Kedarnath helicopter)", url: "https://heliyatra.irctc.co.in/" },
  bktc: { label: "Shri Badarinath-Kedarnath Temple Committee", url: "https://badrinath-kedarnath.gov.in/" },
  smvdsb: { label: "Shri Mata Vaishno Devi Shrine Board", url: "https://www.maavaishnodevi.org/" },
};

export const guides: Guide[] = [
  {
    slug: "char-dham-registration",
    cluster: "char-dham",
    title: "Char Dham Yatra Registration 2027: Step-by-Step Guide",
    description:
      "How to register for the Char Dham Yatra on the official Uttarakhand portal or app: documents, steps, offline counters and common mistakes.",
    h1: "Char Dham Yatra Registration: Step-by-Step Guide",
    summary:
      "Registration is mandatory and free for every pilgrim visiting Yamunotri, Gangotri, Kedarnath or Badrinath. Register on the Uttarakhand Tourism portal or its mobile app with a photo ID for each person, choose your dhams and dates, and carry the registration letter with its QR code. It is checked on the route.",
    author: AUTHOR,
    updated: "2026-10-06",
    readMinutes: 5,
    hub: "/char-dham-yatra/",
    art: "char-dham",
    sections: [
      {
        h2: "Who needs to register?",
        blocks: [{ type: "p", text: "Everyone, including children, senior citizens and foreign nationals. Each pilgrim needs their own entry under the group registration, with a valid photo ID: Aadhaar, passport, voter ID or driving licence for Indian citizens, and a passport for foreign nationals." }],
      },
      {
        h2: "How to register online",
        blocks: [
          {
            type: "ol",
            items: [
              "Open the official Uttarakhand Tourism registration portal, or install its Tourist Care Uttarakhand app",
              "Sign up with a mobile number or email and verify it with the OTP",
              "Create a tour: choose the dhams you will visit and your planned dates for each",
              "Add every pilgrim with their name, age, gender and photo ID number exactly as on the ID",
              "Submit and download the yatra registration letter with its QR code",
              "Keep it on your phone, with a printed copy, and carry the same ID used to register",
            ],
          },
          { type: "callout", tone: "warn", title: "Registration is free", text: "The government does not charge for yatra registration. Be wary of any website that asks for payment to register you, and use only the official portal or app." },
        ],
      },
      {
        h2: "Offline registration counters",
        blocks: [{ type: "p", text: "During the season, the government runs registration counters at points such as Haridwar and Rishikesh, and along the route. Queues at the start of the season can be long, so register online if you can." }],
      },
      {
        h2: "Common mistakes",
        blocks: [
          {
            type: "ul",
            items: [
              "Name or ID number not matching the ID you carry",
              "Dates that no longer match your trip after a change of plan. Update the registration if your dates move.",
              "Registering only the group leader instead of every pilgrim",
              "Booking the Kedarnath helicopter before registering. IRCTC needs your registration number.",
            ],
          },
          { type: "p", text: "Travelling with us? We register everyone in your group. See our [Char Dham Yatra packages](/char-dham-yatra/)." },
        ],
      },
    ],
    faqs: [
      { q: "Is Char Dham registration free?", a: "Yes. Registration on the official Uttarakhand portal or app is free." },
      { q: "Can I register for only Kedarnath and Badrinath?", a: "Yes. Select only the dhams you plan to visit, for example for a Do Dham Yatra." },
      { q: "When does Char Dham registration open for 2027?", a: "It usually opens a few weeks before the shrines open in April or May. We update this page when the portal opens." },
    ],
    sources: [OFFICIAL.ukReg, OFFICIAL.heli],
  },

  {
    slug: "char-dham-opening-closing-dates",
    cluster: "char-dham",
    title: "Char Dham Opening and Closing Dates 2026–2027",
    description:
      "When Yamunotri, Gangotri, Kedarnath and Badrinath open and close: 2026 closing dates, how the 2027 opening dates are decided, and how to plan around them.",
    h1: "Char Dham Opening and Closing Dates",
    summary:
      "The four shrines open between late April and mid-May and close around Diwali and in mid-November. For 2026, Kedarnath and Yamunotri close on Bhai Dooj (11 November) and Badrinath is expected to close around 13 November. The 2027 opening dates will be announced on Basant Panchami (Badrinath), Maha Shivratri (Kedarnath) and Akshaya Tritiya (Yamunotri and Gangotri).",
    author: AUTHOR,
    updated: "2026-10-06",
    readMinutes: 4,
    hub: "/char-dham-yatra/",
    art: "char-dham",
    sections: [
      {
        h2: "How the dates are decided",
        blocks: [
          {
            type: "table",
            head: ["Shrine", "Opening date announced", "Usually opens", "Usually closes"],
            rows: [
              ["Yamunotri", "Fixed by tradition", "Akshaya Tritiya", "Bhai Dooj"],
              ["Gangotri", "Fixed by tradition", "Akshaya Tritiya", "Govardhan Puja (day after Diwali)"],
              ["Kedarnath", "Maha Shivratri, at Ukhimath", "Late April / early May", "Bhai Dooj"],
              ["Badrinath", "Basant Panchami, at Narendra Nagar", "Late April / May", "Mid-November, announced on Vijayadashami"],
            ],
          },
        ],
      },
      {
        h2: "Where the deities stay in winter",
        blocks: [
          {
            type: "ul",
            items: [
              "Yamunotri: Kharsali (Khushimath)",
              "Gangotri: Mukhba village",
              "Kedarnath: the Omkareshwar temple, Ukhimath",
              "Badrinath: Pandukeshwar and Jyotirmath (Narsingh temple)",
            ],
          },
          { type: "p", text: "Winter darshan at these seats is possible, and is promoted by the state as a winter Char Dham. Ask us about winter pilgrimage trips." },
        ],
      },
      {
        h2: "Planning around the dates",
        blocks: [
          { type: "p", text: "The first two weeks after opening are the most crowded. The last two weeks before closing are cold, but much quieter. If you want the 2027 opening weeks, start planning in January, before hotels near Kedarnath fill up. See [Char Dham Yatra packages for 2027](/char-dham-yatra/)." },
        ],
      },
    ],
    sources: [OFFICIAL.bktc],
  },

  {
    slug: "kedarnath-trek-guide",
    cluster: "do-dham",
    title: "Kedarnath Trek Guide: Route, Distance, Stops & Tips",
    description:
      "The Kedarnath trek from Gaurikund, stage by stage: distance, time, where to rest, pony and palki options, night stay, altitude advice and what to carry.",
    h1: "Kedarnath Trek Guide: Gaurikund to the Temple",
    summary:
      "The Kedarnath trek is about 16 km each way on a paved, well-supported trail from Gaurikund (around 1,980 m) to the temple (3,583 m). Most people take 6 to 9 hours to walk up and 4 to 6 hours to come down. Start early, carry warm layers and rain gear, and stay the night at Kedarnath if you can.",
    author: AUTHOR,
    updated: "2026-10-06",
    readMinutes: 7,
    hub: "/kedarnath-yatra/",
    art: "kedarnath",
    sections: [
      {
        h2: "Getting to the start",
        blocks: [{ type: "p", text: "Private vehicles stop at Sonprayag. From there, shared jeeps run the last few kilometres to Gaurikund, where the walk starts. Queues for jeeps build from early morning in peak season, so aim to reach Sonprayag by 5 am." }],
      },
      {
        h2: "The route, stage by stage",
        blocks: [
          {
            type: "table",
            head: ["Stage", "Approx. distance from Gaurikund", "What to expect"],
            rows: [
              ["Gaurikund", "0 km", "Start point, with shops, ponies and palkis"],
              ["Jungle Chatti", "About 4 km", "Steady climb through forest. First tea stop."],
              ["Bheembali", "About 6–7 km", "Medical post and rest shelters"],
              ["Linchauli", "About 11 km", "Valley opens out, and the air gets noticeably thinner"],
              ["Kedarnath base", "About 15 km", "Helipad and camps"],
              ["Kedarnath temple", "About 16 km", "The temple, with Bhairavnath above"],
            ],
            caption: "Distances are approximate and the trail is periodically realigned.",
          },
        ],
      },
      {
        h2: "Walking, pony, palki or helicopter",
        blocks: [
          {
            type: "ul",
            items: [
              "**Walking:** the most rewarding, and fine for anyone who can walk 10 km on flat ground",
              "**Pony:** rates are fixed by the district administration and paid at the counter. Keep your receipt.",
              "**Palki (doli):** carried by four people. Slow and expensive, but the gentlest option.",
              "**Pithu:** a porter carries a child or a light adult in a basket",
              "**Helicopter:** shuttle from Phata, Sersi or Guptkashi, booked only on IRCTC HeliYatra. See [Kedarnath by helicopter](/kedarnath-yatra/by-helicopter/).",
            ],
          },
        ],
      },
      {
        h2: "Altitude and safety",
        blocks: [
          { type: "p", text: "You gain over 1,500 m in a day. Walk slowly, sip water often and eat light. Headache, nausea or breathlessness while resting are warning signs. Stop, rest, and use the medical posts on the trail. Don't push on to reach the temple the same day if you feel unwell." },
          { type: "callout", tone: "info", title: "Stay the night if you can", text: "A night at Kedarnath lets you attend the evening aarti and the quieter early-morning darshan, and spares your knees the descent on the same day. Our [Do Dham](/do-dham-yatra/) and [Char Dham](/char-dham-yatra/) itineraries include it." },
        ],
      },
      {
        h2: "What to carry on the trek",
        blocks: [{ type: "ul", items: ["Rain poncho, down jacket, cap and gloves", "Walking stick (sold at Gaurikund)", "Water bottle, dry fruits and glucose", "Photo ID and your yatra registration", "Personal medicines and a torch", "A small backpack. Leave heavy bags in the Guptkashi or Sonprayag hotel."] }],
      },
    ],
    faqs: [
      { q: "How long is the Kedarnath trek?", a: "About 16 km each way from Gaurikund." },
      { q: "Can Kedarnath be done in one day?", a: "Yes, for fit walkers starting before dawn, but staying the night at Kedarnath is easier and gives you a calmer darshan." },
      { q: "Is the Kedarnath trek open at night?", a: "The administration sets trek timings each season and stops walkers from starting late in the day. Always start in the early morning." },
    ],
    sources: [OFFICIAL.heli, OFFICIAL.bktc],
  },

  {
    slug: "vaishno-devi-yatra-guide",
    cluster: "vaishno-devi",
    title: "Vaishno Devi Yatra Guide: RFID Card, Routes & Tips",
    description:
      "Vaishno Devi yatra guide: the RFID yatra card, the walk from Katra, battery car, helicopter, ropeway, Bhairon temple and the best time to go.",
    h1: "Vaishno Devi Yatra Guide",
    summary:
      "The walk to Mata Vaishno Devi's holy cave is about 12 km from Katra on a paved, lit path open around the clock. Get your free RFID yatra card online or at Katra, start the yatra within the time allowed, and finish with darshan at the Bhairon temple. Helicopter and ropeway tickets are sold only through the Shrine Board.",
    author: AUTHOR,
    updated: "2026-10-06",
    readMinutes: 6,
    hub: "/vaishno-devi-yatra/",
    art: "vaishno",
    sections: [
      {
        h2: "Step 1: Get your RFID yatra card",
        blocks: [{ type: "p", text: "Register online on the Shrine Board's website, or go to the registration counters in Katra with your photo ID. Each pilgrim gets an RFID card, which is scanned at Banganga. Wear it on a lanyard throughout the yatra and return it as instructed." }],
      },
      {
        h2: "Step 2: Choose your route up",
        blocks: [
          {
            type: "ul",
            items: [
              "**Old route via Ardhkuwari:** the traditional path, with darshan at the Garbh Joon cave at Ardhkuwari (tokens needed)",
              "**New Tarakote route:** gentler gradients, pony-free, with good facilities",
              "**Battery car from Ardhkuwari:** limited seats, booked on the day",
              "**Helicopter from Katra to Sanjichhat:** booked on the Shrine Board portal",
            ],
          },
        ],
      },
      {
        h2: "Step 3: Darshan and Bhairon temple",
        blocks: [{ type: "p", text: "Leave your phone, leather goods and bags in the lockers at the Bhawan before joining the darshan queue. After darshan, take the ropeway or walk about 1.5 km up to the Bhairon Nath temple. Tradition says the yatra is incomplete without it." }],
      },
      {
        h2: "Best time and crowds",
        blocks: [{ type: "p", text: "The yatra runs all year. Navratri (March–April and September–October), summer holidays and New Year are the most crowded. Winter is cold, but peaceful. See our [Vaishno Devi packages](/vaishno-devi-yatra/)." }],
      },
    ],
    faqs: [
      { q: "Is the Vaishno Devi RFID card free?", a: "Yes. The RFID yatra card is issued free by the Shrine Board." },
      { q: "How long does the Vaishno Devi walk take?", a: "Most people take 5 to 7 hours to walk up and 3 to 4 hours to come down, plus the time spent in the darshan queue." },
    ],
    sources: [OFFICIAL.smvdsb],
  },

  {
    slug: "char-dham-yatra-cost",
    cluster: "char-dham",
    title: "Char Dham Yatra Cost: What You Actually Pay For",
    description:
      "What a Char Dham Yatra really costs: vehicle, hotels, meals, pony and palki, helicopter and puja fees, plus how to compare tour quotes.",
    h1: "Char Dham Yatra Cost Breakdown",
    summary:
      "The cost of a Char Dham Yatra depends mainly on four things: the vehicle (and how many people share it), the hotel category, the number of nights, and on-route extras such as ponies, palkis and helicopters. Ask for a per-person quote that names every hotel and lists exactly what is excluded.",
    author: AUTHOR,
    updated: "2026-10-06",
    readMinutes: 5,
    hub: "/char-dham-yatra/",
    art: "char-dham",
    sections: [
      {
        h2: "The main costs",
        blocks: [
          {
            type: "table",
            head: ["Cost", "What drives it", "Tip"],
            rows: [
              ["Vehicle", "Car vs Innova vs Tempo Traveller; number of days", "Groups of 6–12 pay far less per head"],
              ["Hotels", "Category, location (Kedarnath is costly), season", "Insist on hotel names, not \"or similar\""],
              ["Meals", "Breakfast and dinner usually included", "Lunch is cheap at dhabas on the way"],
              ["Pony, palki, pithu", "Fixed government rates at Yamunotri and Kedarnath", "Pay only at official counters"],
              ["Helicopter", "IRCTC shuttle fare, or a charter package", "Never buy shuttle tickets from agents"],
              ["Puja and donations", "Optional; set by the temple committees", "Book only through official channels"],
            ],
          },
        ],
      },
      {
        h2: "How to compare quotes",
        blocks: [
          {
            type: "ul",
            items: [
              "Is the price per person, and for what group size?",
              "Are hotels named for every night, including Kedarnath?",
              "Is the vehicle exclusive to your group, or shared?",
              "Are tolls, parking, permits and the driver's allowance included?",
              "What happens to the cost if a landslide adds a night?",
              "Is GST included?",
            ],
          },
          { type: "p", text: "We send every quote in writing with these answers. [Ask for a Char Dham quote](/plan-my-yatra/)." },
        ],
      },
    ],
  },

  {
    slug: "char-dham-packing-list",
    cluster: "char-dham",
    title: "Char Dham Yatra Packing List: What to Carry",
    description:
      "A practical Char Dham packing list: warm layers, rain gear, shoes, medicines, documents and cash, plus what to leave behind.",
    h1: "Char Dham Yatra Packing List",
    summary:
      "Pack for cold mornings, rain and long walks, even in May and June: layered warm clothing, a rain poncho, broken-in walking shoes, your medicines, the photo ID used for registration, and some cash. Keep a small daypack for the Kedarnath and Yamunotri walks.",
    author: AUTHOR,
    updated: "2026-10-06",
    readMinutes: 3,
    hub: "/char-dham-yatra/",
    art: "char-dham",
    sections: [
      { h2: "Clothing", blocks: [{ type: "ul", items: ["Thermal inner wear (2 sets)", "Fleece or sweater, and a down or padded jacket", "Woollen cap, gloves and socks", "Rain poncho and a light waterproof jacket", "Comfortable trousers or salwar suits for walking", "Clothes for temple visits"] }] },
      { h2: "Footwear", blocks: [{ type: "ul", items: ["Broken-in walking or trekking shoes with good grip", "Slippers or floaters for hotels and temple queues"] }] },
      { h2: "Health", blocks: [{ type: "ul", items: ["Your regular medicines, plus extra for delays, and prescriptions", "Medicines for headache, fever, stomach upsets and motion sickness", "ORS and glucose", "Sunscreen, lip balm and sunglasses"] }] },
      { h2: "Documents and money", blocks: [{ type: "ul", items: ["The photo ID used for registration, with a photocopy", "Yatra registration letter, printed and on your phone", "Cash: ATMs are unreliable above Guptkashi and Uttarkashi", "Power bank and torch"] }] },
      { h2: "Leave behind", blocks: [{ type: "p", text: "Heavy suitcases (leave them in the vehicle or hotel), expensive jewellery and too many clothes. For helicopter packages, there is a strict baggage limit. See [Char Dham by helicopter](/char-dham-yatra/by-helicopter/)." }] },
    ],
  },

  {
    slug: "temple-etiquette-india",
    cluster: "international",
    title: "Temple Etiquette in India: A Guide for First-Time Visitors",
    description:
      "How to dress and behave at Hindu temples in India: footwear, clothing, photography, offerings and entry rules for first-time visitors.",
    h1: "Temple Etiquette in India for First-Time Visitors",
    summary:
      "Dress modestly with shoulders and knees covered, remove your footwear before entering, don't take photographs inside the sanctum, accept prasad with your right hand, and follow the queue and the priests' instructions. A few temples admit only Hindus to the inner sanctum.",
    author: AUTHOR,
    updated: "2026-10-06",
    readMinutes: 4,
    hub: "/hindu-pilgrimage-tours-india/",
    art: "temple",
    sections: [
      { h2: "What to wear", blocks: [{ type: "p", text: "Loose, modest clothing that covers shoulders and knees. Some temples, especially in South India, have specific dress codes, such as a dhoti for men or a saree or salwar for women. We tell you before each visit." }] },
      { h2: "Footwear and belongings", blocks: [{ type: "p", text: "Remove shoes and socks before entering temple premises. Most large temples have free footwear counters. Leather belts and bags are not allowed at some shrines, and phones are not allowed at others, such as the Vaishno Devi Bhawan, so use the lockers provided." }] },
      { h2: "Inside the temple", blocks: [{ type: "ul", items: ["Walk around the sanctum clockwise", "Photography is usually not allowed inside the sanctum", "Accept prasad and tirtha with your right hand", "Offerings are optional. Use the official counters and donation boxes."] }] },
      { h2: "Entry rules", blocks: [{ type: "p", text: "Most temples welcome all sincere visitors. A few, including Pashupatinath in Kathmandu and some temples in Kerala and Odisha, admit only Hindus to the inner sanctum. See our [Hindu pilgrimage tours for international travellers](/hindu-pilgrimage-tours-india/)." }] },
    ],
  },
];

export const guideBySlug = (slug: string) => guides.find((g) => g.slug === slug);
