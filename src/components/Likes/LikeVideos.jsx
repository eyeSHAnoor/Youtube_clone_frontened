import React, { useEffect, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import { RiDislikeLine } from "react-icons/ri";
import Like from "./Like";

const LikeVideos = ({ videoId }) => {
  const [like, setLike] = useState(0);
  const [err, setErr] = useState(false);

  const axiosPrivate = useAxiosPrivate();
  const handleLikeVideo = async () => {
    try {
      const response = await axiosPrivate.post(
        `/api/v1/likes/video/${videoId}`,
        {}
      );
      // console.log(response);
      setLike((prevLike) => prevLike + 1);
    } catch (err) {
      console.log(err);
      setErr(true);
    }
  };

  useEffect(() => {
    console.log("mounted");
    const fetchNumberOfLikes = async () => {
      const response = await axiosPrivate.get(
        `/api/v1/likes/video/get/${videoId}`
      );
      // console.log(response);
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
