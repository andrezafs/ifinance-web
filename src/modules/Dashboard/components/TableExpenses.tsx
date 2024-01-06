import { Table } from 'antd';

import { Expense, useListExpensesQuery } from '@/graphql';
import { useMountAndYear } from '@/modules/shared/hooks';

import { useListExpensesDashboardData } from '../hooks/useListExpensesDashboardData';

export function TableExpenses() {
  const { month, year } = useMountAndYear();
  const { data: expenses } = useListExpensesQuery({
    filter: {
      month,
      year,
    },
  });

  const { columns, data } = useListExpensesDashboardData(
    expenses?.listExpense.expenses as Expense[],
  );

  return <Table columns={columns} dataSource={data} pagination={false} />;
}
