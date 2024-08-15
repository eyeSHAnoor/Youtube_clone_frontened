import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { RiDislikeLine } from "react-icons/ri";

const Like = ({ like, handleLike, err }) => {
  return (
    <>
      <div className="flex items-center space-x-1">
        {/* CHECK IF ALREADY LIKED OR NOT */}
        {!err ? (
          <AiOutlineLike
            className="hover:text-purple-500"
            onClick={handleLike}
          />
        ) : (
          <RiDislikeLine />
        )}
        <div>{like}</div>
      </div>
    </>
  );
};

export default Like;
