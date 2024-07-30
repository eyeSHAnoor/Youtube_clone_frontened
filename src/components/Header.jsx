import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloudUploadOutline } from "react-icons/io5";
import Modal from "./Modal";
import UploadForm from "./UploadForm";

const Header = ({ toggleSidebar }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <header className="bg-custom-black p-4 flex justify-between items-center w-screen">
        <div className="flex items-center space-x-6">
          <button onClick={toggleSidebar} className="text-purple-500">
            <GiHamburgerMenu className="h-6 w-6 " />
          </button>
          <div className="text-purple-700 md:text-4xl sm:text-2xl font-bold italic">
            Play_Videos
          </div>
        </div>
        <div className="flex-grow mx-4 justify-center flex">
          <input
            type="text"
            placeholder="Search..."
            className="md:w-[31rem] sm:hidden md:block p-2 rounded-lg bg-custom-black border border-purple-500 text-white "
          />
        </div>
        <div className="flex space-x-4">
          <button
            className="text-4xl text-purple-500 pr-5 "
            onClick={() => setIsModalOpen(true)}
          >
            <IoCloudUploadOutline />
          </button>
          <button className="text-white font-bold h-10 w-24 rounded bg-purple-500 p-2 pl-5 cursor-pointer">
            Login
          </button>
          <button className="text-white font-bold h-10 w-24 rounded bg-purple-500 p-2 pl-5 cursor-pointer">
            Sign Up
          </button>
        </div>
      </header>
      <div className=" w-full px-4 border-b-2 border-purple-500"></div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <UploadForm />
      </Modal>
    </>
  );
};

export default Header;
