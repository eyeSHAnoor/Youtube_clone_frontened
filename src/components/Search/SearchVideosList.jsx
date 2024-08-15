import React from "react";
import { useLocation } from "react-router-dom";
import VideoCard from "../Videos/VideoCard";

const SearchVideosList = () => {
  const location = useLocation();
  const videos = location?.state?.videos || []; // Access the videos state

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 m-14">
      {videos.length > 0 ? (
        videos.map((video) => (
          <VideoCard key={video._id} video={video}></VideoCard>
        ))
      ) : (
        <p className="text-white text-2xl flex italic ">No videos found.</p>
      )}
    </div>
  );
};

export default SearchVideosList;
