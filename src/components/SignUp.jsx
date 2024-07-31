import React, { useState } from "react";
import { MdModeEditOutline } from "react-icons/md";
import { Form } from "react-router-dom";

const SignUp = () => {
  const [cover, setCover] = useState("");
  const [avatar, setAvatar] = useState("");
  const handleCoverFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCover(URL.createObjectURL(file));
    }
  };
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  };
  return (
    <Form className="container mx-auto h-64 bg-gray-100">
      <div className="w-full h-full border-4 border-black relative">
        <label htmlFor="coverImage">
          <MdModeEditOutline className="absolute right-0 text-2xl" />
        </label>
        <input
          type="file"
          name="coverImage"
          id="coverImage"
          className="hidden"
          onChange={handleCoverFileChange}
        />
        <img src={cover} alt="" className="object-cover h-full w-full" />
      </div>

      <div className="w-64 h-64 rounded-full border-4 bg-black border-black absolute bottom-44 ml-6">
        <label
          htmlFor="avatarImage"
          className="relative flex items-center justify-center h-full"
        >
          <MdModeEditOutline className="absolute right-1/2 bottom-1/2 text-2xl text-white" />
          <p className="absolute text-center bottom-1 text-white">
            Add an Avatar that is essential to add
          </p>
          <input
            type="file"
            name="avatarImage"
            id="avatarImage"
            className="hidden"
            onChange={handleAvatarChange}
          />
          <img
            src={avatar}
            alt=""
            className="object-cover h-full w-full rounded-full"
          />
        </label>
      </div>

      <div className="sm:mt-52 md:hidden md:w-2/3 sm:w-full ">
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
            htmlFor=" Email"
          >
            Email
          </label>
          <input
            type="email"
            name="username"
            id=" Email"
            className="bg-transparent w-full border-b-2 border-white text-white"
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="block text-gray-300 text-lg font-bold mb-2"
            htmlFor="Password"
          >
            Password
          </label>
          <input
            type="password"
            name="Password"
            id="Password"
            className="bg-transparent w-full border-b-2 border-white text-white"
            required
          />
        </div>

        <div className="flex items-center justify-end mt-14">
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-700 w-full text-white font-bold py-2 px-4 rounded
             focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>
        </div>
      </div>

      <div className="md:ml-80 sm:hidden md:block md:w-2/3 sm:w-full ">
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
            htmlFor=" Email"
          >
            Email
          </label>
          <input
            type="email"
            name="username"
            id=" Email"
            className="bg-transparent w-full border-b-2 border-white text-white"
            required
          />
        </div>

        <div className="mt-4">
          <label
            className="block text-gray-300 text-lg font-bold mb-2"
            htmlFor="Password"
          >
            Password
          </label>
          <input
            type="password"
            name="Password"
            id="Password"
            className="bg-transparent w-full border-b-2 border-white text-white"
            required
          />
        </div>

        <div className="flex items-center justify-end mt-14">
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-700 w-full text-white font-bold py-2 px-4 rounded
             focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>
        </div>
      </div>
    </Form>
  );
};

export default SignUp;
