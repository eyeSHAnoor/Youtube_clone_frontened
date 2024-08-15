import { useState } from "react";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";

const Logout = ({ onNo }) => {
  //it stores the response once logout is completed
  const [res, setRes] = useState("");
  const axiosPrivate = useAxiosPrivate();

  //loging out the user as deleting its refreshToken cookie
  const handleLogOut = async () => {
    try {
      const resp = await axiosPrivate.post("/api/v1/users/logout", {});
      console.log(resp.data.message);
      setRes(resp.data.message);

      setTimeout(() => {
        window.location.reload(); // This reloads the page
      }, 1000); // Adjust delay as needed
    } catch (error) {
      console.error("Error logging out:", error);
      // Handle the error case as needed
    }
  };

  return (
    <>
      {/* checks if logout is completed or not */}
      {res === "" ? (
        <div className="text-white">
          <h1 className="p-4 mb-14">Are you sure you want to log out?</h1>
          <div className="flex justify-between">
            <button
              className="font-bold h-10 w-1/2 rounded bg-purple-500 p-2 pl-5 cursor-pointer hover:bg-purple-600"
              onClick={onNo} //close the tab
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
