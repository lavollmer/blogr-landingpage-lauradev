import "../index.css";
import Logo from "../assets/logo.svg";

const NavBar = () => {
  return (
    <div className="flex flex-row bg-very-light-red">
      <div className="flex flex-row space-x-4 w-full p-4">
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div className="flex flex-row space-x-4">
          <button>Product</button>
          <button>Company</button>
          <button>Connect</button>
        </div>
      </div>
      <div>
        <button>Login</button>
      </div>
    </div>
  );
};

export default NavBar;
