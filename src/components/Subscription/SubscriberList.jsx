import React, { useEffect, useState } from "react";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import SubscribedListItems from "./SubscribedListItems";
import { useLocation } from "react-router-dom";

const SubscriberList = () => {
  const axiosPrivate = useAxiosPrivate();

  const location = useLocation();
  const user = location?.state?.user || {};

  const [subscriber, setSubscriber] = useState([]);
  useEffect(() => {
    const fetchSubscribers = async () => {
      if (!user?._id) {
        const response = await axiosPrivate.get(
          "/api/v1/subscription/Subscriber"
        );
        console.log(response);
        setSubscriber(response.data.data);
      } else {
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
