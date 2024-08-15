import React, { useState } from "react";
import LikeVideos from "../Likes/LikeVideos";
import VideoDisLike from "../Dislikes/VideoDisLike";

const VideoLikesDisLikes = ({ videoId }) => {
  const [dislike, setDislike] = useState(0);
  const [like, setLike] = useState(0);
  return (
    <div className="flex gap-3">
      <LikeVideos
        videoId={videoId}
        like={like}
        setLike={setLike}
        setDislike={setDislike}
      />
      <VideoDisLike
        videoId={videoId}
        dislike={dislike}
        setDislike={setDislike}
        setLike={setLike}
      />
    </div>
  );
};

export default VideoLikesDisLikes;
