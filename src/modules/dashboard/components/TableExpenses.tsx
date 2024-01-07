import { Table } from 'antd';

import { Expense, useListExpensesQuery } from '@/graphql';
import { useMountAndYear } from '@/modules/shared/hooks';

import { useListExpensesDashboardData } from '../hooks/useListExpensesDashboardData';

export function TableExpenses() {
  const { month, year } = useMountAndYear();
  const { data: expenses, isFetching } = useListExpensesQuery({
    filter: {
      month,
      year,
    },
  });

  const { columns, data } = useListExpensesDashboardData(
    expenses?.listExpense.expenses as Expense[],
  );

  return (
    <Table
      loading={isFetching}
      pagination={false}
      columns={columns}
      dataSource={data}
    />
  );
}
