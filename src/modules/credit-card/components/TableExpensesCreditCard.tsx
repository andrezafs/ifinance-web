import { Table } from 'antd';

import { Expense } from '@/graphql';

import { useCreditCardDetailsData } from '../hooks/useCreditCardDetailsData';
import { useGetExpensesByCreditCard } from '../hooks/useGetExpensesByCreditCard';

export function TableExpensesCreditCard() {
  const { data: expenses } = useGetExpensesByCreditCard();
  const { columns, data } = useCreditCardDetailsData(
    expenses?.listExpenseByCreditCard as Expense[],
  );

  return <Table columns={columns} dataSource={data} pagination={false} />;
}
