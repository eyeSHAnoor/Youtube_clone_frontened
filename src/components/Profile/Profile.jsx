import Tweets from "../Tweets/Tweets";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import { MdModeEditOutline } from "react-icons/md";
import { useEffect, useState } from "react";
import Modal from "../Modal";
import CoverImageChange from "./CoverImageChange";
import AvatarChange from "./AvatarChange";
import { Link, Outlet } from "react-router-dom";

const Profile = () => {
  const axiosPrivate = useAxiosPrivate();

  //To check whether tab for changing cover Image is open or not
  const [isCoverChange, setIsCoverChange] = useState(false);
  //To check whether tab for changing avatar is open or not
  const [avatarChange, setAvatarChange] = useState(false);

  //to store the personal data of user after fetching
  const [user, setUser] = useState({});

  //fetching personal data from server
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
      <div className="container mx-auto h-64 bg-gray-100 mt-11">
        <div className="w-full h-full border-4 border-black relative">
          <MdModeEditOutline
            className="absolute right-0 text-2xl cursor-pointer"
            onClick={() => setIsCoverChange(true)} //This ensure to open the new tab when clicked to change cover Image
          />
          <img
            src={user.coverImage} //improve UX
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex ">
          <div className="relative w-1/5 md:h-64 sm:h-32 rounded-full border-4 bg-black border-black md:bottom-28 sm:bottom-14 ml-6">
            <MdModeEditOutline
              className="absolute right-1/2 bottom-1/2 text-2xl text-white"
              onClick={() => setAvatarChange(true)} //This ensure to open the new tab when clicked to change avatar
            />
            <img
              src={user.avatar} // improve UX
              alt="Full Circle"
              className="object-cover h-full w-full rounded-full"
            />
          </div>

          <div className="text-white ml-5 ">
            <h3 className="text-2xl font-bold">{user.username}</h3>
            <h6 className="text-base">{user.email}</h6>
            <h6 className="text-base">
              Subscriber <span>{user.Subscriber?.length || 0}</span> ,
              Subscribed <span>{user.Subscribed?.length || 0}</span>
            </h6>
          </div>
        </div>

        {/* buttons to select various options to select */}
        <div className="flex justify-around bg-gray-600 p-4 rounded-lg">
          <Link to="/profile/pers-videos">
            <button className=" text-white py-2 px-4 rounded hover:bg-gray-700">
              Videos
            </button>
          </Link>
          <Link to="/profile/playlist">
            <button className=" text-white py-2 px-4 rounded hover:bg-gray-700">
              Playlist
            </button>
          </Link>
          <Link to="/profile/subscribed">
            <button className=" text-white py-2 px-4 rounded hover:bg-gray-700">
              Subscribed
            </button>
          </Link>
          <Link to="/profile/subscriber">
            <button className=" text-white py-2 px-4 rounded hover:bg-gray-700">
              Subscribers
            </button>
          </Link>
          <Link to="/profile/tweets">
            <button className=" text-white py-2 px-4 rounded hover:bg-gray-700">
              Tweets
            </button>
          </Link>
        </div>
        <Outlet></Outlet>
      </div>
      {/* a modal is used to open new tab */}
      <Modal isOpen={isCoverChange} onClose={() => setIsCoverChange(false)}>
        <CoverImageChange onDone={() => setIsCoverChange(false)} />
      </Modal>
      <Modal isOpen={avatarChange} onClose={() => setAvatarChange(false)}>
        <AvatarChange onDone={() => setAvatarChange(false)} />
      </Modal>
    </>
  );
};

export default Profile;
