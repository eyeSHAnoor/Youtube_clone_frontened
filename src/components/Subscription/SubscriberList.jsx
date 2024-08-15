import React, { useEffect, useState } from "react";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import SubscribedListItems from "./SubscribedListItems";
import { useLocation } from "react-router-dom";

const SubscriberList = () => {
  const axiosPrivate = useAxiosPrivate();

  //TAKE USER ROM PREV LOCATION
  const location = useLocation();
  const user = location?.state?.user || {};

  //STORE LIST OF SUBSCRIBERS
  const [subscriber, setSubscriber] = useState([]);

  //FETCH SUBSCRIBERS
  useEffect(() => {
    const fetchSubscribers = async () => {
      if (!user?._id) {
        //OUR (PERSONAL) SUBSCRIBERS
        const response = await axiosPrivate.get(
          "/api/v1/subscription/Subscriber"
        );
        console.log(response);
        setSubscriber(response.data.data);
      } else {
        //USERS SUBSCRIBERS
        const response = await axiosPrivate.get(
          `/api/v1/subscription/Subscriber/${user._id}`
        );
        console.log(response);
        setSubscriber(response.data.data);
      }
    };
    fetchSubscribers();
  }, [axiosPrivate]);
  return (
    <div>
      {/* CHECK IF SUBSCRIBERS AVAILABLE OR NOT */}
      {subscriber.length > 0 ? (
        subscriber.map((subscribed, key) => (
          <SubscribedListItems
            subscribed={subscribed}
            key={key}
          ></SubscribedListItems>
        ))
      ) : (
        <div className="text-white text-3xl italic text-center py-10">
          There is no Subscriber{" "}
        </div>
      )}
    </div>
  );
};

export default SubscriberList;
