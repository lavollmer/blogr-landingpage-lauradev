import Phones from "../assets/illustration-phones.svg";
import "../App.css";

const Art = () => {
  return (
    <div className="relative flex flex-col md:flex-row text-white p-4 md:p-10 font-overpass">
      <div className="absolute inset-0 bg-gradient-to-r from-very-dark-desaturated-blue to-very-dark-gray-blue"></div>
      <div className="absolute inset-0 bg-art-texture"></div>
      <div className="flex flex-row grid grid-cols-1 md:grid-cols-2">
        <div className="relative">
          <img src={Phones} alt="Phones" />
        </div>
        <div className="relative flex flex-col space-y-10 pt-10 pb-20 md:pt-40">
          <div className="flex flex-col">
            <h1 className="font-bold text-4xl">
              State of the Art Infrastructure
            </h1>
          </div>
          <div className="flex flex-col">
            <p className="leading-relaxed text-md text-left text-white">
              With reliability and speed in mind, worldwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly no matter where your readers are, keeping your
              site competitive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
