import React, { useEffect, useState } from "react";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import VideoCard from "../Videos/VideoCard";

const SubscribedVideos = () => {
  const axiosPrivate = useAxiosPrivate();

  //STORE VIDEOS OF YOUR (PERSONAL) SUBSCRIBED CHANNELS
  const [video, setVideo] = useState([]);

  //FETCH THOSE CHANNELS VIDEOS
  useEffect(() => {
    const fetchSubscribedVideos = async () => {
      const response = await axiosPrivate.get(
        "/api/v1/users/subscribed/videos"
      );
      console.log(response);
      setVideo(response?.data?.data);
    };
    fetchSubscribedVideos();
  }, [axiosPrivate]);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 m-14">
      {/* VIDEOS AVAILABLE OR NOT */}
      {video.length > 0 ? (
        video.map((videoData, key) => <VideoCard video={videoData} key={key} />)
      ) : (
        <div className="text-white text-2xl italic">
          There is no video uploaded by Your Subscribed Channels
        </div>
      )}
    </div>
  );
};

export default SubscribedVideos;
