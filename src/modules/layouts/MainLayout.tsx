import { Layout, theme } from 'antd';
import { CSSProperties } from 'react';
import { Outlet } from 'react-router-dom';

import { ButtonAction } from '../shared/components/ButtonAction';
import { SideMenu } from '../shared/components/SideMenu';

const { Header, Footer, Content } = Layout;

const contentStyle: CSSProperties = {
  margin: '24px 16px',
};

export function MainLayout() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleClick = () => {
    // setIsDarkMode(previousValue => !previousValue);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideMenu />
      <Layout>
        <Header
          style={{
            backgroundColor: colorBgContainer,
          }}
        >
          <ButtonAction onClick={handleClick}>
            {/* {isDarkMode ? <CoffeeOutlined /> : <CloudOutlined />} */}
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
