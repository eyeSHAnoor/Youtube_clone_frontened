import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMore } from "react-icons/io";
import useDurationFormat from "../../Hooks/useDurationFormat";
import useFormatViews from "../../Hooks/useFormatViews";

//it represents various videoCards
const VideoCard = ({ video, playListID, handleRemoveVideoFromPlayList }) => {
  //tells that the more (three dots) clicked or not
  const [isMenueOpen, setIsMenueOpen] = useState(false);
  //gives the format of duration in hh:mm:ss
  const convertToHHMMSS = useDurationFormat();

  const formatViews = useFormatViews();
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
            {convertToHHMMSS(video.duration)}
          </p>
        </div>
        {/* link the particular video to play-video and sending a stats video of that partcular video clicked */}
        <div className="flex justify-between">
          <Link to="/play-video" state={{ video }}>
            <div className="flex ml-2 mt-2 text-white ">
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
                  <span>{formatViews(video.views)} </span>Views
                </p>
                <h6 className="font-bold -mt-1">{video.owner.username}</h6>
              </div>
            </div>
          </Link>
          {/* This part will only show when you are visiting videos of playlist so that we can remove video from playlist */}
          {playListID && (
            <div className="relative ">
              <button
                className="ml-4 p-2 text-white hover:text-gray-400"
                onClick={() => setIsMenueOpen(!isMenueOpen)} //to open or close menue
              >
                <IoMdMore size={24} />
              </button>
              {isMenueOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-gray-600 rounded-md shadow-lg z-10">
                  {/* remove video from playlist */}
                  <ul onClick={() => handleRemoveVideoFromPlayList(video._id)}>
                    <li className="block px-4 py-2 text-red-400 hover:bg-gray-500 cursor-pointer">
                      Remove
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default VideoCard;
