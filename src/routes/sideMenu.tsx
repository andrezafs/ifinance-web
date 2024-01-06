import { Key, ReactNode } from 'react';
import { MenuProps } from 'antd';
import {
  FlagOutlined,
  HomeOutlined,
  // BarChartOutlined,
  // CreditCardOutlined,
  // PieChartOutlined,
  // StockOutlined,
} from '@ant-design/icons';

import { routes } from './routes';

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
  mountItem('Dashboard', routes.goToDashboard(), <HomeOutlined />),
  mountItem('Categorias', routes.goToCategories(), <FlagOutlined />),
  // mountItem('Credits Card', routes.goToCreditCards(), <CreditCardOutlined />),
  // mountItem('Planning', routes.goToPlanning(), <BarChartOutlined />),
  // mountItem('Reports', routes.goToReports(), <PieChartOutlined />),
  // mountItem('Expenses', routes.goToExpenses(), <StockOutlined />),
];
