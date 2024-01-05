import { useParams } from 'react-router-dom';

import { useListExpensesByCreditCardQuery } from '@/graphql';

export function useGetExpensesByCreditCard() {
  const { creditCardId } = useParams();

  return useListExpensesByCreditCardQuery({
    filter: {
      creditCardId: creditCardId as string,
      month: 1,
      year: 2024,
    },
  });
}
