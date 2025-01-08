import NavBar from "./NavBar";
import SideNavBar from "./SideNavBar";
import "../index.css";

const Header = () => {
  return (
    <div className="relative text-white text-center pl-20 pr-20 pt-10 rounded-[100px] font-overpass">
      <div className="absolute inset-0 bg-gradient-to-r from-very-light-red to-gradient-light-red"></div>
      <div className="absolute inset-0 bg-header-texture"></div>
      <div className="relative z-10">
      {/* navigation components displayed depending on size of screen */}
        <div className="hidden md:block">
          <NavBar />
        </div>
        <div className="md:hidden">
          <SideNavBar />
        </div>
        <div className="flex flex-col justify-center items-center pt-20 p-10 space-y-4 pb-40">
          <div>
            <h1 className="flex flex-row text-6xl font-normal">
              A modern publishing platform
            </h1>
          </div>
          <div>
            <h2 className="text-xl">
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
