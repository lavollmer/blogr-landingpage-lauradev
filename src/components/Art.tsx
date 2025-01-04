import Phones from "../assets/illustration-phones.svg";

const Art = () => {
  return (
    <div className="flex flex-row text-white bg-very-dark-blue p-10">
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
