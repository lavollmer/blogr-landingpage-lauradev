import IconArrowDark from "../assets/icon-arrow-dark.svg";
import { useState } from "react";

const SideNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenTwo, setIsOpenTwo] = useState(false);
  const [isOpenThree, setIsOpenThree] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClickTwo = () => {
    setIsOpenTwo(!isOpenTwo);
  };

  const handleClickThree = () => {
    setIsOpenThree(!isOpenThree);
  };

  return (
    <div className="flex flex-col justify-center items-center font-overpass p-10">
      <div>
        <div className="flex flex-col space-y-4 font-300">
          <button
            onClick={handleClick}
            className="flex flex-row justify-center items-center space-x-2"
          >
            <h1>Products</h1>
            <img src={IconArrowDark} alt="Arrow" />
          </button>
          {isOpen && (
            <div className="flex flex-col justify-center items-center bg-grayish-blue text-very-dark-gray-blue p-1 space-y-2">
              <p>Offerings</p>
              <p>Services</p>
              <p>Items</p>
            </div>
          )}
          <button
            onClick={handleClickTwo}
            className="flex flex-row justify-center items-center space-x-2"
          >
            <h1>Company</h1>
            <img src={IconArrowDark} alt="Arrow" />
          </button>
          {isOpenTwo && (
            <div className="flex flex-col justify-center items-center bg-grayish-blue text-very-dark-gray-blue p-1 space-y-2">
              <p>About Us</p>
              <p>Mission</p>
            </div>
          )}
          <button
            onClick={handleClickThree}
            className="flex flex-row justify-center items-center space-x-2"
          >
            <h1>Connect</h1>
            <img src={IconArrowDark} alt="Arrow" />
          </button>
          {isOpenThree && (
            <div className="flex flex-col justify-center items-center bg-grayish-blue text-very-dark-gray-blue p-1 space-y-2">
              <p>Contact</p>
              <p>Newsletter</p>
              <p>LinkedIn</p>
            </div>
          )}
        </div>
      </div>
      <div className="border border-black"></div>
      <div className="flex flex-col space-y-4 p-10">
        <div className="flex flex-row justify-center items-center ">
          <button className="flex flex-row justify-center items-center text-very-dark-blue">
            Login
          </button>
        </div>
        <div className="flex flex-row justify-center items-center bg-gradient-to-r from-very-light-red to-gradient-light-red rounded-full">
          <button className="bg-transparent text-white font-bold py-2 px-4 rounded-full hover:bg-white hover:bg-opacity-20">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
