import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type CreditCardActionsContextProps = {
  modalCreateCreditCardIsOpen: boolean;
  toggleModalCreateCreditCard: (value?: boolean) => void;
  modalCreateNewCreditCardExpenseIsOpen: boolean;
  toggleModalCreateNewCreditCardExpense: (value?: boolean) => void;
};

type CreditCardActionsContextProviderProps = {
  children: ReactNode;
};

const CreditCardActionsContext = createContext(
  {} as CreditCardActionsContextProps
);

export function CreditCardsActionsContextProvider({
  children,
}: CreditCardActionsContextProviderProps) {
  const [modalCreateCreditCardIsOpen, setModalCreateCreditCard] =
    useState(false);

  const [
    modalCreateNewCreditCardExpenseIsOpen,
    setModalCreateNewCreditCardExpense,
  ] = useState(false);

  const toggleModalCreateCreditCard = useCallback((value?: boolean) => {
    setModalCreateCreditCard((state) => (value ? value : !state));
  }, []);

  const toggleModalCreateNewCreditCardExpense = useCallback(
    (value?: boolean) => {
      setModalCreateNewCreditCardExpense((state) => (value ? value : !state));
    },
    []
  );

  const value = useMemo(
    () => ({
      modalCreateCreditCardIsOpen,
      toggleModalCreateCreditCard,
      modalCreateNewCreditCardExpenseIsOpen,
      toggleModalCreateNewCreditCardExpense,
    }),
    [
      modalCreateCreditCardIsOpen,
      modalCreateNewCreditCardExpenseIsOpen,
      toggleModalCreateCreditCard,
      toggleModalCreateNewCreditCardExpense,
    ]
  );

  return (
    <CreditCardActionsContext.Provider value={value}>
      {children}
    </CreditCardActionsContext.Provider>
  );
}

export function useCreditCardActions() {
  const context = useContext(CreditCardActionsContext);

  if (Object.keys(context).length === 0) {
    throw new Error(
      "useCreditCardActions must be used within a CreditCardActionsContextProvider"
    );
  }

  return context;
}
