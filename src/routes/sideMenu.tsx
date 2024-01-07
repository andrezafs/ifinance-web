import { Key, ReactNode } from 'react';
import { MenuProps } from 'antd';
import {
  FlagOutlined,
  HomeOutlined,
  CreditCardOutlined,
  WalletOutlined,
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
  mountItem('Cartões', routes.goToCreditCards(), <CreditCardOutlined />),
  mountItem('Carteira', routes.goToExpenses(), <WalletOutlined />),
];
