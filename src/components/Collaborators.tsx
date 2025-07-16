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
    t("about.collabs.pedro.name")
  );
  const [currentRole, setcurrentRole] = useState(
    t("about.collabs.pedro.role")
  );

  const [currentText, setCurrentText] = useState(
    t("about.collabs.pedro.text")
  );

  const [currentLink, setCurrentLink] = useState(
    t("about.collabs.pedro.link")
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
              setcurrentRole(t("about.collabs.pedro.role"))
              setCurrentText(t("about.collabs.pedro.text"))
              setCurrentLink(t("about.collabs.pedro.link"))
            }}
            />
          <CollaboratorIcon 
            img="/img/members/casanova.png" 
            onClick={() => {
              setCollabTextVisible(true)
              setCurrentTitle(t("about.collabs.casanova.name"))
              setcurrentRole(t("about.collabs.casanova.role"))
              setCurrentText(t("about.collabs.casanova.text"))
              setCurrentLink(t("about.collabs.casanova.link"))
            }}
          />
          <div className="w-full max-w-[190px] h-[190px]"/>
        </div>

        {/* ROW 2 */}
        <div className="flex flex-row">
          <CollaboratorIcon 
            img="/img/members/prancha.webp" 
            onClick={() => {
              setCollabTextVisible(true)
              setCurrentTitle(t("about.collabs.kevin.name"))
              setcurrentRole(t("about.collabs.kevin.role"))
              setCurrentLink(t("about.collabs.kevin.link"))
              setCurrentText(t("about.collabs.kevin.text"))
            }}
          />
          <CollaboratorIcon 
            img="/img/members/bredi.png" 
            onClick={() => {
              setCollabTextVisible(true)
              setCurrentTitle(t("about.collabs.bredi.name"))
              setcurrentRole(t("about.collabs.bredi.role"))
              setCurrentLink(t("about.collabs.bredi.link"))
              setCurrentText(t("about.collabs.bredi.text"))
            }}
          />
          <CollaboratorIcon 
            img="/img/members/pablo.webp" 
            onClick={() => {
              setCollabTextVisible(true)
              setCurrentTitle(t("about.collabs.pablo.name"))
              setcurrentRole(t("about.collabs.pablo.role"))
              setCurrentLink(t("about.collabs.pablo.link"))
              setCurrentText(t("about.collabs.pablo.text"))
            }}
          />
        </div>

        {/* ROW 3 */}
        <div className="flex flex-row">
          <CollaboratorIcon 
            img="/img/members/vivi.png" 
            onClick={() => {
              setCollabTextVisible(true)
              setCurrentTitle(t("about.collabs.vivi.name"))
              setcurrentRole(t("about.collabs.vivi.role"))
              setCurrentLink(t("about.collabs.vivi.link"))
              setCurrentText(t("about.collabs.vivi.text"))
            }}
          />
          <CollaboratorIcon 
            img="/img/members/saga.png" 
            onClick={() => {
              setCollabTextVisible(true)
              setCurrentTitle(t("about.collabs.saga.name"))
              setcurrentRole(t("about.collabs.saga.role"))
              setCurrentLink(t("about.collabs.saga.link"))
              setCurrentText(t("about.collabs.saga.text"))
            }}
          />
          <CollaboratorIcon 
            img="/img/members/speed.png" 
            onClick={() => {
              setCollabTextVisible(true)
              setCurrentTitle(t("about.collabs.speed.name"))
              setcurrentRole(t("about.collabs.speed.role"))
              setCurrentLink(t("about.collabs.speed.link"))
              setCurrentText(t("about.collabs.speed.text"))
            }}
          />
        </div>
      </div>

      {/* Member Description Section (hidden by default -> shown once clicked) */}
      <div
        className={`min-h-[560px] z-10 p-4 xl:p-10  mb-10 xl:mb-0 bg-pvic-pink
          animate__animated animate__fadeInDown animate__faster
          ${ collabTextVisible ? "block" : "hidden" }
        `}
      >
        {/* Member title */}
        <p className="relative font-adlib text-3xl xl:text-5xl mb-5">
          {currentTitle}
        </p>

        {/* Member role */}
        <p className="font-helvetica text-justify font-bold">{currentRole}</p>

        {/* Member Text */}
        <p className="mt-15 font-helvetica text-justify">
          {currentText} 

          <a href={currentLink} 
             target="_blank"
             className="ml-1 font-bold hover:cursor-pointer hover:underline underline-offset-1 decoration-2">
            {t("about.collabs.moreinfo")}
          </a>
        </p>

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