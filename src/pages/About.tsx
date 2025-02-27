//import React from "react";
import Collaborators from "../components/Collaborators";
import ActualPage from "../components/global/ActualPage";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <ActualPage>
      <div className="xl:min-h-screen flex items-center justify-center mt-7 xl:mt-0">
        <Collaborators />
      </div>

      <div className="xl:min-h-screen flex flex-col content-center justify-center max-w-[800px]">
        <h1 className="text-6xl xl:text-7xl text-pvic-blue font-adlib">
          {t("about.title")}
        </h1>

        <p className="text-justify font-helvetica">{t("about.description")}</p>
        <p className="mt-10 font-helvetica font-bold">
          {t("about.description2")}
        </p>
      </div>
    </ActualPage>
  );
};

export default About;
