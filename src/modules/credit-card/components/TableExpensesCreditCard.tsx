import { Table } from 'antd';
import { useParams } from 'react-router-dom';

import { Expense, useListExpensesByCreditCardQuery } from '@/graphql';
import { useMountAndYear } from '@/modules/shared/hooks';

import { useCreditCardDetailsData } from '../hooks/useCreditCardDetailsData';

export function TableExpensesCreditCard() {
  const { creditCardId } = useParams<{ creditCardId: string }>();
  const { month, year } = useMountAndYear();
  const { data: expenses, isFetching } = useListExpensesByCreditCardQuery({
    filter: {
      creditCardId: creditCardId as string,
      month,
      year,
    },
  });

  const { columns, data } = useCreditCardDetailsData(
    expenses?.listExpenseByCreditCard.expenses as Expense[],
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
