import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMore } from "react-icons/io";
import useUserId from "../../Hooks/useUserId";
import TweetLikesDisLikes from "../ManageLikesDisLikes/TweetLikesDisLikes";

const TweetData = ({ tweet, handleDeleteTweet }) => {
  //tells that the more (three dots) clicked or not
  const [isMenueOpen, setIsMenueOpen] = useState(false);
  //ON OFF
  const toggleMenue = () => {
    setIsMenueOpen(!isMenueOpen);
  };

  const userId = useUserId();
  //Takes tweet (data) from prop and display it for particular tweet
  return (
    <div className="mt-6">
      <div className="flex justify-between">
        <div className="flex ml-2 mt-2 text-white w-5/6  hover:bg-gray-700 p-3 rounded-xl">
          <div className="h-10 w-10 bg-black rounded-full">
            <img
              src={tweet.owner.avatar}
              alt=""
              className="w-full h-full rounded-full"
            />
          </div>
          <div className=" pl-4">
            <Link to="/user" state={{ user: tweet.owner }}>
              <h1 className="font-bold text-xl hover:text-purple-200">
                {tweet.owner.username}
              </h1>
            </Link>
            <p className="text-gray-400">{tweet.content}</p>
            <div className="flex items-center space-x-2">
              <TweetLikesDisLikes tweetId={tweet._id} />
            </div>
          </div>
        </div>
        {tweet.owner._id === userId && (
          <div className="relative mt-10 p-4">
            <button
              className="ml-4 p-2 text-white hover:text-gray-400"
              onClick={toggleMenue}
            >
              <IoMdMore size={24} />
            </button>
            {isMenueOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-gray-600 rounded-md shadow-lg z-10">
                <ul onClick={() => handleDeleteTweet(tweet._id)}>
                  <li className="block px-4 py-2 text-red-400 hover:bg-gray-500 cursor-pointer">
                    Delete
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="w-full h-2 border-b-2 border-gray-500 mt-4 "></div>
    </div>
  );
};

export default TweetData;
