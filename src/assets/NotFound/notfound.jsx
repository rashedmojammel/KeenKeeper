import React from "react";
import { Link } from "react-router"; 

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white px-6">
    
      <h1 className="text-9xl font-extrabold tracking-widest">404</h1>

      <div className="bg-white text-purple-600 px-4 py-2 rounded-lg font-bold text-2xl mt-4">
        Page Not Found
      </div>

      {/* Message */}
      <p className="mt-10 text-lg text-center ">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex gap-4">
        <Link
          to="/"
          className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Go Home
        </Link>
      </div>
      <div className="mt-12 text-6xl animate-bounce">
        🚫
      </div>
    </div>
  );
};

export default NotFound;