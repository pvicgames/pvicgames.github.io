import React from "react";
import VideoBackground from "./VideoBackground";
import PvicDots from "./PvicDots";
import Navbar from "./Navbar";

interface Props {
  singleColumn?: boolean;
}

const ActualPage = (props: Props & React.PropsWithChildren) => {
  return (
    <div>
      <VideoBackground />
      <PvicDots />
      <Navbar />

      <div
        className={`grid ${
          props.singleColumn === true
            ? "xl:grid-cols-1 xl:mr-0 xl:ml-0"
            : props.singleColumn === false
            ? "xl:grid-cols-2 ml-7 mr-7"
            : "xl:grid-cols-2 ml-7 mr-7"
        }
          sm:grid-cols-1 xl:min-h-screen 
          mt-25 xl:mt-0 mb-25 xl:mb-0 gap-4`}
      >
        {props.children}
      </div>
    </div>
  );
};

export default ActualPage;
