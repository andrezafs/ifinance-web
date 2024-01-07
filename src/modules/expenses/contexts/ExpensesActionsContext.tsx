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

import { Expense } from '@/graphql';

type ExpensesActionsContextProps = {
  modalCreateExpenseIsOpen: boolean;
  toggleModalCreateExpense: (value?: boolean) => void;
  modalDeleteExpenseIsOpen: boolean;
  toggleModalDeleteExpense: (value?: boolean) => void;
  expense: Expense | null;
  handleSetExpense: (value: Expense | null) => void;
  messageApi: MessageInstance;
};

type ExpensesActionsContextProviderProps = {
  children: ReactNode;
};

const ExpensesActionsContext = createContext({} as ExpensesActionsContextProps);

export function ExpensesActionsContextProvider({
  children,
}: ExpensesActionsContextProviderProps) {
  const [modalCreateExpenseIsOpen, setModalCreateExpense] = useState(false);
  const [modalDeleteExpenseIsOpen, setModalDeleteExpense] = useState(false);
  const [modalCreateNewExpenseExpenseIsOpen, setModalCreateNewExpenseExpense] =
    useState(false);
  const [expense, setExpense] = useState<Expense | null>(null);
  const [messageApi, contextHolder] = message.useMessage();

  const toggleModalCreateExpense = useCallback((value?: boolean) => {
    setModalCreateExpense(state => value || !state);
  }, []);

  const toggleModalDeleteExpense = useCallback((value?: boolean) => {
    setModalDeleteExpense(state => value || !state);
  }, []);

  const handleSetExpense = useCallback((value: Expense | null) => {
    setExpense(value);
  }, []);

  const toggleModalCreateNewExpense = useCallback((value?: boolean) => {
    setModalCreateNewExpenseExpense(state => value || !state);
  }, []);

  const value = useMemo(
    () => ({
      modalCreateExpenseIsOpen,
      toggleModalCreateExpense,
      modalDeleteExpenseIsOpen,
      toggleModalDeleteExpense,
      modalCreateNewExpenseExpenseIsOpen,
      toggleModalCreateNewExpense,
      expense,
      handleSetExpense,
      messageApi,
    }),
    [
      modalCreateExpenseIsOpen,
      modalDeleteExpenseIsOpen,
      modalCreateNewExpenseExpenseIsOpen,
      toggleModalCreateExpense,
      toggleModalDeleteExpense,
      toggleModalCreateNewExpense,
      expense,
      handleSetExpense,
      messageApi,
    ],
  );

  return (
    <ExpensesActionsContext.Provider value={value}>
      {children}
      {contextHolder}
    </ExpensesActionsContext.Provider>
  );
}

export function useExpenseActions() {
  const context = useContext(ExpensesActionsContext);

  if (Object.keys(context).length === 0) {
    throw new Error(
      'useExpenseActions must be used within a ExpensesActionsContextProvider',
    );
  }

  return context;
}
