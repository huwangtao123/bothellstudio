import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { PageSection } from "@/components/page-section";
import { StructuredData } from "@/components/structured-data";
import { WechatCard } from "@/components/wechat-card";
import { getContent, type Language } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { getFaqSchema } from "@/lib/schema";

type ClassesPageProps = {
  params: Promise<{ lang: Language }>;
};

export async function generateMetadata({
  params
}: ClassesPageProps): Promise<Metadata> {
  const { lang } = await params;
  const content = getContent(lang);

  return buildMetadata({
    language: lang,
    path: "/classes",
    title: content.classes.title,
    description: content.classes.intro
  });
}

export default async function ClassesPage({ params }: ClassesPageProps) {
  const { lang } = await params;
  const content = getContent(lang);
  const faqItems = content.faqItems.filter((item) =>
    ["classes", "general"].includes(item.category)
  );

  return (
    <>
      <StructuredData data={getFaqSchema(lang, faqItems)} />
      <PageHero
        eyebrow={content.hero.eyebrow}
        title={content.classes.title}
        description={content.classes.intro}
      />
      <PageSection title={lang === "en" ? "Age Groups" : "年龄分组"}>
        <div className="cards-three">
          {content.classes.ageGroups.map((group) => (
            <article className="content-card" key={group.title}>
              <h2>{group.title}</h2>
              <p>{group.description}</p>
            </article>
          ))}
        </div>
      </PageSection>
      <PageSection title={lang === "en" ? "How to ask about classes" : "如何咨询课程"}>
        <ul className="trust-list">
          {content.classes.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </PageSection>
      <WechatCard language={lang} compact />
    </>
  );
}
