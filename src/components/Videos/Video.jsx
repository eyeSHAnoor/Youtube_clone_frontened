import React, { useRef, useState } from "react";
import useUploadTime from "../../Hooks/useUploadTime";
import { IoAdd } from "react-icons/io5";
import Modal from "../Modal";
import ListOfPlayList from "../Playlist/ListOfPlayList";
import { Link } from "react-router-dom";
import LikeVideos from "../Likes/LikeVideos";
import ViewsOfVideo from "../Views/ViewsOfVideo";
import AddToWatchHistory from "../WatchHistory/AddToWatchHistory";
import VideoDisLike from "../Dislikes/VideoDisLike";
import VideoLikesDisLikes from "../ManageLikesDisLikes/VideoLikesDisLikes";

//This component is used to display the video that is playing
const Video = ({ video, handleSubscription, status }) => {
  //this is used to add particular video to playList
  const [isAddToPlayListOpen, setIsAddToPlayListOpen] = useState(false);
  //Get time of upload
  const getTimeDifference = useUploadTime();

  //decide to add a video to watchHistory
  const [isAddToWatchHistory, setIsAddToWatchHistory] = useState(false);

  //if no video then return loading
  if (!video) {
    return <p className="text-white">Loading...</p>;
  }
  return (
    <>
      <video
        src={video.videoFile || ""} //video to play
        className="object-cover h-full w-full rounded-xl"
        controls
        onClick={() => setIsAddToWatchHistory(true)}
      ></video>

      {isAddToWatchHistory && <AddToWatchHistory videoId={video._id} />}

      <h1 className="pt-4 text-lg text-white font-bold">
        {video.title} || {video.description}
      </h1>
      <h1 className="pt-4 text-gray-400 font-bold">
        {getTimeDifference(video.createdAt)}
      </h1>
      <div className="flex justify-between">
        <ViewsOfVideo videoId={video._id} />
        <div className="flex justify-end gap-2">
          <VideoLikesDisLikes videoId={video._id} />
          <button
            className="text-white  rounded bg-gray-700 hover:bg-gray-600 p-3 cursor-pointer"
            onClick={() => setIsAddToPlayListOpen(true)}
          >
            <IoAdd className="hover:text-purple-500 text-2xl" />
          </button>
        </div>
      </div>

      <div className="w-full border-b-2 border-purple-500 my-10"></div>
      <Link to="/user" state={{ user: video.owner }}>
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
      </Link>
      {/* a modal to open a new tab over the prev page */}
      <Modal
        isOpen={isAddToPlayListOpen}
        onClose={() => setIsAddToPlayListOpen(false)}
      >
        <ListOfPlayList videoId={video._id} />
      </Modal>
    </>
  );
};

export default Video;
