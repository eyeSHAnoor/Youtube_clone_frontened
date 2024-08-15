import React, { useEffect, useState } from "react";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import VideoCard from "../Videos/VideoCard";

const PersonalVideos = () => {
  const axiosPrivate = useAxiosPrivate();

  //used to store the personal videos of user after fetching from server
  const [persVideos, setPersVideos] = useState([]); // Initialize with an empty array

  //fetching data from server
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
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-9 m-14">
      {/* if personal videos present or not */}
      {persVideos.length > 0 ? (
        persVideos.map((video, key) => <VideoCard video={video} key={key} />)
      ) : (
        <div className="text-white text-3xl italic text-center py-10">
          No personal videos available.
        </div>
      )}
    </div>
  );
};

export default PersonalVideos;
