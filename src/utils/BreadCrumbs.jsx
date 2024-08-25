import React from 'react';
import { Breadcrumb, Menu, Dropdown } from 'antd';
import { HomeOutlined, DownOutlined, FolderOutlined } from '@ant-design/icons';
import { useLocation, Link } from 'react-router-dom';

const BreadcrumbWithIcons = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter((i) => i);

  const breadcrumbItems = pathSnippets.map((snippet, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;

    if (snippet.toLowerCase() === 'quants') {
      const menu = (
        <Menu>
          <Menu.Item key="1">
            <FolderOutlined />
            <Link to={`${url}/aptitude`}>Aptitude</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <FolderOutlined />
            <Link to={`${url}/reasoning`}>Reasoning</Link>
          </Menu.Item>
        </Menu>
      );

      return (
        <Breadcrumb.Item key={url}>
          <Dropdown overlay={menu} trigger={['click']}>
            <span>
              Quants <DownOutlined />
            </span>
          </Dropdown>
        </Breadcrumb.Item>
      );
    } else {
      return (
        <Breadcrumb.Item key={url}>
          <Link to={url}>{snippet}</Link>
        </Breadcrumb.Item>
      );
    }
  });

  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/">
        <HomeOutlined />
        <span>Home</span>
      </Breadcrumb.Item>
      {breadcrumbItems}
    </Breadcrumb>
  );
};

export default BreadcrumbWithIcons;
