import type { Metadata } from "next";

import { getContent, type Language } from "@/content/site";

const siteUrl = "https://www.bothellartstudio.com";

type MetadataInput = {
  language: Language;
  path: string;
  title?: string;
  description?: string;
};

export function buildMetadata({
  language,
  path,
  title,
  description
}: MetadataInput): Metadata {
  const content = getContent(language);
  const pageTitle = title ? `${title} | ${content.brandName}` : content.seo.title;
  const pageDescription = description ?? content.seo.description;
  const canonical = `${siteUrl}/${language}${path === "/" ? "" : path}`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: content.seo.keywords,
    alternates: {
      canonical,
      languages: {
        en: `${siteUrl}/en${path === "/" ? "" : path}`,
        zh: `${siteUrl}/zh${path === "/" ? "" : path}`
      }
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonical,
      siteName: content.brandName,
      locale: language === "en" ? "en_US" : "zh_CN",
      type: "website",
      images: [
        {
          url: `${siteUrl}/og-placeholder.svg`,
          width: 1200,
          height: 630,
          alt: content.brandName
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [`${siteUrl}/og-placeholder.svg`]
    }
  };
}

export function getSiteUrl() {
  return siteUrl;
}
