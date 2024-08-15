import React, { useEffect, useState } from "react";
import CommentsList from "./CommentsList";
import CommentAdd from "./CommentAdd";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import axios from "axios";
import useUserId from "../../Hooks/useUserId";
import Loading from "../Loading";

const ManageComments = ({ video }) => {
  // State to catch and set the comments that are received and created
  const [comment, setComment] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  // Stores the userId of the current user or owner of the comment
  const userId = useUserId();

  // useEffect that rerenders when videoId changes to get all comments of a video
  useEffect(() => {
    if (!video?._id) return; // If video is undefined, return early

    const controller = new AbortController(); // Create a new AbortController instance
    const { signal } = controller; // Get the signal from the controller

    const getComments = async () => {
      setLoading(true); // Start loading
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
      } finally {
        setLoading(false); // Stop loading
      }
    };

    // Call the above function
    getComments();

    return () => {
      controller.abort(); // Abort the request on component unmount or when dependencies change
    };
  }, [video?._id]);

  const axiosPrivate = useAxiosPrivate();

  // This is used to set the content of a comment that will be created
  const [content, setContent] = useState("");

  // This is used to handle the submission of a comment
  const handleAddComments = async () => {
    const response = await axiosPrivate.post(
      `/api/v1/comments/add/${video._id}`,
      { content }
    );
    const newComment = response.data.data;
    setComment([newComment, ...comment]);
  };

  const deleteComment = async (commentId) => {
    await axiosPrivate.delete(`/api/v1/comments/delete/${commentId}`);
    setComment(comment.filter((comment) => comment._id !== commentId));
  };

  if (loading) {
    return (
      <div className="text-5xl m-10 text-white italic">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <CommentAdd
        video={video}
        handleAddComments={handleAddComments}
        setContent={setContent}
        content={content}
      />
      {/* Check whether comments are present */}
      {comment && comment.length > 0 ? (
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
    </>
  );
};

export default ManageComments;
