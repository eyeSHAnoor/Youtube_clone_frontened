import React from "react";
import { AiOutlineDislike } from "react-icons/ai";
import { FaBan } from "react-icons/fa";

const DisLike = ({ dislike, handleDisLike, err }) => {
  return (
    <div className="flex items-center space-x-1">
      {!err ? (
        <AiOutlineDislike
          className="hover:text-purple-500"
          onClick={handleDisLike}
        />
      ) : (
        <FaBan />
      )}
      <div>{dislike}</div>
    </div>
  );
};

export default DisLike;
