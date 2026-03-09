import Link from "next/link";
import type { Metadata } from "next";

import { FAQList } from "@/components/faq-list";
import { PageHero } from "@/components/page-hero";
import { StructuredData } from "@/components/structured-data";
import { getContent, localizeHref, type Language } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { getFaqSchema } from "@/lib/schema";

type FaqPageProps = {
  params: Promise<{ lang: Language }>;
};

export async function generateMetadata({
  params
}: FaqPageProps): Promise<Metadata> {
  const { lang } = await params;
  const content = getContent(lang);

  return buildMetadata({
    language: lang,
    path: "/faq",
    title: content.faqPage.title,
    description: content.faqPage.intro
  });
}

export default async function FaqPage({ params }: FaqPageProps) {
  const { lang } = await params;
  const content = getContent(lang);

  return (
    <>
      <StructuredData data={getFaqSchema(lang, content.faqItems)} />
      <PageHero
        eyebrow={content.hero.eyebrow}
        title={content.faqPage.title}
        description={content.faqPage.intro}
      />
      <FAQList items={content.faqItems} />
      <section className="content-section compact-section">
        <div className="simple-cta">
          <p>{lang === "en" ? "Still have a question?" : "还有问题想确认？"}</p>
          <Link className="button secondary" href={localizeHref(lang, "/contact")}>
            {lang === "en" ? "Ask on WeChat" : "微信咨询"}
          </Link>
        </div>
      </section>
    </>
  );
}
