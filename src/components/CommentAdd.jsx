import React from "react";
import { MdDone } from "react-icons/md";

const CommentAdd = () => {
  return (
    <>
      {" "}
      <div className="h-fit w-full mx-14 mt-5  max-w-full flex -ml-0  ">
        <div className="h-20 mt-4  w-20 ">
          <img
            src=""
            alt=""
            className="object-cover bg-black h-full w-full rounded-full"
          />
        </div>
        <div className="h-4/5  w-4/5 m-4 mt-12 text-white  pt-2 flex">
          <input
            type="text"
            className="w-full bg-transparent border-b-2 border-white text-white active:border-none  pl-3"
            placeholder="Place your Comment here"
          />
          <button>
            <MdDone className="text-3xl" />
          </button>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default CommentAdd;
