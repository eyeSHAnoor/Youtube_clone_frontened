import React, { useEffect, useState } from "react";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import useFormatViews from "../../Hooks/useFormatViews";

const ViewsOfVideo = ({ videoId }) => {
  const axiosPrivate = useAxiosPrivate();
  const [views, setViews] = useState();

  const formatViews = useFormatViews();

  useEffect(() => {
    const fetchViews = async () => {
      const response = await axiosPrivate.patch(
        `/api/v1/videos/views/${videoId}`
      );
      //   console.log(response.data.data.views);

      setViews(response.data.data.views);
    };
    fetchViews();
  }, [videoId, axiosPrivate]);
  return (
    <div className="text-gray-300 font-medium text-sm mt-2">
      <span>{formatViews(views)}</span> views
    </div>
  );
};

export default ViewsOfVideo;
