import React, { useEffect } from "react";

const PlayListItems = ({
  playlist,
  AddVideoToPlayList,
  getVideoStatus,
  status,
}) => {
  useEffect(() => {
    getVideoStatus(playlist._id);
  }, [status]);
  return (
    <div className="flex justify-between items-center">
      <div className="w-4/5 flex items-center">
        <div className="bg-white h-14 w-1/6 rounded-full">
          <img
            src={playlist.owner.avatar}
            alt=""
            className="h-full w-full object-cover rounded-full"
          />
        </div>
        <div className="ml-4">
          <h1 className="text-xl font-medium">{playlist.name}</h1>
          <p className="text-gray-400 -mt-1">{playlist.description}</p>
        </div>
      </div>
      <div className="w-1/5 flex justify-end">
        <button
          className={`h-8 w-20 flex items-center justify-center rounded-xl text-white ${
            status
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-purple-500 hover:bg-purple-700"
          }`}
          onClick={() => AddVideoToPlayList(playlist._id)}
          disabled={status}
        >
          {status ? "added" : "add"}
        </button>
      </div>
    </div>
  );
};

export default PlayListItems;
