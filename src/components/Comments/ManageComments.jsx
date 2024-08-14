import React, { useEffect, useState } from "react";
import CommentsList from "./CommentsList";
import CommentAdd from "./CommentAdd";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import axios from "axios";
import useUserId from "../../Hooks/useUserId";

const ManageComments = ({ video }) => {
  //To catch and set the comments that are recieved and created
  const [comment, setComment] = useState([]);

  const userId = useUserId();

  //a useEffect that rerenders when videoId changes to get all comments of a video
  useEffect(() => {
    const controller = new AbortController(); // Create a new AbortController instance
    const { signal } = controller; // Get the signal from the controller
    const getComments = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/v1/comments/get/${video._id}`,
          { signal } // Pass the signal to the request
        );
        console.log(response.data.data.docs);
        setComment(response.data.data.docs);
      } catch (error) {
        if (error.name === "CanceledError") {
          console.log("Request was canceled");
        } else {
          console.error("Failed to fetch comments:", error);
        }
      }
    };
    //call the above function
    getComments();
    return () => {
      controller.abort(); // Abort the request on component unmount or when dependencies change
    };
  }, [video._id]);

  const axiosPrivate = useAxiosPrivate();

  //THis is used to set the content of a comment that will be created
  const [content, setContent] = useState("");

  //This is used to handle the submission of comment
  const handleAddComments = async () => {
    const response = await axiosPrivate.post(
      `/api/v1/comments/add/${video._id}`,
      { content }
    );
    // console.log(response);
    const newComment = response.data.data;
    setComment([newComment, ...comment]);
  };

  const deleteComment = async (commentId) => {
    const response = await axiosPrivate.delete(
      `/api/v1/comments/delete/${commentId}`
    );
    setComment(comment.filter((comment) => comment._id !== commentId));
  };

  return (
    <>
      <CommentAdd
        video={video}
        handleAddComments={handleAddComments}
        setContent={setContent}
        content={content}
      />
      {/* it checks whether Comments are present or not */}
      {comment.length > 0 ? (
        comment.map((commentData, key) => (
          <CommentsList
            comment={commentData}
            key={key}
            deleteComment={deleteComment}
            userId={userId}
          />
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

export default ManageComments;
