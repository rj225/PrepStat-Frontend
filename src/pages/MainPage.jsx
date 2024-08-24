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
      
      <Layout className="bg-gradient-to-br from-[#f8f3ed] from-20% via-[#f7e8d3] to-[#f8e1c4]">
      <CustomSidebar />
        <Content className="p-6 font-serif">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-5xl text-font font-bold">Welcome to <PrepStat/></h1>
            <p className="text-gray-700 italic font-semibold text-lg mt-4">
              Get ready for thrive experince.
            </p>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainContent;
