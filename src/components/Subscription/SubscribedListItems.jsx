import React, { useEffect, useState } from "react";
import useUserId from "../../Hooks/useUserId";
import { Link } from "react-router-dom";

const SubscribedListItems = ({ subscribed }) => {
  const userId = useUserId();
  // console.log(userId, subscribed);
  const [isSubscribed, setIsSubscribed] = useState(false);
  useEffect(() => {
    const isSubscriber = subscribed.Subscriber.some(
      (subscriber) => subscriber === userId
    );
    // console.log("isSubscriber:", isSubscriber); // Debug log
    setIsSubscribed(isSubscriber);
    // console.log(isSubscribed);
  }, [subscribed]);
  return (
    <div className="flex justify-between cursor-pointer mt-10">
      <div className="w-full flex items-center  p-4 hover:bg-gray-600 rounded-xl">
        <div className="bg-white h-16 w-16 rounded-full">
          <img
            src={subscribed.avatar}
            alt=""
            className="h-full w-full object-cover rounded-full"
          />
        </div>
        <Link to="/user" state={{ user: subscribed }}>
          <div className="ml-4">
            <h1 className="text-2xl font-medium text-white">
              {subscribed.username}
            </h1>
            <p className="text-gray-400 -mt-1">{subscribed.email}</p>
          </div>
        </Link>
      </div>
      <div className="relative  p-4">
        <button
          className={`text-white font-bold h-10 w-fit rounded p-2 ${
            isSubscribed
              ? "bg-gray-500 cursor-not-allowed" // Disabled state styling
              : "bg-purple-500 cursor-pointer hover:bg-purple-600"
          }`}
          disabled={isSubscribed}
        >
          Subscribed
        </button>
      </div>
    </div>
  );
};

export default SubscribedListItems;
