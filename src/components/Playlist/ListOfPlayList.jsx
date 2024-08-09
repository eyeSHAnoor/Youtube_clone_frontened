import React, { useEffect, useState } from "react";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import PlayListItems from "./PlayListItems";
import axios from "axios";

const ListOfPlayList = ({ videoId }) => {
  // console.log(videoId);
  const axiosPrivate = useAxiosPrivate();
  //stores the playlist List
  const [playList, setPlayList] = useState([]);
  //set status of video is added or not
  const [status, setStatus] = useState();
  //fetch list of plyalist
  useEffect(() => {
    const getPlayList = async () => {
      const response = await axiosPrivate.get("/api/v1/playlist/get");
      // console.log("This is playlist", response);
      setPlayList(response.data.data);
    };
    getPlayList();
  }, [axiosPrivate]);

  //adding particular video to playlist (it takes partcular playlist id from arguments)
  const AddVideoToPlayList = async (playlistId) => {
    const response = await axiosPrivate.post(
      `/api/v1/playlist/add-videos/${playlistId}`,
      { videoId }
    );
    // console.log(response);
  };

  //a func used get status of a video is it added or not
  const getVideoStatus = async (playlistId) => {
    console.log(playlistId, videoId);
    const response = await axios.post(
      `http://localhost:8000/api/v1/playlist/status/${playlistId}`,
      { videoId }
    );

    setStatus(response.data.status);
    console.log(response);
  };
  return (
    <div className="text-white">
      {playList.map((playlist, key) => (
        <PlayListItems
          playlist={playlist}
          key={key}
          AddVideoToPlayList={AddVideoToPlayList}
          getVideoStatus={getVideoStatus}
          status={status}
        />
      ))}
    </div>
  );
};

export default ListOfPlayList;
