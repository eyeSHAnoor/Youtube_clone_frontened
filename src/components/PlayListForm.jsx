import React from "react";
import { Form } from "react-router-dom";

const PlayListForm = ({ handleCreatePlayList }) => {
  return (
    <>
      <Form
        className="flex flex-col text-white"
        method="POST"
        onSubmit={(e) => handleCreatePlayList(e)}
      >
        <label htmlFor="name">Name for PlayList</label>
        <input
          type="text"
          id="name"
          name="name"
          className="p-1 m-2
        bg-transparent border-2 rounded-lg"
        />

        <label htmlFor="description">Description</label>
        <textarea
          className="p-1 m-2
        bg-transparent border-2 rounded-lg "
          name="description"
        ></textarea>

        <button
          type="submit"
          className="text-white font-bold h-10 w-full mt-3 rounded bg-purple-500  pl-5 cursor-pointer hover:bg-purple-600"
        >
          Create
        </button>
      </Form>
    </>
  );
};

export default PlayListForm;
