import React, { useState } from "react";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import Loading from "../Loading";

const UploadForm = () => {
  //Aform that is used to upload a video
  //accept video
  const [video, setVideo] = useState(null);
  //accept thumbnail
  const [thumbnail, setThumbnail] = useState(null);
  //accept title
  const [title, setTitle] = useState("");
  //takes description
  const [description, setDescription] = useState("");

  //takes videoImage as to display on secreen when it is selected
  const [videoImage, setVideoImage] = useState(null);
  //takes thumbnail as to display on secreen when it is selected
  const [thumbnailImage, setThumbnailImage] = useState(null);

  //stores response once video is uploaded
  const [res, setRes] = useState("");

  //show video is uploading
  const [loading, setLoading] = useState(false);

  const axiosPrivate = useAxiosPrivate();

  //set the videoImage
  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    setVideo(file);
    if (file) {
      setVideoImage(URL.createObjectURL(file));
    }
  };

  //sets the thumbnail
  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    setThumbnail(file);
    if (file) {
      setThumbnailImage(URL.createObjectURL(file));
    }
  };

  //handle uploading video to make it public to all
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!video || !thumbnail || !title || !description) {
      alert("Please fill all fields and upload both video and thumbnail.");
      return;
    }

    const formData = new FormData();
    formData.append("video", video);
    formData.append("thumbnail", thumbnail);
    formData.append("title", title);
    formData.append("description", description);

    setLoading(true);

    try {
      const response = await axiosPrivate.post(
        "/api/v1/videos/upload-video",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);

      setRes(response?.data.message);
      // Handle success, e.g., redirect to a different page
    } catch (error) {
      console.error(
        "Error during video upload:",
        error.response?.data || error.message
      );
      // Handle error appropriately
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          {/* checks whether file is uploaded or not */}
          {res === "" ? (
            <>
              <h2 className="text-xl font-bold mb-4 text-white">
                Upload Video
              </h2>
              <div className="w-full mb-5 border-b-2 border-gray-500"></div>

              <form
                onSubmit={handleSubmit}
                className="space-y-4"
                encType="multipart/form-data"
                method="POST"
              >
                {/* upload video */}
                <div className="h-56 w-full relative border-2 border-white">
                  <p className="text-white text-xl absolute bottom-28 left-32">
                    Upload your file here
                  </p>
                  <label
                    htmlFor="video-upload"
                    className="absolute bottom-10 left-44 text-white font-bold h-10 w-24 rounded bg-purple-500 p-2 pl-5 cursor-pointer"
                  >
                    Upload
                  </label>
                  <input
                    type="file"
                    id="video-upload"
                    accept="video/*"
                    onChange={handleVideoChange}
                    className="hidden"
                  />
                  {videoImage && (
                    <img
                      src={videoImage}
                      alt="Video Preview"
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>
                <div className="border-2 h-14 mt-4 ml-2 border-white flex">
                  <label
                    htmlFor="thumbnail"
                    className="text-white font-bold h-10 w-1/4 m-2 rounded bg-purple-500 p-2 pl-5 cursor-pointer"
                  >
                    Thumbnail:
                  </label>
                  <input
                    type="file"
                    id="thumbnail"
                    accept="image/*"
                    onChange={handleThumbnailChange}
                    className="hidden"
                  />
                  {/* {thumbnailImage && (
            <img
              src={thumbnailImage}
              alt="Thumbnail Preview"
              className="h-full w-full object-cover"
            />
          )} */}
                  <div className="text-white">{thumbnailImage}</div>
                </div>
                <div>
                  <label className="block mb-2 text-white font-bold">
                    Title:
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 border rounded bg-transparent text-white"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-white font-bold">
                    Description:
                  </label>
                  <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-2 border rounded bg-transparent text-white"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-purple-500 text-white px-4 py-2 float-end rounded"
                >
                  Upload
                </button>
              </form>
            </>
          ) : (
            <div className="text-white text-xl italic text-center m-9">
              {res}{" "}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default UploadForm;
