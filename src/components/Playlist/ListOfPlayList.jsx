import React, { useEffect, useState } from "react";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import PlayListItems from "./PlayListItems";
import axios from "axios";

const ListOfPlayList = ({ videoId }) => {
  const axiosPrivate = useAxiosPrivate();
  //get playlist list store when it is fetched
  const [playList, setPlayList] = useState([]);
  //store the status of video whether it is present in playlist or not
  const [statuses, setStatuses] = useState({});

  //fetching list of playlist
  useEffect(() => {
    const getPlayList = async () => {
      const response = await axiosPrivate.get("/api/v1/playlist/get");
      setPlayList(response.data.data);
    };
    getPlayList();
  }, [axiosPrivate]);

  const AddVideoToPlayList = async (playlistId) => {
    const response = await axiosPrivate.post(
      `/api/v1/playlist/add-videos/${playlistId}`,
      { videoId }
    );
    // You might want to handle the response or update status after adding
  };

  const getVideoStatus = async (playlistId) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/v1/playlist/status/${playlistId}`,
        { videoId }
      );
      setStatuses((prevStatuses) => ({
        ...prevStatuses,
        [playlistId]: response.data.status,
      }));
    } catch (error) {
      console.error("Failed to fetch status:", error);
    }
  };

  return (
    <div className="text-white">
      {playList.map((playlist) => (
        <PlayListItems
          playlist={playlist}
          key={playlist._id}
          AddVideoToPlayList={AddVideoToPlayList}
          getVideoStatus={getVideoStatus}
          status={statuses[playlist._id] || false} // Default to false if status is not available
        />
      ))}
    </div>
  );
};

export default ListOfPlayList;
