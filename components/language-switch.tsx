"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { languages, type Language } from "@/content/site";

type LanguageSwitchProps = {
  language: Language;
  label: string;
};

export function LanguageSwitch({ language, label }: LanguageSwitchProps) {
  const pathname = usePathname();
  const alternateLanguage = languages.find((item) => item !== language) ?? "en";
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length > 0) {
    segments[0] = alternateLanguage;
  }

  const alternatePath = `/${segments.join("/")}` || `/${alternateLanguage}`;

  return (
    <Link className="language-switch" href={alternatePath} hrefLang={alternateLanguage}>
      {label}
    </Link>
  );
}
