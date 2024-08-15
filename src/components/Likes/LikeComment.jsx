import React, { useState, useEffect } from "react";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import Like from "./Like";

const LikeComment = ({ commentId, setDislike, setLike, like }) => {
  const axiosPrivate = useAxiosPrivate();
  //IT SETS THE ERROR IF U ALREADY LIKED IT
  const [err, setErr] = useState(false);

  //AFTER PRESSING THE LIKED BUTTON
  const handleLikeComment = async () => {
    try {
      const response = await axiosPrivate.post(
        `/api/v1/likes/comment/${commentId}`,
        {}
      );
      // console.log(response);
      setLike((prevLike) => prevLike + 1);
      setDislike((prevdisLike) => prevdisLike - 1);
    } catch (err) {
      console.log(err);
      setErr(true);
    }
  };

  //FETCH LIKE COUNTS
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
