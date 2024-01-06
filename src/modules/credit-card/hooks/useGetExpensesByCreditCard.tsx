import { useParams } from 'react-router-dom';

import { useListExpensesByCreditCardQuery } from '@/graphql';
import { useMountAndYear } from '@/modules/shared/hooks';

export function useGetExpensesByCreditCard() {
  const { creditCardId } = useParams();
  const { month, year } = useMountAndYear();

  return useListExpensesByCreditCardQuery({
    filter: {
      creditCardId: creditCardId as string,
      month,
      year,
    },
  });
}
