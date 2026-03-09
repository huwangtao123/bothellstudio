import Link from "next/link";

import { getContent, localizeHref, type Language } from "@/content/site";

type SiteFooterProps = {
  language: Language;
};

export function SiteFooter({ language }: SiteFooterProps) {
  const content = getContent(language);

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <h2>{content.brandName}</h2>
          <p>{content.footer.tagline}</p>
        </div>
        <div>
          <p>{content.footer.serviceArea}</p>
          <p>{content.footer.rights}</p>
        </div>
        <div className="footer-links">
          {content.nav.map((item) => (
            <Link key={item.href} href={localizeHref(language, item.href)}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
