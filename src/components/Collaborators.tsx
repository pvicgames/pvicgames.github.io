//import squeaky from "../assets/sound/squeaky.wav"

//import React from 'react'
import { useState } from "react";
import { useTranslation } from "react-i18next";
import CollaboratorIcon from "./CollaboratorIcon";
//import useSound from "use-sound";

const Collaborators = () => {
  //const [squakySound] = useSound(squeaky);

  //const pvicBlue = "#3c89d7";
  //const pvicYellow = "#ffd343";
  //const pvicGreen = "#94dc52";
  //const pvicPink = "#e44c78";

  const { t } = useTranslation();

  const [collabTextVisible, setCollabTextVisible] = useState(false);

  const [currentTitle, setCurrentTitle] = useState(
    t("about.collabs.developers.title")
  );
  const [currentText, setCurrentText] = useState(
    t("about.collabs.developers.text")
  );

  //type Link = { name: string; img: string; url: string };
  //const [currentLinks, setCurrentLinks] = useState<Link[]>([]);

  return (
    <div className="max-w-[670px] w-full">
      {/* Members List */}
      <div
        className={`min-h-[550px] flex flex-col mb-10 xl:mb-0 ${
          collabTextVisible ? "hidden" : "block"
        }`}
      >
        {/* ROW 1 */}
        <div className="flex flex-row">
          <CollaboratorIcon 
            img="/img/members/pedro.png" 
            onClick={() => {
              setCollabTextVisible(true)
              setCurrentTitle(t("about.collabs.pedro.name"))
              setCurrentText(t("about.collabs.pedro.text"))
            }}
            />
          <CollaboratorIcon 
            img="/img/members/casanova.png" 
            onClick={() => {
              setCollabTextVisible(true)
              setCurrentTitle(t("about.collabs.pedro.name"))
              setCurrentText(t("about.collabs.pedro.text"))
            }}
          />
        </div>

        {/* ROW 2 */}
        <div className="flex flex-row">
          <CollaboratorIcon 
            img="/img/members/prancha.webp" 
            onClick={() => {
              setCollabTextVisible(true)
              setCurrentTitle(t("about.collabs.pedro.name"))
              setCurrentText(t("about.collabs.pedro.text"))
            }}
          />
          <CollaboratorIcon 
            img="/img/members/bredi.png" 
            onClick={() => {
              setCollabTextVisible(true)
              setCurrentTitle(t("about.collabs.pedro.name"))
              setCurrentText(t("about.collabs.pedro.text"))
            }}
          />
          <CollaboratorIcon 
            img="/img/members/pablo.webp" 
            onClick={() => {
              setCollabTextVisible(true)
              setCurrentTitle(t("about.collabs.pedro.name"))
              setCurrentText(t("about.collabs.pedro.text"))
            }}
          />
        </div>

        {/* ROW 3 */}
        <div className="flex flex-row">
          <CollaboratorIcon 
            img="/img/members/starcaster.png" 
            onClick={() => {
              setCollabTextVisible(true)
              setCurrentTitle(t("about.collabs.pedro.name"))
              setCurrentText(t("about.collabs.pedro.text"))
            }}
          />
          <CollaboratorIcon 
            img="/img/members/saga.png" 
            onClick={() => {
              setCollabTextVisible(true)
              setCurrentTitle(t("about.collabs.pedro.name"))
              setCurrentText(t("about.collabs.pedro.text"))
            }}
          />
          <CollaboratorIcon 
            img="/img/members/speed.png" 
            onClick={() => {
              setCollabTextVisible(true)
              setCurrentTitle(t("about.collabs.pedro.name"))
              setCurrentText(t("about.collabs.pedro.text"))
            }}
          />
        </div>
      </div>

      {/* Member Description Section (hidden by default -> shown once clicked) */}
      <div
        className={`min-h-[550px] z-10 p-4 xl:p-10  mb-10 xl:mb-0 bg-pvic-pink  ${
          collabTextVisible ? "block" : "hidden"
        }`}
      >
        {/* Member title */}
        <p className="relative font-adlib text-3xl xl:text-5xl mb-10">
          {currentTitle}
        </p>

        {/* Member description */}
        <p className="font-helvetica text-justify">{currentText}</p>

        {/* Return Button */}
        <p
          className="text-white text-xl font-helvetica mt-6 hover:underline cursor-pointer"
          onClick={() => setCollabTextVisible(false)}
        >
          {t("about.collabs.return")}
        </p>
      </div>
    </div>
  );
};

export default Collaborators;