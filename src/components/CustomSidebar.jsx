import React from 'react';
import { Layout, Menu, Tooltip } from 'antd';
import { 
  FaHome, 
  FaInfoCircle, 
  FaBook, 
  FaUsers, 
  FaChartBar 
} from 'react-icons/fa'; 
import { MdSupportAgent } from "react-icons/md";
import { TiSortAlphabeticallyOutline } from "react-icons/ti";

const { Sider } = Layout;

const items = [
  {
    key: '1',
    icon: <FaHome style={{ fontSize: '20px' }} />,
    label: (
      <Tooltip title="Home">
        <span>Home</span>
      </Tooltip>
    ),
  },
  {
    key: '2',
    icon: <FaInfoCircle style={{ fontSize: '20px' }} />,
    label: (
      <Tooltip title="About">
        <span>About</span>
      </Tooltip>
    ),
  },
  {
    key: 'sub1',
    icon: <FaBook style={{ fontSize: '20px' }} />,
    label: (
      <Tooltip title="Quants">
        <span>Quants</span>
      </Tooltip>
    ),
    children: [
      {
        key: '3',
        icon: <FaBook style={{ fontSize: '20px' }} />,
        label: (
          <Tooltip title="Aptitude">
            <span>Aptitude</span>
          </Tooltip>
        ),
      },
      {
        key: '4',
        icon: <FaBook style={{ fontSize: '20px' }} />,
        label: (
          <Tooltip title="Reasoning">
            <span>Reasoning</span>
          </Tooltip>
        ),
      },
    ],
  },
  {
    key: '5',
    icon: <TiSortAlphabeticallyOutline style={{ fontSize: '20px' }} />,
    label: (
      <Tooltip title="Verbal">
        <span>Verbal</span>
      </Tooltip>
    ),
  },
  {
    key: '7',
    icon: <MdSupportAgent style={{ fontSize: '20px' }} />,
    label: (
      <Tooltip title="Interview">
        <span>Interview</span>
      </Tooltip>
    ),
  },
  {
    key: '8',
    icon: <FaChartBar style={{ fontSize: '20px' }} />,
    label: (
      <Tooltip title="Stats">
        <span>Stats</span>
      </Tooltip>
    ),
  },
];

const CustomSidebar = () => {
  return (
    <Sider 
      style={{ backgroundColor: '#f8f3ed' }} 
      className='bg-[#f9e6c1] lg:w-1/5 md:w-1/4 sm:w-1/3 w-full'
      breakpoint="md"
      collapsedWidth="50"
    >
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
