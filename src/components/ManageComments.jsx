import React, { useEffect, useState } from "react";
import CommentsList from "./CommentsList";
import CommentAdd from "./CommentAdd";
import axios from "axios";

const manageComments = ({ video, comment }) => {
  return (
    <>
      <CommentAdd video={video} />
      {comment ? (
        comment.map((commentData, key) => (
          <CommentsList comment={commentData} key={key} />
        ))
      ) : (
        <div className="text-5xl m-10 text-white italic">No comments here</div>
      )}

      {/* {comment.map((commentData, key) => (
        <CommentsList comment={commentData} key={key} />
      ))} */}
    </>
  );
};

export default manageComments;
