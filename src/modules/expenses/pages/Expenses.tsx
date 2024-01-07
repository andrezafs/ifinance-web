import { TableExpenses } from '@/modules/dashboard/components/TableExpenses';

import { ExpensesStatistics } from '../components/ExpensesStatistics';

export function Expenses() {
  return (
    <>
      <ExpensesStatistics />
      <TableExpenses />
    </>
  );
}
