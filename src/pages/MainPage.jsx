import React from 'react';
import { Layout } from 'antd';
import CustomSidebar from '../components/CustomSidebar';
import Navbar from '../components/Navbar';
import PrepStat from '../utils/PrepStat';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const { Content } = Layout;

const MainContent = () => {
  return (
    <Layout className="min-h-screen font-serif">
      <Navbar />
      <Layout className="bg-gradient-to-l from-[#f8f3ed] from-20% via-[#f7e8d3] to-[#f8e1c4] flex flex-col md:flex-row">
        <CustomSidebar className="w-full md:w-1/4 lg:w-1/5" />
        <Content className="p-4 md:p-6 flex-1">
            {/* Hero Section */}
      <section className=" container flex flex-col font-serif items-center justify-center h-3/6">
        <motion.div 
          className="text-center p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">At <PrepStat/>, We Empower Your Success</h1>
          <p className="text-lg text-gray-700 mb-10">
            We provide a comprehensive platform offering aptitude, reasoning, verbal, and interview questions tailored for placements. Track the placement statistics and boost your confidence with our expertly curated resources.
          </p>
          <motion.button 
            className=" bg-back text-button-text py-2 px-4 rounded-lg shadow-lg hover:bg-button-hover transition-colors"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.9 }}
          >
            <Link to='/about' className=' text-base'>Want to know more?</Link>
            
          </motion.button>
        </motion.div>
      </section>
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
