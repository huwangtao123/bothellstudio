import Image from "next/image";
import Link from "next/link";

import { localizeHref, type Language } from "@/content/site";

type CampPosterProps = {
  language: Language;
  priority?: boolean;
  linked?: boolean;
  showCaption?: boolean;
};

function PosterImage({ priority }: { priority: boolean }) {
  return (
    <div className="camp-poster-visual">
      <Image
        src="/summer-camp-poster.png"
        alt="Summer camp recruitment poster"
        fill
        priority={priority}
        sizes="(max-width: 720px) 100vw, (max-width: 1200px) 46vw, 520px"
        className="camp-poster-image"
      />
    </div>
  );
}

export function CampPoster({
  language,
  priority = false,
  linked = false,
  showCaption = false
}: CampPosterProps) {
  const image = <PosterImage priority={priority} />;

  return (
    <article className="camp-poster-card">
      {linked ? (
        <Link
          className="camp-poster-link"
          href={localizeHref(language, "/summer-camp")}
          aria-label={language === "en" ? "Open summer camp page" : "打开夏令营页面"}
        >
          {image}
        </Link>
      ) : (
        image
      )}
      {showCaption ? (
        <div className="camp-poster-caption">
          <p className="eyebrow">{language === "en" ? "Main Recruitment Poster" : "主推招生海报"}</p>
          <h2>{language === "en" ? "2026 Summer Camp" : "2026 夏令营招生"}</h2>
          <p>
            {language === "en"
              ? "Ages 4-6 · June 15 to July 10 · 9:00 AM to 4:00 PM"
              : "4-6 岁 · 6 月 15 日到 7 月 10 日 · 每天 9:00 AM - 4:00 PM"}
          </p>
          <Link className="button flyer-button" href={localizeHref(language, "/summer-camp")}>
            {language === "en" ? "View Camp Details" : "查看夏令营详情"}
          </Link>
        </div>
      ) : null}
    </article>
  );
}
