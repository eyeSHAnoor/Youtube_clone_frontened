import Tweets from "./Tweets";
import useAxiosPrivate from "../Hooks/useAxiosPrivate";
import { useEffect, useState } from "react";

const Profile = () => {
  const axiosPrivate = useAxiosPrivate();

  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosPrivate.get("/api/v1/users/get-user");
        console.log(response);
        setUser(response?.data?.data);
        console.log(user);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [axiosPrivate]);
  return (
    <>
      <div class="container mx-auto h-64 bg-gray-100 mt-11">
        <img
          src={user.coverImage}
          alt=""
          className="w-full h-full border-4 border-black"
        />
        <img
          src={user.avatar}
          alt="Full Circle"
          class="w-64 h-64 rounded-full border-4 border-black  absolute bottom-44 ml-6"
        />
        <div className="text-white ml-72">
          <h3 className="text-2xl font-bold">{user.username}</h3>
          <h6 className="text-base">{user.email}</h6>
          <h6 className="text-base">
            Subscriber<span>{user.Subscriber}</span> , Subscribed{" "}
            <span>{user.Subscribed}</span>
          </h6>
        </div>
        <div class="flex justify-around bg-gray-600 p-4 rounded-lg mt-24">
          <button class=" text-white py-2 px-4 rounded hover:bg-gray-700">
            Videos
          </button>
          <button class=" text-white py-2 px-4 rounded hover:bg-gray-700">
            Playlist
          </button>
          <button class=" text-white py-2 px-4 rounded hover:bg-gray-700">
            Subscribed
          </button>
          <button class=" text-white py-2 px-4 rounded hover:bg-gray-700">
            Tweets
          </button>
        </div>
        <Tweets />
      </div>
    </>
  );
};

export default Profile;
