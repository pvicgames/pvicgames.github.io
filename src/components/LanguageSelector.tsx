//import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="ml-auto pr-30  opacity-60">
      <button
        className="cursor-pointer"
        onClick={() => i18n.changeLanguage("en")}
      >
        <b>{t("navbar.english")}</b>
      </button>
      /
      <button
        className="cursor-pointer"
        onClick={() => i18n.changeLanguage("pt")}
      >
        <b>{t("navbar.portuguese")}</b>
      </button>
    </div>
  );
};

export default LanguageSelector;
