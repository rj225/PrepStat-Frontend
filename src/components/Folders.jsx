import { useEffect, useState } from 'react';
import React from 'react'
import { FaFileLines } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Folder = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

//   useEffect(() => {
//     // Replace this URL with your actual data source
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`https://api.example.com/data?topic=${topic}`);
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [topic]);

// const sub = "Aptitude"
const uri = location.pathname

const topic = ["HCF","NUMBERS","PERCENTAGE","PROFIT","PC","BOAT","pipe","clock",'calender',"NUMBERS","PERCENTAGE","PROFIT","PC","BOAT","pipe","clock",'calender','probablity']


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className=' font-serif'>
      <br />
      <br />
      <ul className='grid grid-cols-3 gap-3 gap-y-10 content-center'>
        {topic.map((item, index) => (
          <Link to={`${uri}/${item}`}>
          <li key={index} className='text-lg hover:-translate-y-1 duration-300 cursor-pointer flex items-center shadow-orange-50 text-font gap-3 relative group'>
            <span className='text-back text-xl'><FaFileLines/></span>
             {item} 
             <span className="absolute left-0 bottom-0 w-1/12 h-[2px] bg-back scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-300"></span>
             </li>
             </Link>
        ))}
      </ul>
    </div>
  );
};

export default Folder;




