import "../index.css";
import Logo from "../assets/logo.svg";

const NavBar = () => {
  return (
    <div className="flex flex-row">
        <div>
            <img src={Logo} alt="Logo" />
        </div>
        <div>
            <button>Home</button>
            <button>About</button>
            <button>Contact</button>
        </div>
    </div>
  )
}

export default NavBar