//import React from "react";
import ActualPage from "../components/global/ActualPage";

const About = () => {
  return (
    <ActualPage>
      <div className="xl:min-h-screen flex items-center justify-center"></div>

      <div className="xl:min-h-screen flex flex-col content-center justify-center">
        <h1 className="text-6xl xl:text-7xl text-pvic-blue font-adlib">
          About.
        </h1>

        <p className="text-justify font-helvetica">
          PVic Games was founded in July, 2023 with the release of Ednaldo
          Pereira: Mobile. Created by art school dropout Pedro Victor 'Pvic'
          Gonçalves, a veteran in the Sonic community and later, the key
          gameplay programmer for Antonblast -- one of the most widely
          celebrated indie games in recent times -- PVic Games' founding ideals
          are simple: make high quality, artistic games that transcend our
          simplistic ideals of imagination and creativity and take us to another
          place. 'Pure Imagination' is more than a tagline, it's where our
          hearts are.
          
        </p>
        <p className="mt-10 font-helvetica font-bold">
          The journey has just begun, and we invite you to step into our world
          of creative silence -- where imagination is the ultimate refuge of
          freedom.
        </p>
      </div>
    </ActualPage>
  );
};

export default About;
