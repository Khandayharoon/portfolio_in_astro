import React, { useState, useEffect } from "react";
import { GiStrikingBalls } from "react-icons/gi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Projects", href: "/projects" },
    { label: "About Me", href: "/about" },
    { label: "Contacts", href: "/contact" },
    { label: "Resume", href: "/Haroon-Nissar-Khanday.pdf" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("Menu toggled, isOpen:", !isOpen);
  };

  return (
    <div className="p-5 flex justify-between items-center text-center text-xl z-20 sticky top-0 bg-black border  shadow-2xl shadow-green-500/5 rounded-b-3xl text-white mx-5 md:mx-32">
      {/* logo */}
      <div className="hover:text-green-800 font-semibold">
        <a className="text-white hover:text-green-800 " href="/">
          HAROON
        </a>
      </div>

      {/* Navigation links for larger screens */}
      <div className="hidden md:flex gap-7">
        <ul className="flex gap-7">
          {navItems.map((item, key) => (
            <li key={key}>
              <a
                href={item.href}
                className="text-white hover:text-green-800 sm:text-sm md:text-md"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Menu toggle button for small screens */}
      <button className="md:hidden cursor-pointer" onClick={toggleMenu}>
        <GiStrikingBalls style={{ width: "30px", height: "30px" }} />
      </button>

      {/* Dropdown menu for smaller screens */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-red-800 p-4 shadow-lg z-20 md:hidden">
          <ul className="flex flex-col gap-4">
            {navItems.map((item, key) => (
              <li key={key}>
                <a
                  href={item.href}
                  className="hover:text-green-800 sm:text-sm md:text-md"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
