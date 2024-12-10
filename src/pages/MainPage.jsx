import React from "react";
import CustomSidebar from "../components/CustomSidebar";
import Navbar from "../components/Navbar";
import "../css/Mainpage.css";
import { Collapse } from "antd";
import Features from "../data/Features";
import { FaInfoCircle } from "react-icons/fa";
import PrepStat from "../utils/PrepStat";
import img from "../css/pointwise_section.png"
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";


const MainContent = () => {
  const faqItems = [
    {
      key: "1",
      label: (
        <span className="font-serif text-lg font-normal">
          What is PrepStat?
        </span>
      ),
      children: (
        <p className="font-serif font-light text-sm">
          PrepStat is your <span className="text-orange-600 font-semibold">all-in-one</span> placement preparation platform designed to
          help students excel in their careers. We focus on providing a
          comprehensive approach to aptitude, reasoning, and interview skills.
        </p>
      ),
    },
    {
      key: "2",
      label: (
        <span className="font-serif text-lg font-normal">
          How does PrepStat help with placements?
        </span>
      ),
      children: (
        <p className="font-serif font-light text-sm">
          PrepStat offers resources like topic-specific quizzes, mock tests, and
          curated study material for aptitude, reasoning, and verbal skills. Our
          tools are tailored to guide you <span className="text-orange-600 font-semibold">step-by-step</span> through your preparation
          journey.
        </p>
      ),
    },
    {
      key: "3",
      label: (
        <span className="font-serif text-lg font-normal">
          Is PrepStat free to use?
        </span>
      ),
      children: (
        <p className="font-serif font-light text-sm">
          Yes, PrepStat is <span className="text-orange-600 font-semibold">free</span> for all users as we are a new startup. Our
          mission is to make <span className="text-orange-600 font-semibold">high-quality</span> placement preparation accessible to
          every student without any financial burden.
        </p>
      ),
    },
    {
      key: "4",
      label: (
        <span className="font-serif text-lg font-normal">
          What makes PrepStat unique?
        </span>
      ),
      children: (
        <p className="font-serif font-light text-sm">
          PrepStat stands out because of its data-driven insights and
          community-driven approach. Unlike traditional platforms, we use
          <span className="text-orange-600 font-semibold">real-world</span> placement analytics to help you understand trends and
          tailor your preparation effectively.
        </p>
      ),
    },
    {
      key: "5",
      label: (
        <span className="font-serif text-lg font-normal">
          What kind of questions are available on PrepStat?
        </span>
      ),
      children: (
        <p className="font-serif font-light text-sm">
          PrepStat offers a curated collection of aptitude, reasoning, verbal,
          and interview-related questions. We ensure that all questions are
          carefully selected to match <span className="text-orange-600 font-semibold">real-world</span> placement patterns and
          difficulty.
        </p>
      ),
    },
  ];
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen font-serif">
      <Navbar />
      <div className="flex max-w-screen flex-row">
        <CustomSidebar />
        <div className="flex-1 w-8/12 md:w-full h-auto md:h-screen">
          {/* Hero Section */}
          <section className="flex flex-col overflow-hidden font-serif hero_section_img items-center justify-center relative md:h-5/6 py-16">
            <div className=" md:bg-gradient-to-r bg-gradient-to-t from-gray-800 from-45% via-orange-700 via-85% to-orange-200 opacity-50 absolute inset-0 z-0"></div>
            <div className="text-center p-8 z-10" data-aos="zoom-in">
              <h1 className="md:text-5xl text-3xl font-bold text-gray-200 mb-6 flex flex-wrap items-center justify-center gap-2">
                At
                <span className=" bg-gradient-to-b rounded-2xl from-white via-orange-200 via-50% to-orange-50 md:text-4xl text-2xl shadow-lg p-1">
                  <PrepStat />
                </span>
                ,
                <span className=" text-slate-200 text-xl md:text-5xl">
                  We <strong className="text-orange-300">Empower</strong> Your
                  Success
                </span>
              </h1>
              <p className="md:text-lg text-sm text-left font-serif text-gray-100 mb-10">
                <span className="font-semibold font-sans text-slate-300 underline">
                  Your all-in-one platform for placement preparation
                </span>{" "}
                : covering Aptitude, Reasoning, Verbal, Interview questions, and
                more.
              </p>

              <div className=" w-full flex justify-center">
                <Link to="/about">
                <button className="flex items-center space-x-2 md:text-lg text-base cursor-pointer bg-orange-400 text-font md:h-10 h-5 md:p-5 p-4 rounded-2xl shadow-md shadow-orange-700 bg-opacity-90 hover:scale-105 duration-500">
                  <FaInfoCircle />
                  <span className="font-semibold text-font">Learn More</span>
                </button>
                </Link>
              </div>
            </div>
          </section>

          {/* Feature section */}
          <section className="container bg-gradient-to-tl from-[#f8f3ed] from-20% via-[#f7e8d3] to-[#f8e1c4] mx-auto py-16">
            <h2 className="md:text-3xl text-2xl font-bold text-center text-gray-800 mb-10">
              Unlock Your Potential
            </h2>
            <div className="grid grid-cols-1 bg-transparent md:grid-cols-3 px-4 gap-9 md:gap-12">
              {Features.map((feature) => (
                <div
                  data-aos="fade-up"
                  key={feature.id}
                  style={{
                    backgroundColor: feature.bgColor,
                    borderColor: feature.borderColor,
                    borderWidth: "2px",
                    borderStyle: "solid",
                  }}
                  className={` md:p-6 p-4 gap-y-2 rounded-lg shadow-lg flex flex-col items-center`}
                >
                  {feature.icon}
                  <h3 className="md:text-xl text-lg font-semibold">{feature.title}</h3>
                  <p className="text-gray-600 text-sm text-center">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Table-Type Section */}
          <section
            id="preprationtable_section_img"
            className="md:px-32 px-10 md:py-16 py-10 relative"
          >
            <div className="md:container flex flex-col md:block items-center mx-auto">
              <h2 className="md:text-3xl text-xl text-orange-800 drop-shadow-lg font-bold text-center mb-8">
                Placement Preparation Breakdown
              </h2>
              <div className="flex items-center" data-aos="zoom-in">
                <table className="w-full text-left md:text-lg text-sm bg-white overflow-hidden shadow-lg rounded-lg">
                  <thead className="bg-orange-200 ">
                    <tr>
                      <th className="px-6 py-4 text-gray-800 font-semibold">
                        Module
                      </th>
                      <th className="px-6 py-4 text-gray-800 font-semibold">
                        Focus
                      </th>
                      <th className="px-6 py-4 text-gray-800 font-semibold">
                        Outcome
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-orange-400">
                    <tr>
                      <td className="md:px-6 px-2 md:py-4 py-1">Aptitude</td>
                      <td className="md:px-6 md:text-base text-xs px-2 md:py-4 py-2">
                        Quantitative & Logical Reasoning
                      </td>
                      <td className="md:px-6 md:text-base text-xs px-2 md:py-4 py-1">
                        Enhanced problem-solving skills
                      </td>
                    </tr>
                    <tr>
                      <td className="md:px-6 px-2 md:py-4 py-1">Verbal</td>
                      <td className="md:px-6 md:text-base text-xs px-2 md:py-4 py-2">
                        Grammar, Vocabulary, Comprehension
                      </td>
                      <td className="md:px-6 md:text-base text-xs px-2 md:py-4 py-1">
                        Improved communication abilities
                      </td>
                    </tr>
                    <tr>
                      <td className="md:px-6 px-2 md:py-4 py-1">Interview Prep</td>
                      <td className="md:px-6 md:text-base text-xs px-2 md:py-4 py-2">
                        Technical & Behavioral Questions
                      </td>
                      <td className="md:px-6 md:text-base text-xs px-2 md:py-4 py-1">Increased confidence</td>
                    </tr>
                    <tr>
                      <td className="md:px-6 px-2 md:py-4 py-1">Placement Statistics</td>
                      <td className="md:px-6 md:text-base text-xs px-2 md:py-4 py-2">
                        Insights on student placements, including companies, job
                        roles, and packages.
                      </td>
                      <td className="md:px-6 md:text-base text-xs px-2 md:py-4 py-1">
                        Comprehensive understanding of placement trends and
                        success stories.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Point-Wise Section */}
          <section className="bg-gradient-to-tl from-[#f8f3ed] from-20% via-[#f7e8d3] to-[#f8e1c4] flex w-full items-center justify-center py-16">
            <div className="md:p-10 p-3 mx-auto text-center" data-aos="zoom-out">
              <h2 className="md:text-3xl text-2xl md:text-left font-bold text-gray-800 mb-8">
                Why Choose PrepStat?
              </h2>
              <ul className="list-disc list-outside text-left md:text-lg pl-10 text-base text-gray-700 space-y-4">
                <li><span className="text-orange-700">Comprehensive</span> coverage of placement topics.</li>
                <li>Tailored <span className="text-orange-700">quizzes</span> and <span className="text-orange-700">mock tests</span>.</li>
                <li>Data-driven insights for <span className="text-orange-700">smarter</span> preparation.</li>
                <li>Guidance from industry <span className="text-orange-700">professionals</span>.</li>
                <li><span className="text-orange-700">Regular</span> updates to stay industry-relevant.</li>
              </ul>
            </div>
            <div className=" md:w-1/2 w-full md:block hidden rounded-2xl" data-aos="flip-right">
              <img src={img} alt="img" className="h-80 md:block hidden border-r-8 border-t-8 border-orange-500 w-auto shadow-lg rounded-2xl" />
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq_section_img" className="relative px-4 py-16">
            <div id="faq" className="container mx-auto" data-aos="zoom-in">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                FAQs
              </h2>
              <div className="max-w-2xl bg-white rounded-lg shadow-2xl mx-auto">
                <Collapse items={faqItems} defaultActiveKey={["1"]} />
              </div>
            </div>
          </section>

          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
