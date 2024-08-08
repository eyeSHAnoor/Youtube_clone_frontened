import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";
import Modal from "./Modal";
import PlayListForm from "./PlayListForm";
import useAxiosPrivate from "../Hooks/useAxiosPrivate";

const CreatePlayList = () => {
  const [isHovered, setIsHovered] = useState(false);

  const axiosPrivate = useAxiosPrivate();

  const [isCreatePlayListOpen, setIsCreatePlayListOpen] = useState(false);

  const handleCreatePlayList = async (e) => {
    e.preventDefault();
    const form = e.target;
    const Data = new FormData(form);
    const formData = Object.fromEntries(Data.entries());

    console.log(formData);
    const response = await axiosPrivate.post(
      "/api/v1/playlist/create",
      formData
    );

    console.log(response);
  };

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
      <Modal
        isOpen={isCreatePlayListOpen}
        onClose={() => setIsCreatePlayListOpen(false)}
      >
        <PlayListForm handleCreatePlayList={handleCreatePlayList} />
      </Modal>
    </>
  );
};

export default CreatePlayList;
