import React from "react";
import { Link } from "react-router-dom";

//it represents various videoCards
const VideoCard = ({ video }) => {
  return (
    <>
      <div className="h-80 w-80 border-3 ">
        <div className="bg-black h-2/3 relative rounded-xl">
          <img
            src={video.thumbnail}
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
          <p className="absolute bottom-2 right-2 text-white bg-black bg-opacity-50 px-2 py-1 rounded">
            {video.duration.toFixed(2)}
          </p>
        </div>
        {/* link the particular video to play-video and sending a stats video of that partcular video clicked */}
        <Link to="/play-video" state={{ video }}>
          <div className="flex ml-2 mt-2 text-white">
            <div className="h-10 w-10 bg-black rounded-full">
              <img
                src={video.owner.avatar}
                alt=""
                className="w-full h-full rounded-full"
              />
            </div>
            <div className=" pl-4">
              <h1 className="font-bold uppercase text-xl">{video.title}</h1>
              <p className="text-gray-400">
                <span>{video.views} </span>Views
              </p>
              <h6 className="font-bold -mt-1">{video.owner.username}</h6>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default VideoCard;
