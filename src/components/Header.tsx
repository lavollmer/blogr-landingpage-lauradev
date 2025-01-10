import NavBar from "./NavBar";
import SideNavBar from "./SideNavBar";
import { useState } from "react";
import "../index.css";
import HamburgerIcon from "../assets/icon-hamburger.svg";
import Logo from "../assets/logo.svg";
import XIcon from "../assets/icon-close.svg";
import backgroundImageMobile from "../assets/bg-pattern-intro-mobile.svg";

const Header = () => {
  const [showSideNav, setShowSideNav] = useState(false);

  const handleClickNav = () => {
    setShowSideNav(!showSideNav);
  };

  return (
    <div className="relative text-white text-center p-10 md:pl-20 md:pr-20 md:pt-10 rounded-[100px] font-overpass z-10">
      <div className="absolute inset-0 bg-gradient-to-r from-very-light-red to-gradient-light-red"></div>
      <div className="md:absolute md:inset-0 bg-header-texture"></div>
      <img src={backgroundImageMobile} alt="Background" className="block md:hidden z-0" />
      <div className="relative z-10">
        {/* navigation components displayed depending on size of screen */}
        <div className="hidden md:block">
          <NavBar />
        </div>
        <div className="md:hidden">
          <div className="flex flex-row items-center justify-between">
            <img src={Logo} alt="Logo" />
            <button onClick={handleClickNav}>
              <img
                src={showSideNav ? XIcon : HamburgerIcon}
                alt="Hamburger Icon"
                
              />
            </button>
          </div>
          {showSideNav && <SideNavBar />}
        </div>
        <div className="flex flex-col justify-center items-center md:pt-20 p-4 pt-10 pb-20 md:p-10 space-y-4 md:pb-40">
          <div>
            <h1 className="flex flex-row text-2xl md:text-6xl font-normal">
              A modern publishing platform
            </h1>
          </div>
          <div>
            <h2 className="text-md md:text-xl">
              Grow your audience and build your online brand
            </h2>
          </div>
          <div className="flex flex-row justify-center items-center space-x-4 pt-10 font-semibold">
            <div className="flex flex-row justify-center items-center rounded-full">
              <button className="bg-white bg-opacity-30 text-white py-2 px-4 rounded-full hover:bg-opacity-90 hover:text-gradient-light-red">
                Start for Free
              </button>
            </div>
            <div className="flex flex-row justify-center items-center rounded-full">
              <button className="bg-white bg-opacity-90 text-gradient-light-red py-2 px-4 rounded-full hover:bg-opacity-30 hover:text-white">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
