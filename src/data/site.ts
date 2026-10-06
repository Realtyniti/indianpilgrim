/**
 * Business details shown across the site and in structured data.
 *
 * Every value marked TODO is a placeholder. Replace it with the real
 * business detail before launch — never publish invented phone numbers,
 * addresses or registration IDs.
 */
export const site = {
  name: "Indian Pilgrim",
  legalName: "Indian Pilgrim", // TODO: registered company / firm name
  domain: "indianpilgrim.com",
  url: "https://www.indianpilgrim.com",
  tagline: "Char Dham, Kedarnath and Vaishno Devi yatras, planned with care",
  description:
    "Specialist operator for Hindu pilgrimage tours in India and the Himalaya: Char Dham Yatra, Do Dham Yatra (Kedarnath and Badrinath), Vaishno Devi, Jyotirlinga, Pashupatinath and Kailash Mansarovar.",
  // TODO: real numbers. Keep phone in E.164 for links; display separately.
  phoneE164: "+910000000000",
  phoneDisplay: "+91 00000 00000",
  whatsappE164: "910000000000",
  email: "yatra@indianpilgrim.com", // TODO: confirm mailbox exists
  address: {
    street: "TODO: street address",
    locality: "Haridwar", // TODO: confirm office city
    region: "Uttarakhand",
    postalCode: "249401", // TODO
    country: "IN",
  },
  hours: "Mon–Sun, 8:00 am – 9:00 pm IST",
  // TODO: add only credentials the business actually holds.
  registrations: [] as { label: string; value: string }[],
  social: [] as string[], // TODO: Facebook, Instagram, YouTube profile URLs
  foundedYear: null as number | null, // TODO
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${site.whatsappE164}?text=${encodeURIComponent(message)}`;

export const absoluteUrl = (path: string) => `${site.url}${path}`;

/** Season status shown in the homepage bar. Update each season. */
export const season = {
  label: "Char Dham 2026",
  status:
    "Kedarnath and Yamunotri close on Bhai Dooj (11 Nov 2026), Badrinath around 13 Nov. Bookings for the 2027 season are open.",
  nextYear: 2027,
};
