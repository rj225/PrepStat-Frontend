import React, { useState ,useRef,useEffect} from "react";
import { Layout, Dropdown, Menu, Button } from "antd";
import { IoIosMail } from "react-icons/io";
import { FaQuestionCircle, FaSearch, FaBars,FaTimes } from "react-icons/fa";
import { IoBugSharp } from "react-icons/io5";
import PrepStat from "../utils/PrepStat";
import { Link } from "react-router-dom";

const { Header } = Layout;

const Navbar = ({showContact = true}) => {
  const [searchVisible, setSearchVisible] = useState(false);
  const searchRef = useRef(null);

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  const handleClickOutside = (e) => {
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setSearchVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuItems = [
    showContact && {
      key: "1",
      icon: <IoIosMail className="text-xl text-orange-50"/>,
      label: "Contact Me",
      link: "/contact", // Add route link to be used later
    },
    {
      key: "2",
      icon: <IoBugSharp className="text-lg text-orange-50"/>,
      label: "Reort Bug",
      link: "https://forms.gle/cuL4bDstY9GVBQZy9", 
    },
  ].filter(Boolean);
  

  

  return (
    <>
      {/* mobile view */}
      <Header className="sticky top-0 z-50 bg-[#f8f3ed] text-[#4E342E] sm:hidden flex overflow-hidden justify-between items-center p-4">
      <div className="font-bold text-2xl">
        <PrepStat />
      </div>
      <div className={`flex items-center space-x-2 transition-all duration-300`}>
          {menuItems.map((item,index) => (
            <a key={index} href={item.link}
            className={`p-2 rounded-full transition shadow-lg bg-orange-400`}
          >
            <span>{item.icon}</span>
          </a>
          ))}
      </div>
    </Header>




      {/*pc, tab view */}
      <Header className="sticky top-0 z-50 bg-[#f8f3ed] text-[#4E342E] hidden sm:flex justify-between items-center px-4">

        <div className="font-bold text-3xl">
          <PrepStat />
        </div>
        <div className="flex items-center space-x-4">
          {/* <input
            type="text"
            placeholder="Search..."
            className="p-2 focus:outline-none focus:ring-2 focus:ring-[#FFB300] focus:border-transparent border rounded-xl"
          /> */}
          {showContact && (
            <Link to="/contact">
              <button className="flex items-center space-x-2 bg-back text-font h-10 p-4 rounded-2xl shadow-md shadow-orange-700 bg-opacity-90 hover:scale-105 transition-transform duration-500">
                <IoIosMail style={{ fontSize: "25px" }} className="text-lg" />
                <span>Contact Me</span>
              </button>
            </Link>
          )}
          <a href="https://forms.gle/cuL4bDstY9GVBQZy9" target="blank">
          <button className="flex items-center  space-x-2 bg-back text-font h-10 p-4 rounded-2xl shadow-md shadow-orange-700 bg-opacity-90 hover:scale-105 transition-transform duration-500">
            <IoBugSharp className="text-lg" />
            <span>Report Bug</span>
          </button>
          </a>
        </div>
      </Header>
    </>
  );
};

export default Navbar;
