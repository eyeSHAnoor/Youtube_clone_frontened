import React, { useEffect, useState } from "react";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import Like from "./Like";

const LikeVideos = ({ videoId, setDislike, setLike, like }) => {
  //ALREADY LIKED OR NOT
  const [err, setErr] = useState(false);

  const axiosPrivate = useAxiosPrivate();
  //HANDLE LIKE BUTTON
  const handleLikeVideo = async () => {
    try {
      const response = await axiosPrivate.post(
        `/api/v1/likes/video/${videoId}`,
        {}
      );
      // console.log(response);
      setLike((prevLike) => prevLike + 1);
      setDislike((prevDislike) => prevDislike - 1);
    } catch (err) {
      console.log(err);
      setErr(true);
    }
  };

  //COUNT NUMBER OF LIKES
  useEffect(() => {
    console.log("mounted");
    setErr(false);
    const fetchNumberOfLikes = async () => {
      const response = await axiosPrivate.get(
        `/api/v1/likes/video/get/${videoId}`
      );
      console.log("likes of video", response);
      setLike(response?.data?.data?.likesCount);
    };
    fetchNumberOfLikes();
  }, [axiosPrivate]);
  return (
    <>
      <button className="text-white flex gap-1 rounded bg-gray-700 hover:bg-gray-600 p-3 cursor-pointer  ">
        <Like
          like={like}
          handleLike={handleLikeVideo}
          err={err}
          className="text-2xl"
        />
      </button>
    </>
  );
};

export default LikeVideos;
