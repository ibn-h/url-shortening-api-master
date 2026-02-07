import { useState } from "react";

export default function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <header className="px-(--padding-x-mobile) py-10">
      <div className="flex items-center w-full justify-between relative">
        <a href="">
          <img src="/src/assets/logo.svg" alt="Logo" />
        </a>

        {isMenuVisible && (
          <nav className="mt-5 z-10 p-8 absolute text-center bg-primary-purple text-white font-bold rounded-2xl top-full left-0 w-full flex flex-col items-center justify-center gap-6">
            <a href="">Features</a>
            <a href="">Pricing</a>
            <a href="">Resources</a>
            <a href="" className="pt-5 border-t w-full border-gray-400/40">
              Login
            </a>
            <a href="" className="bg-primary-blue w-full p-3 rounded-3xl">
              Sign Up
            </a>
          </nav>
        )}

        <div
          className="w-8 h-8 flex flex-col justify-center items-center cursor-pointer gap-1.5"
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
