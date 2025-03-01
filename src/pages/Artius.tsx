// Pictures
import pic1 from "../assets/img/artius/pic1.png";
import pic2 from "../assets/img/artius/pic2.png";
import pic3 from "../assets/img/artius/pic3.png";
import pic4 from "../assets/img/artius/pic4.png";
import pic5 from "../assets/img/artius/pic5.png";
import pic6 from "../assets/img/artius/pic6.png";

import logo from "../assets/img/artius/logo.png";
import chars_cartoon from "../assets/img/artius/chars_cartoon.png";
import chars_3d from "../assets/img/artius/chars_3d.png";
import pivolo from "../assets/img/artius/PIVOLO.png";

// Modules
import ActualPage from "../components/global/ActualPage";
import Gallery from "../components/global/Gallery";
import { useTranslation } from "react-i18next";

const Artius = () => {
  const slides = [pic1, pic2, pic3];
  const slides2 = [pic4, pic6, pic5];

  const { t } = useTranslation();

  return (
    <ActualPage singleColumn={true}>
      <div className="flex flex-wrap content-start justify-center text-justify">
        <div className="flex flex-col flex-wrap items-center max-w-[1000px] mb-20 mt-10 mr-7 ml-7 text-justify">
          <img
            className="h-fit w-full max-w-[600px] animate__animated animate__flipInY"
            src={logo}
            alt="Logo"
          />

          <Gallery slides={slides2} />

          <p className="pt-10 font-helvetica">{t("games.artius.string1")}</p>

          <p className="pt-10 text-center font-helvetica">
            <b>{t("games.artius.string2")}</b>
          </p>

          <img className="mt-10 w-full max-w-[800px]" src={chars_cartoon} />

          <h1 className="text-6xl pt-10 font-adlib text-pvic-pink text-center">
            {t("games.artius.string3")}
          </h1>
          <div>
            <img
              className="mt-10 w-full max-w-[160px] mr-5 float-left"
              src={pivolo}
            />

            <p className="pt-10 font-helvetica">{t("games.artius.string4")}</p>

            <p className="pt-10 font-helvetica">{t("games.artius.string5")}</p>
          </div>

          <Gallery slides={slides} />

          <h1 className="text-7xl pt-20 font-adlib text-pvic-blue text-center">
            {t("games.artius.string6")}
          </h1>

          <p className="pt-10 font-helvetica text-center">
            {t("games.artius.string7")}
          </p>

          <p className="pt-10 font-helvetica">
            {t("games.artius.string8")}
            <a
              href="mailto:contact.pvicvg@gmail.com"
              className="font-bold text-pvic-blue hover:underline"
            >
              contact.pvicvg@gmail.com
            </a>
            {t("games.artius.string9")}
          </p>

          <img className="mt-10 w-full max-w-[600px]" src={chars_3d} />
        </div>
      </div>
    </ActualPage>
  );
};

export default Artius;
