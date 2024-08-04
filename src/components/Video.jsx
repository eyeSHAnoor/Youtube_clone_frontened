import React from "react";

const Video = ({ video }) => {
  if (!video) {
    return <p className="text-white">Loading...</p>; // or return null, or a loading spinner
  }
  return (
    <>
      <video
        src={video.videoFile || ""}
        className="object-cover h-full w-full"
      ></video>
      <h1 className="pt-4 text-lg text-white font-bold">
        {video.title} || {video.description}
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
            <span>{video.owner.subscriber || 0}</span> Subscribers
          </h1>
        </div>
        <div className="m-3">
          <button className="text-white font-bold h-14 w-28 rounded bg-purple-500 p-2 cursor-pointer text-lg">
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
};

export default Video;
