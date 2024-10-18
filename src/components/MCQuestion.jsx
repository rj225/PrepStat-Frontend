import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { FaArrowCircleRight } from "react-icons/fa";
import { FaCheckCircle } from 'react-icons/fa';
import { FaTimesCircle } from 'react-icons/fa';
function MCQuestion() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [expandedQuestion, setExpandedQuestion] = useState(null);
  const [animationClass, setAnimationClass] = useState('');

  const questionsPerPage = 10;
  const apiUrl = import.meta.env.VITE_API_URL;
  console.log(apiUrl);


  const questions = [
    {
      id: 1,
      question: "What is the largest planet in our solar system?",
      options: [
        { id: 1111, text: "Earth", isCorrect: false },
        { id: 1112, text: "Jupiter", isCorrect: true },
        { id: 31111, text: "Mars", isCorrect: false },
        { id: 1154, text: "Venus", isCorrect: false }
      ],
      detailedAnswer: "Jupiter is the largest planet in our solar system. It has a mass more than twice that of all the other planets combined."
    },
    {
      id: 2,
      question: "What is the largest planet in our solar system?",
      options: [
        { id: 11, text: "Earth", isCorrect: false },
        { id: 12, text: "Jupiter", isCorrect: true },
        { id: 31, text: "Mars", isCorrect: false },
        { id: 14, text: "Venus", isCorrect: false }
      ],
      detailedAnswer: "Jupiter is the largest planet in our solar system. It has a mass more than twice that of all the other planets combined."
    },{
      id: 3,
      question: "What is the largest planet in our solar system?",
      options: [
        { id: 154, text: "Earth", isCorrect: false },
        { id: 25, text: "Jupiter", isCorrect: true },
        { id: 453, text: "Mars", isCorrect: false },
        { id: 484, text: "Venus", isCorrect: false }
      ],
      detailedAnswer: "Jupiter is the largest planet in our solar system. It has a mass more than twice that of all the other planets combined."
    },
    // Add more questions here
  ];

  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);

  const totalPages = Math.ceil(questions.length / questionsPerPage);

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

  const handleOptionClick = (option) => {
    setSelectedOption(option.id);
    setIsCorrect(option.isCorrect);
  };

  const handleToggleDetails = (questionId) => {
    if (expandedQuestion === questionId) {
      setAnimationClass('animate__animated animate__fadeOut');
      setTimeout(() => {
        setExpandedQuestion(null);
        setAnimationClass('');
      }, 300); // Duration of fade out animation
    } else {
      setExpandedQuestion(questionId);
      setAnimationClass('animate__animated animate__fadeIn');
    }
  };

  return (
    <div className="px-4 py-2">
      {currentQuestions.map(item => (
        <div key={item.id}>
          <h2 className="text-2xl mt-10 mb-5">{item.question}</h2>
          <ul className="space-y-3 mb-10">
            {item.options.map(option => (
              <li
                key={option.id}
                className={`p-2 border rounded-lg flex items-center cursor-pointer ${selectedOption === option.id ? (isCorrect ? 'bg-green-100' : 'bg-red-100') : 'bg-white'}`}
                onClick={() => handleOptionClick(option)}
              >
                {selectedOption === option.id && (
                  <span className="text-xl mr-2">
                    {isCorrect ? <FaCheckCircle className="text-green-500" /> : <FaTimesCircle className="text-red-500" />}
                  </span>
                )}
                <span>{option.text}</span>
              </li>
            ))}
          </ul>

          {/* Detailed Answer Section */}
          <div className="mb-10">
            <button
              className="p-2 shadow shadow-orange-700 bg-gradient-to-tl hover:bg-gradient-to-tr from-orange-200 via-orange-100 to-orange-50 text-gray-700 rounded-lg hover:bg-[#E65100] transition-all duration-300"
              onClick={() => handleToggleDetails(item.id)}
            >
              {expandedQuestion === item.id ? (
                <span className="flex items-center gap-x-2">
                  <FaEyeSlash /> Hide Detailed Answer
                </span>
              ) : (
                <span className="flex items-center gap-x-2">
                  <FaEye /> View Detailed Answer
                </span>
              )}
            </button>
            {expandedQuestion === item.id && (
              <div
                className={`mt-4 p-4 border rounded-lg bg-gray-100 ${animationClass} transition-transform duration-500 transform max-h-96 overflow-hidden`}
              >
                <p>{item.detailedAnswer}</p>
              </div>
            )}
          </div>

          <hr style={{ backgroundColor: "#EBD3A2", height: "0.5px", border: "none" }} />
        </div>
      ))}

      {/* Pagination controls */}
      <div className="flex justify-between mt-8">
        <button
          className={`p-2 bg-back shadow-md shadow-orange-700 flex items-center gap-x-2 text-white rounded-lg ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#f1c578]'}`}
          onClick={handleClickPrev}
          disabled={currentPage === 1}
        >
          <FaArrowAltCircleLeft/> Previous
        </button>
        <span className="text-lg">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          className={`p-2 bg-back shadow-md shadow-orange-700 flex items-center gap-x-2 text-white rounded-lg ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#f1c578]'}`}
          onClick={handleClickNext}
          disabled={currentPage === totalPages}
        >
          Next <FaArrowCircleRight/>
        </button>
      </div>
    </div>
  );
}

export default MCQuestion;
