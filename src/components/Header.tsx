import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-very-light-red to-gradient-light-red text-white text-center">
      <NavBar />
      <div className="flex flex-col justify-center items-center p-10 space-y-4">
        <div>
          <h1 className="flex flex-row text-4xl">A modern publishing platform</h1>
        </div>
        <div>
          <h2>Grow your audience and build your online brand</h2>
        </div>
        <div className="flex flex-row justify-center text-center space-x-4">
          <div className="flex flex-row justify-center items-center rounded-full">
            <button className="bg-white text-very-light-red font-bold py-2 px-4 rounded-full">
              Start for Free
            </button>
          </div>
          <div className="flex flex-row justify-center items-center rounded-full">
            <button className="bg-very-light-red text-white font-bold py-2 px-4 border border-white rounded-full">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
