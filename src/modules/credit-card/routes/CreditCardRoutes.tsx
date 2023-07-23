import { Outlet, Route, Routes } from 'react-router-dom';

import { routes } from '@/routes/routes';

import { CreditCads } from '../pages/CreditCads';
import { CreditCardDetails } from '../pages/CreditCardDetails';
import { CreditCardsActionsContextProvider } from '../contexts/CreditCardsActionsContext';

export function CreditCardRoutes() {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <CreditCardsActionsContextProvider>
            <Outlet />
          </CreditCardsActionsContextProvider>
        }
      >
        <Route index element={<CreditCads />} />
        <Route path={routes.creditCardId} element={<Outlet />}>
          <Route index element={<CreditCardDetails />} />
        </Route>
      </Route>
    </Routes>
  );
}
