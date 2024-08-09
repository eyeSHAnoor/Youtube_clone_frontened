import React, { useEffect, useState } from "react";
import CreatePlayList from "./CreatePlayList";
import PersonalPlayList from "./PersonalPlayList";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";

const PlayList = () => {
  const axiosPrivate = useAxiosPrivate();

  //store the array of list of all playlist
  const [playList, setPlayList] = useState([]);

  //ensure is playlist open or not
  const [isCreatePlayListOpen, setIsCreatePlayListOpen] = useState(false);
  const onClose = () => {
    setIsCreatePlayListOpen(false);
  };

  //aid in creation of playlist
  const handleCreatePlayList = async (e) => {
    e.preventDefault();
    const form = e.target;
    const Data = new FormData(form);
    const formData = Object.fromEntries(Data.entries());
    const response = await axiosPrivate.post(
      "/api/v1/playlist/create",
      formData
    );
    console.log(response);
    const newItem = response.data.data;
    setPlayList([...playList, newItem]);
    onClose();
  };

  //Aid in display of all playlists of user
  useEffect(() => {
    const getPersonalPlayList = async () => {
      const response = await axiosPrivate.get("/api/v1/playlist/get");
      // console.log(response);
      setPlayList(response.data.data);
    };
    getPersonalPlayList();
  }, [axiosPrivate]);

  return (
    <div>
      <CreatePlayList
        handleCreatePlayList={handleCreatePlayList}
        isCreatePlayListOpen={isCreatePlayListOpen}
        onClose={onClose}
        setIsCreatePlayListOpen={setIsCreatePlayListOpen}
      ></CreatePlayList>
      <PersonalPlayList
        playList={playList}
        setPlayList={setPlayList}
      ></PersonalPlayList>
    </div>
  );
};

export default PlayList;
