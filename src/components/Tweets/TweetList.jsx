import React from "react";
import TweetData from "./TweetData";

const TweetList = ({ tweet, handleDeleteTweet }) => {
  return (
    <>
      {tweet.length > 0 ? (
        tweet.map((tweetdata, key) => (
          <TweetData
            tweet={tweetdata}
            key={key}
            handleDeleteTweet={handleDeleteTweet}
          />
        ))
      ) : (
        <div className="text-white text-3xl italic text-center py-10">
          There are no tweets{" "}
        </div>
      )}
    </>
  );
};

export default TweetList;
