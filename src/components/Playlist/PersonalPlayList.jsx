import React, { useEffect, useState } from "react";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import PersonalPlayListItems from "./PersonalPlayListItems";
import { IoMdArrowRoundBack } from "react-icons/io";
import VideoCard from "../Videos/VideoCard";

const PersonalPlayList = ({ playList, setPlayList }) => {
  const axiosPrivate = useAxiosPrivate();

  //tells us that a particular playlist is clicked
  const [isPlayListClicked, setIsPlayListClicked] = useState(false);
  //sets the videos of particular playlist
  const [video, setVideo] = useState([]);

  //it stores the playList Id to remove any video from particular playlist through itx id
  const [playListID, setPlayListID] = useState("");

  //handle deleteion of entire playlist
  const handleDeletePlayList = async (playlistID) => {
    const response = await axiosPrivate.delete(
      `\api/v1/playlist/delete/${playlistID}`
    );
    setPlayList(playList.filter((playlist) => playlist._id !== playlistID));
    console.log(response);
  };

  //it handles how to remove particular video from particular playlist
  const handleRemoveVideoFromPlayList = async (videoId) => {
    const response = await axiosPrivate.post(
      `api/v1/playlist/remove-video/${playListID}`,
      { videoId }
    );
    console.log(response);
    setVideo(video.filter((video) => video._id !== videoId)); //improve UX
  };

  return (
    <div>
      <>
        {/* it checks whether a playlist is clicked or not so that to display itx particular videos */}
        {isPlayListClicked ? (
          <>
            <div
              className="text-xl text-white font-medium m-3 "
              onClick={() => setIsPlayListClicked(false)}
            >
              <IoMdArrowRoundBack className="text-5xl p-2 hover:bg-gray-600 cursor-pointer rounded-2xl" />
            </div>
            {/* is there is video in playlist or not */}
            {video.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-between gap-9 m-14">
                {video.map((videoData, key) => (
                  <VideoCard
                    video={videoData}
                    key={key}
                    playListID={playListID}
                    handleRemoveVideoFromPlayList={
                      handleRemoveVideoFromPlayList
                    }
                  />
                ))}
              </div>
            ) : (
              <div className="text-white text-center text-4xl my-20 italic">
                There is no videos{" "}
              </div>
            )}
          </>
        ) : (
          <>
            {playList.map((playlist, key) => (
              <PersonalPlayListItems
                playlist={playlist}
                key={key}
                setIsPlayListClicked={setIsPlayListClicked}
                setVideo={setVideo}
                handleDeletePlayList={handleDeletePlayList}
                setPlayListID={setPlayListID}
              ></PersonalPlayListItems>
            ))}
          </>
        )}
      </>
    </div>
  );
};

export default PersonalPlayList;
