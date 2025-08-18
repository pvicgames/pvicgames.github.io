//import squeaky from "../assets/sound/squeaky.wav"

import { useState } from "react";
import { useTranslation } from "react-i18next";
import ArtiusCharButton from "./ArtiusCharButton";
//import useSound from "use-sound";

const ArtiusCharSelector = () => {
  const { t } = useTranslation();

  const [currentCharTitle, setCurrentCharTitle] = useState(t("games.newArtius.characters.pivolo.title"))
  const [currentCharSubtitle, setCurrentCharSubtitle] = useState(t("games.newArtius.characters.pivolo.subtitle"))
  const [currentCharDesc, setCurrentCharDesc] = useState(t("games.newArtius.characters.pivolo.desc"))
  const [currentCharImg, setCurrentCharImg] = useState(t("games.newArtius.characters.pivolo.img"))

  //const [squakySound] = useSound(squeaky);

  function setCharacter(characterName: string) {
    const path = `games.newArtius.characters.${characterName}`

    setCurrentCharTitle(t(`${path}.title`))
    setCurrentCharSubtitle(t(`${path}.subtitle`))
    setCurrentCharDesc(t(`${path}.desc`))
    setCurrentCharImg(t(`${path}.img`))
  }

  return (
    <div className="w-full p-4">
      {/* Title */}
      <p
        className="font-adlib text-4xl xl:text-6xl text-center m-5 mb-7 text-pvic-green 
                            drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]"
      >
        {t("games.newArtius.characters.meet")}
      </p>

      <div className="w-full min-h-[550px] max-w-[1100px] m-auto mt-auto mb-auto bg-pvic-blue flex drop-shadow-[7px_7px_0px_#3c89d7]">
        {/* Char selection */}
        <div className="bg-pvic-pink flex-1 flex flex-col">
          <ArtiusCharButton img="/img/characters/pivolo_icon.png"   func={() => {setCharacter("pivolo");}}/>
          <ArtiusCharButton img="/img/characters/pierre_icon.png"   func={() => {setCharacter("pierre");}}/>
          <ArtiusCharButton img="/img/characters/walter_icon.png"   func={() => {setCharacter("walter");}}/>
          <ArtiusCharButton img="/img/characters/guga_icon.png"     func={() => {setCharacter("guga");}}/>
          <ArtiusCharButton img="/img/characters/rene_icon.png"     func={() => {setCharacter("rene");}}/>
          <ArtiusCharButton img="/img/characters/theo_icon.png"     func={() => {setCharacter("theo");}}/>
          <ArtiusCharButton img="/img/characters/brunna_icon.png"   func={() => {setCharacter("brunna");}}/>
          <ArtiusCharButton img="/img/characters/tyler_icon.png"    func={() => {setCharacter("tyler");}}/>
          <ArtiusCharButton img="/img/characters/dodo_icon.png"     func={() => {setCharacter("dodo");}}/>
        </div>

        {/* Text Section */}
        <div className="bg-pvic-yellow flex-4 xl:flex-10 flex flex-col xl:flex-row">
          {/* Character Image */}
          <div
            className="flex-1 flex items-center justify-center 
                               bg-white border-6 border-pvic-yellow p-4
                               min-h-[200px]"
            style={{
              backgroundImage: `url(${currentCharImg})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          {/* Character Text */}
          <div className="flex-2 xl:flex-3 bg-white border-6 border-pvic-green">
            {/* Title */}
            <p
              className="font-adlib text-5xl xl:text-8xl text-right m-5 text-pvic-pink 
                            drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]"
            >
              {currentCharTitle}
            </p>

            {/* Subtitle */}
            <p
              className="font-adlib text-3xl xl:text-4xl text-right m-5 -mt-5 text-pvic-blue 
                            drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]"
            >
              {currentCharSubtitle}
            </p>

            {/* Text */}
            <p className="font-helvetica text-justify m-5 indent-7">
              {currentCharDesc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtiusCharSelector;
