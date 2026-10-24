//import Logo from "../assets/img/artius/logo.png";

import IconTwitter from "../assets/img/artius/social/x-twitter.png";
import IconYoutube from "../assets/img/artius/social/youtube.png";
import IconDiscord from "../assets/img/artius/social/discord.png";
import IconInstagram from "../assets/img/artius/social/instagram.png";
import steamIcon from "../assets/img/badges/steam_icon.png";
import spawndIcon from "../assets/img/badges/spawnd.png";
import androidIcon from "../assets/img/badges/android.png";
//import joyIcon from "../assets/img/badges/joy_icon.webp";
import mediaKitIcon from "../assets/img/badges/mediakit.png";

import BrunnaTheo from "../assets/img/artius/brunnatheo.png";
import Chars3D from "../assets/img/artius/chars_3d.png";
//import CharsCartoon from "../assets/img/artius/chars_cartoon.png";
//import Comparison1 from "../assets/img/artius/comparison1.png";
//import Comparison2 from "../assets/img/artius/comparison2.png";
import PvicLogo from "../assets/img/pvic_logo_blue.png";

import pic1 from "../assets/img/artius/pic1.png";
import pic2 from "../assets/img/artius/pic2.png";
import pic3 from "../assets/img/artius/pic3.png";
import pic4 from "../assets/img/artius/pic10.jpg";
import pic5 from "../assets/img/artius/pic19.jpg";
import pic6 from "../assets/img/artius/pic6.png";
import pic7 from "../assets/img/artius/pic12.jpg";
import pic8 from "../assets/img/artius/pic8.png";
import pic9 from "../assets/img/artius/pic20.jpg";

// Components
import SocialIcon from "../components/SocialIcon";
import ActualPage from "../components/global/ActualPage";
import YouTube from "react-youtube";
import Gallery from "../components/global/Gallery";
import { Suspense, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Parallax } from "react-scroll-parallax";
import { useTranslation } from "react-i18next";
import ArtiusPedia from "../components/ArtiusPedia";
import ArtiusLogo from "../components/ArtiusLogo";
import ArtiusCharactersTilt from "../components/ArtiusCharactersTilt";
import { Outlet } from "react-router";

