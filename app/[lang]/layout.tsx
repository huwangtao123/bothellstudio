import type { ReactNode } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyWechat } from "@/components/sticky-wechat";
import { getContent, languages, type Language } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

type LangLayoutProps = {
  children: ReactNode;
  params: Promise<{ lang: string }>;
};

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params
}: LangLayoutProps): Promise<Metadata> {
  const { lang } = await params;

  if (!languages.includes(lang as Language)) {
    return {};
  }

  return buildMetadata({
    language: lang as Language,
    path: "/"
  });
}

export default async function LangLayout({ children, params }: LangLayoutProps) {
  const { lang } = await params;

  if (!languages.includes(lang as Language)) {
    notFound();
  }

  const language = lang as Language;
  const content = getContent(language);

  return (
    <>
      <a className="skip-link" href="#main-content">
        {language === "en" ? "Skip to main content" : "跳转到主要内容"}
      </a>
      <div className="site-shell site-frame">
        <SiteHeader language={language} />
        <main className="main-layout" id="main-content">
          {children}
        </main>
        <SiteFooter language={language} />
      </div>
      <StickyWechat language={language} />
      <div className="screen-reader-only" aria-hidden="true">
        {content.brandName}
      </div>
    </>
  );
}
