import { ButtonProps, Modal } from 'antd';

import {
  useCreateExpenseMutation,
  useListExpenseByCreditCardQuery,
} from '@/graphql';
import { useQueryClient } from '@tanstack/react-query';

import { useCreditCardActions } from '../contexts/CreditCardsActionsContext';
import {
  FormCreateNewCreditCardExpense,
  FormFields,
} from './FormCreateNewCreditCardExpense';

export function ModalCreateNewCreditCardExpense() {
  const {
    modalCreateNewCreditCardExpenseIsOpen,
    toggleModalCreateNewCreditCardExpense,
    messageApi,
  } = useCreditCardActions();

  const queryClient = useQueryClient();

  const { mutate, isLoading } = useCreateExpenseMutation({
    onSuccess: () => {
      toggleModalCreateNewCreditCardExpense();
      queryClient.invalidateQueries(
        useListExpenseByCreditCardQuery.getKey({} as any),
      );
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

  function createNewCreditCardExpense(formExpense: FormFields) {
    mutate({
      data: {
        name: formExpense.name,
        value: formExpense.value,
        categoryId: formExpense.category,
        creditCardId: formExpense.creditCard,
        isFixed: formExpense.isFixed,
        isIgnored: formExpense.isIgnored,
        purchaseDate: formExpense.purchaseDate,
        installments: formExpense.hasInstallments
          ? formExpense.installments
          : 1,
      },
    });
  }

  if (!modalCreateNewCreditCardExpenseIsOpen) return null;
  return (
    <Modal
      centered
      width={450}
      maskClosable={false}
      open={modalCreateNewCreditCardExpenseIsOpen}
      okText="Adicionar"
      okButtonProps={
        {
          htmlType: 'submit',
          form: 'crete-credit-card-new-expense',
          loading: isLoading,
        } as ButtonProps
      }
      cancelText="Cancelar"
      onCancel={() => toggleModalCreateNewCreditCardExpense()}
      cancelButtonProps={{
        disabled: isLoading,
      }}
    >
      <FormCreateNewCreditCardExpense onSubmit={createNewCreditCardExpense} />
    </Modal>
  );
}
