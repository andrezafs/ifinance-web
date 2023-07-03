import { Categories } from "./Categories";
import { CategoriesActionsContextProvider } from "./contexts/CategoriesActionsContext";

function CategoriesPage() {
  return (
    <CategoriesActionsContextProvider>
      <Categories />
    </CategoriesActionsContextProvider>
  );
}

export default CategoriesPage;
