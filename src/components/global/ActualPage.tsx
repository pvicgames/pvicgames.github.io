import React from "react";
import VideoBackground from "./VideoBackground";
import PvicDots from "./PvicDots";
import Navbar from "./Navbar";

const ActualPage = (props: React.PropsWithChildren) => {
  return (
    <div>
      <VideoBackground />
      <PvicDots />
      <Navbar />

      <div className="relative xl:columns-2 sm:columns-1 xl:min-h-screen ml-3 mr-3 mt-15 xl:mt-0   ">
        {props.children}
      </div>
    </div>
  );
};

export default ActualPage;
