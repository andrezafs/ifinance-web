import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import Categories from "../pages/Categories";
import CreditCads from "../pages/CreditCards";
import { Planning } from "../pages/Planning";
import { Report } from "../pages/Report";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/creditcards" element={<CreditCads />} />
      <Route path="/planning" element={<Planning />} />
      <Route path="/report" element={<Report />} />
    </Routes>
  );
}
