import "../index.css";
import Logo from "../assets/logo.svg";
import Dropdown from "./Dropdown";

const NavBar = () => {
  return (
    <div className="flex flex-row text-white text-ubuntu bg-transparent text-md p-6">
      <div
        className="flex flex-row space-x-10 w-full p-4"
      >
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div className="flex flex-row space-x-4">
          <button className="flex flex-row items-center space-x-2">
            <Dropdown dropdownName={"Products"} />
          </button>
          <button className="flex flex-row items-center space-x-2">
            <Dropdown dropdownName={"Company"} />
          </button>
          <button className="flex flex-row  items-center space-x-2">
            <Dropdown dropdownName={"Connect"} />
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-end space-x-6 w-full bg-transparent">
        <button className="flex flex-row justify-center items-center">
          Login
        </button>
        <div className="flex flex-row justify-center items-center bg-very-dark-red rounded-full">
          <button className="bg-transparent text-white font-bold py-2 px-4 rounded-full hover:bg-white hover:bg-opacity-20">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
