export const phoneDisplay = "0243-20 70 70";
export const phoneHref = "+46243207070";
export const bookingAppId = "elfsight-app-8aa221ee-a21b-473d-ba02-254af40aa326";
export const budPacketAppId = "elfsight-app-b34c4c6b-2f21-4602-9452-284a7d08d181";

export const siteConfig = {
  "folder": "taxisater.se",
  "packageName": "taxi-sater",
  "logoPreview": "taxisater-logo.svg",
  "domain": "taxisater.se",
  "name": "Taxi Säter",
  "city": "Säter",
  "title": "Taxi Säter | Boka taxi dygnet runt",
  "description": "Taxi Säter erbjuder trygg taxi i Säter med omnejd. Ring 0243-20 70 70 eller boka online för lokala resor, tågtaxi, flygtaxi och företagsresor.",
  "areaServed": [
    "Säter",
    "Gustafs",
    "Stora Skedvi",
    "Dalarna"
  ],
  "intro": "Taxi Säter hjälper dig med trygga resor i Säter och närliggande orter. Vi kör korta resor i centrum, upphämtning vid stationen, flygtaxi och planerade resor i hela Dalarna.",
  "about": "Vi vill göra taxiresan enkel från första kontakt till framkomst. Med lokal närvaro i Säter, tydlig bokning och personlig service får du en pålitlig transportlösning när du behöver den.",
  "routes": [
    "Säter station",
    "Gustafs",
    "Stora Skedvi",
    "Borlänge",
    "Falun",
    "Dala Airport"
  ],
  "mapQuery": "Säter,Dalarna,Sweden",
  "url": "https://taxisater.se",
  "phoneDisplay": "0243-20 70 70",
  "phoneHref": "+46243207070",
  "bookingAppId": "elfsight-app-8aa221ee-a21b-473d-ba02-254af40aa326"
};

export const navItems = [
  { href: "/", label: "Startsida" },
  { href: "/bud-paket", label: "Bud & Paket" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/kontakta-oss", label: "Kontakta oss" },
];

export const taxiSchema = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  name: siteConfig.name,
  url: siteConfig.url,
  telephone: phoneHref,
  priceRange: "$$",
  image: `${siteConfig.url}/assets/img/hero-taxi.webp`,
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.city,
    addressRegion: "Dalarna",
    addressCountry: "SE",
  },
  areaServed: siteConfig.areaServed.map((name) => ({ "@type": "City", name })),
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  paymentAccepted: "Cash, Credit Card, Swish, Invoice",
};
