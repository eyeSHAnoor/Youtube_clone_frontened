import React, { useState } from "react";

const UploadForm = () => {
  const [video, setVideo] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [title, setTitle] = useState("");
  const [owner, setOwner] = useState("");

  const handleVideoChange = (e) => {
    setVideo(e.target.files[0]);
  };

  const handleThumbnailChange = (e) => {
    setThumbnail(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <>
      <h2 className="text-xl font-bold mb-4 text-white">Upload Video</h2>
      <div className=" w-full  mb-5 border-b-2 border-gray-500"></div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* upload video */}
        <div className="h-56 w-full  relative border-2 border-white">
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
        </div>
        <div className=" border-2 h-14 pt-4 pl-2 border-white ">
          <label
            htmlFor="thumbnail"
            className="text-white font-bold h-10 w-24 rounded bg-purple-500 p-2 pl-5 cursor-pointer "
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
        </div>
        <div>
          <label className="block mb-2 text-white font-bold">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded bg-transparent text-white"
          />
        </div>
        <div>
          <label className="block mb-2 text-white font-bold">Owner:</label>
          <input
            type="text"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
            className="w-full p-2 border rounded  bg-transparent text-white
          "
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
  );
};

export default UploadForm;
