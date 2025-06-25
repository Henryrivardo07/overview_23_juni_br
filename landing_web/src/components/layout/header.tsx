import React from "react";
import logo from "../../assets/icons/your-logo.svg";
import { type HeaderProps, type NavItems } from "../../types/header";
import Button from "../ui/button";

const Header: React.FC<HeaderProps> = ({ navItems }) => {
  return (
    <div className="w-full flex justify-center px-0 sm:px-0 mt-9.5 z-30 absolute">
      {/* kapsul */}
      <div className="w-full max-w-[827px] h-12 sm:h-16 flex items-center bg-neutral-900/40 mx-6 rounded-full px-6 sm:px-0 sm:mx-0 sm:justify-evenly justify-between border-1 border-neutral-900">
        {/* LOGO SECTION */}
        <div className="flex items-center gap-2 min-w-fit">
          <img src={logo} alt="mycompany" className="w-4.5 h-4.5 sm:w-[23px] sm:h-[23px]" />
          <p className="text-white text-sm sm:text-[19px] font-semibold drop-shadow-md">Your Logo</p>
        </div>

        <nav className="hidden sm:flex justify-evenly gap-11 text-sm text-white font-medium">
          {navItems.map((item: NavItems) => (
            <a key={item.label} href={item.path}>
              {item.label}
            </a>
          ))}
        </nav>
        <Button className="hidden sm:flex">Join Now</Button>
      </div>
    </div>
  );
};

export default Header;
