//import artiuspediaLogo from "../assets/img/artius/artiuspedia_logo.png";

import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import ArtiusPediaTitle from "./ArtiusPediaTitle";

// the artiuspedia section on the artius page, the cards open the wiki popup (ArtiusPediaWiki)
const ArtiusPedia = () => {
  const { t } = useTranslation();

  // tells the popup it was opened from here, so closing it just goes back
  const linkState = { fromPage: true };

  /* Show main article section seleciton */
  function mainSelection() {
    return (
      <div className="min-h-screen mt-20 w-full p-4 flex flex-col justify-center">
        {/* Title */}
        <div className="flex flex-col items-center">
          {/* Title */}
          {/*<img className="w-[100%] max-w-[800px] drop-shadow-[0px_0px_10px_rgba(0,0,0,0.8)]" src={artiuspediaLogo} loading="lazy"/>*/}
          <ArtiusPediaTitle className="text-6xl xl:text-9xl mt-5" />

          {/* Subtitle */}
          <p
            className="font-adlib text-3xl text-center m-5 text-pvic-pink
               max-w-[900px] drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]"
          >
            {t("games.newArtius.artiuspedia2")}
          </p>
        </div>

        {/* Selection buttons */}
        <div className="grid grid-flow-row grid-cols-2 gap-6 xl:gap-10">
          {/* Characters */}
          <Link
            to="/artius/artiuspedia/characters"
            state={linkState}
            className="ml-auto w-full max-w-[500px] h-screen max-h-[400px] rounded-3xl overflow-hidden shadow-[0px_4px_10px_rgba(0,0,0,0.3)] hover:shadow-[0px_6px_14px_rgba(0,0,0,0.4)]
                       bg-[url(/img/characters/artiuspedia_characters.png)] bg-cover bg-bottom
                       flex items-end cursor-pointer hover:brightness-110 hover:scale-102 duration-100"
          >
            <p
              className="font-adlib text-2xl xl:text-5xl text-left text-white
                         drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]
                         xl:mb-15 m-auto"
            >
              {t("games.newArtius.characters.meet")}
            </p>
          </Link>

          {/* Locations */}
          <Link
            to="/artius/artiuspedia/places"
            state={linkState}
            className="mr-auto w-full max-w-[500px] h-screen max-h-[400px] rounded-3xl overflow-hidden shadow-[0px_4px_10px_rgba(0,0,0,0.3)] hover:shadow-[0px_6px_14px_rgba(0,0,0,0.4)]
                 bg-[url(/img/locations/artiuspedia_locations.png)] bg-cover bg-bottom
                 flex items-end cursor-pointer hover:brightness-110 hover:scale-102 duration-100"
          >
            <p
              className="font-adlib text-2xl xl:text-5xl text-center text-white
                     drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]
                     xl:mb-15 m-auto word-break"
            >
              {t("games.newArtius.places.meet")}
            </p>
          </Link>
        </div>
      </div>
    );
  }

  return mainSelection();
};

export default ArtiusPedia;
