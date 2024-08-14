import React, { useEffect, useState } from "react";
import AddTweet from "./AddTweet";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import TweetList from "./TweetList";
import { useLocation } from "react-router-dom";
const Tweets = () => {
  const axiosPrivate = useAxiosPrivate();

  //FETCH USER FROM STATE AS IT PASSED THROUGH LINK (IN CASE OR GETTING TWEETS OF USER)
  const location = useLocation();
  const user = location?.state?.user;

  //STORE LIST OF PERSONALTWEETS
  const [tweet, setTweet] = useState([]);

  //ADD TWEET
  const handleAddTweet = async (content) => {
    console.log(content);
    const response = await axiosPrivate.post("/api/v1/tweet/add", { content });

    console.log(response);
    const newTweet = response?.data?.data;
    setTweet([newTweet, ...tweet]);
  };

  //HAVE YOUR PERSONAL LIST OF TWEETS
  useEffect(() => {
    const fetchTweets = async () => {
      if (user) {
        const response = await axiosPrivate.get(
          `api/v1/tweet/user/${user._id}`
        );
        console.log(response);
        setTweet(response.data.data);
      } else {
        const response = await axiosPrivate.get("/api/v1/tweet/personal");
        console.log(response);
        setTweet(response?.data?.data);
      }
    };
    fetchTweets();
  }, [axiosPrivate, user]);

  //HANDLES DELETION OF PERSONAL TWEET
  const handleDeleteTweet = async (tweetId) => {
    const response = await axiosPrivate.delete(
      `/api/v1/tweet/delete/${tweetId}`
    );

    console.log(response);
    setTweet(tweet.filter((tweet) => tweet._id !== tweetId));
  };

  return (
    <>
      {!user && <AddTweet handleAddTweet={handleAddTweet} />}
      <TweetList tweet={tweet} handleDeleteTweet={handleDeleteTweet} />
    </>
  );
};

export default Tweets;
