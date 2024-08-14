import React from "react";
import TweetData from "./TweetData";

const TweetList = ({ tweet, handleDeleteTweet }) => {
  return (
    <>
      {tweet.map((tweetdata, key) => (
        <TweetData
          tweet={tweetdata}
          key={key}
          handleDeleteTweet={handleDeleteTweet}
        />
      ))}
    </>
  );
};

export default TweetList;
