import React, { useEffect, useState } from "react";
import RecommendedVideos from "./RecommendedVideos";
import { useLocation } from "react-router-dom";
import Video from "./Video";
import ManageComments from "../Comments/ManageComments";
import axios from "axios";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";

const PlayVideo = () => {
  //it takes the previous location form which we are landed in playVideo tab
  //takes state from location it is coming from (as video)
  const location = useLocation();
  const video = location?.state?.video;

  const axiosPrivate = useAxiosPrivate();

  //it stores the recommended videos after fetching
  const [recVideo, setRecVideo] = useState([]);

  //fetch recommended videos
  useEffect(() => {
    const func = async () => {
      const response = await axios.get(
        "http://localhost:8000/api/v1/videos/recommended"
      );
      setRecVideo(response.data.data);
    };

    func();
  }, []);

  //it Stores the subscription status of video Owner whether it is subscribes by you or not
  const [status, setStatus] = useState("");

  //fetch the status of particular video's owner
  useEffect(() => {
    const findStatus = async () => {
      const res = await axiosPrivate.post(
        `/api/v1/subscription/status/${video.owner._id}`,
        {}
      );
      if (res.data.data.isFollowed === true) {
        setStatus("UnSubscribe");
      } else {
        setStatus("Subscribe");
      }
    };
    findStatus();
  }, [axiosPrivate]);

  //handle subscription as if it is subscribed already then this button is used to unsubscribe it and vice versa
  const handleSubscription = async () => {
    if (status === "Subscribe") {
      const response = await axiosPrivate.post(
        `/api/v1/subscription/subscribe/${video.owner._id}`,
        {}
      );
      setStatus("UnSubscribe");
    } else {
      const response = await axiosPrivate.post(
        `/api/v1/subscription/unsubscribe/${video.owner._id}`,
        {}
      );
      setStatus("Subscribe");
    }
  };

  return (
    <>
      <div className="bg-custom-black min-h-screen  flex">
        <div className="md:w-3/5 sm:w-full h-96 m-7 bg-black rounded-xl">
          {/* this display play video its title description owner owner avatar itx subscribers */}
          <Video
            video={video}
            handleSubscription={handleSubscription}
            status={status}
          />
          {/* it manages all comment whether to add or display */}
          <div className="">
            <ManageComments video={video} />
          </div>
        </div>
        <div className="flex flex-col w-2/5 ">
          {/* it displays the recommended videos */}
          {recVideo.map((video, key) => (
            <RecommendedVideos video={video} key={key} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PlayVideo;
