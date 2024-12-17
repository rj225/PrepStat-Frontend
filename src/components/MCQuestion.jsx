import React, { useState, useEffect } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { FaArrowCircleRight } from "react-icons/fa";
import { FaCheckCircle } from 'react-icons/fa';
import { FaTimesCircle } from 'react-icons/fa';
import axios from 'axios';
import FirstCapital from '../utils/FirstCapital';
import DetailedAnswer from '../utils/DetailedAnswer';
import { Helmet } from 'react-helmet-async';

function MCQuestion(topic) {
  const [questions , setQuestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [expandedQuestion, setExpandedQuestion] = useState(null);
  const [animationClass, setAnimationClass] = useState('');
  const [loading , setLoading] = useState(true);

  const questionsPerPage = 5;

  const apiUrl = import.meta.env.VITE_API_URL;
  const topics = topic.topic;
  

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        const getQuestion = await axios.get(`${apiUrl}/${topics[0]}/${topics[1]}`);
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


  //   {
  //     id: 1,
  //     question: "What is the largest planet in our solar system?",
  //     options: [
  //       { id: 1111, text: "Earth", isCorrect: false },
  //       { id: 1112, text: "Jupiter", isCorrect: true },
  //       { id: 31111, text: "Mars", isCorrect: false },
  //       { id: 1154, text: "Venus", isCorrect: false }
  //     ],
  //     detailedAnswer: "Jupiter is the largest planet in our solar system. It has a mass more than twice that of all the other planets combined."
  //   },
  //   {
  //     id: 2,
  //     question: "What is the largest planet in our solar system?",
  //     options: [
  //       { id: 11, text: "Earth", isCorrect: false },
  //       { id: 12, text: "Jupiter", isCorrect: true },
  //       { id: 31, text: "Mars", isCorrect: false },
  //       { id: 14, text: "Venus", isCorrect: false }
  //     ],
  //     detailedAnswer: "Jupiter is the largest planet in our solar system. It has a mass more than twice that of all the other planets combined."
  //   },{
  //     id: 3,
  //     question: "What is the largest planet in our solar system?",
  //     options: [
  //       { id: 154, text: "Earth", isCorrect: false },
  //       { id: 25, text: "Jupiter", isCorrect: true },
  //       { id: 453, text: "Mars", isCorrect: false },
  //       { id: 484, text: "Venus", isCorrect: false }
  //     ],
  //     detailedAnswer: "Jupiter is the largest planet in our solar system. It has a mass more than twice that of all the other planets combined."
  //   },
  //   // Add more questions here
  // ];

  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);
  // console.log(currentQuestions,"10");
  
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

  const handleOptionClick = (option , correctOption , id) => {    
    setSelectedQuestion(id); 
    setSelectedOption(option)   
    setIsCorrect(option === correctOption);
  };

  const handleToggleDetails = (questionId) => {
    if (expandedQuestion === questionId) {
      setAnimationClass('animate__animated animate__fadeOut');
      setTimeout(() => {
        setExpandedQuestion(null);
        setAnimationClass('');
      }, 300); 
    } else {
      setExpandedQuestion(questionId);
      setAnimationClass('animate__animated animate__fadeIn');
    }
  };

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="md:px-4 py-1">
      <Helmet>
        <title>{`${FirstCapital(topics[1])}-MCQs | PrepStat`}</title>
        <meta name="description" content={`Practice multiple choice questions on ${topics[1]}. Improve your knowledge with detailed explanations for each question.`} />
        <meta name="keywords" content="MCQ, multiple choice questions, interactive quiz, practice questions, answers, detailed explanation" />
        <link rel="canonical" href={location.pathname} />
      </Helmet>

      {Array.isArray(currentQuestions) && currentQuestions.map((item,index) => (
        <div key={item.id}>
          <div className='flex items-start gap-x-3 mt-10 mb-5'>
          <h2 className='md:text-xl text-lg font-sans'>Q{(currentPage - 1) * questionsPerPage + index + 1}.</h2>
          <h2 className="md:text-xl text-lg font-sans">{FirstCapital(item.question)}</h2>
          </div>
          <ul className="space-y-3 mb-10">
              <li
                className={`p-2 border rounded-lg flex animate__animated items-center  cursor-pointer ${selectedQuestion === item.id && selectedOption === item.option_d ? (isCorrect ? 'bg-green-100 animate__flash' : 'bg-red-100  animate__headShake') : 'bg-white'}`}
                onClick={() => handleOptionClick(item.option_d,item.answer,item.id)}
              >
                {selectedQuestion === item.id && selectedOption === item.option_d && (
                  <span className="text-xl mr-2">
                    {isCorrect ? <FaCheckCircle className="text-green-500" /> : <FaTimesCircle className="text-red-500" />}
                  </span>
                )}
                <span className=' font-sans md:text-base text-sm'>{FirstCapital(item.option_d)}</span>
              </li>
              <li
                className={`p-2 border rounded-lg flex animate__animated items-center cursor-pointer ${selectedQuestion === item.id && selectedOption === item.option_b ? (isCorrect ? 'bg-green-100 animate__flash' : 'bg-red-100  animate__headShake') : 'bg-white'}`}
                onClick={() => handleOptionClick(item.option_b,item.answer,item.id)}
              >
                {selectedQuestion === item.id && selectedOption === item.option_b && (
                  <span className="text-xl mr-2">
                    {isCorrect ? <FaCheckCircle className="text-green-500" /> : <FaTimesCircle className="text-red-500" />}
                  </span>
                )}
                <span className=' font-sans md:text-base text-sm'>{FirstCapital(item.option_b)}</span>
              </li>
              <li
                className={`p-2 border rounded-lg flex animate__animated items-center cursor-pointer ${selectedQuestion === item.id && selectedOption === item.option_c ? (isCorrect ? 'bg-green-100 animate__flash' : 'bg-red-100  animate__headShake') : 'bg-white'}`}
                onClick={() => handleOptionClick(item.option_c,item.answer,item.id)}
              >
                {selectedQuestion === item.id && selectedOption === item.option_c && (
                  <span className="text-xl mr-2">
                    {isCorrect ? <FaCheckCircle className="text-green-500" /> : <FaTimesCircle className="text-red-500" />}
                  </span>
                )}
                <span className=' font-sans md:text-base text-sm'>{FirstCapital(item.option_c)}</span>
              </li>
              <li
                className={`p-2 border rounded-lg flex animate__animated items-center cursor-pointer ${selectedQuestion === item.id && selectedOption === item.option_a ? (isCorrect ? 'bg-green-100 animate__flash' : 'bg-red-100  animate__headShake') : 'bg-white'}`}
                onClick={() => handleOptionClick(item.option_a,item.answer,item.id)}
              >
                {selectedQuestion === item.id && selectedOption === item.option_a && (
                  <span className="text-xl mr-2">
                    {isCorrect ? <FaCheckCircle className="text-green-500" /> : <FaTimesCircle className="text-red-500" />}
                  </span>
                )}
                <span className=' font-sans md:text-base text-sm'>{FirstCapital(item.option_a)}</span>
              </li>
          </ul>

          {/* Detailed Answer Section */}
          <div className="mb-10 text-center md:text-left">
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
                className={`mt-4 p-4 border rounded-lg bg-gray-100 ${animationClass} transition-transform duration-500 transform max-h-96 overflow-auto`}
              >
                <div className=' font-sans text-left md:text-base text-sm'>{<DetailedAnswer item={item}/>}</div>
              </div>
            )}
          </div>

          <hr style={{ backgroundColor: "#EBD3A2", height: "0.5px", border: "none" }} />
        </div>
      ))}

      {/* Pagination controls */}
      <div className="flex md:justify-between justify-evenly items-center mb-4 md:mb-0 mt-8">
        <button
          className={`p-2 bg-back shadow-md shadow-orange-700 flex text-sm md:scale-100 items-center gap-x-2 text-white rounded-lg ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#f1c578]'}`}
          onClick={handleClickPrev}
          disabled={currentPage === 1}
        >
          <FaArrowAltCircleLeft/> Previous
        </button>
        <span className="md:text-lg text-base font-sans">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          className={`p-2 bg-back shadow-md shadow-orange-700 flex text-sm md:scale-100 items-center gap-x-2 text-white rounded-lg ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#f1c578]'}`}
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
