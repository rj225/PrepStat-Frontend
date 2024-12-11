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
    width={230}
    style={{
      backgroundColor: "#f8f3ed",
      position: "sticky", // Sticky positioning
      top: "60px", // Adjust top to match the navbar's height
      height: "calc(100vh - 60px)", // Adjust height to account for the top offset
      overflow: "auto", // Ensures it scrolls if the content is longer than the height
    }}
      className=""
      breakpoint="md"
      collapsedWidth="50"
    >
      <Menu
        selectedKeys={[selectedKey]}  
        mode="inline"
        className="text-base font-semibold w-full px-1 space-y-2 font-serif "
        style={{ backgroundColor: "#f8f3ed" }}
        items={items}
        onClick={handleMenuClick}
      />
    </Sider>
  );
};

export default CustomSidebar;
