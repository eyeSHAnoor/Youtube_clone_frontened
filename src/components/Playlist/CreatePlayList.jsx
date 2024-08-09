import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";
import Modal from "../Modal";
import PlayListForm from "./PlayListForm";

const CreatePlayList = ({
  handleCreatePlayList,
  isCreatePlayListOpen,
  setIsCreatePlayListOpen,
  onClose,
}) => {
  //is used to check when to display text when it is hovered over button
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="w-full mt-8 flex justify-between items-center border-gray-600 border-b-2">
        <h1
          className="text-2xl font-serif font-bold mx-12 text-gray-300"
          style={{
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.3s ease-in-out",
          }}
        >
          Create a PlayList of Your Own
        </h1>
        <button
          className="h-12 w-24 text-3xl font-extrabold flex items-center justify-center rounded-xl hover:bg-gray-700 mx-9 text-white"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsCreatePlayListOpen(true)}
        >
          <IoAdd />
        </button>
      </div>
      <Modal isOpen={isCreatePlayListOpen} onClose={onClose}>
        <PlayListForm handleCreatePlayList={handleCreatePlayList} />
      </Modal>
    </>
  );
};

export default CreatePlayList;
