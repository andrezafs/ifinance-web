import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Categories } from "../pages/Categories";
import { CreditCads } from "../pages/CreditCads";
import { Planning } from "../pages/Planning";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/creditcards" element={<CreditCads />} />
      <Route path="/planning" element={<Planning />} />
    </Routes>
  );
}
