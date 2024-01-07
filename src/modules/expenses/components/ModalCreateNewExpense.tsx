import { ButtonProps, Modal } from 'antd';

import {
  useCreateExpenseMutation,
  useListExpensesByWalletQuery,
  useListExpensesQuery,
} from '@/graphql';
import { useQueryClient } from '@tanstack/react-query';

import { useExpenseActions } from '../contexts/ExpensesActionsContext';
import { FormCreateNewExpense, FormFields } from './FormCreateNewExpense';

export function ModalCreateNewExpense() {
  const { modalCreateExpenseIsOpen, toggleModalCreateExpense, messageApi } =
    useExpenseActions();

  const queryClient = useQueryClient();

  const { mutate, isPending: isLoading } = useCreateExpenseMutation({
    onSuccess: () => {
      toggleModalCreateExpense();

      queryClient.invalidateQueries({
        queryKey: useListExpensesByWalletQuery.getKey({} as any),
      });
      queryClient.invalidateQueries({
        queryKey: useListExpensesQuery.getKey({} as any),
      });

      messageApi.open({
        type: 'success',
        content: 'Despesa criada com sucesso!',
        duration: 2,
      });
    },
    onError: () => {
      messageApi.open({
        type: 'error',
        content: 'Erro ao criar despesa',
        duration: 2,
      });
    },
  });

  function createNewExpense(formExpense: FormFields) {
    mutate({
      data: {
        name: formExpense.name,
        value: formExpense.value,
        categoryId: formExpense.category,
        isFixed: formExpense.isFixed,
        isIgnored: formExpense.isIgnored,
        purchaseDate: formExpense.purchaseDate,
        installments: formExpense.hasInstallments
          ? formExpense.installments
          : 1,
      },
    });
  }

  if (!modalCreateExpenseIsOpen) return null;

  return (
    <Modal
      centered
      width={450}
      maskClosable={false}
      open={modalCreateExpenseIsOpen}
      okText="Adicionar"
      okButtonProps={
        {
          htmlType: 'submit',
          form: 'crete-credit-card-new-expense',
          loading: isLoading,
        } as ButtonProps
      }
      cancelText="Cancelar"
      onCancel={() => toggleModalCreateExpense()}
      cancelButtonProps={{
        disabled: isLoading,
      }}
    >
      <FormCreateNewExpense onSubmit={createNewExpense} />
    </Modal>
  );
}
