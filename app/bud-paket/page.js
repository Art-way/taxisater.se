import BookingForm from "../../components/BookingForm";
import { budPacketAppId, phoneDisplay, phoneHref, siteConfig } from "../../lib/site";

const faqs = [
  {
    question: `Kan ${siteConfig.name} köra bud och paket?`,
    answer: `Ja, vi hjälper både privatpersoner och företag med bud, paket och mindre leveranser i ${siteConfig.city} med omnejd.`,
  },
  {
    question: "Hur snabbt kan ett paket hämtas?",
    answer: "Ring oss för snabbast svar. När en bil finns tillgänglig kan vi hämta direkt och köra leveransen utan onödiga stopp.",
  },
  {
    question: "Kan jag förboka en budkörning?",
    answer: "Ja, använd formuläret på sidan om leveransen kan planeras i förväg. För akuta bud rekommenderar vi telefon.",
  },
  {
    question: "Får jag pris innan leveransen startar?",
    answer: "Ja, vi går igenom upphämtning, mottagare, tid och avstånd så att du får ett tydligt pris innan körningen bekräftas.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: `Bud & Paket med ${siteConfig.name}`,
  serviceType: "Bud och paket med taxi",
  provider: {
    "@type": "TaxiService",
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: phoneHref,
  },
  areaServed: siteConfig.areaServed.map((name) => ({ "@type": "City", name })),
  description: `${siteConfig.name} erbjuder snabb bud- och paketleverans i ${siteConfig.city}, Dalarna och närliggande orter.`,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export const metadata = {
  title: `Bud & Paket ${siteConfig.city} | Snabb leverans med taxi`,
  description: `Skicka bud och paket med ${siteConfig.name}. Snabb direktleverans från dörr till dörr i ${siteConfig.city}, Dalarna och närliggande orter. Ring ${phoneDisplay} eller boka online.`,
  alternates: {
    canonical: "/bud-paket/",
  },
  openGraph: {
    title: `Bud & Paket med ${siteConfig.name}`,
    description: `Snabb och trygg budservice med taxi i ${siteConfig.city}. Boka budkörning via telefon eller onlineformulär.`,
    url: `${siteConfig.url}/bud-paket/`,
    images: [
      {
        url: "/assets/img/hero-taxi.webp",
        width: 1600,
        height: 854,
        alt: `Bud och paket med ${siteConfig.name}`,
      },
    ],
  },
};

export default function BudPaketPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="page-hero">
        <img src="/assets/img/hero-taxi.webp" alt={`Bud och paket med taxi i ${siteConfig.city}`} width="1600" height="854" />
        <div className="hero-overlay"></div>
        <div className="container page-hero-content">
          <p className="eyebrow">Snabb budservice</p>
          <h1>Bud & Paket med {siteConfig.name}</h1>
          <p>Behöver du skicka ett paket snabbt och tryggt? Vi kör bud direkt från upphämtning till mottagare i {siteConfig.city}, Dalarna och närliggande orter.</p>
        </div>
      </section>

      <section className="trust-strip" aria-label="Fördelar med budservice">
        <div className="container trust-grid">
          <div><strong>Direkt</strong><span>Från dörr till dörr</span></div>
          <div><strong>24/7</strong><span>Ring oss dygnet runt</span></div>
          <div><strong>Tryggt</strong><span>Personlig transport utan omlastning</span></div>
        </div>
      </section>

      <section className="section booking-section" id="boka-bud">
        <div className="container split-grid">
          <BookingForm
            appId={budPacketAppId}
            eyebrow="Boka bud"
            title="Boka Bud & Paket"
            note="Fyll i upphämtning, mottagare och önskad tid så kontaktar vi dig för att bekräfta budkörningen."
          />
          <div className="content-stack">
            <p className="eyebrow">Taxibud i {siteConfig.city}</p>
            <h2>Snabb leverans när vanlig frakt tar för lång tid</h2>
            <p>När tiden är viktig kan en taxi vara det smidigaste sättet att få fram ett paket. Vi hämtar hos dig, kör direkt till mottagaren och håller hanteringen enkel hela vägen.</p>
            <p>Tjänsten passar både företag och privatpersoner som behöver skicka dokument, nycklar, reservdelar, mindre paket eller andra försändelser som kräver snabb och personlig leverans.</p>
            <div className="image-pair">
              <span className="photo-frame">
                <img src="/assets/img/taxi-interior.webp" alt={`Trygg budtransport med ${siteConfig.name}`} width="750" height="500" loading="lazy" />
              </span>
              <span className="photo-frame">
                <img src="/assets/img/service-train.webp" alt={`Taxibud i ${siteConfig.city} och Dalarna`} width="750" height="500" loading="lazy" />
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container editorial-grid">
          <div>
            <p className="eyebrow">Fördelar</p>
            <h2>Varför välja taxi för bud och paket?</h2>
          </div>
          <div className="article-copy">
            <p>Bud med taxi är byggt för leveranser där det inte finns tid för terminaler, sortering eller väntan. Paketet åker med samma förare från start till mål och lämnas över direkt till rätt mottagare.</p>
            <p>Det ger kortare ledtid, tydligare ansvar och en tryggare transport för sådant som är brådskande, värdefullt eller svårt att ersätta.</p>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container value-grid">
          <div>
            <h2>Expressleverans</h2>
            <p>För akuta bud kan du ringa direkt så hjälper vi dig se när närmaste bil kan hämta.</p>
          </div>
          <div>
            <h2>Dörr till dörr</h2>
            <p>Vi hämtar paketet på angiven adress och lämnar det personligen hos mottagaren.</p>
          </div>
          <div>
            <h2>Tydlig bokning</h2>
            <p>Du får bekräftelse kring upphämtning, leveransadress, tid och pris innan körningen startar.</p>
          </div>
        </div>
      </section>

      <section className="section local-section">
        <div className="container local-grid">
          <div>
            <p className="eyebrow">Områden</p>
            <h2>Budkörning i {siteConfig.city} och Dalarna</h2>
            <p>Vi hjälper med lokala leveranser och längre budkörningar. Ring <a href={`tel:${phoneHref}`}>{phoneDisplay}</a> om paketet behöver iväg snabbt.</p>
          </div>
          <ul className="route-list">
            {siteConfig.areaServed.map((area) => <li key={area}>{area}</li>)}
            <li>Borlänge</li>
            <li>Falun</li>
          </ul>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container">
          <div className="section-heading section-heading--compact">
            <p className="eyebrow">FAQ</p>
            <h2>Vanliga frågor om bud och paket</h2>
          </div>
          <div className="faq-list">
            {faqs.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-grid">
          <div>
            <p className="eyebrow">Behöver paketet skickas nu?</p>
            <h2>Ring {phoneDisplay}</h2>
          </div>
          <a className="btn btn-primary" href={`tel:${phoneHref}`}>Ring och boka bud</a>
        </div>
      </section>
    </>
  );
}
