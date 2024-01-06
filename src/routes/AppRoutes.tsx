import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { AuthenticationRoutes } from '@/modules/authentication/routes';
import { MainLayout } from '@/modules/layouts/MainLayout';
import { DashboardRoutes } from '@/modules/Dashboard/routes/DashboardRoutes';

import { CategoriesRoutes } from '../modules/category/routes/CategoriesRoutes';
import { routes } from './routes';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={`${routes.auth}/*`} element={<AuthenticationRoutes />} />

      <Route
        path="/"
        element={<Navigate to={routes.goToDashboard()} replace />}
      />

      <Route path={routes.home} element={<MainLayout />}>
        <Route path={routes.categories} element={<CategoriesRoutes />} />
        <Route path={routes.dashboard} element={<DashboardRoutes />} />
      </Route>
    </Route>,
  ),
);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