const NewArtius = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
    });

    // lazy images change the page height after aos measured it, so the last animations
    // (like the pvic logo) could end up below the end of the page and never play, measure again when one loads
    const refresh = (e: Event) => { if ((e.target as HTMLElement).tagName === "IMG") AOS.refresh(); };
    document.addEventListener("load", refresh, true);
    return () => document.removeEventListener("load", refresh, true);
  }, []);

  const { t , i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  const slides2 = [pic4, pic6, pic7];
  const slides3 = [pic9, pic8, pic2];
  const slides  = [pic5, pic1, pic3];

  function createLinks() {
    if (currentLanguage === "pt" || currentLanguage === "pt-BR") {
      return (<div className="xl:ml-13 xl:mt-[min(1.5vh,16px)] flex">
        <SocialIcon Link="https://x.com/ednaldo_game" Icon={IconTwitter} />
        <SocialIcon Link="https://discord.gg/3T8fbXq9Jf" Icon={IconDiscord} />
        <SocialIcon Link="https://www.youtube.com/channel/UCXrinAaMhfNehiK37hGrYtg" Icon={IconYoutube} />
        <SocialIcon Link="https://www.instagram.com/pvicgamesbr/" Icon={IconInstagram} />
      </div>)
    } else {
      return (<div className="xl:ml-13 xl:mt-[min(1.5vh,16px)] flex">
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
        className="bg-[url(/img/bg_type2.png)] bg-top bg-repeat-y bg-[length:160%_auto] xl:bg-[length:100%_auto] -mt-12 xl:mt-0"
      >
        {/* Links */}
        <div
          className="min-h-screen bg-cover bg-center bg-fixed
                   grid xl:grid-cols-2 sm:grid-cols-1 p-5 mt-[-22px] xl:p-0
                   bg-[url(/img/ArtiusMain.png)] mb-[450px]"
        >
          {/* on desktop everything here is sized in vh so the section takes ~90% of the screen (capped at the 1080p size) */}
          <div className="flex flex-col flex-wrap items-center content-center justify-center
                          xl:h-[min(90vh,972px)] xl:self-center xl:flex-nowrap">
            {/* animated logo, built from the logo parts */}
            <div className="w-full max-w-[620px] xl:w-auto xl:max-w-none xl:pl-20">
              <ArtiusLogo className="w-full xl:w-auto xl:h-[min(49vh,529px)]
                                     drop-shadow-[0px_0px_10px_rgba(0,0,0,255)]" />
            </div>
            {/* Steam */}
            <div className="flex flex-row">  
              <a className="text-xl text-center font-adlib xl:ml-10 mt-4 mb-1 
                            xl:text-[min(2.8vh,30px)] xl:p-[min(1.2vh,13px)] xl:mt-[min(2.2vh,24px)] xl:mb-0
                            bg-white text-black p-2 rounded-2xl
                            drop-shadow-[0px_0px_10px_rgba(0,0,0,0.6)]
                            hover:drop-shadow-[0px_0px_20px_rgba(0,0,0,0.8)]
                            cursor-pointer duration-100 transform hover:rounded-3xl
                            flex items-center gap-2 hover:scale-105"
                  href="https://store.steampowered.com/app/3599920/ARTIUS_Pure_Imagination/" target="_blank"
              >
                <img className="w-[38px] xl:w-[min(5vh,54px)] mr-2 invert" src={steamIcon}/> 
                {t("games.newArtius.wishlist")}
              </a>
            </div>

            {/* ANDROID */}
            <div className="flex flex-row">  
              <a className="text-sm text-center font-adlib xl:ml-10 mt-4 mb-1 
                            xl:text-[min(2vh,22px)] xl:p-[min(1.2vh,13px)] xl:mt-[min(2.2vh,24px)] xl:mb-0
                            bg-white text-black p-2 rounded-2xl
                            drop-shadow-[0px_0px_10px_rgba(0,0,0,0.6)]
                            hover:drop-shadow-[0px_0px_20px_rgba(0,0,0,0.8)]
                            cursor-pointer duration-100 transform hover:rounded-3xl
                            flex items-center gap-2 hover:scale-105"
                  href="https://gamejolt.com/games/artius/975794" target="_blank"
              >
                <img className="w-[38px] xl:w-[min(5vh,54px)] mr-2 invert" src={androidIcon}/> 
                {t("games.newArtius.playAndroid")}
              </a>
            </div>

            {/* WEB */}
            <div className="flex flex-row">  
              <a className="text-sm text-center font-adlib xl:ml-10 mt-4 mb-1 
                            xl:text-[min(2vh,22px)] xl:p-[min(1.2vh,13px)] xl:mt-[min(2.2vh,24px)] xl:mb-0
                            bg-white text-black p-2 rounded-2xl
                            drop-shadow-[0px_0px_10px_rgba(0,0,0,0.6)]
                            hover:drop-shadow-[0px_0px_20px_rgba(0,0,0,0.8)]
                            cursor-pointer duration-100 transform hover:rounded-3xl
                            flex items-center gap-2 hover:scale-105"
                  href="https://www.spawnd.gg/-/games/artius" target="_blank"
              >
                <img className="w-[38px] xl:w-[min(5vh,54px)] mr-2 invert" src={spawndIcon}/> 
                {t("games.newArtius.playWeb")}
              </a>
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
                videoId="_vphOBuDWjQ"
                opts={{ height: "100%", width: "100%" }}
              />
            </div>

            <div className="">

              <p className="mt-30 font-adlib text-pvic-pink drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] text-3xl xl:text-5xl text-center">
                {t("games.newArtius.onlineArtius")}
              </p>

              <iframe className="ml-auto mr-auto mt-10 mb-30 w-full max-w-[640px] h-auto aspect-video" loading="lazy" src="https://www.spawnd.gg/-/games/embed/41?description=true" width="640" height="360" frameBorder="0" allow="autoplay; encrypted-media; clipboard-write; clipboard-read; web-share; cross-origin-isolated" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
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
                  loading="lazy"
                />
              </div>
            </div>

            {/* Text 2 */}
            <div className="xl:min-h-screen grid xl:grid-cols-2 sm:grid-cols-1">
              <div
                data-aos="fade-right"
                className="flex items-center justify-center"
              >
                <img className="w-full max-w-[650px]" src={Chars3D} loading="lazy" />
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
            <div className="xl:min-h-screen flex items-center justify-center p-5 xl:p-0">
              <div className="w-full max-w-[1250px] mt-10 mb-10 xl:mt-20 xl:mb-20 flex flex-col gap-8 xl:gap-4
                              font-helvetica text-xl xl:text-4xl tracking-wide">
                <p data-aos="fade-up" className="text-center text-base xl:text-2xl text-neutral-600 font-bold mb-2 xl:mb-6">
                  {t("games.newArtius.tailoredTitle")}
                </p>

                <p data-aos="fade-right" className="max-w-[900px] -rotate-2">
                  <span className="bg-pvic-yellow text-black px-[0.6em] py-[0.3em] leading-[1.75] box-decoration-clone
                                   drop-shadow-[0px_0px_4px_rgba(0,0,0,0.15)]">
                    {t("games.newArtius.tailored1")}
                  </span>
                </p>

                <p data-aos="fade-left" className="max-w-[900px] self-end text-right rotate-1">
                  <span className="bg-pvic-green text-black px-[0.6em] py-[0.3em] leading-[1.75] box-decoration-clone
                                   drop-shadow-[0px_0px_4px_rgba(0,0,0,0.15)]">
                    {t("games.newArtius.tailored2")}
                  </span>
                </p>

                <p data-aos="fade-right" className="max-w-[900px] xl:ml-5">
                  <span className="bg-pvic-pink text-white px-[0.6em] py-[0.3em] leading-[1.75] box-decoration-clone
                                   drop-shadow-[0px_0px_4px_rgba(0,0,0,0.15)]">
                    {t("games.newArtius.tailored3")}
                  </span>
                </p>
              </div>
            </div>

            {/* old image version of the tailored section */}
            {/*
            <div className="xl:min-h-screen flex items-center justify-center">
              Desktop
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

              Mobile
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
            */}

            {/* Comparisons */}
            {/*
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
            </div>*/}

            {/* Gallery 2 */}
            <div data-aos="fade-up">
              <Gallery picSize="325px" slides={slides} />
            </div>

            {/* ArtiusPedia, the cards open it as a popup (see the route in App.tsx) */}
            <ArtiusPedia />
            <Suspense>
              <Outlet />
            </Suspense>
            
            {/* Steam */}
            <div className="flex flex-col mt-20 items-center justify-center content-center">
              <p className="font-helvetica text-2xl font-bold">{t("games.newArtius.mediakit2")}</p>
              <p className="font-helvetica">.{t("games.newArtius.mediakit3")}</p>
              <a className="text-2xl xl:text-4xl text-center font-adlib max-w-[400px] mt-5 mb-2 
                            bg-white text-black p-3 rounded-2xl
                            drop-shadow-[0px_0px_10px_rgba(0,0,0,0.6)]
                            hover:drop-shadow-[0px_0px_20px_rgba(0,0,0,0.8)]
                            cursor-pointer duration-100 transform hover:rounded-3xl
                            flex items-center gap-2 hover:scale-105"
                  href="https://drive.google.com/drive/folders/1mHoLF-FCIacgDN44qCOAlW7mFA_XKd-3?usp=sharing" target="_blank"
              >
                <img className="w-[70px] invert" src={mediaKitIcon}/> 
                {t("games.newArtius.mediakit")}
              </a>
            </div>

            {/* Final */}
            <div className="mt-10 p-5 xl:p-0 flex flex-col items-center justify-center">
              {/*<img
                data-aos="fade-up"
                className="w-full max-w-[1250px] h-fit"
                src={CharsCartoon}
                loading="lazy"
              />*/}
              <div data-aos="fade-up" className="w-full max-w-[min(850px,85vh)]">
                <ArtiusCharactersTilt />
              </div>
            </div>

            {/* Pvic Logo */}
            <div className="flex items-center justify-center content-center xl:mb-10">
              {/* not lazy: flip-left starts it turned sideways, so a lazy image never counts as visible and never loads */}
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

