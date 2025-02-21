import React from "react";
import NavbarButton from "./NavbarButton";

const Navbar = () => {
  return (
    <div className="fixed h-screen z-20 flex items-end pointer-events-none">
      <div className="sticky h-[50px] w-screen">
        <div className="absolute w-screen bottom-0 bg-pvic-pink h-[40px]" />

        <div className="relative pointer-events-auto flex items-end ">
          <NavbarButton text="🏠 Home" link="/" active={true} />
          <NavbarButton text="💭 About" link="/" active={false} />
          <NavbarButton text="📧 Contact" link="/" active={false} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
