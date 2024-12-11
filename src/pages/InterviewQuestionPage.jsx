import React from "react";
import { useEffect, useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import FirstCapital from "../utils/FirstCapital";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { useLocation } from "react-router-dom";
import DetailedAnswer from "../utils/DetailedAnswer";

export default function InterviewQuestionPage() {
  // const [Items , setItems] = useState("");
  const questionsPerPage = 10;
  const [animationClass, setAnimationClass] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [questions, setQuestions] = useState([]);
  const [expandedQuestion, setExpandedQuestion] = useState([]);

  // const topics = topic.topic;
  // console.log(topics);
  const location = useLocation();
  const topic = location.pathname
    .split("/")
    .filter((word) => word != "topic" && word != "");

  const apiUrl = import.meta.env.VITE_API_URL;

  const handleToggleDetails = (questionId) => {
    if (expandedQuestion.includes(questionId)) {
      setAnimationClass("animate__animated animate__fadeOut");
      setTimeout(() => {
        setExpandedQuestion(
          expandedQuestion.filter((ques) => ques !== questionId)
        );
        setAnimationClass("");
      }, 200);
    } else {
      setAnimationClass("animate__animated animate__fadeIn");
      setExpandedQuestion([...expandedQuestion, questionId]);
    }
    // console.log(expandedQuestion , 'Expanded Question');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        const getQuestion = await axios.get(`${apiUrl}/interview/${topic[1]}`);
        // console.log(getQuestion.data);
        setQuestions(getQuestion.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleClickNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    }
  };

  const handleClickPrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0);
    }
  };

  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = questions.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );
  const totalPages = Math.ceil(questions.length / questionsPerPage);

  return (
    <div className="md:px-4 py-1">
      {Array.isArray(currentQuestions) &&
        currentQuestions.map((item) => (
          <div key={item.id}>
            <h2 className="md:text-xl text-lg font-sans mt-10 mb-5">
              {FirstCapital(item.question)}
            </h2>

            {/* Detailed Answer Section */}
            <div className="mb-10 text-center md:text-left">
              <button
                className="p-2 shadow shadow-orange-700 bg-gradient-to-tl hover:bg-gradient-to-tr from-orange-200 via-orange-100 to-orange-50 text-gray-700 rounded-lg hover:bg-[#E65100] transition-all duration-300"
                onClick={() => handleToggleDetails(item.id)}
              >
                {expandedQuestion.includes(item.id) ? (
                  <span className="flex items-center gap-x-2">
                    <FaEyeSlash /> Hide Detailed Answer
                  </span>
                ) : (
                  <span className="flex items-center gap-x-2">
                    <FaEye /> View Detailed Answer
                  </span>
                )}
              </button>
              {expandedQuestion.includes(item.id) && (
                <div
                  className={`mt-4 p-4 border rounded-lg bg-gray-100 ${animationClass} transition-transform duration-500 transform max-h-96 overflow-auto`}
                >
                  <div className=" font-sans text-left">
                    {<DetailedAnswer item={item} />}
                  </div>
                </div>
              )}
            </div>

            <hr
              style={{
                backgroundColor: "#EBD3A2",
                height: "0.5px",
                border: "none",
              }}
            />
          </div>
        ))}

      {/* Pagination controls */}
      <div className="flex md:justify-between justify-evenly items-center mb-4 md:mb-0 mt-8">
        <button
          className={`p-2 bg-back shadow-md shadow-orange-700 flex text-sm md:scale-100 items-center gap-x-2 text-white rounded-lg ${
            currentPage === 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-[#f1c578]"
          }`}
          onClick={handleClickPrev}
          disabled={currentPage === 1}
        >
          <FaArrowAltCircleLeft /> Previous
        </button>
        <span className="md:text-lg text-base">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          className={`p-2 bg-back shadow-md shadow-orange-700 flex text-sm md:scale-100 items-center gap-x-2 text-white rounded-lg ${
            currentPage === totalPages
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-[#f1c578]"
          }`}
          onClick={handleClickNext}
          disabled={currentPage === totalPages}
        >
          Next <FaArrowCircleRight />
        </button>
      </div>
    </div>
  );
}
