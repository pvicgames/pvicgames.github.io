import React from "react";
import { Link, useLocation } from "react-router";

interface Props {
  text: string;
  link: string;
  img: string
}

const NavbarButton: React.FC<Props> = ({ text, link, img }) => {
  const currentLocation = useLocation();
  const active = currentLocation.pathname === link;

  return (
    <Link to={link}>
      <div
        className={`inline-flex p-2 font-adlib ml-3 mr-0
                   ${
                     active
                       ? "h-[50px] bg-pvic-yellow hover:bg-pvic-blue text-3xl"
                       : "h-[40px] bottom-10 bg-pvic-green hover:bg-pvic-blue text-2xl"
                   } 
                   transform ease-linear duration-100 hover:scale-110`}
      >
        <img className="m-[-10px] pl-[7px] pr-[15px] pb-[3px] pt-[3px]" src={img} />
        {text}
      </div>
    </Link>
  );
};

export default NavbarButton;
