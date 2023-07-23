import { Key, ReactNode } from 'react';
import { MenuProps } from 'antd';
import {
  FlagOutlined,
  HomeOutlined,
  BarChartOutlined,
  CreditCardOutlined,
  PieChartOutlined,
} from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];

function mountItem(
  label: ReactNode,
  key: Key,
  icon?: ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

export const sideMenuRoutes: MenuItem[] = [
  mountItem('Dashboard', '/', <HomeOutlined />),
  mountItem('Categories', '/categories', <FlagOutlined />),
  mountItem('Credits Card', '/credit-cards', <CreditCardOutlined />),
  mountItem('Planning', '/planning', <BarChartOutlined />),
  mountItem('Reports', '/reports', <PieChartOutlined />),
];
