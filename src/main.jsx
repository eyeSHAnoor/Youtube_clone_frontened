import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./components/Profile/Profile.jsx";
import Login from "./components/SignInLogInLogOut/Login.jsx";
import VideoList, { videoLoader } from "./components/Videos/VideoList.jsx";
import PlayVideo from "./components/Videos/PlayVideo.jsx";
import SignUp from "./components/SignInLogInLogOut/SignUp.jsx";
import { AuthProvider } from "./store/AuthProvider.jsx";
import ChangePwd from "./components/SignInLogInLogOut/ChangePwd.jsx";
import Logout from "./components/SignInLogInLogOut/Logout.jsx";
import PersonalVideos from "./components/Profile/PersonalVideos.jsx";
import PlayList from "./components/Playlist/PlayList.jsx";
import UserProvider from "./store/UserProvider.jsx";
import Practice from "./components/Practice.jsx";
import SubscribedList from "./components/Subscription/SubscribedList.jsx";
import UserProfile from "./components/Profile/UserProfile.jsx";
import UserVideos from "./components/Videos/UserVideos.jsx";
import Tweets from "./components/Tweets/Tweets.jsx";
import TweetList from "./components/Tweets/TweetList.jsx";
import LikedVideos from "./components/Videos/LikedVideos.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/profile",
        element: <Profile />,
        children: [
          {
            path: "pers-videos",
            element: <PersonalVideos />,
          },
          {
            path: "playlist",
            element: <PlayList />,
          },
          {
            path: "subscribed",
            element: <SubscribedList />,
          },
          {
            path: "tweets",
            element: <Tweets />,
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/home",
        element: <VideoList />,
        loader: videoLoader,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/play-video",
        element: <PlayVideo />,
      },
      {
        path: "/forgot-password",
        element: <ChangePwd />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "/user",
        element: <UserProfile />,
        children: [
          {
            path: "videos",
            element: <UserVideos />,
          },
          {
            path: "subscribed",
            element: <SubscribedList />,
          },
          {
            path: "tweet",
            element: <Tweets />,
          },
        ],
      },
      {
        path: "/liked-videos",
        element: <LikedVideos />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
