import type { MetadataRoute } from "next";

import { languages } from "@/content/site";
import { getSiteUrl } from "@/lib/seo";

const paths = ["", "/classes", "/summer-camp", "/about", "/faq", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();

  return languages.flatMap((language) =>
    paths.map((path) => ({
      url: `${baseUrl}/${language}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: path === "" ? 1 : 0.8
    }))
  );
}
