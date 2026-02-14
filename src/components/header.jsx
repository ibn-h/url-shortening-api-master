import { useState } from "react";

const hoverStyle =
  "hover:text-primary-blue desktop:hover:text-black transition-colors duration-300";

export default function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <header className="px-(--padding-x-mobile) py-6 desktop:px-(--padding-x-desktop)">
      <div className="flex items-center w-full justify-between relative desktop:gap-10">
        <a href="">
          <img src="../assets/logo.svg" alt="Logo" />
        </a>

        <nav
          className={
            "mt-5 z-10 p-8 absolute text-center bg-primary-purple text-white font-bold rounded-2xl top-full left-0 w-full flex flex-col items-center justify-center gap-6 desktop:flex desktop:static desktop:flex-row desktop:p-0 desktop:bg-transparent desktop:text-gray-400 desktop:font-normal desktop:w-full desktop:p-none desktop:m-0" +
            (isMenuVisible ? " flex" : " hidden")
          }
        >
          <a href="" className={hoverStyle}>
            Features
          </a>
          <a href="" className={hoverStyle}>
            Pricing
          </a>
          <a href="" className={hoverStyle}>
            Resources
          </a>
          <a
            href=""
            className={
              hoverStyle +
              " pt-5 border-t w-full border-gray-400/40 desktop:border-none desktop:pt-0 desktop:w-auto desktop:ml-auto"
            }
          >
            Login
          </a>
          <a
            href=""
            className="buttonHover bg-primary-blue w-full p-3 rounded-3xl desktop:w-auto text-white desktop:px-7 desktop:py-2.5"
          >
            Sign Up
          </a>
        </nav>

        <div
          className="w-8 h-8 flex flex-col justify-center items-center cursor-pointer gap-1.5 desktop:hidden"
          onClick={toggleMenu}
        >
          <div className="bg-gray-400 h-1 w-full"></div>
          <div className="bg-gray-400 h-1 w-full"></div>
          <div className="bg-gray-400 h-1 w-full"></div>
        </div>
      </div>
    </header>
  );
}
