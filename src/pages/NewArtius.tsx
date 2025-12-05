import Logo from "../assets/img/artius/logo.png";

import IconTwitter from "../assets/img/artius/social/x-twitter.png";
import IconYoutube from "../assets/img/artius/social/youtube.png";
import IconDiscord from "../assets/img/artius/social/discord.png";
import IconInstagram from "../assets/img/artius/social/instagram.png";
import steamIcon from "../assets/img/badges/steam_icon.png";
import joyIcon from "../assets/img/badges/joy_icon.webp";
import mediaKitIcon from "../assets/img/badges/mediakit.png";

import BrunnaTheo from "../assets/img/artius/brunnatheo.png";
import Chars3D from "../assets/img/artius/chars_3d.png";
import CharsCartoon from "../assets/img/artius/chars_cartoon.png";
import Comparison1 from "../assets/img/artius/comparison1.png";
import Comparison2 from "../assets/img/artius/comparison2.png";
import PvicLogo from "../assets/img/pvic_logo_blue.png";

import pic1 from "../assets/img/artius/pic1.png";
import pic2 from "../assets/img/artius/pic2.png";
import pic3 from "../assets/img/artius/pic3.png";
import pic4 from "../assets/img/artius/pic4.png";
import pic5 from "../assets/img/artius/pic5.png";
import pic6 from "../assets/img/artius/pic6.png";
import pic7 from "../assets/img/artius/pic7.png";
import pic8 from "../assets/img/artius/pic8.png";
import pic9 from "../assets/img/artius/pic9.png";

// Components
import SocialIcon from "../components/SocialIcon";
import ActualPage from "../components/global/ActualPage";
import YouTube from "react-youtube";
import Gallery from "../components/global/Gallery";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Parallax } from "react-scroll-parallax";
import { useTranslation } from "react-i18next";
import ArtiusPedia from "../components/ArtiusPedia";
import { Link } from "react-router";

