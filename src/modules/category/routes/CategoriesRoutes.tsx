import { Outlet, Route, Routes } from 'react-router-dom';

import { CategoriesActionsContextProvider } from '../contexts/CategoriesActionsContext';
import { Categories } from '../pages/Categories';

export function CategoriesRoutes() {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <CategoriesActionsContextProvider>
            <Outlet />
          </CategoriesActionsContextProvider>
        }
      >
        <Route index element={<Categories />} />
      </Route>
    </Routes>
  );
}
