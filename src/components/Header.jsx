import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./Sidebar";

const Header = ({ toggleSidebar }) => {
  return (
    <>
      <header className="bg-custom-black p-4 flex justify-between items-center w-screen">
        <div className="flex items-center space-x-6">
          <button onClick={toggleSidebar} className="text-white">
            <GiHamburgerMenu className="h-6 w-6 " />
          </button>
          <div className="text-white md:text-4xl sm:text-2xl font-bold italic">
            Play_Videos
          </div>
        </div>
        <div className="flex-grow mx-4 justify-center flex">
          <input
            type="text"
            placeholder="Search..."
            className="md:w-[31rem] sm:hidden md:block p-2 rounded-lg bg-custom-black border border-cyan-500 "
          />
        </div>
        <div className="flex space-x-4">
          <button className="bg-custom-black border border-cyan-500 text-blue-500 px-4 py-2 rounded-md">
            Login
          </button>
          <button className="bg-custom-black border border-cyan-500 text-blue-500 px-4 py-2 rounded-md">
            Sign Up
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
