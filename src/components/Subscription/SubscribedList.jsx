import React, { useEffect, useState } from "react";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import SubscribedListItems from "./SubscribedListItems";
import { useLocation } from "react-router-dom";

const SubscribedList = () => {
  const axiosPrivate = useAxiosPrivate();

  //EXTRACT USER DETAIL FROM PREV LOCATION STATE
  const location = useLocation();
  const user = location?.state?.user || {};

  //TAKE THE LIST OF CHANNELS THAT U HAVE SUBSCRIBED
  const [subscribedList, setSubscribedList] = useState([]);

  //FETCH SUBSCRIBED CHANNELS LIST
  useEffect(() => {
    const getSubscribedList = async () => {
      try {
        //THOSE CHANNELS THAT YOU (PERSONAL) SUBSCRIBED
        if (!user?._id) {
          const response = await axiosPrivate.get(
            "/api/v1/subscription/Subscribed-channel"
          );
          // console.log(response);
          setSubscribedList(response?.data?.data);
        } else {
          //THOSE CHANNEL THAT USER SUBSCRIBED
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
      {/* CHECK IF U HAVE SUBSCRIBED ANY CHANNEL OR NOT */}
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
