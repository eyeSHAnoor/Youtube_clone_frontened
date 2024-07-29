import React from "react";
import TweetData from "./TweetData";

const Tweets = () => {
  const tweet = {
    avatar:
      "https://images.pexels.com/photos/14799459/pexels-photo-14799459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    Owner: "React Master",
    uploadedAt: "5h ago",
    content:
      "THis is tweet m kux bhi likh rhi ho tntn na lo m kux na kux kr k hi rho gi",
    likes: 523,
    dislikes: 34,
  };
  return (
    <>
      <TweetData tweet={tweet} />
    </>
  );
};

export default Tweets;
