import { Navigate, Route, Routes } from 'react-router-dom';

import { DashboardRoutes } from '@/modules/Dashboard/routes/DashboardRoutes';
import { ExpensesRoutes } from '@/modules/expenses/routes/ExpensesRoutes';
import { AuthenticationRoutes } from '@/modules/authentication/routes';

import { CategoriesRoutes } from '../modules/category/routes/CategoriesRoutes';
import { CreditCardRoutes } from '../modules/credit-card/routes/CreditCardRoutes';
import { MainLayout } from '../modules/layouts/MainLayout';
import { ReportsRoutes } from '../modules/report/routes/ReportsRoutes';
import { routes } from './routes';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={routes.categories} replace />} />

      <Route path={`${routes.auth}/*`} element={<AuthenticationRoutes />} />

      <Route path={routes.home} element={<MainLayout />}>
        <Route
          index
          path={`${routes.dashboard}/*`}
          element={<DashboardRoutes />}
        />
        <Route
          path={`${routes.creditCards}/*`}
          element={<CreditCardRoutes />}
        />
        <Route path={`${routes.categories}/*`} element={<CategoriesRoutes />} />
        {/* <Route path={`${routes.planning}/*`} element={<PlanningRoutes />} /> */}
        <Route path={`${routes.reports}/*`} element={<ReportsRoutes />} />
        <Route path={`${routes.expenses}/*`} element={<ExpensesRoutes />} />
      </Route>
    </Routes>
  );
}
