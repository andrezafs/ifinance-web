import { Outlet, Route, Routes } from 'react-router-dom';

import { routes } from '@/routes';

import { CreditCards } from '../pages/CreditCads';
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
        <Route index element={<CreditCards />} />
        <Route path={routes.creditCardId} element={<Outlet />}>
          <Route index element={<CreditCardDetails />} />
        </Route>
      </Route>
    </Routes>
  );
}
