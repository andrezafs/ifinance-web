import { Table } from 'antd';
import { useParams } from 'react-router-dom';

import { Expense, useListExpenseByCreditCardQuery } from '@/graphql';

import { useCreditCardDetailsData } from '../hooks/useCreditCardDetailsData';

export function TableExpensesCreditCard() {
  const { creditCardId } = useParams();
  const { data: expenses } = useListExpenseByCreditCardQuery({
    filter: {
      creditCardId: creditCardId as string,
      month: 9,
      year: 2023,
    },
  });
  const { columns, data } = useCreditCardDetailsData(
    expenses?.listExpenseByCreditCard as Expense[],
  );

  return <Table columns={columns} dataSource={data} pagination={false} />;
}
