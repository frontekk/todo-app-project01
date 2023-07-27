import { useState, useEffect, useRef } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import "./components_styles/Navbar.css";
import { IoIosClose } from "react-icons/io";
const Navbar = () => {
  const [isOpening, setIsOpening] = useState(false);
  const [changeIcon, setChangeIcon] = useState(false);
  const genericHamburgerLine = `h-1 w-7 my-1 rounded-full bg-white transition ease transform duration-300`;

  const tabs = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => {
    setChangeIcon(!changeIcon);
    setIsOpening(!isOpening);
  };

  return (
    <div className="bg-blue-500 flex flex-row justify-between text-center p-4 font-custom1">
      <div>
        <Link to={"/"} className="text-white text-3xl">
          LOGO
        </Link>
      </div>
      <button
        className="flex flex-col h-10 w-10  rounded justify-center items-center group md:hidden"
        onClick={toggleMenu}
      >
        <div
          className={`${genericHamburgerLine} ${
            changeIcon
              ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100 "
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            changeIcon ? "opacity-0" : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            changeIcon
              ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
      </button>
      {/*TABS SM */}
      {isOpening ? (
        <div
          className={`${
            isOpening ? "animate-fade-down" : "animate-fade-up animate-ease-in"
          } w-full h-1/2 bg-blue-500 absolute top-20 left-0 md:hidden z-10`}
        >
          <div className="sm:flex sm:flex-col sm:items-center">
            <ul className="space-y-6 p-4">
              {tabs.map((tab) => (
                <li
                  key={tab.label}
                  className="animate-fade-down text-white text-3xl"
                >
                  <Link to={tab.path}>{tab.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p className="hidden">close</p>
      )}
      {/*TABS MD< */}
      <div className="hidden md:block p-1">
        <ul className="">
          {tabs.map((tab) => (
            <li
              key={tab.label} // Don't forget to add a unique key to each element in the map function
              className="animate-fade-up animate-ease-in  inline-block mx-4 text-white text-xl"
            >
              <Link to={tab.path}>{tab.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
