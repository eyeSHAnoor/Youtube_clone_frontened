import React, { useState } from "react";
import useAxiosPrivate from "../Hooks/useAxiosPrivate";

const CoverImageChange = ({ onDone }) => {
  const [coverImage, setCoverImage] = useState("");
  const [cover, setCover] = useState("");
  const [res, setRes] = useState("");

  const axiosPrivate = useAxiosPrivate();

  const handleCoverFileChange = (e) => {
    const file = e.target.files[0];
    setCoverImage(file);
    if (file) {
      setCover(URL.createObjectURL(file));
    }
  };

  const handleCoverChange = async () => {
    try {
      if (!coverImage) return; // Exit if no file is selected

      const formData = new FormData();
      formData.append("coverImage", coverImage);
      const response = await axiosPrivate.patch(
        "/api/v1/users/change-cover-image",
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
      console.log("error in changing cover Image ", err);
      throw err;
    }
  };

  return (
    <>
      {res === "" ? (
        <>
          <div className="w-full h-64 border-4 border-dashed border-white flex items-center justify-center relative">
            <label htmlFor="coverImage" className="text-white absolute z-10">
              Select Cover Image
            </label>
            <input
              type="file"
              name="coverImage"
              id="coverImage"
              className="hidden"
              onChange={handleCoverFileChange}
            />
            <img
              src={cover}
              alt=""
              className="object-cover h-full w-full absolute inset-0"
            />
          </div>
          <button
            className="text-white font-bold h-10 w-full mt-3 rounded bg-purple-500 p-2 pl-5 cursor-pointer hover:bg-purple-600"
            onClick={handleCoverChange}
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

export default CoverImageChange;
