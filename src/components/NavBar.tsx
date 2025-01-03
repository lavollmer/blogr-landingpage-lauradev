import "../index.css";
import Logo from "../assets/logo.svg";
import DownArrow from "../assets/icon-arrow-light.svg";

const NavBar = () => {
  return (
    <div className="flex flex-row text-white bg-very-light-red text-sm">
      <div className="flex flex-row space-x-4 w-full p-4">
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div className="flex flex-row space-x-4">
          <button className="flex flex-row items-center">
            Product
            <img src={DownArrow} alt="Down Arrow" />
          </button>
          <button className="flex flex-row items-center">
            Company
            <img src={DownArrow} alt="Down Arrow" />
          </button>
          <button className="flex flex-row  items-center">
            Connect
            <img src={DownArrow} alt="Down Arrow" />
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-end w-full">
        <h1 className="flex flex-row justify-center items-center">Login</h1>
        <button className="flex flex-row bg-white text-very-light-red text-bold px-2 py-2">Sign Up</button>
      </div>
    </div>
  );
};

export default NavBar;
