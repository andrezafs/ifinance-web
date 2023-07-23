import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import { sideMenuRoutes } from '@/routes/sideMenu';

export function SideMenu() {
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout.Sider
      collapsible
      collapsed={collapsed}
      onCollapse={value => setCollapsed(value)}
    >
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        defaultSelectedKeys={['1']}
        mode="inline"
        items={sideMenuRoutes}
        onClick={items => navigate(items.key.toString())}
      />
    </Layout.Sider>
  );
}
