import { Routes, Route, Navigate } from 'react-router-dom';

import { routes } from '@/routes/routes';

import { AuthenticationLayout } from '../layouts/AuthenticationLayout';
import { Login } from '../pages/Login/Login';

export function AuthenticationRoutes() {
  return (
    <Routes>
      <Route element={<AuthenticationLayout />}>
        <Route path={routes.login} element={<Login />} />
      </Route>
      <Route index element={<Navigate to={routes.login} replace />} />
    </Routes>
  );
}
