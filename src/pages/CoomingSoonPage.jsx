import React from "react";
import { Link } from "react-router-dom";
import img from '../css/coming soon.png'

export default function ComingSoon() {
  return (
    <div>
    <div className="relative flex flex-col items-center justify-center w-screen min-h-screen bg-gradient-to-br from-orange-100 to-orange-200 overflow-hidden text-gray-800">
      {/* Background Blur Effects */}
      <div className="absolute -top-10 left-10 w-80 h-80 bg-orange-300 rounded-full opacity-40 blur-[100px]"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-400 rounded-full opacity-30 blur-[120px]"></div>
      <div className="absolute -bottom-20 left-20 w-64 h-64 bg-orange-200 rounded-full opacity-50 blur-[90px]"></div>

      {/* Decorative Lines */}
      <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center">
        <div className="w-1/2 h-[1px] bg-white border-2 border-orange-500 opacity-20 rotate-45"></div>
        <div className="w-1/2 h-[1px] bg-white border-2 border-orange-500  opacity-20 -rotate-45"></div>
      </div>

      {/* Content */}
      <div className="z-10 flex flex-col items-center text-center px-6">
        {/* Logo / Icon */}
        <div className="mb-8">
          <img
            src={img}
            alt="Logo"
            className="w-60 h-52 object-cover rounded-xl border-4 border-white shadow-lg"
          />
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-wide mb-6 text-orange-600 animate-pulse">
          Coming Soon!
        </h1>

        {/* Subtitle (Restored Line) */}
        <p className="text-lg sm:text-2xl mb-8 max-w-md font-light leading-relaxed text-gray-700">
          We're working hard to bring you some amazing <strong className="text-orange-600">stats</strong>. Stay tuned, and check back soon!
        </p>

        {/* Action Button */}
        <Link
          to="/#Feature"
          className="inline-flex items-center gap-3 bg-white text-orange-600 hover:bg-orange-600 hover:text-white px-6 py-3 rounded-full shadow-xl font-bold text-lg transition-all duration-300 ease-in-out"
        >
          <span>Take me Home</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>

      {/* Animated Floating Circles */}
      <div className="absolute md:block hidden animate-spin top-1/3 right-1/4 w-16 h-16 bg-gradient-to-tr from-orange-500 via-orange-300 to-orange-100 rounded-full opacity-70"></div>
      <div className="absolute md:block hidden bottom-1/4 left-1/4 w-12 h-12 bg-amber-500 rounded-full opacity-70 animate-bounce delay-700"></div>
      <div className="absolute md:block hidden bottom-1/3 right-1/3 w-20 h-20 bg-orange-300 rounded-full opacity-60 animate-pulse"></div>
    </div>
  </div>
  );
}
