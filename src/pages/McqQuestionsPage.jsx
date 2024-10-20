import React from 'react'
import { useParams,useLocation } from 'react-router-dom'
import MCQuestion from '../components/MCQuestion'
import Navbar from '../components/Navbar'
import CustomSidebar from '../components/CustomSidebar'
import { FaFileLines } from "react-icons/fa6";
import { SiGooglenews } from "react-icons/si";
import Footer from "../components/Footer";

function QuestionsPage() {
  
    const location = useLocation(); 
    const x = location.pathname.split('/').filter(word => word != 'topic' && word != '')
    


  return (
    <div className=" h-full font-serif">
      <Navbar />
      <div className="bg-gradient-to-t h h-full from-[#f8f3ed] from-20% via-[#f6eee2] to-[#f6ebdd] flex flex-col md:flex-row">
        <CustomSidebar className="w-full md:w-1/4 lg:w-1/5" />
        <div className="p-4 w-6/12 h-full md:p-6 space-y-7 flex-1">
          <h2 className=" text-3xl flex items-center space-x-3 gap-3 font-semibold">{x[1]} Questions <FaFileLines className=" text-yellow-500"/></h2>

          <div className="bg-white bg-opacity-25 rounded-lg shadow-2xl h-60 flex items-center justify-center p-4 w-full">
            For AD
          </div>

          <div className="bg-white bg-opacity-25 p-4 mb-4 md:p-6 rounded-lg shadow-2xl">
            <MCQuestion topic = {x} />
          </div>
          <div className="bg-white bg-opacity-25 rounded-lg shadow-2xl h-40 flex items-center justify-center p-4 w-full">
            For AD
          </div>
        </div>

        <div className="w-3/12 p-4">
          <div className="bg-white flex items-center gap-x-2 bg-opacity-25 p-4 md:p-6 rounded-lg shadow-2xl">
            <span className=" text-black text-4xl">
              <SiGooglenews />
            </span>{" "}
            Susbscribe us for latest updates.
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default QuestionsPage