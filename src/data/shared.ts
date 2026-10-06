import type { Tier } from "./types";

export const roadTiers: Tier[] = [
  {
    name: "Standard",
    stay: "Clean budget hotels and guesthouses with attached bathroom and hot water",
    transport: "Tempo Traveller (group) or Dzire/Ertiga (family)",
    meals: "Breakfast and dinner, pure vegetarian",
  },
  {
    name: "Deluxe",
    stay: "3-star hotels and the best available camps near Kedarnath",
    transport: "Innova Crysta or private Tempo Traveller",
    meals: "Breakfast and dinner, pure vegetarian, Jain on request",
  },
  {
    name: "Premium",
    stay: "Best properties on each stop, including river-view rooms where available",
    transport: "Innova Crysta with senior hill driver",
    meals: "All meals, sattvic menu, Jain on request",
  },
];

export const roadInclusions = [
  "Hotel stays as per the chosen tier, twin or triple sharing",
  "Breakfast and dinner every day (pure vegetarian)",
  "Private vehicle for the full route with an experienced hill driver",
  "Driver allowance, fuel, tolls, parking and state permits",
  "Help with mandatory Uttarakhand yatra registration",
  "Pickup and drop at Haridwar railway station or a Haridwar/Rishikesh hotel",
  "24×7 trip coordinator on phone and WhatsApp",
];

export const roadExclusions = [
  "Pony, palki (doli) or pithu at Kedarnath and Yamunotri; paid directly at the counters",
  "Helicopter tickets (Kedarnath shuttle tickets are sold only on IRCTC HeliYatra)",
  "Special puja and VIP darshan fees charged by the temple committees",
  "Lunch, tips, personal expenses and travel insurance",
  "Costs caused by landslides, road closures or weather delays",
  "GST as applicable",
];
