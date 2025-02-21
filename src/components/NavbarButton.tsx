import React from "react";
import { Link } from "react-router";

interface Props {
  text: string;
  link: string;
  active: boolean;
}

const NavbarButton: React.FC<Props> = ({ text, link, active }) => {
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
        {text}
      </div>
    </Link>
  );
};

export default NavbarButton;
