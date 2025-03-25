import squeaky from "../assets/sound/squeaky.wav"

import { useState } from "react";
import { useTranslation } from "react-i18next";
import ArtiusCharButton from "./ArtiusCharButton";
import useSound from "use-sound";

const ArtiusPlaceSelector = () => {
  const { t } = useTranslation();

  const [currentPlaceTitle, setCurrentPlaceTitle] = useState(t("games.newArtius.places.rupestrine.title"))
  const [currentPlaceSubtitle, setCurrentPlaceSubtitle] = useState(t("games.newArtius.places.rupestrine.subtitle"))
  const [currentPlaceDesc, setCurrentPlaceDesc] = useState(t("games.newArtius.places.rupestrine.desc"))
  const [currentPlaceImg, setCurrentPlaceImg] = useState(t("games.newArtius.places.rupestrine.img"))

  const [squakySound] = useSound(squeaky);

  function setPlace(placeName: string) {
    const path = `games.newArtius.places.${placeName}`

    setCurrentPlaceTitle(t(`${path}.title`))
    setCurrentPlaceSubtitle(t(`${path}.subtitle`))
    setCurrentPlaceDesc(t(`${path}.desc`))
    setCurrentPlaceImg(t(`${path}.img`))
  }

  return (
    <div className="mt-20 m-4">
      {/* Title */}
      <p
        className="font-adlib text-4xl xl:text-6xl text-center m-5 mb-7 text-pvic-green 
                            drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]"
      >
        {t("games.newArtius.places.meet")}
      </p>

      <div className="w-full min-h-[750px] max-w-[1100px] m-auto mt-auto mb-auto bg-pvic-blue flex drop-shadow-[7px_7px_0px_#3c89d7]">
        {/* Char selection */}
        <div className="bg-pvic-pink flex-1 flex flex-col">
          <ArtiusCharButton img="/img/locations/rupestrine_icon.png"   func={() => {setPlace("rupestrine");}}/>
          <ArtiusCharButton img="/img/locations/ducklagoon_icon.png"   func={() => {setPlace("ducklagoon");}}/>
          <ArtiusCharButton img="/img/characters/question_icon.png" func={() => {squakySound();}}/>
          <ArtiusCharButton img="/img/characters/question_icon.png" func={() => {squakySound();}}/>
          <ArtiusCharButton img="/img/characters/question_icon.png" func={() => {squakySound();}}/>
          <ArtiusCharButton img="/img/characters/question_icon.png" func={() => {squakySound();}}/>
          <ArtiusCharButton img="/img/characters/question_icon.png" func={() => {squakySound();}}/> 
        </div>

        {/* Text Section */}
        <div className="bg-pvic-yellow flex-4 xl:flex-13 flex flex-col">
          {/* Character Image */}
          <div
            className="flex-1 flex items-center justify-center 
                               bg-white border-6 border-pvic-yellow p-4
                               min-h-[200px] xl:min-h-[300px]"
            style={{
              backgroundImage: `url(${currentPlaceImg})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          {/* Character Text */}
          <div className="flex-2 xl:flex-3 bg-white border-6 border-pvic-green">
            {/* Title */}
            <p
              className="font-adlib text-4xl xl:text-7xl text-left m-5 text-pvic-pink 
                         drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]"
            >
              {currentPlaceTitle}
            </p>

            {/* Subtitle */}
            <p
              className="font-helvetica text-1xl p-1 font-bold text-right m-5 -mt-5 text-white bg-pvic-pink"
            >
              {currentPlaceSubtitle}
            </p>

            {/* Text */}
            <p className="font-helvetica text-justify m-5 indent-7">
              {currentPlaceDesc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtiusPlaceSelector;