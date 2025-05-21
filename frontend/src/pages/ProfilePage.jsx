import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import assets from "../assets/assets";

const ProfilePage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const naviagate = useNavigate();
  const [name, setName] = useState("Jhon Doe");
  const [bio, setBio] = useState(
    "We both know that you are a good person and you are doing your best to be a good person. But you are not a good"
  );
  const submitHandler = async (e) => {
    e.preventDefault();
    naviagate("/");
  };

  return (
    <div className="min-h-screen bg-cover bg-no-repeat flex items-center justify-center">
      <div className="w-5/6 max-w-2xl backdrop-blur-2xl text-gray-300 border-2 border-gray-600 flex  items-center jsutidy-between max-sm:flex-col-reverse rounded-lg">
        <form
          onSubmit={submitHandler}
          action=""
          className="flex flex-col gap-5  p-10 flex-1"
        >
          <h3 className="text-lg">Profile details</h3>
          <label
            htmlFor="avatar"
            className="flex items-center gap-3 cursor-pointer"
          >
            <input
              onChange={(e) => {
                setSelectedImage(e.target.files[0]);
              }}
              type="file"
              name=""
              id="avatar"
              accept="image/png, image/jpeg*"
              hidden
            />
            <img
              src={
                selectedImage
                  ? URL.createObjectURL(selectedImage)
                  : assets.avatar_icon
              }
              alt=""
              className={`w-12 h-12 ${selectedImage && "rounded-full"}`}
            />{" "}
            upload profile picture
          </label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            type="text"
            required
            placeholder="Name"
            className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          <textarea
            onChange={(e) => {
              setBio(e.target.value);
            }}
            placeholder="Your bio or description"
            required
            className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
            value={bio}
            rows={4}
          ></textarea>
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-400 to-violet-600 text-white p-2 rounded-ful text-lg cursor-pointer"
          >
            Save
          </button>
        </form>
        <img
          src={assets.logo_icon}
          alt=""
          className="max-w-44 aspect-square rounded-full mx-10 max:sm:mt-10"
        />
      </div>
    </div>
  );
};

export default ProfilePage;
