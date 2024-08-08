import React, { useEffect, useState } from "react";
import useAxiosPrivate from "../Hooks/useAxiosPrivate";
import RecommendedVideos from "./RecommendedVideos";
import VideoCard from "./VideoCard";

const PersonalVideos = () => {
  const axiosPrivate = useAxiosPrivate();

  const [persVideos, setPersVideos] = useState([]); // Initialize with an empty array

  useEffect(() => {
    const getPersonalVideos = async () => {
      try {
        const response = await axiosPrivate.get("/api/v1/videos/personal");
        console.log("The personal videos are:", response);

        setPersVideos(response.data.data);
      } catch (error) {
        console.error("Error fetching personal videos:", error);
      }
    };
    getPersonalVideos();
  }, [axiosPrivate]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 m-14">
      {persVideos.length > 0 ? (
        persVideos.map((video, key) => <VideoCard video={video} key={key} />)
      ) : (
        <p>No personal videos available.</p>
      )}
    </div>
  );
};

export default PersonalVideos;
