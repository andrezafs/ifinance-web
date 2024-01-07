import { ButtonProps, Modal } from 'antd';

import { useCreateCreditCardMutation } from '@/graphql';
import { useQueryClient } from '@tanstack/react-query';

import { useCreditCardActions } from '../contexts/CreditCardsActionsContext';
import { FormCreateCardCredit } from './FormCreateCardCredit';

export function ModalCreateCreditCard() {
  const {
    modalCreateCreditCardIsOpen,
    toggleModalCreateCreditCard,
    messageApi,
  } = useCreditCardActions();

  const queryClient = useQueryClient();

  const { mutate, isPending: isLoading } = useCreateCreditCardMutation({
    onSuccess: () => {
      toggleModalCreateCreditCard();

      queryClient.invalidateQueries({
        queryKey: useCreateCreditCardMutation.getKey(),
      });

      messageApi.open({
        type: 'success',
        content: 'Cartão de crédito criado com sucesso!',
        duration: 2,
      });
    },

    onError: () => {
      messageApi.open({
        type: 'error',
        content: 'Erro ao criar cartão de crédito',
        duration: 2,
      });
    },
  });

  if (!modalCreateCreditCardIsOpen) return null;

  return (
    <Modal
      centered
      width={450}
      maskClosable={false}
      open={modalCreateCreditCardIsOpen}
      okText="Criar"
      okButtonProps={
        {
          htmlType: 'submit',
          form: 'create-credit-card',
          loading: isLoading,
        } as ButtonProps
      }
      cancelText="Cancelar"
      onCancel={() => toggleModalCreateCreditCard()}
      cancelButtonProps={{
        disabled: isLoading,
      }}
    >
      <FormCreateCardCredit onSubmit={data => mutate({ data })} />
    </Modal>
  );
}
