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
          <button className="bg-custom-black border border-purple-500 text-purple-500 px-4 py-2 rounded-md">
            Login
          </button>
          <button className="bg-custom-black border border-purple-500 text-purple-500 px-4 py-2 rounded-md">
            Sign Up
          </button>
        </div>
      </header>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <UploadForm />
      </Modal>
    </>
  );
};

export default Header;
