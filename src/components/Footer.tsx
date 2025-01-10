import Logo from "../assets/logo.svg";
import "../index.css";

const Footer = () => {
  return (
    <div className="flex flex-col space-y-10 md:space-x-4 text-center md:text-left md:flex-row justify-center md:justify-evenly bg-very-dark-black-blue pt-20 pb-20 font-ubuntu">
      <div>
        <img src={Logo} alt="Blogr Logo" />
      </div>
        <div className="flex flex-col space-y-6 text-sm">
          <div>
            <h1 className="font-bold text-grayish-blue">Product</h1>
          </div>
          <div className="flex flex-col left-0 space-y-2 text-grayish-blue font-semilight">
            <p>Overview</p>
            <p>Pricing</p>
            <p>Marketplace</p>
            <p>Features</p>
            <p>Integrations</p>
          </div>
        </div>
        <div className="flex flex-col space-y-6 text-sm">
          <div>
            <h1 className="font-bold text-grayish-blue">Company</h1>
          </div>
          <div className="flex flex-col left-0 space-y-2 text-grayish-blue font-semilight">
            <p>About</p>
            <p>Team</p>
            <p>Blog</p>
            <p>Careers</p>
          </div>
        </div>
        <div className="flex flex-col space-y-6 text-sm">
          <div>
            <h1 className="font-bold text-grayish-blue">Connect</h1>
          </div>
          <div className="flex flex-col left-0 space-y-2 text-grayish-blue font-semilight">
            <p>Contact</p>
            <p>Newsletter</p>
            <p>LinkedIn</p>
          </div>
        </div>
      </div>
  );
};

export default Footer;
