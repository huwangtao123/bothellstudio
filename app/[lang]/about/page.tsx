import Link from "next/link";
import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { PageSection } from "@/components/page-section";
import { getContent, localizeHref, type Language } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

type AboutPageProps = {
  params: Promise<{ lang: Language }>;
};

export async function generateMetadata({
  params
}: AboutPageProps): Promise<Metadata> {
  const { lang } = await params;
  const content = getContent(lang);

  return buildMetadata({
    language: lang,
    path: "/about",
    title: content.about.title,
    description: content.about.intro
  });
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { lang } = await params;
  const content = getContent(lang);

  return (
    <>
      <PageHero
        eyebrow={content.hero.eyebrow}
        title={content.about.title}
        description={content.about.intro}
      />
      <PageSection>
        <div className="cards-three">
          {content.about.values.map((value) => (
            <article className="content-card" key={value.title}>
              <h2>{value.title}</h2>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </PageSection>
      <PageSection>
        <div className="simple-cta">
          <p>{lang === "en" ? "Questions about fit or schedule?" : "想进一步确认课程是否适合？"}</p>
          <Link className="button secondary" href={localizeHref(lang, "/contact")}>
            {lang === "en" ? "Contact on WeChat" : "微信咨询"}
          </Link>
        </div>
      </PageSection>
    </>
  );
}
