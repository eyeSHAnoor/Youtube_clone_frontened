import React, { useState } from "react";
import { IoMdMore } from "react-icons/io";
import useUploadTime from "../../Hooks/useUploadTime";
import { Link } from "react-router-dom";
import LikeComment from "../Likes/LikeComment";
import CommentLikesDisLikes from "../ManageLikesDisLikes/CommentLikesDisLikes";

const CommentsList = ({ comment, deleteComment, userId }) => {
  //This is used to get how long ago comment is created
  const getTimeDifference = useUploadTime();
  const [isMenueOpen, setIsMenueOpen] = useState(false);
  //toggle a menue as clicked true or not
  const toggleMenue = () => {
    setIsMenueOpen(!isMenueOpen);
  };
  // console.log(userId);
  // console.log(comment.owner._id);
  return (
    <>
      <div className="h-fit w-full mx-14 mt-5  max-w-full flex -ml-0  hover:bg-gray-700 rounded-xl">
        <div className="h-10 my-7 ml-4 w-10 ">
          <img
            src={comment.owner.avatar}
            alt=""
            className="object-cover h-full w-full rounded-full"
          />
        </div>
        <div className="h-4/5  w-4/5 m-4 text-white  pt-2">
          <Link to="/user" state={{ user: comment.owner }}>
            {" "}
            <h2 className="text-white text-lg font-bold hover:text-purple-200">
              {comment.owner.username}{" "}
              <span className="text-gray-400 text-sm">
                {getTimeDifference(comment.createdAt)}
              </span>
            </h2>
          </Link>
          <div>
            <p className=" w-full  text-white">{comment.content}</p>
            <div className="flex items-center space-x-2 text-gray-600 ">
              <CommentLikesDisLikes commentId={comment._id} />
            </div>
          </div>
        </div>
        {comment.owner._id === userId && (
          <div className="relative mt-10 p-4">
            <button
              className="ml-4 p-2 text-white hover:text-gray-400"
              onClick={toggleMenue}
            >
              <IoMdMore size={24} />
            </button>
            {isMenueOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-gray-600 rounded-md shadow-lg z-10">
                <ul onClick={() => deleteComment(comment._id)}>
                  <li className="block px-4 py-2 text-red-400 hover:bg-gray-500 cursor-pointer">
                    Delete
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default CommentsList;
