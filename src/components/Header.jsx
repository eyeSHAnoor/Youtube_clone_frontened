import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloudUploadOutline } from "react-icons/io5";
import Modal from "./Modal";
import UploadForm from "./UploadVideo/UploadForm";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import SearchVideo from "./Search/SearchVideo";

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
          <SearchVideo></SearchVideo>
        </div>
        <div className="flex space-x-4">
          <button
            className="text-4xl text-purple-500 pr-5 hover:text-purple-600"
            onClick={() => setIsModalOpen(true)}
          >
            <IoCloudUploadOutline />
          </button>
          <Link to="/login">
            <button className="text-white font-bold h-10 w-24 rounded bg-purple-500 p-2 pl-5 cursor-pointer hover:bg-purple-600">
              Login
            </button>
          </Link>
          <Link to="/sign-up">
            <button className="text-white font-bold h-10 w-24 rounded bg-purple-500 p-2 pl-5 cursor-pointer hover:bg-purple-600">
              Sign Up
            </button>
          </Link>
          <Link to="/profile">
            <button className="text-4xl text-purple-500 pr-5 hover:text-purple-600 ">
              <CgProfile />
            </button>
          </Link>
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
