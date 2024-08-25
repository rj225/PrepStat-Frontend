import React from 'react';
import { Layout } from 'antd';
import CustomSidebar from '../components/CustomSidebar';
import Navbar from '../components/Navbar';
import PrepStat from '../utils/PrepStat';

const { Content } = Layout;

const MainContent = () => {
  return (
    <Layout className="min-h-screen font-serif">
      <Navbar />
      <Layout className="bg-gradient-to-b from-[#f8f3ed] from-20% via-[#f7e8d3] to-[#f8e1c4] flex flex-col md:flex-row">
        <CustomSidebar className="w-full md:w-1/4 lg:w-1/5" />
        <Content className="p-4 md:p-6 flex-1">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
            <h1 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-font font-bold">
              Welcome to <PrepStat />
            </h1>
            <p className="text-gray-700 italic font-semibold text-sm sm:text-base md:text-lg mt-4">
              Get ready for a thriving experience.
            </p>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainContent;
