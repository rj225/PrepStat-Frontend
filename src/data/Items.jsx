import { 
    FaHome, 
    FaInfoCircle, 
    FaBook, 
    FaUsers, 
    FaChartBar 
  } from 'react-icons/fa'; 
  import { MdSupportAgent } from "react-icons/md";
  import { TiSortAlphabeticallyOutline } from "react-icons/ti";
  import { Tooltip } from 'antd';

  const items = [
    {
      key: '1',
      icon: <FaHome style={{ fontSize: '20px' }} />,
      label: (
        <Tooltip title="Home">
           <span >Home</span>
        </Tooltip>
      ),
      path: '/', 
    },
    {
      key: '2',
      icon: <FaInfoCircle style={{ fontSize: '20px' }} />,
      label: (
        <Tooltip title="About">
           <span >About</span>
        </Tooltip>
      ),
      path: '/about', 
    },
    {
      key: 'sub1',
      icon: <FaBook style={{ fontSize: '20px' }} />,
      label: (
        <Tooltip title="Quants">
           <span >Quants</span>
        </Tooltip>
      ),
      children: [
        {
          key: '3',
          icon: <FaBook style={{ fontSize: '20px' }} />,
          label: (
            <Tooltip title="Aptitude">
               <span >Aptitude</span>
            </Tooltip>
          ),
          path: '/topic/aptitude', 
        },
        {
          key: '4',
          icon: <FaBook style={{ fontSize: '20px' }} />,
          label: (
            <Tooltip title="Reasoning">
               <span >Reasoning</span>
            </Tooltip>
          ),
          path: '/topic/reasoning', 
        },
      ],
    },
    {
      key: '5',
      icon: <TiSortAlphabeticallyOutline style={{ fontSize: '20px' }} />,
      label: (
        <Tooltip title="Verbal">
           <span >Verbal</span>
        </Tooltip>
      ),
      path: '/topic/verbal', 
    },
    {
      key: '7',
      icon: <MdSupportAgent style={{ fontSize: '20px' }} />,
      label: (
        <Tooltip title="Interview">
           <span >Interview</span>
        </Tooltip>
      ),
      path: '/topic/interview', 
    },
    // {
    //   key: '8',
    //   icon: <FaChartBar style={{ fontSize: '20px' }} />,
    //   label: (
    //     <Tooltip title="Stats">
    //        <span >Stats</span>
    //     </Tooltip>
    //   ),
    //   path: '/topic/stats', 
    // },
  ];
  

  export default items;