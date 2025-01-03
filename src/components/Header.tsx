import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="bg-very-light-red text-white text-center">
      <NavBar />
      <div className="flex flex-col justify-center items-center p-10">
        <div>
          <h1 className="flex flex-row">A modern publishing platform</h1>
        </div>
        <div>
          <h2>Grow your audience and build your online brand</h2>
        </div>
        <div>
          <button>Start for Free</button>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
