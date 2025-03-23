//import React from 'react'
import { useTranslation } from "react-i18next";
import pvicLogo from "../assets/img/pvic_logo_blue.png";
import AnimatedHomeTitle from "../components/AnimatedHomeTitle";
import ActualPage from "../components/global/ActualPage";
import YouTube from "react-youtube";

const Home = () => {
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language;

  function createLinks() {
    if (currentLanguage === "pt" || currentLanguage === "pt-BR") {
      return (
        <div className="font-helvetica font-bold">
          {/* PORTUGUESE */}
          <div>
            <img
              className="w-[30px] mr-3 float-left rounded-md"
              src="https://flagicons.lipis.dev/flags/4x3/br.svg"
            />
            <a
              className="hover:underline"
              href="https://x.com/ednaldo_game"
              target="_blank"
            >
              x/twitter
            </a>{" "}
            &bull;{" "}
            <a
              className="hover:underline"
              href="https://www.instagram.com/pvicgamesbr/"
              target="_blank"
            >
              instagram
            </a>{" "}
            &bull;{" "}
            <a
              className="hover:underline"
              href="https://discord.gg/MKr3eyn"
              target="_blank"
            >
              discord
            </a>{" "}
            &bull;{" "}
            <a
              className="hover:underline"
              href="https://www.youtube.com/channel/UCXrinAaMhfNehiK37hGrYtg"
              target="_blank"
            >
              youtube
            </a>{" "}
            &bull;{" "}
            <a
              className="hover:underline text-pvic-blue"
              href="https://www.patreon.com/PVicGames"
              target="_blank"
            >
              nos apoie
            </a>
          </div>

          {/* ENGLISH */}
          <div className="mt-2">
            <img
              className="w-[30px] mr-3 float-left rounded-md"
              src="https://flagicons.lipis.dev/flags/4x3/us.svg"
            />
            <a
              className="hover:underline"
              href="https://x.com/PVicGames"
              target="_blank"
            >
              x/twitter
            </a>{" "}
            &bull;{" "}
            <a
              className="hover:underline"
              href="https://www.instagram.com/pvicgames/"
              target="_blank"
            >
              instagram
            </a>{" "}
            &bull;{" "}
            <a
              className="hover:underline"
              href="https://discord.gg/3T8fbXq9Jf"
              target="_blank"
            >
              discord
            </a>{" "}
            &bull;{" "}
            <a
              className="hover:underline"
              href="https://www.youtube.com/@PVicVG"
              target="_blank"
            >
              youtube
            </a>{" "}
            &bull;{" "}
            <a
              className="hover:underline text-pvic-blue"
              href="https://www.patreon.com/PVicGames"
              target="_blank"
            >
              nos apoie
            </a>
          </div>
        </div>
      );
    } else {
      return (
        <p className="font-helvetica font-bold">
          {/* ENGLISH */}
          <a
            className="hover:underline"
            href="https://x.com/PVicGames"
            target="_blank"
          >
            x/twitter
          </a>{" "}
          &bull;{" "}
          <a
            className="hover:underline"
            href="https://www.instagram.com/pvicgames/"
            target="_blank"
          >
            instagram
          </a>{" "}
          &bull;{" "}
          <a
            className="hover:underline"
            href="https://discord.gg/3T8fbXq9Jf"
            target="_blank"
          >
            discord
          </a>{" "}
          &bull;{" "}
          <a
            className="hover:underline"
            href="https://www.youtube.com/@PVicVG"
            target="_blank"
          >
            youtube
          </a>{" "}
          &bull;{" "}
          <a
            className="hover:underline text-pvic-blue"
            href="https://www.patreon.com/PVicGames"
            target="_blank"
          >
            support us
          </a>
        </p>
      );
    }
  }

  return (
    <ActualPage>
      <div className="p-2 xl:p-10 xl:min-h-screen flex justify-center items-center">
        <img
          className="mb-10 mt-20 xl:mt-0 xl:mb-30 max-h-[450px] object-contain animate__animated animate__rubberBand"
          src={pvicLogo}
        />
      </div>

      <div className="xl:min-h-screen flex items-center">
        <div className="xl:ml-3 xl:mr-10 ">
          <div className=" text-center">
            <div className="w-full flex justify-center mt-2">
              <YouTube
                videoId="UkiiOdgDdO8"
                opts={{ height: "200", width: "350" }}
              />
            </div>
          </div>

          <hr className="w-full mt-8 mb-8 border-pvic-blue border-2 border-dashed opacity-100" />

          <AnimatedHomeTitle />

          <p className="font-helvetica text-justify pt-3 pb-5">
            {t("home.text1")}
            <br />
            {t("home.text2")}
          </p>

          {createLinks()}
        </div>
      </div>
    </ActualPage>
  );
};

export default Home;
