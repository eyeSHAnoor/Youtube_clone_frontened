import React from "react";
import useUploadTime from "../Hooks/useUploadTime";
import { Link } from "react-router-dom";

const RecommendedVideos = ({ video }) => {
  const getTimeDifference = useUploadTime();

  return (
    <Link
      to="/play-video"
      state={{ video }}
      className="h-36  mx-14 mt-5  max-w-full md:flex  "
    >
      <div className="h-full  w-1/2 ">
        <img
          src={video.thumbnail}
          alt=""
          className="object-cover h-full w-full rounded-xl"
        />
      </div>

      <div className="h-4/5  w-1/2 mx-4 text-white font-bold pt-2">
        <h2 className="text-2xl">{video.title}</h2>
        <h2 className="text-gray-400">{video.owner.username}</h2>
        <h2 className="text-gray-400">
          <span>{video.views || 0}</span>views ,
          <span>{getTimeDifference(video.createdAt)}</span>
        </h2>
      </div>
    </Link>
  );
};

export default RecommendedVideos;
