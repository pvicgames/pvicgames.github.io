//import React from 'react'
import pvicLogo from "../assets/img/pvic_logo_blue.png";
import AnimatedHomeTitle from "../components/AnimatedHomeTitle";
import ActualPage from "../components/global/ActualPage";

const Home = () => {
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
          <AnimatedHomeTitle />

          <p className="font-helvetica text-justify pt-3 pb-5">
            in times of constant noise, we choose to offer creative silence:
            unique worlds designed to inspire, connect, and spark dreams.
            <br />
            imagination is the ultimate refuge of freedom.
          </p>

          <p className="font-helvetica font-bold">
            <a
              className="hover:underline"
              href="https://x.com/pvicvg"
              target="_blank"
            >
              x/twitter
            </a>{" "}
            &bull;{" "}
            <a
              className="hover:underline"
              href="https://www.instagram.com/pvicvg/"
              target="_blank"
            >
              instagram
            </a>{" "}
            &bull;{" "}
            <a
              className="hover:underline"
              href="https://www.instagram.com/pvicvg/"
              target="_blank"
            >
              discord
            </a>
          </p>
        </div>
      </div>
    </ActualPage>
  );
};

export default Home;
