import { useState } from "react";
import DownArrow from "../assets/icon-arrow-light.svg";

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
                className="block px-4 py-2 text-sm text-gray-700 hover:font-bold"
                role="menuitem"
                id="menu-item-0"
              >
                Offerings
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:font-bold"
                role="menuitem"
                id="menu-item-1"
              >
                Services
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:font-bold"
                role="menuitem"
                id="menu-item-2"
              >
                Items
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
