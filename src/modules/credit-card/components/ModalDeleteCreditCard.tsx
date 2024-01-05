import { Alert, Modal, Typography } from 'antd';

import {
  useDeleteCreditCardMutation,
  useListCreditCardsQuery,
} from '@/graphql';
import { useQueryClient } from '@tanstack/react-query';

import { useCreditCardActions } from '../contexts/CreditCardsActionsContext';

export function ModalDeleteCreditCard() {
  const queryClient = useQueryClient();

  const {
    modalDeleteCreditCardIsOpen,
    toggleModalDeleteCreditCard,
    creditCard,
    handleSetCreditCard,
    messageApi,
  } = useCreditCardActions();

  const { mutate, isPending: isLoading } = useDeleteCreditCardMutation({
    onSuccess: () => {
      toggleModalDeleteCreditCard();
      useDeleteCreditCardMutation.getKey();
      handleSetCreditCard(null);
      queryClient.invalidateQueries({
        queryKey: useListCreditCardsQuery.getKey(),
      });
      messageApi.open({
        type: 'success',
        content: 'Cartão de Crédito deletado com sucesso!',
        duration: 2,
      });
    },
    onError: () => {
      messageApi.open({
        type: 'error',
        content: 'Erro ao deletar cartão de crédito!',
        duration: 2,
      });
    },
  });

  if (!creditCard) return null;

  return (
    <Modal
      centered
      open={modalDeleteCreditCardIsOpen}
      okText="Deletar"
      onOk={() => {
        mutate({
          deleteCreditCardId: creditCard?.id as string,
        });
      }}
      okButtonProps={{
        danger: true,
        htmlType: 'submit',
        loading: isLoading,
      }}
      cancelText="Cancelar"
      onCancel={() => {
        toggleModalDeleteCreditCard();
        handleSetCreditCard(null);
      }}
      cancelButtonProps={{
        htmlType: 'button',
        danger: true,
        disabled: isLoading,
      }}
      maskClosable={false}
      width={350}
    >
      <Typography.Title level={4}>Delete Category</Typography.Title>
      <Alert
        description={
          <>
            Tem certeza que deseja deletar o cartão de crédito
            <strong>{creditCard.name}</strong> ? Ao deletar o cartão de crédito,
            todas as despesas relacionadas a ele serão deletadas também.
          </>
        }
        type="error"
      />
    </Modal>
  );
}
