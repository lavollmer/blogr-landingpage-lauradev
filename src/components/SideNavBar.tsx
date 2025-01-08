import IconArrowDark from "../assets/icon-arrow-dark.svg";

const SideNavBar = () => {
  return (
    <div className="flex flex-col justify-center items-center font-overpass">
      <div>
        <div className="flex flex-col space-y-4 font-300">
          <button className="flex flex-row justify-center items-center space-x-2">
            <h1>Products</h1>
            <img src={IconArrowDark} alt="Arrow" />
          </button>
          <button className="flex flex-row justify-center items-center space-x-2">
            <h1>Company</h1>
            <img src={IconArrowDark} alt="Arrow" />
          </button>
          <button className="flex flex-row justify-center items-center space-x-2">
            <h1>Connect</h1>
            <img src={IconArrowDark} alt="Arrow" />
          </button>
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
