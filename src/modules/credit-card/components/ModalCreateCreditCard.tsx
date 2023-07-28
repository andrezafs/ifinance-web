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

  const { isLoading } = useCreateCreditCardMutation({
    onSuccess: () => {
      toggleModalCreateCreditCard();
      queryClient.invalidateQueries(useCreateCreditCardMutation.getKey());
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
      cancelButtonProps={{
        disabled: isLoading,
      }}
      onCancel={() => toggleModalCreateCreditCard()}
      width={450}
    >
      <FormCreateCardCredit
        onSubmit={() => {
          // mutate({ data });
        }}
      />
    </Modal>
  );
}
