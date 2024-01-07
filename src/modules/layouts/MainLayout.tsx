import { Layout } from 'antd';
import { CSSProperties } from 'react';
import { Outlet } from 'react-router-dom';

import { SideMenu } from '../shared/components/SideMenu';

const contentStyle: CSSProperties = {
  margin: '24px 16px',
};

export function MainLayout() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideMenu />
      <Layout>
        <Layout.Content style={contentStyle}>
          <Outlet />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
