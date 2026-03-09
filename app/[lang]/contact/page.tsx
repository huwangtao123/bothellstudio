import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { PageSection } from "@/components/page-section";
import { WechatCard } from "@/components/wechat-card";
import { getContent, type Language } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

type ContactPageProps = {
  params: Promise<{ lang: Language }>;
};

export async function generateMetadata({
  params
}: ContactPageProps): Promise<Metadata> {
  const { lang } = await params;
  const content = getContent(lang);

  return buildMetadata({
    language: lang,
    path: "/contact",
    title: content.contactPage.title,
    description: content.contactPage.intro
  });
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { lang } = await params;
  const content = getContent(lang);

  return (
    <>
      <PageHero
        eyebrow={content.hero.eyebrow}
        title={content.contactPage.title}
        description={content.contactPage.intro}
      />
      <PageSection>
        <div className="contact-page-grid">
          <WechatCard language={lang} showLink={false} />
          <article className="content-card contact-detail-card">
            <p className="eyebrow">{content.camp.locationTitle}</p>
            <h2>{content.camp.quickFacts[3]?.value}</h2>
            <p>
              {lang === "en"
                ? "Use WeChat as the main enrollment path for summer camp and class questions."
                : "当前以微信作为夏令营与课程咨询的主要联系入口。"}
            </p>
          </article>
        </div>
      </PageSection>
    </>
  );
}
