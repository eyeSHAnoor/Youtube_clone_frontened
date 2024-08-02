import { useEffect, useRef, useState } from "react";
import { Form } from "react-router-dom";
import useAxiosPrivate from "../Hooks/useAxiosPrivate";

const ChangePwd = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [res, setRes] = useState("");

  const pwdRef = useRef();

  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    if (pwdRef.current) {
      pwdRef.current.focus();
    }

    setRes("");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(oldPassword, newPassword);
    try {
      const response = await axiosPrivate.post(
        "/api/v1/users/change-password",
        {
          oldPassword,
          newPassword,
        }
      );
      console.log(response.data.message);
      setRes(response.data.message);
    } catch (err) {
      if (err.response) {
        console.log("Error response:", err.response.data);
        setRes(err.response.data.message || "An error occurred");
      }
      console.log("error in changing Pwd ", err);
      throw err;
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen p-6 w-screen">
        <div className="text-center p-6 rounded-lg shadow-lg max-w-md w-full">
          <div className="text-purple-700 md:text-5xl sm:text-2xl font-bold mb-4 italic">
            Play_Videos
          </div>
          {res === "" ? (
            <Form
              method="POST"
              onSubmit={handleSubmit}
              action="/forgot-password"
            >
              <input
                type="password"
                placeholder="Enter Your old password"
                className="p-2 rounded-md text-gray-800 mb-4 w-full"
                onChange={(e) => setOldPassword(e.target.value)}
                ref={pwdRef}
              />
              <input
                type="password"
                placeholder="Enter Your New password"
                className="p-2 rounded-md text-gray-800 mb-4 w-full"
                autoComplete="current-password"
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <div>
                <button
                  type="submit"
                  className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 w-full"
                >
                  Sign In
                </button>
              </div>
            </Form>
          ) : (
            <div className="text-white p-3 text-center italic text-2xl">
              {res}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ChangePwd;
