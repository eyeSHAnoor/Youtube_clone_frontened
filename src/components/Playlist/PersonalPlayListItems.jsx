import React, { useState } from "react";
import { IoMdMore } from "react-icons/io";

const PersonalPlayListItems = ({
  playlist,
  setIsPlayListClicked,
  setVideo,
  handleDeletePlayList,
}) => {
  //tells that the more (three dots) clicked or not
  const [isMenueOpen, setIsMenueOpen] = useState(false);

  //when a particular playlist is clicked
  const handlePlayListClicked = () => {
    setIsPlayListClicked(true);
    setVideo(playlist.video);
  };

  //toggle a menue as clicked true or not
  const toggleMenue = () => {
    setIsMenueOpen(!isMenueOpen);
  };

  return (
    <div className="flex justify-between">
      <div
        className="w-full flex items-center mt-10 p-4 hover:bg-gray-600 rounded-xl"
        onClick={handlePlayListClicked}
      >
        <div className="bg-white h-16 w-16 rounded-full">
          <img
            src={playlist.owner.avatar}
            alt=""
            className="h-full w-full object-cover rounded-full"
          />
        </div>
        <div className="ml-4">
          <h1 className="text-2xl font-medium text-white">{playlist.name}</h1>
          <p className="text-gray-400 -mt-1">{playlist.description}</p>
        </div>
      </div>
      <div className="relative mt-10 p-4">
        <button
          className="ml-4 p-2 text-white hover:text-gray-400"
          onClick={toggleMenue}
        >
          <IoMdMore size={24} />
        </button>
        {isMenueOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-gray-600 rounded-md shadow-lg z-10">
            <ul onClick={() => handleDeletePlayList(playlist._id)}>
              <li className="block px-4 py-2 text-red-400 hover:bg-gray-500 cursor-pointer">
                Delete
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonalPlayListItems;
