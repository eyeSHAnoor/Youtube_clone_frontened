import React, { useEffect } from "react";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";

const AddToWatchHistory = ({ videoId }) => {
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    const addToHistory = async () => {
      const response = await axiosPrivate.patch(
        `/api/v1/users/add-watch-history/${videoId}`
      );
      // console.log(response);
    };
    addToHistory();
  }, [axiosPrivate, videoId]);
  return;
};

export default AddToWatchHistory;
