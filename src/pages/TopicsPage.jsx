import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import CustomSidebar from "../components/CustomSidebar";
import Navbar from "../components/Navbar";
import Folder from "../components/Folders";
import { SiGooglenews } from "react-icons/si";
import Footer from "../components/Footer";
import FirstCapital from "../utils/FirstCapital";
import { FaFolderMinus } from "react-icons/fa";
import VerticalAd from "../components/VerticalAd";

function Topics() {
  const { topic } = useParams();
  const location = useLocation(); 


  return (
    <div className=" h-full font-serif">
      <Navbar />
      <div className="bg-gradient-to-t h h-full from-[#f8f3ed] from-20% via-[#f6eee2] to-[#f6ebdd] flex flex-col md:flex-row">
        <CustomSidebar className="w-full md:w-1/4 lg:w-1/5" />
        <div className="p-4 w-7/12 h-full md:p-6 space-y-7 flex-1">
          <h2 className=" text-3xl flex items-center space-x-3 gap-3 font-semibold">{FirstCapital(topic)} Topics <FaFolderMinus className=" text-yellow-500"/></h2>

          <div className="bg-white bg-opacity-25 rounded-lg shadow-2xl h-60 flex items-center justify-center p-4 w-full">
            For AD
          </div>

          <div className="bg-white bg-opacity-25 p-4 mb-4 md:p-6 rounded-lg shadow-2xl">
            <input
              type="Search"
              placeholder="Search.."
              className=" rounded-xl w-full"
            />
            <Folder topic = {topic}/>
          </div>
          <div className="bg-white bg-opacity-25 rounded-lg shadow-2xl h-40 flex items-center justify-center p-4 w-full">
            For AD
          </div>
        </div>

        <VerticalAd/>
      </div>
      <Footer/>
    </div>
  );
}

export default Topics;
