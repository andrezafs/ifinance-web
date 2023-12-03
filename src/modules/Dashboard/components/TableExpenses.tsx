import { Table } from 'antd';

import { Expense, useListExpenseQuery } from '@/graphql';
import { useListExpenseData } from '@/modules/expenses/hooks/useListExpensesData';

export function TableExpenses() {
  const { data: expenses } = useListExpenseQuery({
    filter: {
      month: 12,
      year: 2023,
    },
  });

  const { columns, data } = useListExpenseData(
    expenses?.listExpense.expenses as Expense[],
  );

  return <Table columns={columns} dataSource={data} pagination={false} />;
}
