import "../index.css";
import Logo from "../assets/logo.svg";
import Dropdown from "./Dropdown";

const NavBar = () => {
  return (
    <div className="flex flex-row text-white text-ubuntu bg-very-light-red text-sm p-6">
      <div className="flex flex-row space-x-4 w-full p-4">
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div className="flex flex-row space-x-4">
          <button className="flex flex-row items-center space-x-2">
            <Dropdown />
          </button>
          <button className="flex flex-row items-center space-x-2">
            <Dropdown />
          </button>
          <button className="flex flex-row  items-center space-x-2">
            <Dropdown />
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-end space-x-6 w-full bg-very-light-red">
        <button className="flex flex-row justify-center items-center">
          Login
        </button>
        <div className="flex flex-row justify-center items-center bg-very-dark-red rounded-full">
          <button className="bg-white text-very-light-red font-bold py-2 px-4 rounded-full">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
