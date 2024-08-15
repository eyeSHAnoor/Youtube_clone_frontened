import React, { useState, useEffect } from "react";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import Like from "./Like";

const TweetLike = ({ tweetId, setDislike, setLike, like }) => {
  const axiosPrivate = useAxiosPrivate();
  const [err, setErr] = useState(false);

  // console.log(tweetId);

  const handleLikeTweet = async () => {
    try {
      const response = await axiosPrivate.post(
        `/api/v1/likes/tweet/${tweetId}`,
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

  useEffect(() => {
    console.log("Comment mounted");
    const fetchNumberOfLikes = async () => {
      const response = await axiosPrivate.get(
        `/api/v1/likes/tweet/get/${tweetId}`
      );
      // console.log(response);
      setLike(response?.data?.data?.likesCount);
    };
    fetchNumberOfLikes();
  }, [axiosPrivate, tweetId]);
  return <Like like={like} handleLike={handleLikeTweet} err={err} />;
};

export default TweetLike;