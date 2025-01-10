import Laptop from "../assets/illustration-laptop-desktop.svg";
import LaptopMobile from "../assets/illustration-laptop-mobile.svg";

const Free = () => {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row grid grid-cols-1 md:grid-cols-2 p-4 md:p-10 font-overpass">
      <div>
        <img src={Laptop} alt="laptop" className="hidden md:block"/>
        <img src={LaptopMobile} alt="laptop-mobile" className="block md:hidden" />
      </div>
      <div className="flex flex-col space-y-4 p-6 md:p-20">
        <div className="flex flex-col space-y-4 p-10">
          <h1 className="font-semibold text-very-dark-blue text-2xl">
            Free, open, simple
          </h1>
          <p className="text-md text-center md:text-left text-very-dark-grayish-blue">
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>
        </div>
        <div className="flex flex-col space-y-4 p-10">
          <h1 className="font-semibold text-very-dark-blue text-2xl">
            Powerful tooling
          </h1>
          <p className="text-md text-center md:text-left text-very-dark-grayish-blue">
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Free;
