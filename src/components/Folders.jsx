import React, { useEffect, useState } from "react";
import { FaFileLines } from "react-icons/fa6";
import { Link } from "react-router-dom";
import axios from "axios";
import FirstCapital from "../utils/FirstCapital";

const Folder = ({ topic }) => {
  const [Topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getTopics = await axios.get(`${apiUrl}/${topic}`);
        setTopics(getTopics.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [topic]);

  const filteredTopics = Topics.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const uri = location.pathname;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="font-serif">
      <div className="">
        <input
          type="search"
          placeholder="Search topics..."
          className="w-full rounded-xl border-transparent shadow-lg focus:ring-1 focus:ring-orange-500 focus:border-transparent"
          value={searchQuery}
          aria-label="Search topics"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <br />
      <ul className="grid md:grid-cols-3 grid-cols-1 gap-3 md:gap-y-10 gap-y-5 content-center">
        {filteredTopics.length > 0 ? (
          filteredTopics.map((item, index) => (
            <Link key={index} to={`${uri}/${item}`}>
              <li className="text-lg hover:-translate-y-1 duration-300 cursor-pointer pl-5 md:pl-0 flex items-center shadow-orange-50 text-font gap-3 relative group">
                <span className="text-orange-400 text-xl">
                  <FaFileLines />
                </span>
                {FirstCapital(item)}
                <span className="absolute left-0 bottom-0 w-1/12 h-[2px] bg-back scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-300"></span>
              </li>
            </Link>
          ))
        ) : (
          <div className="text-gray-500 p-2">No topics match your search.</div>
        )}
      </ul>
    </div>
  );
};

export default Folder;
