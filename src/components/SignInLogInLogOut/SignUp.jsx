import React, { useState } from "react";
import { MdModeEditOutline } from "react-icons/md";
import axios from "axios";
import SignupToLogin from "../Navigations/SignupToLogin";
import Modal from "../Modal";

const SignUp = () => {
  //stores the cover image to display once it selected
  const [cover, setCover] = useState("");
  //stores the avatar to display once it selected
  const [avatar, setAvatar] = useState("");

  //To open a model
  const [isErrOpen, setIsErrOpen] = useState(false);
  //set any error regarding the missing entity or any repetive entity
  const [err, setErr] = useState("");

  //show any error of password as it adds restrictions in setting password
  const [pwdErr, setPwdErr] = useState("");

  //To show You have succefully SignUp
  const [isSignUpDone, setIsSignUpDone] = useState(false);

  //setting the CoverImage as it selected
  const handleCoverFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCover(URL.createObjectURL(file));
    }
  };

  //setting the avatar as it selected
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  };

  //create a new user as it handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    //used to access values from formdata
    const fullname = formData.get("fullname");
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    //CHECK IF ANY FIELD IS EMPTY OR NOT
    if (!fullname || !avatar || !username || !email || !password) {
      setErr("Please complete all the required fields.");
      setIsErrOpen(true);
      return;
    }

    //TO ADD RESTRICTION TO PASSWORD
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setPwdErr(
        "Password must be at least 8 characters long, contain at least one alphabet, one digit, and one special character."
      );
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setIsSignUpDone(true); // Show success message
    } catch (error) {
      //CHECK IF EMAIL OR PASSWORD IS UNIQUE OR NOT
      if (error.response && error.response.data) {
        setErr(error.response.data.message);
        setIsErrOpen(true);
      } else {
        setErr("Sign-up failed. Please try again.");
        setIsErrOpen(true);
      }
    }
  };

  return (
    <form
      className="container mx-auto h-64 bg-gray-100"
      method="POST"
      encType="multipart/form-data" //this is used to accept files
      onSubmit={handleSubmit}
    >
      <div className="w-full h-full border-4 border-black relative">
        <label htmlFor="coverImage">
          <MdModeEditOutline className="absolute right-0 text-2xl" />
        </label>
        <input
          type="file"
          name="coverImage"
          id="coverImage"
          className="hidden"
          onChange={handleCoverFileChange} //Setting coverImage
        />
        <img
          src={cover} //display cover Image
          alt=""
          className="object-cover h-full w-full"
        />
      </div>

      <div className="relative w-1/5 md:h-64 sm:h-32 rounded-full border-4 bg-black border-black md:bottom-28 sm:bottom-14 ml-6">
        <label
          htmlFor="avatar"
          className="relative flex items-center justify-center h-full"
        >
          <MdModeEditOutline className="absolute right-1/2 bottom-1/2 text-2xl text-white" />
          {/* checks it only display text if avatar is not present */}
          {!avatar && (
            <p className="absolute text-center bottom-1 text-white">
              Add an Avatar that is essential to add
            </p>
          )}
          <input
            type="file"
            name="avatar"
            id="avatar"
            className="hidden"
            onChange={handleAvatarChange} //setting avatar
          />
          <img
            src={avatar} //display avatar for UX
            alt=""
            className="object-cover h-full w-full rounded-full"
          />
        </label>
      </div>

      <div className="-mt-24  md:w-2/3 sm:w-full ">
        <div className="mt-4">
          <label
            className="block text-gray-300 text-lg font-bold mb-2"
            htmlFor="username1"
          >
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username1"
            className="bg-transparent w-full border-b-2 border-white text-white"
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="block text-gray-300 text-lg font-bold mb-2"
            htmlFor="fullname"
          >
            Fullname
          </label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            className="bg-transparent w-full border-b-2 border-white text-white"
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="block text-gray-300 text-lg font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-transparent w-full border-b-2 border-white text-white"
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="block text-gray-300 text-lg font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="bg-transparent w-full border-b-2 border-white text-white"
            required
          />
          {/* Show error if password is not according to requirements */}
          {pwdErr.length > 0 && (
            <div className="h-12 w-full p-3 bg-red-500 text-gray-300 flex justify-between">
              <div>{pwdErr}</div>
              <button onClick={() => setPwdErr("")}>&times;</button>
            </div>
          )}
        </div>

        <div className="flex items-center justify-end mt-14">
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>
        </div>
      </div>
      {/* This navigate us from sign up to login page */}
      {isSignUpDone && (
        <SignupToLogin
          setIsSignUpDone={setIsSignUpDone}
          isSignUpDone={isSignUpDone}
        />
      )}
      {/* to show any signup error */}
      <Modal isOpen={isErrOpen} onClose={() => setIsErrOpen(false)}>
        <div className="text-white text-lg italic">{err}</div>
      </Modal>
    </form>
  );
};

export default SignUp;
