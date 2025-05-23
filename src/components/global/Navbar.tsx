//import React from "react";
import pierrebike from "../../assets/img/pierrebike.gif";
import pierrejog from "../../assets/img/pierrejog.gif";
import pierrewalk from "../../assets/img/pierrewalk.gif";
import houseIcon from "../../assets/img/navicons/house.png";
import ednaldoIcon from "../../assets/img/navicons/ednaldo.png";
import artiusIcon from "../../assets/img/navicons/artius.png";
import aboutIcon from "../../assets/img/navicons/about.png";
import contactIcon from "../../assets/img/navicons/contact.png";

import { useTranslation } from "react-i18next";
import NavbarButton from "./NavbarButton";
import { useEffect, useState } from "react";
import LanguageSelector from "../LanguageSelector";

const Navbar = () => {
  const { t } = useTranslation();
  const [randomNumber, setRandomNumber] = useState<number | null>(null);

  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 3)); // Generates 0, 1, or 2 only once
  }, []);

  return (
    <div className="fixed h-screen z-20 flex items-end pointer-events-none">
      <img
        className="absolute z-20 right-5 bottom-2"
        src={
          randomNumber === 0
            ? pierrebike
            : randomNumber === 1
            ? pierrejog
            : randomNumber === 2
            ? pierrewalk
            : undefined
        }
      />
      <div className="sticky h-[50px] w-screen">
        <div className="absolute w-screen bottom-0 bg-pvic-pink h-[40px]" />

        <div className="relative pointer-events-auto flex items-end ">
          <NavbarButton img={houseIcon}   text={t("navbar.home")}     link="/" />
          <NavbarButton img={artiusIcon}  text={t("navbar.artius")}   link="/artius" />
          <NavbarButton img={ednaldoIcon} text={t("navbar.edmescdx")} link="/edmescdx" />
          <NavbarButton img={aboutIcon}   text={t("navbar.about")}    link="/about" />
          <NavbarButton img={contactIcon} text={t("navbar.contact")}  link="/contact" />
          
          <div className="ml-auto pr-30">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
