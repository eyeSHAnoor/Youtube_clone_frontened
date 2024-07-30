import React from "react";

const RecommendedVideos = () => {
  return (
    <div className="h-36 w-2/5 mx-14 mt-5  max-w-full md:flex hidden ">
      <div className="h-full  w-1/2 ">
        <img
          src="https://images.pexels.com/photos/27364090/pexels-photo-27364090/free-photo-of-a-man-in-a-black-shirt-and-white-pants-standing-on-a-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="object-cover h-full w-full rounded-xl"
        />
      </div>
      <div className="h-4/5  w-1/2 mx-4 text-white font-bold pt-2">
        <h2 className="text-2xl">
          This is Heading Lorem ipsum dolor sit amet.
        </h2>
        <h2 className="text-gray-400">Marker Notion</h2>
        <h2 className="text-gray-400">
          <span>4M</span>views ,<span>14h</span>ago
        </h2>
      </div>
    </div>
  );
};

export default RecommendedVideos;
