import artiuspediaLogo from "../assets/img/artius/artiuspedia_logo.png";

import { useTranslation } from "react-i18next";
import ArtiusCharSelector from "./ArtiusCharSelector";
import ArtiusPlaceSelector from "./ArtiusPlaceSelector";
import { useState } from "react";

const ArtiusPedia = () => {
  const { t } = useTranslation();

  const [selectionVisible, setSelectionVisible] = useState(true);
  const [currentSection, setCurrentSection] = useState("char");

  function returnButton() {
    return (
      <p
        className="text-4xl mt-1 font-adlib text-center hover:underline cursor-pointer"
        onClick={() => returnToMain()}
      >
        {t("games.newArtius.return")}
      </p>
    );
  }

  function selectSection(name: string) {
    setSelectionVisible(false);
    setCurrentSection(name);
  }

  function returnToMain() {
    setSelectionVisible(true);
    setCurrentSection("");
  }

  /* Show main article section seleciton */
  function mainSelection() {
    if (selectionVisible) {
      return (
        <div className="min-h-screen w-full mt-20 p-4 flex flex-col justify-center">
          {/* Title */}
          <div className="flex flex-col items-center">
            {/* Title */}
            <img className="w-[100%] max-w-[800px] drop-shadow-[0px_0px_10px_rgba(0,0,0,0.8)]" src={artiuspediaLogo}/>

            {/* Subtitle */}            
            <p
              className="font-adlib text-3xl text-center m-5 text-pvic-pink 
                 max-w-[900px] drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]"
            >
              {t("games.newArtius.artiuspedia2")}
            </p>
          </div>

          {/* Selection buttons */}
          <div className="grid grid-flow-row grid-cols-2 gap-3">
            {/* Characters */}
            <div
              className="ml-auto w-full max-w-[500px] h-screen max-h-[400px] 
                         bg-[url(/img/characters/artiuspedia_characters.png)] bg-cover bg-bottom
                         flex items-end cursor-pointer hover:brightness-110 hover:scale-102 duration-100"
              onClick={() => selectSection("char")}
            >
              <p
                className="font-adlib text-2xl xl:text-5xl text-left text-white 
                           drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]
                           xl:mb-15 m-auto"
              >
                {t("games.newArtius.characters.meet")}
              </p>
            </div>

            {/* Locations */}
            <div
              className="mr-auto w-full max-w-[500px] h-screen max-h-[400px] 
                   bg-[url(/img/locations/artiuspedia_locations.png)] bg-cover bg-bottom
                   flex items-end cursor-pointer hover:brightness-110 hover:scale-102 duration-100"
              onClick={() => selectSection("places")}
            >
              <p
                className="font-adlib text-2xl xl:text-5xl text-center text-white 
                       drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]
                       xl:mb-15 m-auto word-break"
              >
                {t("games.newArtius.places.meet")}
              </p>
            </div>
          </div>
        </div>
      );
    }
  }

  /* Show current selected section */
  function showCurrentSection() {
    if (!selectionVisible) {
      if (currentSection === "char") {
        return (
          <div className="min-h-screen w-full mt-20 flex flex-col justify-center">
            <ArtiusCharSelector />
            {returnButton()}
          </div>
        );
      } else if (currentSection === "places") {
        return (
          <div className="min-h-screen w-full mt-20 flex flex-col justify-center">
            <ArtiusPlaceSelector />
            {returnButton()}
          </div>
        );
      }
    }
  }

  return (
    <div>
      {mainSelection()}
      {showCurrentSection()}
    </div>
  );
};

export default ArtiusPedia;
