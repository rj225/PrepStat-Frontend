import React from "react";
import CustomSidebar from "../components/CustomSidebar";
import Navbar from "../components/Navbar";
import "../css/Mainpage.css";
import { Link } from "react-router-dom";
import Features from "../data/Features";
import { FaInfoCircle } from "react-icons/fa";
import PrepStat from "../utils/PrepStat";


const MainContent = () => {
  return (
    <div className="min-h-screen font-serif">
      <Navbar />
      <div className="bg-gradient-to-l from-[#f8f3ed] from-20% via-[#f7e8d3] to-[#f8e1c4] flex flex-col md:flex-row">
        <CustomSidebar className="w-full md:w-1/4 lg:w-1/5" />
        <div className="flex-1">
          {/* Hero Section */}
          <section className="flex flex-col font-serif login_img_section items-center justify-center relative h-2/6 py-16">
            <div className=" bg-gradient-to-r from-gray-800 from-45% via-orange-700 via-85% to-orange-200 opacity-50 absolute inset-0 z-0"></div>
            <div className="text-center p-8 z-10">
              <h1 className="text-5xl font-bold text-gray-200 mb-6 flex flex-wrap gap-2">
                At
                <span className=" bg-gradient-to-b rounded-2xl from-white via-orange-200 via-50% to-orange-50 text-4xl shadow-lg p-1">
                  <PrepStat />
                </span>
                ,
                <span className=" text-slate-200">
                  We <strong className="text-orange-300">Empower</strong> Your
                  Success
                </span>
              </h1>
              <p className="text-lg font-serif text-gray-100 mb-10">
                <span className="font-semibold font-sans text-slate-300 underline">
                  Your all-in-one platform for placement preparation
                </span>{" "}
                : covering Aptitude, Reasoning, Verbal, Interview questions, and
                more.
              </p>

              <div className=" w-full flex justify-center">
                <button className="flex items-center space-x-2 text-lg cursor-pointer bg-orange-400 text-font h-10 p-5 rounded-2xl shadow-md shadow-orange-700 bg-opacity-90 hover:scale-105 duration-500">
                  <FaInfoCircle />
                  <span className="font-semibold text-font">Learn More</span>
                </button>
              </div>
            </div>
          </section>

          {/* Feature section */}
          <section className="container mx-auto py-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
              Unlock Your Potential
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {Features.map((feature) => (
                <div
                  key={feature.id}
                  style={{ backgroundColor: feature.bgColor }}
                  className={` p-6 rounded-lg shadow-md flex flex-col items-center`}
                >
                  {feature.icon}
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Statistics Section */}
          <section className="bg-[#f7e8d3] py-16">
            <div className="container mx-auto text-center">
              <div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Our Impact
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-5xl font-bold text-yellow-600">95%</h3>
                    <p className="text-gray-700">Placement Success Rate</p>
                  </div>
                  <div>
                    <h3 className="text-5xl font-bold text-yellow-600">
                      200K+
                    </h3>
                    <p className="text-gray-700">Active Users</p>
                  </div>
                  <div>
                    <h3 className="text-5xl font-bold text-yellow-600">100+</h3>
                    <p className="text-gray-700">Partner Institutions</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="bg-[#f8f3ed] py-16">
            <div className="container mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">
                What Our Users Say
              </h2>
              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, y: 100 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.5, staggerChildren: 0.2 },
                  },
                }}
              >
                {/* Testimonial 1 */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="italic text-gray-700">
                    "PrepStat's platform helped me land my dream job. The
                    analytics and interview prep were spot on!"
                  </p>
                  <p className="mt-4 font-semibold">
                    - John Doe, Placed at ABC Corp.
                  </p>
                </div>

                {/* Testimonial 2 */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="italic text-gray-700">
                    "I couldn't have cracked my aptitude tests without PrepStat.
                    It's a game-changer for placement prep."
                  </p>
                  <p className="mt-4 font-semibold">
                    - Jane Smith, Placed at XYZ Ltd.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Final Call-to-Action */}
          <section className="bg-[#f8e1c4] py-16">
            <div className="container mx-auto text-center">
              <div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Ready to Boost Your Career?
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  PrepStat is your go-to platform for placement success.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
