import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type CategoriesActionsContextProps = {
  modalCreateCategoryIsOpen: boolean;
  toggleModalCreateCategory: (value?: boolean) => void;
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

  const toggleModalCreateCategory = useCallback((value?: boolean) => {
    setModalCreateCategoryIsOpen((state) => (value ? value : !state));
  }, []);

  const value = useMemo(
    () => ({
      modalCreateCategoryIsOpen,
      toggleModalCreateCategory,
    }),
    [modalCreateCategoryIsOpen, toggleModalCreateCategory]
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
