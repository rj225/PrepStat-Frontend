import React from "react";
import PrepStat from "../utils/PrepStat";

export default function Footer() {
  return (
    <footer className="text-gray-700 font-serif body-font bg-gradient-to-br from-[#ffffff] via-[#ffd195] via-60% to-[#ffffff] ">
      <div className="container md:px-5 py-3 mx-auto flex justify-center items-center flex-col">
        <div className=" flex items-center justify-center divide-x divide-slate-400">
        <div className="flex font-semibold md:text-2xl text-lg items-center justify-center">
          <PrepStat />
        </div>
        <p className="md:text-sm text-xs flex justify-center text-gray-600 ml-3 pl-3 md:ml-4 md:pl-4 py-2 mt-0">    
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
        </div>
        <p className="mt-2 italic font-medium text-gray-700 md:text-base text-sm font-serif">Designed with ❤️ by the PrepStat Team.</p>
      </div>
    </footer>
  );
}
