import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import Categories from "../pages/Categories";
import CreditCads from "../pages/CreditCards";
import { Planning } from "../pages/Planning";
import { Report } from "../pages/Report";
import { MainLayout } from "../layouts/MainLayout";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="categories" element={<Categories />} />
        <Route path="credit-cards" element={<CreditCads />} />
        <Route path="planning" element={<Planning />} />
        <Route path="report" element={<Report />} />
      </Route>
    </Routes>
  );
}
