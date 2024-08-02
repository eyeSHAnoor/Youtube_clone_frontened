import { useState } from "react";
import useAxiosPrivate from "../Hooks/useAxiosPrivate";

const Logout = ({ onNo }) => {
  const [res, setRes] = useState("");
  const axiosPrivate = useAxiosPrivate();

  const handleLogOut = async () => {
    try {
      const resp = await axiosPrivate.post("/api/v1/users/logout", {});
      console.log(resp.data.message);
      setRes(resp.data.message);
    } catch (error) {
      console.error("Error logging out:", error);
      // Handle the error case as needed
    }
  };

  return (
    <>
      {res === "" ? (
        <div className="text-white">
          <h1 className="p-4 mb-14">Are you sure you want to log out?</h1>
          <div className="flex justify-between">
            <button
              className="font-bold h-10 w-1/2 rounded bg-purple-500 p-2 pl-5 cursor-pointer hover:bg-purple-600"
              onClick={onNo}
            >
              No
            </button>
            <button
              className="font-bold h-10 w-1/2 ml-2 rounded bg-purple-500 p-2 pl-5 cursor-pointer hover:bg-purple-600"
              onClick={handleLogOut}
            >
              Yes
            </button>
          </div>
        </div>
      ) : (
        <div className=" m-16 text-2xl capitalize text-white text-center">
          {res}
        </div>
      )}
    </>
  );
};

export default Logout;
