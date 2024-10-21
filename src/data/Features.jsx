import React from 'react';
import { FaBrain, FaLightbulb, FaChartPie, FaUserCheck, FaRegSmile } from 'react-icons/fa'; // Import necessary icons
import { TbTextGrammar } from 'react-icons/tb'; // Import TbTextGrammar icon

const Features = [
  {
    id: 1,
    icon: <FaBrain className="text-5xl text-yellow-500 mb-4" />,
    title: "Cognitive Aptitude",
    description:
      "Sharpen your analytical skills and excel in logical reasoning to ace the toughest challenges.",
    bgColor: "#f8e1c4",
  },
  {
    id: 2,
    icon: <FaLightbulb className="text-5xl text-green-500 mb-4" />,
    title: "Reasoning Skills",
    description:
      "Enhance your problem-solving abilities and tackle complex scenarios with confidence.",
    bgColor: "#e1f8c4",
  },
  {
    id: 3,
    icon: <FaChartPie className="text-5xl text-blue-500 mb-4" />,
    title: "Placement Analytics",
    description:
      "Stay updated with the latest placement trends and use data-driven insights to plan your career.",
    bgColor: "#e8d3f7",
  },
  {
    id: 4,
    icon: <TbTextGrammar className="text-5xl text-green-500 mb-4" />,
    title: "Verbal Skills",
    description:
      "Boost your verbal proficiency with tailored question sets that ensure mastery in communication.",
    bgColor: "#d4f7e1",
  },
  {
    id: 5,
    icon: <FaUserCheck className="text-5xl text-red-500 mb-4" />,
    title: "Interview Prep",
    description:
      "Prepare for interviews with expert guidance, tailored questions, and practical solutions.",
    bgColor: "#f8d3d3",
  },
  {
    id: 6,
    icon: <FaRegSmile className="text-5xl text-purple-500 mb-4" />,
    title: "Success Stories",
    description:
      "Read testimonials from students and professionals who have achieved success with PrepStat.",
    bgColor: "#f7dcd3",
  },
];

export default Features;
