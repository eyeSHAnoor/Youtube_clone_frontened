import React, { useEffect, useState } from "react";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import DisLike from "./DisLike";

const TweetDisLike = ({ tweetId, dislike, setDislike, setLike }) => {
  const [err, setErr] = useState(false);

  console.log("dislike");

  const axiosPrivate = useAxiosPrivate();
  const handleDisLikeTweet = async () => {
    try {
      const response = await axiosPrivate.post(
        `/api/v1/dislikes/tweet/${tweetId}`,
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
  useEffect(() => {
    console.log("mounted");
    setErr(false);
    const fetchNumberOfDisLikes = async () => {
      const response = await axiosPrivate.get(
        `/api/v1/dislikes/tweet/get/${tweetId}`
      );
      //   console.log("dislike a video", response);
      setDislike(response?.data?.data?.dislikesCount);
    };
    fetchNumberOfDisLikes();
  }, [axiosPrivate]);
  return (
    <>
      <button>
        <DisLike
          dislike={dislike}
          handleDisLike={handleDisLikeTweet}
          err={err}
        />
      </button>
    </>
  );
};

export default TweetDisLike;
