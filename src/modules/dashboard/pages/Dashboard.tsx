import { Header } from 'antd/es/layout/layout';
import { theme } from 'antd';

import { SelectMonthExpense } from '@/modules/shared/components/SelectMonthExpense';

import { StatisticCards } from '../components/StatisticCards';
import { TableExpenses } from '../components/TableExpenses';

export function Dashboard() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Header
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          width: '100%',
          background: colorBgContainer,
        }}
      >
        <SelectMonthExpense />
      </Header>
      <br />
      <StatisticCards />
      <br />
      <TableExpenses />
    </>
  );
}
