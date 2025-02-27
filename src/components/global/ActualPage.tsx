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

      <div className="grid xl:grid-cols-2 
                      sm:grid-cols-1 xl:min-h-screen 
                      ml-7 mr-7 mt-25 xl:mt-0 mb-25 xl:mb-0 gap-4">
        {props.children}
      </div>
    </div>
  );
};

export default ActualPage;
