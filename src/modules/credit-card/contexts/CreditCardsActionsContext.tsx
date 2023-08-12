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

import { CreditCard } from '@/graphql';

type CreditCardActionsContextProps = {
  modalCreateCreditCardIsOpen: boolean;
  toggleModalCreateCreditCard: (value?: boolean) => void;
  modalDeleteCreditCardIsOpen: boolean;
  toggleModalDeleteCreditCard: (value?: boolean) => void;
  modalCreateNewCreditCardExpenseIsOpen: boolean;
  toggleModalCreateNewCreditCardExpense: (value?: boolean) => void;
  creditCard: CreditCard | null;
  handleSetCreditCard: (value: CreditCard | null) => void;
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
  const [modalDeleteCreditCardIsOpen, setModalDeleteCreditCard] =
    useState(false);
  const [
    modalCreateNewCreditCardExpenseIsOpen,
    setModalCreateNewCreditCardExpense,
  ] = useState(false);
  const [creditCard, setCreditCard] = useState<CreditCard | null>(null);
  const [messageApi, contextHolder] = message.useMessage();

  const toggleModalCreateCreditCard = useCallback((value?: boolean) => {
    setModalCreateCreditCard(state => value || !state);
  }, []);

  const toggleModalDeleteCreditCard = useCallback((value?: boolean) => {
    setModalDeleteCreditCard(state => value || !state);
  }, []);

  const handleSetCreditCard = useCallback((value: CreditCard | null) => {
    setCreditCard(value);
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
      modalDeleteCreditCardIsOpen,
      toggleModalDeleteCreditCard,
      modalCreateNewCreditCardExpenseIsOpen,
      toggleModalCreateNewCreditCardExpense,
      creditCard,
      handleSetCreditCard,
      messageApi,
    }),
    [
      modalCreateCreditCardIsOpen,
      modalDeleteCreditCardIsOpen,
      modalCreateNewCreditCardExpenseIsOpen,
      toggleModalCreateCreditCard,
      toggleModalDeleteCreditCard,
      toggleModalCreateNewCreditCardExpense,
      creditCard,
      handleSetCreditCard,
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
