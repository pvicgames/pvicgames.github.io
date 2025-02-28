//import React from 'react'
import { useState } from "react";
import { useTranslation } from "react-i18next";
import CollaboratorRow from "./CollaboratorRow";

const Collaborators = () => {
  const { t } = useTranslation();

  const [collabTextVisible, setCollabTextVisible] = useState(false);

  const [currentTitle, setCurrentTitle] = useState(
    t("about.collabs.developers.title")
  );
  const [currentText, setCurrentText] = useState(
    t("about.collabs.developers.text")
  );

  return (
    <div className="max-w-[600px] w-full">
      {/* Collaborators List */}
      <div
        className={`grid grid-flow-col grid-rows-3 min-h-[500px] mb-10 xl:mb-0 ${
          collabTextVisible ? "hidden" : "block"
        }`}
      >
        {/* Developers */}
        <CollaboratorRow
          position="left"
          color="pvic-blue"
          text={t("about.collabs.developers.title")}
          onClick={() => {
            setCollabTextVisible(true);
            setCurrentTitle(t("about.collabs.developers.title"));
            setCurrentText(t("about.collabs.developers.text"));
          }}
          img="img/team_devs.png"
        />
        <CollaboratorRow
        position="right"
          color="pvic-pink"
          text={t("about.collabs.artists.title")}
          onClick={() => {
            setCollabTextVisible(true);
            setCurrentTitle(t("about.collabs.artists.title"));
            setCurrentText(t("about.collabs.artists.text"));
          }}
          img="img/team_artists.png"
        />
        <CollaboratorRow
        position="left"
          color="pvic-yellow"
          text={t("about.collabs.musics.title")}
          onClick={() => {
            setCollabTextVisible(true);
            setCurrentTitle(t("about.collabs.musics.title"));
            setCurrentText(t("about.collabs.musics.text"));
          }}
          img="img/team_musics.png"
        />
      </div>

      {/* Description Text (hidden by default) */}
      <div
        className={`min-h-[500px] z-10 p-4 xl:p-10 mb-10 xl:mb-0 bg-pvic-pink  ${
          collabTextVisible ? "block" : "hidden"
        }`}
      >
        <p className="relative font-adlib text-5xl mb-10">{currentTitle}</p>

        <p className="font-helvetica text-justify">{currentText}</p>

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
