import Logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <div className="flex flex-row bg-black p-4">
      <div>
        <img src={Logo} alt="Blogr Logo" />
      </div>
      <div className="flex flex-col space-y-6 text-sm">
        <div>
          <h1 className="font-bold text-white">Product</h1>
        </div>
        <div className="flex flex-col left-0 space-y-2 text-grayish-blue">
          <p>Overview</p>
          <p>Pricing</p>
          <p>Marketplace</p>
          <p>Features</p>
          <p>Integrations</p>
        </div>
      </div>
      <div className="flex flex-col space-y-6 text-sm">
        <div>
          <h1 className="font-bold text-white">Company</h1>
        </div>
        <div className="flex flex-col left-0 space-y-2 text-grayish-blue">
          <p>About</p>
          <p>Team</p>
          <p>Blog</p>
          <p>Careers</p>
        </div>
      </div>
      <div className="flex flex-col space-y-6 text-sm">
        <div>
          <h1 className="font-bold text-white">Connect</h1>
        </div>
        <div className="flex flex-col left-0 space-y-2 text-grayish-blue">
          <p>Contact</p>
          <p>Newsletter</p>
          <p>LinkedIn</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
