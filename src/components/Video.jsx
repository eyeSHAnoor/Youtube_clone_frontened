import React, { useRef, useState } from "react";
import useUploadTime from "../Hooks/useUploadTime";

import { IoAdd } from "react-icons/io5";
import Modal from "./Modal";
import ListOfPlayList from "./ListOfPlayList";

const Video = ({ video, handleSubscription, status }) => {
  const [isPlayListOpen, setIsPlayListOpen] = useState(false);
  const getTimeDifference = useUploadTime();

  if (!video) {
    return <p className="text-white">Loading...</p>; // or return null, or a loading spinner
  }
  return (
    <>
      <video
        src={video.videoFile || ""}
        className="object-cover h-full w-full rounded-xl"
        controls
      ></video>

      <h1 className="pt-4 text-lg text-white font-bold">
        {video.title} || {video.description}
      </h1>
      <h1 className="pt-4 text-gray-400 font-bold">
        {getTimeDifference(video.createdAt)}
        <button
          className="text-white  rounded bg-gray-700 hover:bg-gray-600 p-1 cursor-pointer text-lg float-end"
          onClick={() => setIsPlayListOpen(true)}
        >
          <IoAdd />
        </button>
      </h1>

      <div className="w-full border-b-2 border-purple-500 my-10"></div>
      <div className="w-full h-32 flex">
        <div className="h-20 w-20 bg-black rounded-full">
          <img
            src={video.owner.avatar}
            alt=""
            className="h-full w-full object-cover rounded-full"
          />
        </div>
        <div className="m-3 text-white">
          <h1 className="font-bold text-2xl">{video.owner.username}</h1>
          <h1>
            <span>{video.owner.Subscriber?.length || 0}</span> Subscribers
          </h1>
        </div>
        <div className="m-3">
          <button
            className="text-white font-bold h-14 w-fit rounded bg-purple-500 hover:bg-purple-600 p-2 cursor-pointer text-lg"
            onClick={handleSubscription}
          >
            {status}
          </button>
        </div>
      </div>
      <Modal isOpen={isPlayListOpen} onClose={() => setIsPlayListOpen(false)}>
        <ListOfPlayList videoId={video._id} />
      </Modal>
    </>
  );
};

export default Video;
