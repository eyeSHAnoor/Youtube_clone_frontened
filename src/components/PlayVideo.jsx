import React, { useEffect, useState } from "react";
import RecommendedVideos from "./RecommendedVideos";
import { useLocation } from "react-router-dom";
import Video from "./Video";
import ManageComments from "./ManageComments";
import axios from "axios";
import useAxiosPrivate from "../Hooks/useAxiosPrivate";

const PlayVideo = () => {
  const location = useLocation();
  const video = location?.state?.video;

  const axiosPrivate = useAxiosPrivate();

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

  const [status, setStatus] = useState("");

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

  const [comment, setComment] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const getComments = async () => {
      const response = await axios.get(
        `http://localhost:8000/api/v1/comments/get/${video._id}`
      );
      console.log(response.data.data.docs);
      setComment(response.data.data.docs);
    };
    getComments();
  }, [comment]);

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
          <Video
            video={video}
            handleSubscription={handleSubscription}
            status={status}
          />
          <div className="">
            <ManageComments video={video} comment={comment} />
          </div>
        </div>
        <div className="flex flex-col w-2/5 ">
          {recVideo.map((video, key) => (
            <RecommendedVideos video={video} key={key} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PlayVideo;
