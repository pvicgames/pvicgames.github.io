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

      <div className="relative xl:columns-2 sm:columns-1 xl:min-h-screen">{props.children}</div>
    </div>
  );
};

export default ActualPage;
