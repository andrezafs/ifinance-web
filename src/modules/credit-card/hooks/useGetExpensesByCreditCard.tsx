import { useParams } from 'react-router-dom';

import { useListExpenseByCreditCardQuery } from '@/graphql';

export function useGetExpensesByCreditCard() {
  const { creditCardId } = useParams();

  return useListExpenseByCreditCardQuery({
    filter: {
      creditCardId: creditCardId as string,
      month: 1,
      year: 2024,
    },
  });
}
