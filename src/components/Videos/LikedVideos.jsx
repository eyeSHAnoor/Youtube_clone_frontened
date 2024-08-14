import React, { useEffect, useState } from "react";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import VideoCard from "./VideoCard";
const LikedVideos = () => {
  const axiosPrivate = useAxiosPrivate();

  const [video, setVideo] = useState([]);

  useEffect(() => {
    const fetchLikedVideos = async () => {
      const response = await axiosPrivate.get("/api/v1/likes/get-videos");
      //   console.log(response);
      setVideo(response?.data?.data);
    };
    fetchLikedVideos();
  }, [axiosPrivate]);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 m-14">
      {video.map((videoData, key) => (
        <VideoCard video={videoData} key={key} />
      ))}
    </div>
  );
};

export default LikedVideos;
