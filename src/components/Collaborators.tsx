import squeaky from "../assets/sound/squeaky.wav"

//import React from 'react'
import { useState } from "react";
import { useTranslation } from "react-i18next";
import CollaboratorRow from "./CollaboratorRow";
import useSound from "use-sound";

const Collaborators = () => {
  const [squakySound] = useSound(squeaky);

  const pvicBlue = "#3c89d7";
  const pvicYellow = "#ffd343";
  const pvicGreen = "#94dc52";
  const pvicPink = "#e44c78";

  const { t } = useTranslation();

  const [collabTextVisible, setCollabTextVisible] = useState(false);

  const [currentTitle, setCurrentTitle] = useState(
    t("about.collabs.developers.title")
  );
  const [currentText, setCurrentText] = useState(
    t("about.collabs.developers.text")
  );

  type Link = { name: string; img: string; url: string };
  const [currentLinks, setCurrentLinks] = useState<Link[]>([]);

  return (
    <div className="max-w-[670px] w-full">
      {/* Collaborators List */}
      <div
        className={`grid grid-flow-col grid-rows-4 min-h-[550px] mb-10 xl:mb-0 ${
          collabTextVisible ? "hidden" : "block"
        }`}
      >
        <CollaboratorRow
          position="left"
          color={pvicBlue}
          text={t("about.collabs.developers.title")}
          onClick={() => {
            setCollabTextVisible(true);
            setCurrentTitle(t("about.collabs.developers.title"));
            setCurrentText(t("about.collabs.developers.text"));
            setCurrentLinks(t("about.collabs.developers.links", {returnObjects: true,}) as Link[]);
          }}
          img="img/team_devs.png"
        />
        <CollaboratorRow
          position="right"
          color={pvicYellow}
          text={t("about.collabs.artists.title")}
          onClick={() => {
            setCollabTextVisible(true);
            setCurrentTitle(t("about.collabs.artists.title"));
            setCurrentText(t("about.collabs.artists.text"));
            setCurrentLinks(t("about.collabs.artists.links", {returnObjects: true,}) as Link[]);
          }}
          img="img/team_artists.png"
        />
        <CollaboratorRow
          position="left"
          color={pvicGreen}
          text={t("about.collabs.musics.title")}
          onClick={() => {
            setCollabTextVisible(true);
            setCurrentTitle(t("about.collabs.musics.title"));
            setCurrentText(t("about.collabs.musics.text"));
            setCurrentLinks(t("about.collabs.musics.links", {returnObjects: true,}) as Link[]);
          }}
          img="img/team_musics.png"
        />
        <CollaboratorRow
          position="right"
          color={pvicPink}
          text={t("about.collabs.communication.title")}
          onClick={() => {
            setCollabTextVisible(true);
            setCurrentTitle(t("about.collabs.communication.title"));
            setCurrentText(t("about.collabs.communication.text"));
            setCurrentLinks(t("about.collabs.communication.links", {returnObjects: true,}) as Link[]);
          }}
          img="img/team_comm.png"
        />
      </div>

      {/* Description Text (hidden by default) */}
      <div
        className={`min-h-[550px] z-10 p-4 xl:p-10  mb-10 xl:mb-0 bg-pvic-pink  ${
          collabTextVisible ? "block" : "hidden"
        }`}
      >
        <p className="relative font-adlib text-3xl xl:text-5xl mb-10">
          {currentTitle}
        </p>

        <p className="font-helvetica text-justify">{currentText}</p>

        <p
          className="text-white text-xl font-helvetica mt-6 hover:underline cursor-pointer"
          onClick={() => setCollabTextVisible(false)}
        >
          {t("about.collabs.return")}
        </p>

        {/* Create portifolio links */}
        <div className="mt-5 flex">
          {currentLinks.map((link, index) => (
            <a href={link.url ? link.url : undefined} target="_blank" key={index}>
              <img className="w-[130px] mr-3 rounded-2xl 
                              hover:rounded-md transform ease-linear duration-100
                              hover:drop-shadow-[5px_5px_0px_rgba(0,0,0,0.4)]
                              cursor-pointer" 
                  src={link.img} 
                  alt={link.name}
                  onClick={() => {if (link.url === "") { squakySound() }}}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collaborators;
