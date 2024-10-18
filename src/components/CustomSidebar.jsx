import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import items from "./Items";
import { useNavigate, useLocation } from "react-router-dom";

const { Sider } = Layout;

const CustomSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Initialize selectedKey state with the current path or session storage value
  const [selectedKey, setSelectedKey] = useState(() => {
    const currentPath = window.location.pathname; // Use window.location for initial path
    const storedKey = sessionStorage.getItem('selectedMenuKey');

    // Find the current active item based on the path
    const currentActive =
      items.find(item => item.path === currentPath) ||
      items.flatMap(item => item.children || []).find(child => child.path === currentPath);

    return currentActive?.key || storedKey || '1'; // Fallback to stored key or default
  });

  // Update selected key based on location changes
  useEffect(() => {
    const activeLocation = location.pathname;
    const currentActive =
      items.find((item) => item.path === activeLocation) ||
      items.flatMap((item) => item.children || []).find((child) => child.path === activeLocation);

    if (currentActive) {
      setSelectedKey(currentActive.key);
      sessionStorage.setItem("selectedMenuKey", currentActive.key);
    }
  }, [location]);

  const handleMenuClick = (e) => {
    const clickedItem =
      items.find((item) => item.key === e.key) ||
      items.flatMap((item) => item.children || []).find((child) => child.key === e.key);

    if (clickedItem) {
      setSelectedKey(clickedItem.key);
      sessionStorage.setItem("selectedMenuKey", clickedItem.key);
      navigate(clickedItem.path);
    }
  };

  return (
    <Sider
      style={{ backgroundColor: "#f8f3ed" }}
      className="bg-[#f9e6c1] lg:w-1/5 md:w-1/4 sm:w-1/3 w-full"
      breakpoint="md"
      collapsedWidth="50"
    >
      <Menu
        selectedKeys={[selectedKey]}  // Ensure dynamic selection
        mode="inline"
        className="text-[#4E342E] text-base"
        style={{ backgroundColor: "#f8f3ed" }}
        items={items}
        onClick={handleMenuClick}
      />
    </Sider>
  );
};

export default CustomSidebar;
