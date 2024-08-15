import React, { useEffect, useState } from "react";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import VideoCard from "../Videos/VideoCard";

const GetUserWatchHistory = () => {
  const axiosPrivate = useAxiosPrivate();

  const [video, setVideo] = useState([]);

  useEffect(() => {
    const fetchWatchHistory = async () => {
      const response = await axiosPrivate.get(
        "/api/v1/users/get-watch-history"
      );
      //   console.log(response);
      setVideo(response?.data?.data?.watchHistory);
    };
    fetchWatchHistory();
  }, [axiosPrivate]);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 m-14">
      {video.map((videoData, key) => (
        <VideoCard video={videoData} key={key} />
      ))}
    </div>
  );
};

export default GetUserWatchHistory;
