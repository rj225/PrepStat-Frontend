import React, { useState ,useRef,useEffect} from "react";
import { Layout, Dropdown, Menu, Button } from "antd";
import { IoIosMail } from "react-icons/io";
import { FaQuestionCircle, FaSearch, FaBars,FaTimes } from "react-icons/fa";
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
      icon: <IoIosMail className="text-xl hover:text-orange-500"/>,
      label: "Contact Me",
      link: "/contact", // Add route link to be used later
    },
    {
      key: "2",
      icon: <FaQuestionCircle className="text-lg hover:text-orange-500"/>,
      label: "FAQ",
      link: "/#faq", // Route for FAQ
    },
  ].filter(Boolean);
  

  const menu = (
    <Menu>
      {menuItems.map((item) => (
        <Menu.Item key={item.key}>
          <Link to={item.link}>
            <div className="flex items-center space-x-2">
              {item.icon}
              <span>{item.label}</span>
            </div>
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  );
  

  return (
    <>
      {/* mobile view */}
      <Header className="bg-[#f8f3ed] text-[#4E342E] sm:hidden flex overflow-hidden justify-between items-center p-4 relative">
      <div className="font-bold text-2xl">
        <PrepStat />
      </div>
      <div className={`flex items-center space-x-4 transition-all duration-300 ${searchVisible ? "absolute top-0 left-0 w-full bg-[#f8f3ed] z-10" : ""}`}>
        {searchVisible && (
          <div ref={searchRef} className="flex items-center w-11/12 bg-[#f8f3ed] p-4 absolute top-0 left-0 z-10">
            <input
              type="search"
              placeholder="Search..."
              className="flex-1 p-2 focus:outline-none focus:ring-2 focus:ring-[#FFB300] h-8 focus:border-transparent border rounded-xl"
            />
            <Button
              onClick={() => setSearchVisible(false)}
              className="p-2 ml-2 rounded-full bg-back hover:bg-[#FFA000] transition"
            >
              <FaTimes className="text-white" />
            </Button>
          </div>
        )}
        <Button
          onClick={toggleSearch}
          className={`p-2 rounded-full bg-back hover:bg-[#FFA000] transition ${searchVisible ? "hidden" : ""}`}
        >
          <FaSearch className="text-white" />
        </Button>
        <Dropdown overlay={menu} trigger={["click"]} placement="bottomRight">
          <Button
            className={`p-2 rounded-full transition ${searchVisible ? "hidden" : "bg-back"}`}
          >
            <FaBars className="text-white" />
          </Button>
        </Dropdown>
      </div>
    </Header>




      {/*pc, tab view */}
      <Header className="bg-[#f8f3ed] text-[#4E342E] hidden sm:flex justify-between items-center px-4">
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
          <Link to="/#faq">
          <button className="flex items-center  space-x-2 bg-back text-font h-10 p-4 rounded-2xl shadow-md shadow-orange-700 bg-opacity-90 hover:scale-105 transition-transform duration-500">
            <FaQuestionCircle className="text-lg" />
            <span>FAQ</span>
          </button>
          </Link>
        </div>
      </Header>
    </>
  );
};

export default Navbar;
