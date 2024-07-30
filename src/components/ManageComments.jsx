import React from "react";
import CommentsList from "./CommentsList";
import CommentAdd from "./CommentAdd";

const manageComments = () => {
  return (
    <>
      <CommentAdd />
      <CommentsList />
    </>
  );
};

export default manageComments;
