import React, { useEffect, useState } from "react";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import SubscribedListItems from "./SubscribedListItems";
import { useLocation } from "react-router-dom";

const SubscribedList = () => {
  const axiosPrivate = useAxiosPrivate();

  const location = useLocation();
  const user = location?.state?.user || {};

  const [subscribedList, setSubscribedList] = useState([]);

  useEffect(() => {
    const getSubscribedList = async () => {
      try {
        if (!user?._id) {
          const response = await axiosPrivate.get(
            "/api/v1/subscription/Subscribed-channel"
          );
          // console.log(response);
          setSubscribedList(response?.data?.data);
        } else {
          const response = await axiosPrivate.get(
            `/api/v1/subscription/Subscribed-channel/${user._id}`
          );
          // console.log(response.data.data);
          setSubscribedList(response?.data?.data);
        }
      } catch (error) {
        console.error("Error fetching subscribed channels:", error);
      }
    };

    getSubscribedList();
  }, [axiosPrivate]);

  return (
    <div>
      {subscribedList.length > 0 ? (
        subscribedList.map((subscribed, key) => (
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

export default SubscribedList;
