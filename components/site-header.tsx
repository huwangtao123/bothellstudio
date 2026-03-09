import Link from "next/link";

import { LanguageSwitch } from "@/components/language-switch";
import { getContent, localizeHref, type Language } from "@/content/site";

type SiteHeaderProps = {
  language: Language;
};

export function SiteHeader({ language }: SiteHeaderProps) {
  const content = getContent(language);
  const brandMark = language === "en" ? "IS" : "一";

  return (
    <header className="site-header">
      <Link className="brand-lockup" href={localizeHref(language, "/")}>
        <span className="brand-mark">{brandMark}</span>
        <span>
          <strong>{content.brandName}</strong>
          <small>Bothell, Washington</small>
        </span>
      </Link>
      <nav className="main-nav" aria-label="Primary">
        {content.nav.map((item) => (
          <Link key={item.href} href={localizeHref(language, item.href)}>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="nav-actions">
        <Link className="button header-cta" href={localizeHref(language, "/contact")}>
          {language === "en" ? "Sign up" : "咨询报名"}
        </Link>
        <LanguageSwitch language={language} label={content.languageLabel} />
      </div>
    </header>
  );
}
