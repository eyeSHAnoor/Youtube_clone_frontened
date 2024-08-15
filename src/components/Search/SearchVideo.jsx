import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SearchVideo = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  //?page=1&limit=10&sortBy=createdAt&sortOrder=desc&search=ao
  // Example of query params
  const page = 1;
  const limit = 10;
  const sortBy = "createdAt"; // or 'date', 'views' etc.
  const sortOrder = "desc"; // or 'asc'

  const [search, setSearch] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearchVideo();
      setSearch(" ");
    }
  };

  const handleSearchVideo = async () => {
    console.log(search);
    try {
      const response = await axios.get(
        `http://localhost:8000/api/v1/videos/search-videos?page=${page}&limit=${limit}&sortBy=${sortBy}&sortOrder=${sortOrder}&search=${search}`
      );
      console.log(response);
      setVideos(response.data.data); // Assuming the videos are in `data` field
      navigate("/search", { state: { videos } });
    } catch (error) {
      setError(error.response?.data?.message || "Failed to fetch videos");
    }
  };
  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        className="md:w-[31rem] sm:hidden md:block p-2 rounded-lg bg-custom-black border border-purple-500 text-white "
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </>
  );
};

export default SearchVideo;
