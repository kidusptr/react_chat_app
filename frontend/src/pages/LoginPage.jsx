import React from "react";
import assets from "../assets/assets";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center gap-8 sm:justify-evenlt max-sm:flex-col backdrop-blur-2xl">
      {/* Background image */}
      <img src={assets.logo_big} alt="" className="w-[min(30vw,250px)]" />
      {/* Login form */}
      <form
        action=""
        className="border-2 bg-white/2 text-white border-gray-500 p-6 flex flex-col gap-6 rounded-lg shadow-lg"
      >
        <h2></h2>
      </form>
    </div>
  );
};

export default LoginPage;
