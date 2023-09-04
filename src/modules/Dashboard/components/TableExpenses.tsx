import { Table } from 'antd';

import { Expense, useListExpensesQuery } from '@/graphql';
import { useListExpenseData } from '@/modules/expenses/hooks/useListExpensesData';

export function TableExpenses() {
  const { data: expenses } = useListExpensesQuery({
    filter: {
      month: 10,
      year: 2023,
    },
  });

  const { columns, data } = useListExpenseData(
    expenses?.listExpense as Expense[],
  );
  return <Table columns={columns} dataSource={data} pagination={false} />;
}
