import NavBar from "./NavBar";
import "../index.css";

const Header = () => {
  return (
    <div className="relative text-white text-center pl-20 pr-20 pt-10">
      <div className="absolute inset-0 bg-gradient-to-r from-gradient-light-red to-very-light-red"></div>
      <div className="absolute inset-0 bg-header-texture"></div>
      <div className="relative z-10">
        <NavBar />
        <div className="flex flex-col justify-center items-center p-10 space-y-4 pb-40">
          <div>
            <h1 className="flex flex-row text-4xl">
              A modern publishing platform
            </h1>
          </div>
          <div>
            <h2>Grow your audience and build your online brand</h2>
          </div>
          <div className="flex flex-row justify-center text-center space-x-4">
            <div className="flex flex-row justify-center items-center rounded-full">
              <button className="bg-very-light-red text-white font-bold py-2 px-4 border border-white rounded-full">
                Start for Free
              </button>
            </div>
            <div className="flex flex-row justify-center items-center rounded-full">
              <button className="bg-white text-very-light-red font-bold py-2 px-4 rounded-full">
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
