import React, { useEffect, useRef, useState } from "react";
import useAxiosPrivate from "../Hooks/useAxiosPrivate";
import { MdDone } from "react-icons/md";

const CommentAdd = ({ video }) => {
  const axiosPrivate = useAxiosPrivate();

  const [content, setContent] = useState("");

  const commentRef = useRef();

  useEffect(() => {
    commentRef.current.focus();
  }, []);

  const handleAddComments = async () => {
    const response = await axiosPrivate.post(
      `/api/v1/comments/add/${video._id}`,
      { content }
    );
    console.log(response);
  };
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
