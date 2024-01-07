import { Outlet, Route, Routes } from 'react-router-dom';

import { Expenses } from '../pages/Expenses';
import { ExpensesActionsContextProvider } from '../contexts/ExpensesActionsContext';

export function ExpensesRoutes() {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <ExpensesActionsContextProvider>
            <Outlet />
          </ExpensesActionsContextProvider>
        }
      >
        <Route index element={<Expenses />} />
      </Route>
    </Routes>
  );
}
