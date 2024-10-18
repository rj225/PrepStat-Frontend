import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomSidebar from '../components/CustomSidebar';

const AboutPage = () => {
  return (
    <div className="bg-lightish-orange text-text-color min-h-screen">
      <Navbar />

      <CustomSidebar className="w-full md:w-1/4 lg:w-1/5" />

      {/* About Us Section */}
      <section className="py-16 px-4 text-center">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-text-color mb-4">About Us</h2>
          <p className="text-lg text-text-color">
            We are a team of three passionate BTech students from SOA, ITER, with a deep interest in full-stack development. Our goal is to provide high-quality resources for placement preparation and to help students excel in their career pursuits.
          </p>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-light-bg">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-text-color text-center mb-8">Our Journey</h2>
          <motion.div 
            className="relative border-l-2 border-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -left-4 w-8 h-8 bg-primary rounded-full"></div>
            <div className="mb-8 pl-10">
              <h3 className="text-xl font-semibold text-text-color mb-2">Project Launch</h3>
              <p className="text-text-color">Our platform's initial launch, offering a range of questions and statistics.</p>
            </div>
            <div className="mb-8 pl-10">
              <h3 className="text-xl font-semibold text-text-color mb-2">Major Update</h3>
              <p className="text-text-color">Introduction of new question types and enhanced user experience.</p>
            </div>
            <div className="mb-8 pl-10">
              <h3 className="text-xl font-semibold text-text-color mb-2">User Milestone</h3>
              <p className="text-text-color">Reaching 10,000 active users on our platform.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Extra Features Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-text-color text-center mb-8">Extra Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-text-color mb-4">Interactive Quizzes</h3>
              <p className="text-text-color">Engage with interactive quizzes that provide instant feedback and explanations.</p>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-text-color mb-4">Personalized Statistics</h3>
              <p className="text-text-color">Track your progress and see detailed statistics of your performance over time.</p>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-text-color mb-4">Expert Tips</h3>
              <p className="text-text-color">Get insights and tips from industry experts to enhance your preparation strategy.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
