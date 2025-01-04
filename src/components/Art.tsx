import Phones from "../assets/illustration-phones.svg";

const Art = () => {
  return (
    <div className="flex flex-row">
      <div>
        <img src={Phones} alt="Phones" />
      </div>
      <div className="flex flex-col justify-center">
        <div>
          <h1>State of the Art Infrastructure</h1>
        </div>
        <div>
          <p>
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
