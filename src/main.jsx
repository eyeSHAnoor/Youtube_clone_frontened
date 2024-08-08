import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./components/Profile.jsx";
import Login from "./components/Login.jsx";
import VideoList, { videoLoader } from "./components/VideoList.jsx";
import PlayVideo from "./components/PlayVideo.jsx";
import SignUp from "./components/SignUp.jsx";
import { AuthProvider } from "./store/AuthProvider.jsx";
import ChangePwd from "./components/ChangePwd.jsx";
import Logout from "./components/Logout.jsx";
import PersonalVideos from "./components/PersonalVideos.jsx";
import PlayList from "./components/PlayList.jsx";

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
