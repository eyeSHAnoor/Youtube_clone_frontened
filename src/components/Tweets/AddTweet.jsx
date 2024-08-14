import React, { useState } from "react";
import { MdDone } from "react-icons/md";
import { IoAdd } from "react-icons/io5";

const AddTweet = ({ handleAddTweet }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [tweetContent, setTweetContent] = useState("");

  const handleSlideIn = () => {
    setIsVisible((prev) => !prev);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTweet(tweetContent);
      setTweetContent(""); // Clear the input field after adding the tweet
    }
  };

  return (
    <div className="flex mt-10">
      <button
        type="button"
        onClick={handleSlideIn}
        className="h-12 w-24 text-3xl font-extrabold flex items-center justify-center rounded-xl mr-3 hover:bg-gray-700 text-white"
      >
        <IoAdd />
      </button>

      <div
        className="h-fit w-full bg-gray-600 p-3 rounded-2xl max-w-full flex shadow-2xl transition-transform duration-500"
        style={{
          transform: isVisible ? "translateX(0)" : "translateX(100%)",
          opacity: isVisible ? 1 : 0,
          transition: "transform 0.5s ease, opacity 0.5s ease",
        }}
      >
        <div className="h-10 mt-4 w-10">
          <img
            src=""
            alt=""
            className="object-cover bg-black h-full w-full rounded-full"
          />
        </div>
        <div className="h-4/5 w-full m-4 mt-4 text-white pt-2 flex">
          <input
            type="text"
            className="w-full bg-transparent border-b-2 border-white text-white pl-3"
            placeholder="Tweet here"
            value={tweetContent}
            onChange={(e) => setTweetContent(e.target.value)}
            onKeyDown={handleKeyDown} // Add this line to listen for the Enter key
          />
          <button
            type="submit"
            onClick={() => {
              handleAddTweet(tweetContent);
              setTweetContent(""); // Clear the input field after adding the tweet
            }}
          >
            <MdDone className="text-3xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTweet;
