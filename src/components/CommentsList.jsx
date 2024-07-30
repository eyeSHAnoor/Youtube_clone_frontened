import React from "react";

import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

const CommentsList = () => {
  return (
    <>
      <div className="h-fit w-full mx-14 mt-5  max-w-full flex -ml-0  ">
        <div className="h-40 mt-4  w-1/5 ">
          <img
            src="https://images.pexels.com/photos/27364090/pexels-photo-27364090/free-photo-of-a-man-in-a-black-shirt-and-white-pants-standing-on-a-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="object-cover h-full w-full rounded-full"
          />
        </div>
        <div className="h-4/5  w-4/5 m-4 text-white  pt-2">
          <h2 className="text-white text-lg font-bold">
            Marker Notion , <span className="text-gray-400">14h ago</span>
          </h2>
          <div>
            <p className=" w-full mt-5 text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
              officiis similique ad obcaecati cum tempora culpa aliquid nostrum
              maxime illo?
            </p>
            <p className="flex items-center space-x-2 text-gray-600 mt-5">
              <span className="flex items-center space-x-1">
                <AiOutlineLike className="active:text-purple-500" />
                <span>123</span>
              </span>
              <span>Likes</span>
              <AiOutlineDislike className="active:text-purple-500" />
              <span>98</span>
              <span>Dislikes</span>
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default CommentsList;
