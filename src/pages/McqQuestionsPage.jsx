import React from 'react'
import { useParams,useLocation } from 'react-router-dom'
import MCQuestion from '../components/MCQuestion'
import Navbar from '../components/Navbar'
import CustomSidebar from '../components/CustomSidebar'
import { FaFileLines } from "react-icons/fa6";

import Footer from "../components/Footer";
import FirstCapital from '../utils/FirstCapital'
import VerticalAd from '../components/VerticalAd'
import InterviewQuestionPage from './InterviewQuestionPage'

function QuestionsPage() {
  
    const location = useLocation(); 
    const x = location.pathname.split('/').filter(word => word != 'topic' && word != '')
    // console.log(x);
    
    


  return (
    <div className=" h-full font-serif">
      <Navbar />
      <div className="bg-gradient-to-t h h-full from-[#f8f3ed] from-20% via-[#f6eee2] to-[#f6ebdd] flex">
        <CustomSidebar />
        <div className='flex flex-col w-full md:flex-row'>
        <div className="p-4 md:w-10/12 w-full h-full md:p-6 space-y-7 overflow-hidden md:flex-1 flex flex-col">
          <h2 className="md:text-3xl text-xl flex items-center space-x-3 gap-3 font-semibold"><FaFileLines className=" text-orange-400"/>{FirstCapital(x[1])} Questions </h2>

          <div className="bg-white bg-opacity-25 rounded-lg shadow-2xl h-60 flex items-center justify-center p-4 w-full">
            For AD
          </div>

          <div className="bg-white bg-opacity-25 py-0 px-3 mb-4 md:p-6 rounded-lg shadow-2xl">
            {x[0] !== 'interview' ?  <MCQuestion topic = {x} /> : <InterviewQuestionPage topic = {x}/>}
          </div>
          <div className="bg-white hidden bg-opacity-25 rounded-lg shadow-2xl h-40 md:flex items-center justify-center p-4 w-full">
            For AD
          </div>
        </div>
        <div className='md:w-3/12 w-full'>
        <VerticalAd/>
        </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default QuestionsPage