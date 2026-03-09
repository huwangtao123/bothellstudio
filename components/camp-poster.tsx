import Image from "next/image";
import Link from "next/link";

import { localizeHref, type Language } from "@/content/site";

type CampPosterProps = {
  language: Language;
  priority?: boolean;
  linked?: boolean;
  showCaption?: boolean;
};

const POSTER_BLUR =
  "data:image/webp;base64,UklGRmYBAABXRUJQVlA4IFoBAAAwBgCdASoQABYAPm0skkWkIqGYBABABsS2AE6ZQjuRYC2APQA6Sz9riNg8kYP//hws1Q1Wnzjr2FwAAP62CpAJBvCfiKnoOG6hgT116lspuNlPsGFjupZkwOfLyvbXu/C8/nP+QOI2+8L1bK5HEDjxgepHWcN/Hsg2oS+Jcs2xM6QFO47lgAQNee/qVvpkYWVCyfweOf2Z7D+14hnls5LClXp/bw/X5WBs+0LbrCZEv0tG8jayVpUYH4mCu8cFrC8ImoL6vu0ytXgh5yMleaYM3KZT8lZXlNs1yMOzBXX+Q3zyF5D889bvhoUk/vIK7Y+tyN1jhb2/VV93fCwg3sa2H+HOv/ABabvTFKOzrtb4rAlg/YwuaJbw5f0ufx/2/5/5gP4Zgutk9S6I6/YBcydk+n/X4o1e6m/5xQbP4G4fzqxyMMdPKO5M/70w3Rin/Qyn+TcRdv5FQAAA";

function PosterImage({ priority }: { priority: boolean }) {
  return (
    <div className="camp-poster-visual">
      <Image
        src="/summer-camp-poster.webp"
        alt="Summer camp recruitment poster"
        fill
        priority={priority}
        sizes="(max-width: 720px) 100vw, (max-width: 1200px) 46vw, 520px"
        className="camp-poster-image"
        placeholder="blur"
        blurDataURL={POSTER_BLUR}
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
