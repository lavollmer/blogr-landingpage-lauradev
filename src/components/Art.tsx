import Phones from "../assets/illustration-phones.svg";
import "../App.css";

const Art = () => {
  return (
    <div className="relative flex flex-row text-white p-10 z-0">
      <div className="absolute inset-0 bg-gradient-to-r from-very-dark-desaturated-blue to-very-dark-gray-blue z-10"></div>
      <div className="absolute inset-0 bg-art-texture z-10"></div>
      <div>
        <img src={Phones} alt="Phones" />
      </div>
      <div className="flex flex-col justify-center p-10">
        <div>
          <h1 className="font-bold text-2xl">State of the Art Infrastructure</h1>
        </div>
        <div>
          <p className="text-sm text-left">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Art;
