import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../LanguageSelector";

const NavbarMobile: React.FC = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NavbarButton: React.FC<{ text: string; link: string }> = ({ text, link }) => {
    const currentLocation = useLocation();
    const active = currentLocation.pathname === link;

    return (
      <Link to={link}>
        <div
          className={`inline-flex p-2 font-adlib w-full mt-3 text-center
                    ${active ? "bg-pvic-yellow text-3xl" : "bg-pvic-green text-2xl"}
                    transform ease-linear duration-100 hover:scale-110 hover:bg-pvic-blue`}
        >
          {text}
        </div>
      </Link>
    );
  };

  return (
    <div className="xl:hidden fixed top-0 left-0 w-full bg-pvic-pink z-30">
      {/* Mobile menu button */}
      <div className="flex justify-between items-center p-3">
        <button
          onClick={handleToggleMenu}
          className="text-2xl font-bold text-white"
        >
          ☰
        </button>
        <LanguageSelector />
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="animate__animated animate__fadeInDown animate__faster">
        <div className="flex flex-wrap flex-col bg-pvic-pink p-4">
          <NavbarButton text={t("navbar.home")} link="/" />
          <NavbarButton text={t("navbar.artius")} link="/artius" />
          <NavbarButton text={t("navbar.edmescdx")} link="/edmescdx" />
          <NavbarButton text={t("navbar.about")} link="/about" />
          <NavbarButton text={t("navbar.contact")} link="/contact" />
        </div>
        </div>
      )}
    </div>
  );
};

export default NavbarMobile;
