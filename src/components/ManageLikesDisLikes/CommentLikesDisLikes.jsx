import React, { useState } from "react";
import CommentDisLike from "../Dislikes/CommentDisLike";
import LikeComment from "../Likes/LikeComment";

const CommentLikesDisLikes = ({ commentId }) => {
  const [dislike, setDislike] = useState(0);
  const [like, setLike] = useState(0);

  return (
    <div className="flex gap-3">
      <LikeComment
        commentId={commentId}
        like={like}
        setLike={setLike}
        setDislike={setDislike}
      />
      <CommentDisLike
        commentId={commentId}
        dislike={dislike}
        setDislike={setDislike}
        setLike={setLike}
      />
    </div>
  );
};

export default CommentLikesDisLikes;
