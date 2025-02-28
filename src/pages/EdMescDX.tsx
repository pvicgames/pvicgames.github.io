// Pictures
import pic1 from "../assets/img/edmescdx/pic1.jpg";
import pic2 from "../assets/img/edmescdx/pic2.jpg";
import pic3 from "../assets/img/edmescdx/pic3.jpg";
import pic4 from "../assets/img/edmescdx/pic4.jpg";
import pic5 from "../assets/img/edmescdx/pic5.jpg";
import pic6 from "../assets/img/edmescdx/pic6.jpg";
import needThisGame from "../assets/img/edmescdx/needThisGameEN_RTX.gif";
import compilation from "../assets/img/edmescdx/compilationv2.gif";

import logo from "../assets/img/edmescdx/logo.png";
import logoMobile from "../assets/img/edmobile/logo.png";

import badge_steam from "../assets/img/badges/badge_steam.png";
import badge_gplay from "../assets/img/badges/badge_gplay.png";
import badge_opera from "../assets/img/badges/badge_gxgames.png";

// Modules
import ActualPage from "../components/global/ActualPage";
import Gallery from "../components/global/Gallery";
import { useTranslation } from "react-i18next";

const EdMescDX = () => {
  const slidesMescDX = [pic1, pic2, pic3];
  const slidesMobile = [pic4, pic5, pic6];

  const { t } = useTranslation();

  return (
    <ActualPage singleColumn={true}>
      <div className="flex flex-wrap content-start justify-center text-justify">
        <div className="flex flex-col flex-wrap items-center max-w-[1000px] mb-20 mt-10 mr-7 ml-7 text-justify">
          <img
            className="h-fit w-full max-w-[600px] animate__animated animate__backInDown"
            src={logo}
            alt="Logo"
          />

          <Gallery slides={slidesMescDX} />

          <p className="pt-10 font-helvetica">{t("games.ednaldo.string1")}</p>

          <img className="mt-5 w-full max-w-[500px]" src={compilation}/>

          <p className="pt-10 font-helvetica">{t("games.ednaldo.string2")}</p>
          <p className="pt-10 font-helvetica">{t("games.ednaldo.string3")}</p>
          
          <img className="mt-5 w-full max-w-[400px]" src={needThisGame}/>

          <p className="pt-5 font-helvetica">{t("games.ednaldo.string4")}</p>

          <p className="pt-15 font-helvetica"><b>{t("games.ednaldo.string5")}</b></p>

          <a className="hover:scale-110 duration-100 mt-5 
                        drop-shadow-[0px_0px_6px_rgba(0,0,0,0.7)]
                        hover:drop-shadow-[0px_0px_10px_rgba(0,0,0,0.7)]" 
            target="_blank" href={t("games.ednaldo.steam")}>
            <img src={badge_steam} />
          </a>

          <hr className="w-full mt-20 mb-20 border-[rgba(0,0,0,0.3)] border-2"/>

          <img
            className="h-fit w-full max-w-[800px]"
            src={logoMobile}
            alt="Logo"
          />

          <Gallery slides={slidesMobile} />

          <p className="pt-10 font-helvetica">{t("games.ednaldomobile.string1")}</p>
          
          <p className="pt-15 font-helvetica"><b>{t("games.ednaldomobile.string2")}</b></p>

          <a className="hover:scale-110 duration-100 mt-5 
                        drop-shadow-[0px_0px_6px_rgba(0,0,0,0.7)]
                        hover:drop-shadow-[0px_0px_10px_rgba(0,0,0,0.7)]" 
                        target="_blank" href={t("games.ednaldomobile.operagx")}>
            <img src={badge_opera} />
          </a>

          <a className="hover:scale-110 duration-100 mt-5 
                        drop-shadow-[0px_0px_6px_rgba(0,0,0,0.7)]
                        hover:drop-shadow-[0px_0px_10px_rgba(0,0,0,0.7)]" 
                        target="_blank" href={t("games.ednaldomobile.gplay")}>
            <img src={badge_gplay} />
          </a>

          <p className="pt-15 font-helvetica">{t("games.ednaldomobile.string3")}</p>
          
        </div>
      </div>
    </ActualPage>
  );
};

export default EdMescDX;
