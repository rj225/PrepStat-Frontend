import React from 'react';
import { FaBrain, FaLightbulb, FaChartPie, FaUserCheck, FaRegSmile } from 'react-icons/fa'; // Import necessary icons
import { TbTextGrammar } from 'react-icons/tb'; // Import TbTextGrammar icon

const Features = [
  {
    id: 1,
    icon: <FaBrain className="md:text-5xl text-3xl text-yellow-500 md:mb-3 mb-1" />,
    title: "Cognitive Aptitude",
    description:
      "Sharpen your analytical skills and excel in logical reasoning to ace the toughest challenges.",
    bgColor: "#f8f3ed",
    borderColor: "#E2CAA8", // Matches the light beige tone
  },
  {
    id: 2,
    icon: <FaLightbulb className="md:text-5xl text-3xl text-green-500 md:mb-3 mb-1" />,
    title: "Reasoning Skills",
    description:
      "Enhance your problem-solving abilities and tackle complex scenarios with confidence.",
    bgColor: "#e1f8c4",
    borderColor: "#c6e7a4", // Matches the light green tone
  },
  {
    id: 3,
    icon: <FaChartPie className="md:text-5xl text-3xl text-blue-500 md:mb-3 mb-1" />,
    title: "Placement Analytics",
    description:
      "Stay updated with the latest placement trends and use data-driven insights to plan your career.",
    bgColor: "#e8d3f7",
    borderColor: "#d4b5e6", // Matches the light purple tone
  },
  {
    id: 4,
    icon: <TbTextGrammar className="md:text-5xl text-3xl text-green-500 md:mb-3 mb-1" />,
    title: "Verbal Skills",
    description:
      "Boost your verbal proficiency with tailored question sets that ensure mastery in communication.",
    bgColor: "#d4f7e1",
    borderColor: "#b5e6cc", // Matches the teal tone
  },
  {
    id: 5,
    icon: <FaUserCheck className="md:text-5xl text-3xl text-red-500 md:mb-3 mb-1" />,
    title: "Interview Prep",
    description:
      "Prepare for interviews with expert guidance, tailored questions, and practical solutions.",
    bgColor: "#f8d3d3",
    borderColor: "#e6b5b5", // Matches the light red tone
  },
  {
    id: 6,
    icon: <FaRegSmile className="md:text-5xl text-3xl text-purple-500 md:mb-3 mb-1" />,
    title: "Success Stories",
    description:
      "Read testimonials from students and professionals who have achieved success with PrepStat.",
    bgColor: "#f7dcd3",
    borderColor: "#e6c0b5", // Matches the peach tone
  },
];


export default Features;
