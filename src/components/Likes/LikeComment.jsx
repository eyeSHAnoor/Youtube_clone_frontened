import React, { useState, useEffect } from "react";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import Like from "./Like";

const LikeComment = ({ commentId }) => {
  const axiosPrivate = useAxiosPrivate();
  const [like, setLike] = useState(0);
  const [err, setErr] = useState(false);

  const handleLikeComment = async () => {
    try {
      const response = await axiosPrivate.post(
        `/api/v1/likes/comment/${commentId}`,
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
    console.log("Comment mounted");
    const fetchNumberOfLikes = async () => {
      const response = await axiosPrivate.get(
        `/api/v1/likes/comment/get/${commentId}`
      );
      // console.log(response);
      setLike(response?.data?.data?.likesCount);
    };
    fetchNumberOfLikes();
  }, [axiosPrivate, like]);
  return (
    <>
      <Like like={like} handleLike={handleLikeComment} err={err} />
    </>
  );
};

export default LikeComment;
