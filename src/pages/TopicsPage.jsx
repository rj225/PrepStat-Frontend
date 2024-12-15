import React, { useEffect, useState } from "react";
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

  useEffect(()=>{
        window.scrollTo(0, 0);
      })

  return (
    <div className="h-full font-serif">
      <Navbar />
      <div className="bg-gradient-to-t h h-full from-[#f8f3ed] from-20% via-[#f6eee2] to-[#f6ebdd] flex">
        <CustomSidebar />
        <div className="flex flex-col w-full md:flex-row">
        <div className="p-4 md:w-9/12 w-full h-full md:p-6 space-y-7 overflow-hidden md:flex-1 flex flex-col">
          <h2 className="md:text-3xl text-xl flex items-center space-x-3 gap-3 font-semibold"><FaFolderMinus className="text-amber-400"/> {FirstCapital(topic)} Topics </h2>

          <div className="bg-white bg-opacity-25 rounded-lg shadow-2xl h-60 flex items-center justify-center p-4 w-full">
            For AD
          </div>

          <div className="bg-white bg-opacity-25 p-4 mb-4 md:p-6 rounded-lg shadow-2xl">
            <Folder topic = {topic}/>
          </div>
          <div className="bg-white hidden bg-opacity-25 rounded-lg shadow-2xl h-40 md:flex items-center justify-center p-4 w-full">
            For AD
          </div>
        </div>
        <div className="md:w-3/12 w-full">
          <VerticalAd/>
        </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Topics;
