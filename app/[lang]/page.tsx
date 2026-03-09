import Link from "next/link";
import type { Metadata } from "next";

import { CampPoster } from "@/components/camp-poster";
import { FAQList } from "@/components/faq-list";
import { StructuredData } from "@/components/structured-data";
import { WechatCard } from "@/components/wechat-card";
import { getContent, getFeaturedFaqs, localizeHref, type Language } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { getFaqSchema, getLocalBusinessSchema } from "@/lib/schema";

type HomePageProps = {
  params: Promise<{ lang: Language }>;
};

export async function generateMetadata({
  params
}: HomePageProps): Promise<Metadata> {
  const { lang } = await params;
  const content = getContent(lang);

  return buildMetadata({
    language: lang,
    path: "/",
    title: content.seo.title,
    description: content.seo.description
  });
}

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;
  const content = getContent(lang);
  const featuredFaqs = getFeaturedFaqs(lang);
  const quickFacts = [
    content.camp.quickFacts[0],
    content.camp.quickFacts[1],
    content.camp.pricingItems[0],
    content.camp.quickFacts[3]
  ];

  return (
    <>
      <StructuredData data={getLocalBusinessSchema(lang)} />
      <StructuredData data={getFaqSchema(lang, featuredFaqs)} />
      <div className="home-composition">
        <section className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{content.hero.eyebrow}</p>
            <h1>{content.hero.title}</h1>
            <p className="lead">{content.hero.description}</p>
            <div className="button-row">
              <Link className="button" href={localizeHref(lang, "/contact")}>
                {content.hero.primaryCta}
              </Link>
              <Link className="button secondary" href={localizeHref(lang, "/summer-camp")}>
                {content.hero.secondaryCta}
              </Link>
            </div>
            <ul className="highlight-list">
              {content.hero.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="section-note hero-note">{content.homepage.trustNote}</p>
          </div>
          <div className="hero-panel hero-showcase">
            <CampPoster language={lang} priority linked />
          </div>
        </section>

        <section className="content-section quick-facts-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">{content.camp.featuredTitle}</p>
              <h2>{content.homepage.quickFactsTitle}</h2>
            </div>
          </div>
          <div className="facts-grid">
            {quickFacts.map((fact) => (
              <article className="fact-card" key={fact.label}>
                <p className="eyebrow">{fact.label}</p>
                <h3>{fact.value}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="program-row">
          <article className="program-card featured-program">
            <div className="program-icon palette" aria-hidden="true">
              <span className="palette-dot one" />
              <span className="palette-dot two" />
              <span className="palette-dot three" />
              <span className="palette-dot four" />
            </div>
            <div className="program-copy">
              <p className="eyebrow">{lang === "en" ? "Main Enrollment" : "当前主推"}</p>
              <h2>{content.homepage.campCard.title}</h2>
              <p>{content.homepage.campCard.description}</p>
              <Link href={localizeHref(lang, content.homepage.campCard.href)}>
                {lang === "en" ? "Choose a program" : "查看夏令营"}
              </Link>
            </div>
          </article>
          <article className="program-card">
            <div className="program-icon pencils" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="program-copy">
              <p className="eyebrow">{lang === "en" ? "Year-round Option" : "常规课程"}</p>
              <h2>{content.homepage.classCard.title}</h2>
              <p>{content.homepage.classCard.description}</p>
              <Link href={localizeHref(lang, content.homepage.classCard.href)}>
                {lang === "en" ? "Choose a program" : "查看课程"}
              </Link>
            </div>
          </article>
        </section>

        <section className="content-section compact-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">{content.faqPage.title}</p>
              <h2>{content.homepage.faqTitle}</h2>
            </div>
            <Link className="button secondary" href={localizeHref(lang, "/faq")}>
              {lang === "en" ? "View all questions" : "查看全部问题"}
            </Link>
          </div>
          <FAQList items={featuredFaqs} />
        </section>

        <section className="content-section compact-section">
          <p className="eyebrow">{content.homepage.contactTitle}</p>
          <h2>{lang === "en" ? "Talk to us directly" : "直接微信咨询"}</h2>
          <p>{content.homepage.contactBody}</p>
          <WechatCard language={lang} />
        </section>
      </div>
    </>
  );
}
