import React, { useEffect, useState } from "react";
import RecommendedVideos from "./RecommendedVideos";
import { useLocation } from "react-router-dom";
import Video from "./Video";
import ManageComments from "./ManageComments";
import axios from "axios";

const PlayVideo = () => {
  const location = useLocation();
  const video = location?.state?.video;

  console.log(video);

  const [recVideo, setRecVideo] = useState([]);

  useEffect(() => {
    const func = async () => {
      const response = await axios.get(
        "http://localhost:8000/api/v1/videos/recommended"
      );

      setRecVideo(response.data.data);
    };

    func();
  }, []);

  return (
    <>
      <div className="bg-custom-black min-h-screen  flex">
        <div className="md:w-3/5 sm:w-full h-96 m-7 bg-black">
          <Video video={video} />
          <div className="">
            <ManageComments />
          </div>
        </div>
        {recVideo.map((video, key) => (
          <RecommendedVideos video={video} key={key} />
        ))}
      </div>
    </>
  );
};

export default PlayVideo;
