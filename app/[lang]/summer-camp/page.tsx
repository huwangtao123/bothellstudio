import type { Metadata } from "next";

import { CampPoster } from "@/components/camp-poster";
import { FAQList } from "@/components/faq-list";
import { PageHero } from "@/components/page-hero";
import { PageSection } from "@/components/page-section";
import { StructuredData } from "@/components/structured-data";
import { WechatCard } from "@/components/wechat-card";
import { getContent, type Language } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { getFaqSchema } from "@/lib/schema";

type CampPageProps = {
  params: Promise<{ lang: Language }>;
};

export async function generateMetadata({
  params
}: CampPageProps): Promise<Metadata> {
  const { lang } = await params;
  const content = getContent(lang);

  return buildMetadata({
    language: lang,
    path: "/summer-camp",
    title: content.camp.title,
    description: content.camp.intro
  });
}

export default async function SummerCampPage({ params }: CampPageProps) {
  const { lang } = await params;
  const content = getContent(lang);
  const faqItems = content.faqItems.filter((item) =>
    ["camp", "contact"].includes(item.category)
  );

  return (
    <>
      <StructuredData data={getFaqSchema(lang, faqItems)} />
      <PageHero
        eyebrow={content.hero.eyebrow}
        title={content.camp.title}
        description={content.camp.intro}
      />
      <section className="camp-page-hero">
        <div className="camp-page-poster">
          <CampPoster language={lang} priority />
        </div>
        <div className="camp-page-copy content-card emphasis">
          <p className="eyebrow">{content.camp.featuredTitle}</p>
          <h2>{lang === "en" ? "Full details" : "完整信息"}</h2>
          <p>{content.camp.featuredBody}</p>
          <ul className="camp-facts">
            {content.camp.quickFacts.map((fact) => (
              <li key={fact.label}>
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </li>
            ))}
          </ul>
          <ul className="trust-list">
            {content.camp.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
      <PageSection title={lang === "en" ? "What children experience" : "孩子会体验到什么"}>
        <div className="split-copy refined-split">
          <div>
            <p>{content.camp.showcaseTitle}</p>
            <ul className="trust-list">
              {content.camp.showcaseItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="content-card emphasis mini-summary-card">
            <p className="eyebrow">{content.camp.pricingTitle}</p>
            <ul className="mini-proof-list">
              {content.camp.pricingItems.slice(0, 3).map((item) => (
                <li key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PageSection>
      <PageSection title={lang === "en" ? "Daily Schedule" : "每日安排"}>
        <div id="camp-schedule" />
        <div className="schedule-grid">
          {content.camp.dailySchedule.map((item) => (
            <article className="schedule-row" key={`${item.time}-${item.activity}`}>
              <strong>{item.time}</strong>
              <p>{item.activity}</p>
            </article>
          ))}
        </div>
      </PageSection>
      <PageSection>
        <div className="cards-three">
          {content.camp.sessions.map((session) => (
            <article className="content-card emphasis" key={session.title}>
              <h2>{session.title}</h2>
              <p>{session.description}</p>
            </article>
          ))}
        </div>
      </PageSection>
      <PageSection title={lang === "en" ? "Camp Highlights" : "夏令营亮点"}>
        <ul className="trust-list">
          {content.camp.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </PageSection>
      <PageSection title={content.camp.pricingTitle}>
        <div className="cards-three camp-pricing-grid">
          {content.camp.pricingItems.map((item) => (
            <article className="content-card" key={item.label}>
              <p className="eyebrow">{item.label}</p>
              <h2>{item.value}</h2>
            </article>
          ))}
        </div>
      </PageSection>
      <PageSection title={content.camp.locationTitle}>
        <p>{content.camp.locationBody}</p>
      </PageSection>
      <PageSection title={content.faqPage.title}>
        <FAQList items={faqItems} />
      </PageSection>
      <WechatCard language={lang} />
    </>
  );
}
