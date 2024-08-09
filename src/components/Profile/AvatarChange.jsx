import React, { useState } from "react";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";

const AvatarChange = ({ onDone }) => {
  //Used to display image after it is selected
  const [avatarURL, setAvatarURL] = useState("");
  //This is used to send in request body
  const [avatar, setavatar] = useState("");
  //to display the message after changing
  const [res, setRes] = useState("");

  const axiosPrivate = useAxiosPrivate();

  //setAvataUrl with the image that is selected
  const handleavatarFileChange = (e) => {
    const file = e.target.files[0];
    setavatar(file);
    if (file) {
      setAvatarURL(URL.createObjectURL(file));
    }
  };

  //send the request in backened or server
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
            "Content-Type": "multipart/form-data", //setUp used to send files
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
      {/* it checks weather the file is successfully changed or not */}
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
              src={avatarURL} //display image
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
            onClick={onDone} //close the tab
          >
            Done
          </button>
        </div>
      )}
    </>
  );
};

export default AvatarChange;
