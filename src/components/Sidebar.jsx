import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaHistory } from "react-icons/fa";

const Sidebar = ({ isOpen }) => {
  return (
    <>
      <div
        className={` transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="relative w-64  bg-custom-black text-white h-screen ">
          <div className="p-10">
            <ul className="space-y-7">
              <li className="flex items-center space-x-2">
                <IoHomeOutline className="text-white h-8 w-8" />
                <button className="w-full text-left text-white hover:bg-gray-700 p-2 rounded">
                  Home
                </button>
              </li>

              <li className="flex items-center space-x-2">
                <MdOutlineSubscriptions className="text-white h-8 w-8" />
                <button className="w-full text-left text-white hover:bg-gray-700 p-2 rounded">
                  Subscription
                </button>
              </li>

              <li className="flex items-center space-x-2">
                <FaHistory className="text-white h-8 w-8" />
                <button className="w-full text-left text-white hover:bg-gray-700 p-2 rounded">
                  History
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
