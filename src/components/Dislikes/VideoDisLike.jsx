import React, { useEffect, useState } from "react";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import DisLike from "./DisLike";

const VideoDisLike = ({ videoId, dislike, setDislike, setLike }) => {
  //WHETHER ALREADY DL OR NOT
  const [err, setErr] = useState(false);

  const axiosPrivate = useAxiosPrivate();
  //PRESS THE DISLIKE BUTTON AND IT CALLS
  const handleDisLikeVideo = async () => {
    try {
      const response = await axiosPrivate.post(
        `/api/v1/dislikes/video/${videoId}`,
        {}
      );
      console.log("handle dislike", response);
      setLike((prevLike) => prevLike - 1);
      setDislike((prevDislike) => prevDislike + 1);
    } catch (err) {
      console.log(err);
      setErr(true);
    }
  };

  //FETCH NUMBER OF DISLIKES
  useEffect(() => {
    console.log("mounted");
    setErr(false);
    const fetchNumberOfDisLikes = async () => {
      const response = await axiosPrivate.get(
        `/api/v1/dislikes/video/get/${videoId}`
      );
      //   console.log("dislike a video", response);
      setDislike(response?.data?.data?.dislikesCount);
    };
    fetchNumberOfDisLikes();
  }, [axiosPrivate]);
  return (
    <>
      <button className="text-white flex gap-1 rounded bg-gray-700 hover:bg-gray-600 p-3 cursor-pointer  ">
        <DisLike
          dislike={dislike}
          handleDisLike={handleDisLikeVideo}
          err={err}
        />
      </button>
    </>
  );
};

export default VideoDisLike;
