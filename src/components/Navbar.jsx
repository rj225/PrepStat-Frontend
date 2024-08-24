import React from 'react';
import { Layout } from 'antd';
import PrepStat from '../utils/PrepStat';
import { IoIosMail } from "react-icons/io";
import { FaQuestionCircle } from "react-icons/fa";

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header className="bg-[#f8f3ed] text-[#4E342E] flex justify-between items-center px-4">
      <div className="font-bold text-3xl">
        <PrepStat/>
      </div>
      <div className="flex items-center space-x-4">
      <input type="text" placeholder="Search..." className="p-2 focus:outline-none focus:ring-2 focus:ring-[#FFB300] focus:border-transparent border rounded-xl" />
      <button className="flex items-center space-x-2 bg-back text-font h-12 p-3 rounded-2xl shadow-md shadow-orange-700 bg-opacity-90 hover:scale-105 transition-transform duration-500">
          < IoIosMail style={{ fontSize: '25px'}} className="text-lg" />
          <span>Contact Me</span>
        </button>
        <button className="flex items-center  space-x-2 bg-back text-font h-12 p-3 rounded-2xl shadow-md shadow-orange-700 bg-opacity-90 hover:scale-105 transition-transform duration-500">
          <FaQuestionCircle className="text-lg" />
          <span>FAQ</span>
        </button>
      </div>
    </Header>
  );
};

export default Navbar;
