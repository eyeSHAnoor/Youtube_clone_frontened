import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiLogoutCircleLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import Modal from "./Modal";
import Logout from "./SignInLogInLogOut/Logout";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [isLogOutOpen, setIsLogOutOpen] = useState(false);
  return (
    <>
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-custom-black text-white transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z-20 flex flex-col`}
      >
        <div className="flex items-center space-x-6 p-4">
          <button onClick={toggleSidebar} className="text-purple-500">
            <GiHamburgerMenu className="h-6 w-6 " />
          </button>
          <div className="text-purple-700 md:text-4xl sm:text-2xl font-bold italic">
            Play_Videos
          </div>
        </div>
        <div className="p-10 flex-grow">
          <ul className="space-y-7">
            <Link to="/">
              <li className="flex items-center space-x-2 mt-6">
                <IoHomeOutline className="text-white h-8 w-8" />
                <button className="w-full text-left text-white hover:bg-gray-700 p-2 rounded">
                  Home
                </button>
              </li>
            </Link>
            <Link to="/subscription">
              <li className="flex items-center space-x-2 mt-6">
                <MdOutlineSubscriptions className="text-white h-8 w-8" />
                <button className="w-full text-left text-white hover:bg-gray-700 p-2 rounded">
                  Subscription
                </button>
              </li>
            </Link>
            <Link to="/watch-history">
              <li className="flex items-center space-x-2 mt-6">
                <FaHistory className="text-white h-8 w-8" />
                <button className="w-full text-left text-white hover:bg-gray-700 p-2 rounded">
                  History
                </button>
              </li>
            </Link>
            <Link to="/liked-videos">
              <li className="flex items-center space-x-2 mt-6">
                <FaRegHeart className="text-white h-8 w-8" />
                <button className="w-full text-left text-white hover:bg-gray-700 p-2 rounded">
                  Liked Videos
                </button>
              </li>
            </Link>
          </ul>
        </div>
        <div className="p-10">
          <ul>
            <li className="flex items-center space-x-2">
              <RiLogoutCircleLine className="text-white h-8 w-8" />
              <button
                className="w-full text-left text-white hover:bg-gray-700 p-2 rounded"
                onClick={() => setIsLogOutOpen(true)}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
      <Modal isOpen={isLogOutOpen} onClose={() => setIsLogOutOpen(false)}>
        <Logout onNo={() => setIsLogOutOpen(false)} />
      </Modal>
    </>
  );
};

export default Sidebar;
