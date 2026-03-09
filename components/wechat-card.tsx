import Image from "next/image";
import Link from "next/link";

import { getContent, localizeHref, type Language } from "@/content/site";

type WechatCardProps = {
  language: Language;
  compact?: boolean;
  showLink?: boolean;
};

export function WechatCard({
  language,
  compact = false,
  showLink = true
}: WechatCardProps) {
  const content = getContent(language);
  const classes = compact ? "wechat-card compact" : "wechat-card";

  return (
    <aside className={classes}>
      <div>
        <p className="eyebrow">{content.contact.wechatLabel}</p>
        <h3>{content.contact.caption}</h3>
        <p>{content.contact.scanInstructions}</p>
        {content.contact.secondaryNote ? (
          <p className="muted">{content.contact.secondaryNote}</p>
        ) : null}
        {showLink ? (
          <Link className="button secondary" href={localizeHref(language, "/contact")}>
            {language === "en" ? "Open Contact Page" : "查看联系方式"}
          </Link>
        ) : null}
      </div>
      <div className="qr-frame">
        <div className="qr-image-wrap">
          <Image
            src={content.contact.wechatQrImage}
            alt={content.contact.wechatLabel}
            fill
            sizes={compact ? "(max-width: 980px) 140px, 140px" : "(max-width: 980px) 220px, 220px"}
            priority
          />
        </div>
      </div>
    </aside>
  );
}
