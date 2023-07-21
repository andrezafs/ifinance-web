import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { Category } from "../../../graphql";

type CategoriesActionsContextProps = {
  modalCreateCategoryIsOpen: boolean;
  toggleModalCreateCategory: (value?: boolean) => void;
  modalDeleteCategoryIsOpen: boolean;
  toggleModalDeleteCategory: (value?: boolean) => void;
  modalEditCategory: boolean;
  toggleModalEditCategory: (value?: boolean) => void;
  category: Category | null;
  handleSetCategory: (value: Category | null) => void;
};

type CategoriesActionsContextProviderProps = {
  children: ReactNode;
};

const CategoriesActionsContext = createContext(
  {} as CategoriesActionsContextProps
);

export function CategoriesActionsContextProvider({
  children,
}: CategoriesActionsContextProviderProps) {
  const [modalCreateCategoryIsOpen, setModalCreateCategoryIsOpen] =
    useState(false);
  const [modalDeleteCategoryIsOpen, setModalDeleteCategoryIsOpen] =
    useState(false);
  const [modalEditCategory, setModalEditCategoryIsOpen] = useState(false);
  const [category, setCategory] = useState<Category | null>(null);

  const toggleModalCreateCategory = useCallback((value?: boolean) => {
    setModalCreateCategoryIsOpen((state) => (value ? value : !state));
  }, []);

  const toggleModalDeleteCategory = useCallback((value?: boolean) => {
    setModalDeleteCategoryIsOpen((state) => (value ? value : !state));
  }, []);

  const toggleModalEditCategory = useCallback((value?: boolean) => {
    setModalEditCategoryIsOpen((state) => (value ? value : !state));
  }, []);

  const handleSetCategory = useCallback((value: Category | null) => {
    setCategory(value);
  }, []);

  const value = useMemo(
    () => ({
      modalCreateCategoryIsOpen,
      toggleModalCreateCategory,
      modalDeleteCategoryIsOpen,
      toggleModalDeleteCategory,
      modalEditCategory,
      toggleModalEditCategory,
      category,
      handleSetCategory,
    }),
    [
      modalCreateCategoryIsOpen,
      modalDeleteCategoryIsOpen,
      modalEditCategory,
      toggleModalCreateCategory,
      toggleModalDeleteCategory,
      toggleModalEditCategory,
      category,
      handleSetCategory,
    ]
  );

  return (
    <CategoriesActionsContext.Provider value={value}>
      {children}
    </CategoriesActionsContext.Provider>
  );
}

export function useCategoriesActions() {
  const context = useContext(CategoriesActionsContext);

  if (Object.keys(context).length === 0) {
    throw new Error(
      "useCategoriesActions must be used within a CategoriesActionsContextProvider"
    );
  }

  return context;
}
