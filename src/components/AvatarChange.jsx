import React, { useState } from "react";
import useAxiosPrivate from "../Hooks/useAxiosPrivate";

const AvatarChange = ({ onDone }) => {
  const [avatarURL, setAvatarURL] = useState("");
  const [avatar, setavatar] = useState("");
  const [res, setRes] = useState("");

  const axiosPrivate = useAxiosPrivate();

  const handleavatarFileChange = (e) => {
    const file = e.target.files[0];
    setavatar(file);
    if (file) {
      setAvatarURL(URL.createObjectURL(file));
    }
  };

  const handleavatarChange = async () => {
    try {
      if (!avatar) return; // Exit if no file is selected

      const formData = new FormData();
      formData.append("avatar", avatar);
      const response = await axiosPrivate.patch(
        "/api/v1/users/change-avatar",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setRes(response.data.message);
      console.log(response.data);
    } catch (err) {
      console.log("error in changing avatar Image ", err);
      throw err;
    }
  };

  return (
    <>
      {res === "" ? (
        <>
          <div className="w-full h-64 border-4 border-dashed border-white flex items-center justify-center relative">
            <label htmlFor="avatarImage" className="text-white absolute z-10">
              Select avatar Image
            </label>
            <input
              type="file"
              name="avatarImage"
              id="avatarImage"
              className="hidden"
              onChange={handleavatarFileChange}
            />
            <img
              src={avatarURL}
              alt=""
              className="object-avatar h-full w-full absolute inset-0"
            />
          </div>
          <button
            className="text-white font-bold h-10 w-full mt-3 rounded bg-purple-500 p-2 pl-5 cursor-pointer hover:bg-purple-600"
            onClick={handleavatarChange}
          >
            Set
          </button>
        </>
      ) : (
        <div className="text-white capitalize text-lg text-center font-bold ">
          {res}
          <button
            className="text-white font-bold h-10 w-full mt-3 rounded bg-purple-500  pl-5 cursor-pointer hover:bg-purple-600"
            onClick={onDone}
          >
            Done
          </button>
        </div>
      )}
    </>
  );
};

export default AvatarChange;
