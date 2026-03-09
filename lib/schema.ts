import { getContent, type FAQItem, type Language } from "@/content/site";
import { getSiteUrl } from "@/lib/seo";

export function getFaqSchema(language: Language, items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: language,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function getLocalBusinessSchema(language: Language) {
  const content = getContent(language);

  return {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    name: content.brandName,
    description: content.seo.description,
    areaServed: ["Bothell, Washington", "Eastside, Washington"],
    availableLanguage: ["English", "Chinese"],
    url: `${getSiteUrl()}/${language}`,
    image: `${getSiteUrl()}/og-placeholder.svg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bothell",
      addressRegion: "WA",
      addressCountry: "US"
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      availableLanguage: ["English", "Chinese"]
    }
  };
}
