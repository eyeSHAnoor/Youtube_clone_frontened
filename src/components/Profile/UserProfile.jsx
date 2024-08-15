import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";

const UserProfile = () => {
  const location = useLocation();
  const { user } = location.state || {};

  const axiosPrivate = useAxiosPrivate();

  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    const getUserProfile = async () => {
      const response = await axiosPrivate.get(
        `/api/v1/users/userProfile/${user.username}`
      );
      console.log(response);
      setUserDetails(response.data.data);
    };
    getUserProfile();
  }, [axiosPrivate]);
  if (!user) {
    return <div>User data not available</div>; // Handle cases where state is not passed
  }
  return (
    <>
      <div className="container mx-auto h-64 bg-gray-100 mt-11">
        <div className="w-full h-full border-4 border-black relative">
          <img
            src={userDetails.coverImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex ">
          <div className="relative w-1/5 md:h-64 sm:h-32 rounded-full border-4 bg-black border-black md:bottom-28 sm:bottom-14 ml-6">
            <img
              src={userDetails.avatar}
              alt="Full Circle"
              className="object-cover h-full w-full rounded-full"
            />
          </div>

          <div className="text-white ml-5 ">
            <h3 className="text-2xl font-bold">{userDetails.username}</h3>
            <h6 className="text-base">{userDetails.email}</h6>
            <h6 className="text-base">
              Subscriber <span>{userDetails.subscribersCount}</span> ,
              Subscribed <span>{userDetails.channelSubscribedToCount}</span>
            </h6>
          </div>
        </div>

        {/* buttons to select various options to select */}
        <div className="flex justify-around bg-gray-600 p-4 rounded-lg">
          <Link to="/user/videos" state={{ user }}>
            <button className=" text-white py-2 px-4 rounded hover:bg-gray-700">
              Videos
            </button>
          </Link>

          <Link to="/user/subscribed" state={{ user }}>
            <button className=" text-white py-2 px-4 rounded hover:bg-gray-700">
              Subscribed
            </button>
          </Link>

          <Link to="/user/subscriber" state={{ user }}>
            <button className=" text-white py-2 px-4 rounded hover:bg-gray-700">
              Subscriber
            </button>
          </Link>

          <Link to="/user/tweet" state={{ user }}>
            <button className=" text-white py-2 px-4 rounded hover:bg-gray-700">
              Tweets
            </button>
          </Link>
        </div>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default UserProfile;
