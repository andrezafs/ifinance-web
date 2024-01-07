import { Table } from 'antd';

import { Expense, useListExpensesByWalletQuery } from '@/graphql';
import { useMountAndYear } from '@/modules/shared/hooks';
import { useMountExpensesTableData } from '@/modules/shared/hooks/useMountExpensesTableData';

export function TableExpenses() {
  const { month, year } = useMountAndYear();
  const { data: expenses, isFetching } = useListExpensesByWalletQuery({
    filter: {
      month,
      year,
    },
  });

  const { columns, data } = useMountExpensesTableData(
    expenses?.listExpenseByWallet.expenses as Expense[],
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
