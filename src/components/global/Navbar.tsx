//import React from "react";
import { useTranslation } from "react-i18next";
import NavbarButton from "./NavbarButton";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <div className="fixed h-screen z-20 flex items-end pointer-events-none">
      <div className="sticky h-[50px] w-screen">
        <div className="absolute w-screen bottom-0 bg-pvic-pink h-[40px]" />

        <div className="relative pointer-events-auto flex items-end ">
          <NavbarButton text={t("navbar.home")} link="/" />
          <NavbarButton text={t("navbar.about")} link="/about" />
          <NavbarButton text={t("navbar.contact")} link="/contact" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
