import { CSSProperties } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';

import { SideMenu } from '../shared/components/SideMenu';

const { Header, Footer, Content } = Layout;

const headerStyle: CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};

const footerStyle: CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};

const contentStyle: CSSProperties = {
  margin: '24px 16px',
};

export function MainLayout() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideMenu />
      <Layout>
        <Header style={headerStyle}>Header</Header>
        <Content style={contentStyle}>
          <Outlet />
        </Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Layout>
  );
}
