import React from 'react';
import { Layout, Menu } from 'antd';
import { 
  FaHome, 
  FaInfoCircle, 
  FaBook, 
  FaUsers, 
  FaChartBar 
} from 'react-icons/fa'; 
import { MdSupportAgent } from "react-icons/md";

const { Sider } = Layout;

const items = [
  {
    key: '1',
    icon: <FaHome style={{ fontSize: '20px' }} />,
    label: 'Home',
  },
  {
    key: '2',
    icon: <FaInfoCircle style={{ fontSize: '20px' }} />,
    label: 'About',
  },
  {
    key: 'sub1',
    icon: <FaBook style={{ fontSize: '20px' }} />,
    label: 'Quants',
    children: [
      {
        key: '3',
        icon: <FaBook style={{ fontSize: '20px' }} />,
        label: 'Aptitude',
      },
      {
        key: '4',
        icon: <FaBook style={{ fontSize: '20px' }} />,
        label: 'Reasoning',
      },
    ],
  },
  {
    key: '5',
    icon: <FaUsers style={{ fontSize: '20px' }} />,
    label: 'Verbal',
  },
  {
    key: '7',
    icon: <MdSupportAgent style={{ fontSize: '20px' }} />,
    label: 'Interview',
  },
  {
    key: '8',
    icon: <FaChartBar style={{ fontSize: '20px' }} />,
    label: 'Stats',
  },
];

const CustomSidebar = () => {
  return (
    <Sider style={{ backgroundColor: '#f8f3ed' }} className='bg-[#f9e6c1]'>
      <Menu 
        defaultSelectedKeys={['1']} 
        mode="inline" 
        className="text-[#4E342E] text-base" 
        style={{ backgroundColor: '#f8f3ed' }}
        items={items}
      />
    </Sider>
  );
};

export default CustomSidebar;
