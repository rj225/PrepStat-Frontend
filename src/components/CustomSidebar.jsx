import React from 'react';
import { Layout, Menu, Tooltip } from 'antd';
import items from './Items';
import { useNavigate } from 'react-router-dom';

const { Sider } = Layout;


const CustomSidebar = () => {

  const navigate = useNavigate(); 

  const setLocalStorage = (key) =>{
    // console.log(key);
    
    sessionStorage.setItem('selectedMenuKey', key);
  }

  const handleMenuClick = (e) => {
    // navigate(`/topic/${e.key}`);
    const clickedItem = items.find(item => item.key === e.key) || items.flatMap(item => item.children || []).find(child => child.key === e.key);
    // console.log(clickedItem);
    setLocalStorage(clickedItem.key);
    navigate(clickedItem.path)
    
    
  };
  return (
    <Sider 
      style={{ backgroundColor: '#f8f3ed' }} 
      className='bg-[#f9e6c1] lg:w-1/5 md:w-1/4 sm:w-1/3 w-full'
      breakpoint="md"
      collapsedWidth="50"
    >
      <Menu 
        defaultSelectedKeys={[sessionStorage.getItem('selectedMenuKey') || '1']} 
        mode="inline" 
        className="text-[#4E342E] text-base" 
        style={{ backgroundColor: '#f8f3ed' }}
        items={items}
        onClick={handleMenuClick}
      />
    </Sider>
  );
};

export default CustomSidebar;
