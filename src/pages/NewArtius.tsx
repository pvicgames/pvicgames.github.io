import Logo from "../assets/img/artius/logo.png";

import IconTwitter from "../assets/img/artius/social/x-twitter.png";
import IconYoutube from "../assets/img/artius/social/youtube.png";
import IconDiscord from "../assets/img/artius/social/discord.png";
import IconInstagram from "../assets/img/artius/social/instagram.png";

import BrunnaTheo from "../assets/img/artius/brunnatheo.png";
import Chars3D from "../assets/img/artius/chars_3d.png";
import CharsCartoon from "../assets/img/artius/chars_cartoon.png";
import Tailored from "../assets/img/artius/tailored.png";
import Comparison1 from "../assets/img/artius/comparison1.png";
import Comparison2 from "../assets/img/artius/comparison2.png";
import PvicLogo from "../assets/img/pvic_logo_blue.png";

import pic1 from "../assets/img/artius/pic1.png";
import pic2 from "../assets/img/artius/pic2.png";
import pic3 from "../assets/img/artius/pic3.png";
import pic4 from "../assets/img/artius/pic4.png";
import pic5 from "../assets/img/artius/pic5.png";
import pic6 from "../assets/img/artius/pic6.png";

// Components
import SocialIcon from "../components/SocialIcon";
import ActualPage from "../components/global/ActualPage";
import YouTube from "react-youtube";
import Gallery from "../components/global/Gallery";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Parallax } from "react-scroll-parallax";

const NewArtius = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 900,
      easing: "ease-out-cubic",
    });
  }, []);

  const slides = [pic1, pic2, pic3];
  const slides2 = [pic4, pic6, pic5];

  return (
    <ActualPage singleColumn={true}>
      <div
        className="bg-[url(img/bg_type1.png)] bg-center bg-contain"
        style={{ backgroundSize: `100% auto;` }}
      >
        {/* Links */}
        <div
          className="min-h-screen bg-cover bg-center bg-fixed
                   grid xl:grid-cols-2 sm:grid-cols-1
                   bg-[url(img/ArtiusMain.png)] mb-[450px]"
        >
          <div className="flex flex-col flex-wrap items-center content-center justify-center">
            <img
              className="animate__animated animate__bounceInDown pl-20 max-w-[870px] h-fit"
              src={Logo}
            />

            <div className="mt-6 flex">
              <SocialIcon Link="#" Icon={IconTwitter} />
              <SocialIcon Link="#" Icon={IconDiscord} />
              <SocialIcon Link="#" Icon={IconYoutube} />
              <SocialIcon Link="#" Icon={IconInstagram} />
            </div>
          </div>
        </div>

        <Parallax speed={-50}>
          {/* Video */}
          <div
            data-aos="fade-up"
            className="flex flex-col justify-center items-center"
          >
            <YouTube
              className="mt-20"
              videoId="UkiiOdgDdO8"
              opts={{ height: "550", width: "1000" }}
            />
          </div>
          <Gallery picSize="325px" slides={slides2} />

          {/* Text 1 */}
          <div className="xl:min-h-screen grid xl:grid-cols-2 sm:grid-cols-1">
            <div
              data-aos="fade-right"
              className="flex items-center justify-center"
            >
              <p className="font-adlib text-5xl ml-20 text-left text-pvic-pink drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] max-w-[800px]">
                ARTIUS is a momentum-based 2D platformer brimming with creative
                expression.
              </p>
            </div>

            <div
              data-aos="fade-up"
              className="flex items-center justify-center"
            >
              <img className="w-full max-w-[600px]" src={BrunnaTheo} />
            </div>
          </div>

          {/* Text 2 */}
          <div className="xl:min-h-screen grid xl:grid-cols-2 sm:grid-cols-1">
            <div
              data-aos="fade-right"
              className="flex items-center justify-center"
            >
              <img className="w-full max-w-[900px]" src={Chars3D} />
            </div>
            <div
              data-aos="fade-up"
              className="flex items-center justify-center"
            >
              <p className="font-adlib  text-pvic-blue drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] text-5xl mr-20 text-right max-w-[800px]">
                Players take control of four unique artists, as they fight to
                save the world from the extinction of art!
              </p>
            </div>
          </div>

          {/* Tailored */}
          <div className="xl:min-h-screen mt-20 mb-20 flex items-center justify-center">
            <img
              data-aos="fade-up"
              className="w-full max-w-[1250px] h-fit"
              src={Tailored}
            />
          </div>

          {/* Comparisons */}
          <div className="flex items-center justify-center content-center mb-20">
            <div className="w-full max-w-[1300px] flex flex-col justify-center content-center items-center">
              <div className="max-w-[800px] mb-5">
                <p className="font-helvetica text-2xl text-left mb-10">
                  ARTIUS draws inspiration from real-life settings,
                  reinterpreting them into a grounded yet fantastical game
                  world.
                </p>

                <p className="font-helvetica text-2xl text-right mb-10">
                  The evil art creatures offer interesting depictions of famous
                  art pieces & day-to-day elements.
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

          {/* Final */}
          <Gallery picSize="325px" slides={slides} />
          <div className="mt-30 flex flex-col items-center justify-center">
            <img
              data-aos="fade-up"
              className="w-full max-w-[1250px] h-fit"
              src={CharsCartoon}
            />
          </div>

          {/* Pvic Logo */}
          <div className="flex items-center justify-center content-center mb-10">
            <img
              data-aos="flip-left"
              className="max-w-[300px] mb-25 mt-10"
              src={PvicLogo}
            />
          </div>
        </Parallax>
      </div>
    </ActualPage>
  );
};

export default NewArtius;
