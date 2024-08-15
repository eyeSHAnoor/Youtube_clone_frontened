import React, { useEffect, useState } from "react";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import DisLike from "./DisLike";

const CommentDisLike = ({ commentId, dislike, setDislike, setLike }) => {
  //IT TELLS IF ALREADY DISLIKED OR NOT
  const [err, setErr] = useState(false);

  const axiosPrivate = useAxiosPrivate();

  //WHEN SOMEONE DISLIKE (REMOVES IT FROM LIKES )
  const handleDisLikeComment = async () => {
    try {
      const response = await axiosPrivate.post(
        `/api/v1/dislikes/comment/${commentId}`,
        {}
      );
      console.log("handle dislike", response);
      setLike((prevLike) => prevLike - 1);
      setDislike((prevDislike) => prevDislike + 1);
    } catch (err) {
      console.log(err);
      setErr(true);
    }
  };

  //COLLECT THE TOTAL NUMBER OF DISLIKES
  useEffect(() => {
    console.log("mounted");
    setErr(false);
    const fetchNumberOfDisLikes = async () => {
      const response = await axiosPrivate.get(
        `/api/v1/dislikes/comment/get/${commentId}`
      );
      //   console.log("dislike a video", response);
      setDislike(response?.data?.data?.dislikesCount);
    };
    fetchNumberOfDisLikes();
  }, [axiosPrivate]);
  return (
    <>
      <button>
        <DisLike
          dislike={dislike}
          handleDisLike={handleDisLikeComment}
          err={err}
        />
      </button>
    </>
  );
};

export default CommentDisLike;
