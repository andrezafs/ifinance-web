import { TableExpenses } from '@/modules/Dashboard/components/TableExpenses';

import { ExpensesStatistics } from '../components/ExpensesStatistics';

export function Expenses() {
  return (
    <>
      <ExpensesStatistics />
      <TableExpenses />
    </>
  );
}
