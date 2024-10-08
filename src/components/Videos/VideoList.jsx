import axios from "axios";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import VideoCard from "./VideoCard";

const VideoList = () => {
  //takes data from loader function
  const initialVideo = useLoaderData();
  //a video that is initialized with loader data which is then mapped on videoCard
  const [video, setVideo] = useState(initialVideo);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 m-14">
      {video.map((videoData, key) => (
        <VideoCard video={videoData} key={key} />
      ))}
    </div>
  );
};

// a loader function that loads before component
export const videoLoader = async () => {
  const response = await axios.get(
    "http://localhost:8000/api/v1/videos/get-public-videos"
  );

  console.log("videos lists are : ", response?.data?.data);
  // console.log(response);
  return response?.data?.data;
};

export default VideoList;
