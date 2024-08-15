import React, { useState } from "react";

import TweetDisLike from "../Dislikes/TweetDisLike";
import TweetLike from "../Likes/TweetLike";

const TweetLikesDisLikes = ({ tweetId }) => {
  const [dislike, setDislike] = useState(0);
  const [like, setLike] = useState(0);

  return (
    <div className="flex gap-3">
      <TweetLike
        tweetId={tweetId}
        like={like}
        setLike={setLike}
        setDislike={setDislike}
      />
      <TweetDisLike
        tweetId={tweetId}
        dislike={dislike}
        setDislike={setDislike}
        setLike={setLike}
      />
    </div>
  );
};

export default TweetLikesDisLikes;