const NewArtius = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
    });
  }, []);

  const { t , i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  const slides2 = [pic4, pic6, pic7];
  const slides3 = [pic9, pic8, pic2];
  const slides  = [pic5, pic1, pic3];

  function createLinks() {
    if (currentLanguage === "pt" || currentLanguage === "pt-BR") {
      return (<div className="xl:ml-13 flex">
        <SocialIcon Link="https://x.com/ednaldo_game" Icon={IconTwitter} />
        <SocialIcon Link="https://discord.gg/3T8fbXq9Jf" Icon={IconDiscord} />
        <SocialIcon Link="https://www.youtube.com/channel/UCXrinAaMhfNehiK37hGrYtg" Icon={IconYoutube} />
        <SocialIcon Link="https://www.instagram.com/pvicgamesbr/" Icon={IconInstagram} />
      </div>)
    } else {
      return (<div className="xl:ml-13 flex">
        <SocialIcon Link="https://x.com/PVicGames" Icon={IconTwitter} />
        <SocialIcon Link="https://discord.gg/3T8fbXq9Jf" Icon={IconDiscord} />
        <SocialIcon Link="https://www.youtube.com/@PVicVG" Icon={IconYoutube} />
        <SocialIcon Link="https://www.instagram.com/pvicgames/" Icon={IconInstagram} />
      </div>)
    }
  }

  return (
    <ActualPage singleColumn={true}>
      <div
        className="bg-[url(/img/bg_type1.png)] bg-center bg-contain -mt-12 xl:mt-0"
        style={{ backgroundSize: `100% auto;` }}
      >
        {/* Links */}
        <div
          className="min-h-screen bg-cover bg-center bg-fixed
                   grid xl:grid-cols-2 sm:grid-cols-1 p-5 mt-[-22px] xl:p-0
                   bg-[url(/img/ArtiusMain.png)] mb-[450px]"
        >
          <div className="flex flex-col flex-wrap items-center content-center justify-center">
            <img
              className="animate__animated animate__bounceInDown w-full max-w-[870px] h-fit xl:pl-20
                         drop-shadow-[0px_0px_10px_rgba(0,0,0,255)]"
              src={Logo}
            />

            <div className="flex flex-row">
              {/* Steam */}
              <a className="text-2xl text-center font-adlib xl:ml-10 mt-5 mb-2 
                            bg-black text-white p-3 rounded-2xl
                            drop-shadow-[0px_0px_10px_rgba(255,255,255,1)]
                            hover:drop-shadow-[0px_0px_20px_rgba(255,255,255,255)]
                            cursor-pointer duration-100 transform hover:rounded-3xl
                            flex items-center gap-2 hover:scale-105"
                  href="https://store.steampowered.com/app/3599920/ARTIUS_Pure_Imagination/" target="_blank"
              >
                <img className="w-[50px] mr-3" src={steamIcon}/> 
                {t("games.newArtius.wishlist")}
              </a>

              {/* Play Artius */}
              <Link className="text-2xl text-center font-adlib xl:ml-5 mt-5 mb-2 
                            bg-black text-white p-3 rounded-2xl
                            drop-shadow-[0px_0px_10px_rgba(255,255,255,1)]
                            hover:drop-shadow-[0px_0px_20px_rgba(255,255,255,255)]
                            cursor-pointer duration-100 transform hover:rounded-3xl
                            flex items-center gap-2 hover:scale-105"
                  to="/playartius"
              >
                <img className="w-[65px] mr-3" src={joyIcon}/> 
                {t("games.newArtius.play")}
              </Link>
            </div>

            {createLinks()}
          </div>
        </div>

        <Parallax speed={-50}>
          <div>
            {/* Video */}
            <div
              data-aos="fade-up"
              className="flex flex-col justify-center items-center p-5 xl:p-0"
            >
              <YouTube
                className="mt-20 w-full h-screen max-h-[300px] xl:max-h-[550px] max-w-[1000px]"
                videoId="_e333y09FAE"
                opts={{ height: "100%", width: "100%" }}
              />
            </div>

            {/* Gallery 1 */}
            <div data-aos="fade-up">
              <Gallery picSize="325px" slides={slides2} />
            </div>

            {/* Text 1 */}
            <div className="xl:min-h-screen grid xl:grid-cols-2 sm:grid-cols-1">
              <div
                data-aos="fade-right"
                className="flex items-center justify-center"
              >
                <p
                  className="font-adlib text-3xl xl:text-5xl m-5 mt-10 xl:mt-0 xl:ml-20 xl:mr-0 text-left text-pvic-pink 
                            drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] max-w-[800px]"
                >
                  {t("games.newArtius.text1")}
                </p>
              </div>

              <div
                data-aos="fade-up"
                className="flex items-center justify-center mt-10"
              >
                <img
                  className="w-full max-w-[470px] mt-10 p-5 xl:p-0"
                  src={BrunnaTheo}
                />
              </div>
            </div>

            {/* Text 2 */}
            <div className="xl:min-h-screen grid xl:grid-cols-2 sm:grid-cols-1">
              <div
                data-aos="fade-right"
                className="flex items-center justify-center"
              >
                <img className="w-full max-w-[650px]" src={Chars3D} />
              </div>
              <div
                data-aos="fade-up"
                className="flex items-center justify-center"
              >
                <p className="font-adlib text-pvic-blue drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] text-3xl xl:text-5xl p-5 xl:mr-20 xl:p-0 text-right max-w-[800px]">
                  {t("games.newArtius.text2")}
                </p>
              </div>
            </div>

            {/* Gallery 1 */}
            <div data-aos="fade-up">
              <Gallery picSize="325px" slides={slides3} />
            </div>

            {/* Tailored */}
            <div className="xl:min-h-screen flex items-center justify-center">
              {/* Desktop */}
              <div
                data-aos="fade-up"
                className={`mt-20 mb-20 w-full max-w-[1250px] h-screen hidden xl:inline`}
                style={{
                  backgroundImage: `url(${t("games.newArtius.tailored")})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />

              {/* Mobile */}
              <div
                data-aos="fade-up"
                className={`mt-10 mb-10 w-full max-w-[600px] h-screen xl:hidden`}
                style={{
                  backgroundImage: `url(${t(
                    "games.newArtius.tailoredMobile"
                  )})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>

            {/* Comparisons */}
            <div className="flex items-center justify-center content-center mb-20 p-5 xl:p-0">
              <div className="w-full max-w-[1300px] flex flex-col justify-center content-center items-center">
                <div className="max-w-[800px] mb-5">
                  <p className="font-helvetica text-2xl text-left mb-10">
                    {t("games.newArtius.comparison1")}
                  </p>

                  <p className="font-helvetica text-2xl text-right mb-10">
                    {t("games.newArtius.comparison2")}
                  </p>
                </div>

                <img
                  data-aos="fade-right"
                  className="w-full h-fit max-w-[800px] self-start"
                  src={Comparison2}
                />
                <img
                  data-aos="fade-right"
                  className="w-full h-fit max-w-[800px] self-end mt-4"
                  src={Comparison1}
                />
              </div>
            </div>

            {/* Gallery 2 */}
            <div data-aos="fade-up">
              <Gallery picSize="325px" slides={slides} />
            </div>

            {/* ArtiusPedia */}
            <ArtiusPedia />
            
            {/* Steam */}
            <div className="flex flex-col mt-20 items-center justify-center content-center">
              <p className="font-helvetica text-2xl font-bold">For press, partners & those ready to dive deeper...</p>
              <p className="font-helvetica">...all the official info, screenshots, and videos you need.</p>
              <a className="text-2xl xl:text-4xl text-center font-adlib max-w-[400px] mt-5 mb-2 
                            bg-black text-white p-3 rounded-2xl
                            drop-shadow-[0px_0px_10px_rgba(255,255,255,1)]
                            hover:drop-shadow-[0px_0px_20px_rgba(255,255,255,255)]
                            cursor-pointer duration-100 transform hover:rounded-3xl
                            flex items-center gap-2 hover:scale-105"
                  href="https://drive.google.com/drive/folders/1mHoLF-FCIacgDN44qCOAlW7mFA_XKd-3?usp=sharing" target="_blank"
              >
                <img className="w-[70px]" src={mediaKitIcon}/> 
                {t("games.newArtius.mediakit")}
              </a>
            </div>

            {/* Final */}
            <div className="mt-10 p-5 xl:p-0 flex flex-col items-center justify-center">
              <img
                data-aos="fade-up"
                className="w-full max-w-[1250px] h-fit"
                src={CharsCartoon}
              />
            </div>

            {/* Pvic Logo */}
            <div className="flex items-center justify-center content-center xl:mb-10">
              <img
                data-aos="flip-left"
                className="max-w-[300px] mb-25 mt-10"
                src={PvicLogo}
              />
            </div>
          </div>
        </Parallax>
      </div>
    </ActualPage>
  );
};

export default NewArtius;

