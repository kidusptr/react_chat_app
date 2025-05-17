import React, { useState } from "react";
import assets from "../assets/assets";

const LoginPage = () => {
  const [currentState, setCurrentState] = useState("Sign up");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [isDataSubmitted, setIsDataSubmitted] = useState(false);
  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center gap-8 sm:justify-evenlt max-sm:flex-col backdrop-blur-2xl">
      {/* Background image */}
      <img src={assets.logo_big} alt="" className="w-[min(30vw,250px)]" />
      {/* Login form */}
      <form
        action=""
        className="border-2 bg-white/2 text-white border-gray-500 p-6 flex flex-col gap-6 rounded-lg shadow-lg"
      >
        <h2 className="font-medium text-2xl flex justify-between items-center">
          {currentState}{" "}
          <img src={assets.arrow_icon} alt="" className="w-5 cursor-pointer" />
        </h2>

        {currentState === "Sign up" && !isDataSubmitted && (
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="p-2 border border-gray-500 rounded-md focus:outline-none"
            placeholder="Full Name"
            required
          />
        )}

        {!isDataSubmitted && (
          <>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </>
        )}

        {currentState === "Sign up" && isDataSubmitted && (
          <textarea
            placeholder="Please enter your bio here ..."
            rows={4}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        )}

        <button
          type="submit"
          className="p-3 bg-gradient-to-r from-purple-400 to-violet-600 text-white rounded-md cursor-pointer"
        >
          {currentState === "Sign up" ? "Create Account" : "Login"}
        </button>

        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <input type="checkbox" />
          <p>Agree to the terms of use and privacy policy </p>
        </div>

        <div className="flex flex-col gap-2">
          {currentState === "Sign up" ? (
            <p className="text-gray-600 text-sm">
              Already have an account?{" "}
              <span
                className="font-medium text-violet-500 cursor-pointer"
                onClick={() => {
                  setCurrentState("Login");
                  setIsDataSubmitted(false);
                }}
              >
                Login
              </span>
            </p>
          ) : (
            <p className="text-gray-600 text-sm">
              Don't have an account?{" "}
              <span
                className="font-medium text-violet-500 cursor-pointer"
                onClick={() => {
                  setCurrentState("Sign up");
                  setIsDataSubmitted(false);
                }}
              >
                Sign up
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
