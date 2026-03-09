import Link from "next/link";

import { getContent, localizeHref, type Language } from "@/content/site";

type StickyWechatProps = {
  language: Language;
};

export function StickyWechat({ language }: StickyWechatProps) {
  const content = getContent(language);

  return (
    <div className="sticky-wechat">
      <span>{content.contact.wechatLabel}</span>
      <Link className="button" href={localizeHref(language, "/contact")}>
        {language === "en" ? "Scan QR" : "扫码联系"}
      </Link>
    </div>
  );
}
