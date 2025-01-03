import "../index.css";
import Logo from "../assets/logo.svg";
import DownArrow from "../assets/icon-arrow-light.svg";

const NavBar = () => {
  return (
    <div className="flex flex-row text-white bg-very-light-red text-sm p-6">
      <div className="flex flex-row space-x-4 w-full p-4">
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div className="flex flex-row space-x-4">
          <button className="flex flex-row items-center space-x-2">
            <h1>Product</h1>
            <img src={DownArrow} alt="Down Arrow" />
          </button>
          <button className="flex flex-row items-center">
            <h1>Company</h1>
            <img src={DownArrow} alt="Down Arrow" />
          </button>
          <button className="flex flex-row  items-center">
            <h1>Connect</h1>
            <img src={DownArrow} alt="Down Arrow" />
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-end space-x-6 w-full bg-very-light-red">
        <h1 className="flex flex-row justify-center items-center">Login</h1>
        <button className="flex flex-row justify-center items-center rounded-lg bg-white text-very-light-red text-bold">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default NavBar;
