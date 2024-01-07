import { Flex, theme } from 'antd';
import { Outlet } from 'react-router-dom';

export function AuthenticationLayout() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Flex
      align="center"
      justify="center"
      vertical
      style={{ height: '100vh', background: colorBgContainer }}
    >
      <Outlet />
    </Flex>
  );
}
