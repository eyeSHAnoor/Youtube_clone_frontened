import axios from "axios";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import VideoCard from "./VideoCard";

const VideoList = () => {
  const initialVideo = useLoaderData();
  const [video, setVideo] = useState(initialVideo);

  return (
    <div className="m-14">
      {video.map((videoData, key) => (
        <VideoCard video={videoData} key={key} />
      ))}
    </div>
  );
};

export const videoLoader = async () => {
  const response = await axios.get(
    "http://localhost:8000/api/v1/videos/get-public-videos"
  );

  // console.log(response);
  return response?.data?.data;
};

export default VideoList;
