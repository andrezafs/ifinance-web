import { Layout, theme } from 'antd';
import { CSSProperties } from 'react';
import { Outlet } from 'react-router-dom';
import { CloudOutlined, CoffeeOutlined } from '@ant-design/icons';

import { ButtonAction } from '../shared/components/ButtonAction';
import { SideMenu } from '../shared/components/SideMenu';
import { useThemeContext } from './ThemeContext';

const { Header, Footer, Content } = Layout;

const contentStyle: CSSProperties = {
  margin: '24px 16px',
};

export function MainLayout() {
  const { currentTheme, changeTheme } = useThemeContext();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideMenu />
      <Layout>
        <Header
          style={{
            backgroundColor: colorBgContainer,
          }}
        >
          <ButtonAction onClick={changeTheme}>
            {currentTheme === 'dark' ? <CoffeeOutlined /> : <CloudOutlined />}
          </ButtonAction>
        </Header>
        <Content style={contentStyle}>
          <Outlet />
        </Content>
        <Footer
          style={{
            backgroundColor: 'transparent',
          }}
        >
          Footer
        </Footer>
      </Layout>
    </Layout>
  );
}
