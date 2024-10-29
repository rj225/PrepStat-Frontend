import React from 'react'
import { useEffect , useState } from 'react';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { FaArrowCircleRight } from "react-icons/fa";
import FirstCapital from '../utils/FirstCapital';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import DetailedAnswer from '../utils/DetailedAnswer';

export default function InterviewQuestionPage() {

    // const [Items , setItems] = useState("");
    const questionsPerPage = 10;
    const [animationClass, setAnimationClass] = useState('');
    const [loading , setLoading] = useState(true);  
    const [currentPage, setCurrentPage] = useState(1);
    const [questions , setQuestions] = useState([]);
    const [expandedQuestion, setExpandedQuestion] = useState(null);

    // const topics = topic.topic;
    // console.log(topics);
    const location = useLocation(); 
    const topic = location.pathname.split('/').filter(word => word != 'topic' && word != '')
    
    const apiUrl = import.meta.env.VITE_API_URL;

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

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchData = async () => {
          try {
            const getQuestion = await axios.get(`${apiUrl}/interview/${topic[1]}`);
            console.log(getQuestion.data);
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
      const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);
      const totalPages = Math.ceil(questions.length / questionsPerPage);

      return (
        <div className="px-4 py-2">
          {Array.isArray(currentQuestions) && currentQuestions.map(item => (
            <div key={item.id}>
              <h2 className="text-xl font-sans mt-10 mb-5">{FirstCapital(item.question)}</h2>
    
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
                    <div className=' font-sans'>{<DetailedAnswer item={item}/>}</div>
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
