import React, { useEffect, useRef, useState } from "react";
import { MdDone } from "react-icons/md";

const CommentAdd = ({ video, handleAddComments, setContent, content }) => {
  const commentRef = useRef();

  //it uses to focus on input field
  useEffect(() => {
    commentRef.current.focus();
  }, []);

  return (
    <>
      <div className="h-fit w-full mx-14 mt-5 bg-gray-600 p-3 rounded-2xl max-w-full flex -ml-0 shadow-2xl ">
        <div className="h-20 mt-4  w-20 ">
          <img
            src={video.owner.avatar}
            alt=""
            className="object-cover bg-black h-full w-full rounded-full"
          />
        </div>
        <div className="h-4/5  w-4/5 m-4 mt-12 text-white  pt-2 flex">
          <input
            type="text"
            className="w-full bg-transparent border-b-2 border-white text-white active:border-none  pl-3"
            placeholder="Place your Comment here"
            onChange={(e) => setContent(e.target.value)}
            ref={commentRef}
            value={content}
          />
          <button type="submit" onClick={handleAddComments}>
            <MdDone className="text-3xl" />
          </button>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default CommentAdd;
