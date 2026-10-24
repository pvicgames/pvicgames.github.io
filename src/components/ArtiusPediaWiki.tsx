import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import { X } from "lucide-react";
import { Entry, getEntries, Group } from "../artiuspedia";
import ArtiusPediaTitle from "./ArtiusPediaTitle";

interface Props {
  section?: string; // "characters", "places" or nothing for the main page (from the url)
  entry?: string; // slug of the article (from the url)
  onClose: () => void;
}

// characters are pink, places are blue (full class names so tailwind finds them)
const colors: Record<Group, { bg: string; text: string; border: string }> = {
  characters: { bg: "bg-pvic-pink", text: "text-pvic-pink", border: "border-pvic-pink" },
  places: { bg: "bg-pvic-blue", text: "text-pvic-blue", border: "border-pvic-blue" },
};
const covers: Record<Group, string> = {
  characters: "/img/characters/artiuspedia_characters.png",
  places: "/img/locations/artiuspedia_locations.png",
};
const groups: Group[] = ["characters", "places"];

// thumbnail = round crop of the entry image, no separate files needed
const Thumb = (p: { entry: Entry; className: string }) => (
  <div
    className={`${p.className} shrink-0 rounded-full bg-white bg-no-repeat`}
    style={{ backgroundImage: `url(${p.entry.image})`, backgroundPosition: p.entry.thumbPosition, backgroundSize: p.entry.thumbSize }}
  />
);

const ArtiusPediaWiki = (props: Props) => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const topRef = useRef<HTMLDivElement>(null);

  const entries = { characters: getEntries("characters", i18n.language), places: getEntries("places", i18n.language) };
  const section = groups.find((g) => g === props.section);
  const article = section ? entries[section].find((e) => e.slug === props.entry) : undefined;

  // back to the top of the popup when opening another page
  useEffect(() => {
    topRef.current?.closest("[role=dialog]")?.scrollTo(0, 0);
  }, [props.section, props.entry]);

  // links inside the wiki replace the history entry, so closing goes straight back to the page
  const WikiLink = (p: { to: string; className?: string; style?: React.CSSProperties; children: React.ReactNode }) => (
    <Link
      to={`/artius/artiuspedia${p.to}`}
      replace
      state={location.state}
      className={p.className}
      style={p.style}
    >
      {p.children}
    </Link>
  );

  /* Main page: characters or places */
  function mainPage() {
    return (
      <div>
        <div className="text-center pt-4">
          <ArtiusPediaTitle className="text-6xl xl:text-8xl" />
        </div>
        <p className="font-helvetica text-center mt-4 mb-8">{t("games.newArtius.artiuspedia2")}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {groups.map((g) => (
            <WikiLink
              key={g}
              to={`/${g}`}
              className={`h-[260px] xl:h-[340px] rounded-3xl overflow-hidden bg-cover bg-bottom border-4 ${colors[g].border}
                          flex items-end justify-center hover:brightness-110 hover:scale-102 duration-100
                          shadow-[0px_4px_10px_rgba(0,0,0,0.3)] hover:shadow-[0px_6px_14px_rgba(0,0,0,0.4)]`}
              style={{ backgroundImage: `url(${covers[g]})` }}
            >
              <span className="font-adlib text-4xl text-white mb-6 drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]">
                {t(`games.newArtius.${g}.meet`)}
              </span>
            </WikiLink>
          ))}
        </div>
      </div>
    );
  }

  /* Meet the cast / meet the locations */
  function categoryPage(group: Group) {
    return (
      <div>
        <p className={`font-adlib text-4xl xl:text-6xl text-center mb-8 ${colors[group].text} drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]`}>
          {t(`games.newArtius.${group}.meet`)}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-6">
          {entries[group].map((e) => (
            <WikiLink key={e.slug} to={`/${group}/${e.slug}`} className="flex flex-col items-center text-center group">
              <Thumb
                entry={e}
                className={`w-[120px] h-[120px] xl:w-[150px] xl:h-[150px] border-4 ${colors[group].border} group-hover:scale-105 duration-100`}
              />
              <span className="font-adlib text-2xl mt-2">{e.title}</span>
              <span className="font-helvetica text-sm">{e.subtitle}</span>
            </WikiLink>
          ))}

        </div>
      </div>
    );
  }

  function articlePage(group: Group, e: Entry) {
    return (
      <article className="font-helvetica">
        <WikiLink to={`/${group}`} className={`font-adlib text-xl ${colors[group].text} hover:underline`}>
          ← {t(`games.newArtius.wiki.${group}`)}
        </WikiLink>

        <h1 className="font-adlib text-5xl xl:text-7xl mt-2">{e.title}</h1>
        <p className={`font-adlib text-2xl xl:text-3xl ${colors[group].text} mb-5`}>{e.subtitle}</p>

        <div
          className={`xl:float-right xl:w-[320px] xl:ml-6 mb-4 h-[300px] rounded-3xl border-4 ${colors[group].border}
                      bg-white bg-center bg-no-repeat ${group === "places" ? "bg-cover" : "bg-contain"}`}
          style={{ backgroundImage: `url(${e.image})` }}
        />

        <div className="text-justify leading-relaxed [&_p]:mb-3 [&_p]:indent-7" dangerouslySetInnerHTML={{ __html: e.html }} />
        <div className="clear-both" />
      </article>
    );
  }

  function content() {
    if (section && article) return articlePage(section, article);
    if (section) return categoryPage(section);
    return mainPage();
  }

  return (
    <div ref={topRef}>
      {/* Close */}
      <div className="sticky top-0 z-10 flex justify-end items-start h-0">
        <button
          autoFocus
          aria-label={t("games.newArtius.close")}
          className="mt-3 mr-3 p-2 rounded-full bg-pvic-pink text-white cursor-pointer duration-100 hover:scale-110"
          onClick={props.onClose}
        >
          <X size={28} />
        </button>
      </div>

      <main className="p-5 pt-14 xl:p-10">{content()}</main>
    </div>
  );
};

export default ArtiusPediaWiki;
