//import React from 'react'
import VideoBackground from "../components/VideoBackground";

import pvicLogo from "../assets/img/pvic_logo_blue.png";

const Home = () => {
  return (
    <div>
      <VideoBackground />

      <div className="relative xl:columns-2 sm:columns-1">
        <div className="p-10 xl:min-h-screen flex justify-center items-center">
          <img
            className="max-h-[450px] object-contain animate__animated animate__rubberBand"
            src={pvicLogo}
          />
        </div>

        <div className="xl:min-h-screen"></div>
      </div>
    </div>
  );
};

export default Home;
