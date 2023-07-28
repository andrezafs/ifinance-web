import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { message } from 'antd';
import { MessageInstance } from 'antd/es/message/interface';

type CreditCardActionsContextProps = {
  modalCreateCreditCardIsOpen: boolean;
  toggleModalCreateCreditCard: (value?: boolean) => void;
  modalCreateNewCreditCardExpenseIsOpen: boolean;
  toggleModalCreateNewCreditCardExpense: (value?: boolean) => void;
  messageApi: MessageInstance;
};

type CreditCardActionsContextProviderProps = {
  children: ReactNode;
};

const CreditCardActionsContext = createContext(
  {} as CreditCardActionsContextProps,
);

export function CreditCardsActionsContextProvider({
  children,
}: CreditCardActionsContextProviderProps) {
  const [modalCreateCreditCardIsOpen, setModalCreateCreditCard] =
    useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const [
    modalCreateNewCreditCardExpenseIsOpen,
    setModalCreateNewCreditCardExpense,
  ] = useState(false);

  const toggleModalCreateCreditCard = useCallback((value?: boolean) => {
    setModalCreateCreditCard(state => value || !state);
  }, []);

  const toggleModalCreateNewCreditCardExpense = useCallback(
    (value?: boolean) => {
      setModalCreateNewCreditCardExpense(state => value || !state);
    },
    [],
  );

  const value = useMemo(
    () => ({
      modalCreateCreditCardIsOpen,
      toggleModalCreateCreditCard,
      modalCreateNewCreditCardExpenseIsOpen,
      toggleModalCreateNewCreditCardExpense,
      messageApi,
    }),
    [
      modalCreateCreditCardIsOpen,
      modalCreateNewCreditCardExpenseIsOpen,
      toggleModalCreateCreditCard,
      toggleModalCreateNewCreditCardExpense,
      messageApi,
    ],
  );

  return (
    <CreditCardActionsContext.Provider value={value}>
      {children}
      {contextHolder}
    </CreditCardActionsContext.Provider>
  );
}

export function useCreditCardActions() {
  const context = useContext(CreditCardActionsContext);

  if (Object.keys(context).length === 0) {
    throw new Error(
      'useCreditCardActions must be used within a CreditCardActionsContextProvider',
    );
  }

  return context;
}
