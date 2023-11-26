import { Routes, Route, Navigate } from 'react-router-dom';

import { routes } from '@/routes/routes';

import { AuthenticationLayout } from '../layouts/AuthenticationLayout';
import { Login } from '../pages/Login/Login';
import { CreateAccount } from '../pages/CreateAccount/CreateAccount';

export function AuthenticationRoutes() {
  return (
    <Routes>
      <Route element={<AuthenticationLayout />}>
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.create} element={<CreateAccount />} />
      </Route>
      <Route index element={<Navigate to={routes.login} replace />} />
    </Routes>
  );
}
