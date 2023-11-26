import { Flex } from 'antd';
import { Outlet } from 'react-router-dom';

export function AuthenticationLayout() {
  return (
    <Flex align="center" justify="center" vertical style={{ height: '100vh' }}>
      <Outlet />
    </Flex>
  );
}
