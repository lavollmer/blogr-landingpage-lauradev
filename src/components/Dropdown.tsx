import { useState } from "react";
import DownArrow from "../assets/icon-arrow-light.svg";

//defined the DropdownProps interrface with a string dropdownName
interface DropdownProps {
  dropdownName: string;
}

const Dropdown: React.FC<DropdownProps> = ({ dropdownName }) => {
  const [isOpen, setIsOpen] = useState(false);

  //change the toggleDropdown with useState and setISOpen
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="relative inline-block text-left">
        <div className="flex flex-row">
          <button
            type="button"
            className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-md font-semibold text-white"
            id="menu-button"
            aria-expanded={isOpen}
            aria-haspopup="true"
            onClick={toggleDropdown}
          >
            {dropdownName}
            <img src={DownArrow} alt="Down Arrow" />
          </button>
        </div>
        {isOpen && (
          <div
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
          >
            <div className="py-1" role="none">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                id="menu-item-0"
              >
                Contact
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                id="menu-item-1"
              >
                Newsletter
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                id="menu-item-2"
              >
                LinkedIn
              </a>
              <form method="POST" action="#" role="none">
                <button
                  type="submit"
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700"
                  role="menuitem"
                  id="menu-item-3"
                >
                  XXXX
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
