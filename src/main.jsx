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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
