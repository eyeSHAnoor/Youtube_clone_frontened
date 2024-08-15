import React, { useEffect, useState } from "react";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import { useLocation } from "react-router-dom";
import VideoCard from "./VideoCard";

const UserVideos = () => {
  const location = useLocation();
  const user = location?.state?.user || {};
  const axiosPrivate = useAxiosPrivate();

  const [video, setVideo] = useState([]);
  useEffect(() => {
    const fetchUserVideos = async () => {
      const response = await axiosPrivate.get(`/api/v1/videos/get/${user._id}`);

      console.log(response.data.data);
      setVideo(response.data.data);
    };
    fetchUserVideos();
    // console.log(video);
  }, [axiosPrivate, user]);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 m-12">
      {/* if personal videos present or not */}
      {video.length > 0 ? (
        video.map((video, key) => <VideoCard video={video} key={key} />)
      ) : (
        <div className="text-white text-3xl italic text-center py-10">
          There are no Videos{" "}
        </div>
      )}
    </div>
  );
};

export default UserVideos;
