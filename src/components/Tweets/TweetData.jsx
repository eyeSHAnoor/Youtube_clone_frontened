import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

const TweetData = ({ tweet }) => {
  //Takes tweet (data) from prop and display it for particular tweet
  return (
    <div className="m-10">
      <div className="flex ml-2 mt-2 text-white">
        <div className="h-10 w-10 bg-black rounded-full">
          <img
            src={tweet.avatar}
            alt=""
            className="w-full h-full rounded-full"
          />
        </div>
        <div className=" pl-4">
          <h1 className="font-bold uppercase text-xl">{tweet.Owner}</h1>
          <p className="text-gray-400">{tweet.content}</p>
          <p className="flex items-center space-x-2">
            <span className="flex items-center space-x-1">
              <AiOutlineLike />
              <span>{tweet.likes}</span>
            </span>
            <span>Likes</span>
            <AiOutlineDislike />
            <span>{tweet.dislikes}</span>
            <span>Dislikes</span>
          </p>
        </div>
      </div>
      <div className="w-full h-2 border-b-2 border-gray-500 mt-4 "></div>
    </div>
  );
};

export default TweetData;
