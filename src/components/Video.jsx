import React from "react";
import RecommendedVideos from "./RecommendedVideos";
import ManageComments from "./ManageComments";

const Video = () => {
  return (
    <>
      <div className="md:w-3/5 sm:w-full h-96 m-7 bg-black">
        <video
          src="../public/capture.mp4"
          className="object-cover h-full w-full"
        ></video>
        <h1 className="pt-4 text-lg text-white font-bold">
          This video is a timer and long video etc. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Cum, fuga.
        </h1>
        <div className="w-full border-b-2 border-purple-500 my-10"></div>
        <div className="w-full h-32 flex">
          <div className="md:w-1/6 sm:w-1/5 h-full bg-black rounded-full"></div>
          <div className="mt-8 mx-5 text-white">
            <h1 className="font-bold text-2xl">Kumar Rao</h1>
            <h1>
              <span>39.5k</span> Subscribers
            </h1>
          </div>
          <div className="m-8">
            <button className="text-white font-bold h-14 w-28 rounded bg-purple-500 p-2 cursor-pointer text-lg">
              Subscribe
            </button>
          </div>
        </div>
        <div className="">
          <div className="w-full border-b-2 border-purple-500 my-10"></div>
          <ManageComments />
        </div>
      </div>
      <RecommendedVideos />
    </>
  );
};

export default Video;
