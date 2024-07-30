import React from "react";
import Header from "./Header";
import Video from "./Video";

const PlayVideo = () => {
  return (
    <>
      <Header />
      <div className="bg-custom-black min-h-screen  flex">
        <Video />
      </div>
    </>
  );
};

export default PlayVideo;
