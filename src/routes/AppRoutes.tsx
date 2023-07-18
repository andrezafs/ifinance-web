import { Route, Routes } from "react-router-dom";
import { CategoriesRoutes } from "../modules/category/routes/CategoriesRoutes";
import { DashboardRoutes } from "../modules/dashboard/routes/DashboardRoutes";
import { PlanningRoutes } from "../modules/planning/routes/PlanningRoites";
import { CreditCardRoutes } from "../modules/credit-card/routes/CreditCardRoutes";
import { MainLayout } from "../modules/layouts/MainLayout";
import { ReportsRoutes } from "../modules/report/routes/ReportsRoutes";
import { routes } from "./routes";

export function AppRoutes() {
  return (
    <Routes>
      <Route path={routes.home} element={<MainLayout></MainLayout>}>
        <Route index element={<DashboardRoutes />} />
        <Route
          path={`${routes.creditCards}/*`}
          element={<CreditCardRoutes />}
        />
        <Route path={`${routes.categories}/*`} element={<CategoriesRoutes />} />
        <Route path={`${routes.planning}/*`} element={<PlanningRoutes />} />
        <Route path={`${routes.reports}/*`} element={<ReportsRoutes />} />
      </Route>
    </Routes>
  );
}
