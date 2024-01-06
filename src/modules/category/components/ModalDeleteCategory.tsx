import { Alert, Modal, Typography } from 'antd';

import { useQueryClient } from '@tanstack/react-query';
import {
  ListCategoriesQuery,
  useDeleteCategoryMutation,
  useListCategoriesQuery,
} from '@/graphql';
import { useNotificationContext } from '@/modules/shared/context/NotificationContext';

import { useCategoriesActions } from '../contexts/CategoriesActionsContext';

export function ModalDeleteCategory() {
  const queryClient = useQueryClient();

  const {
    modalDeleteCategoryIsOpen,
    toggleModalDeleteCategory,
    category,
    handleSetCategory,
  } = useCategoriesActions();

  const { api } = useNotificationContext();

  const { mutate, isPending: isLoading } = useDeleteCategoryMutation({
    onSuccess: () => {
      toggleModalDeleteCategory();
      handleSetCategory(null);

      queryClient.setQueryData<ListCategoriesQuery>(
        useListCategoriesQuery.getKey(),
        oldData => {
          if (!oldData) return oldData;

          const newData = oldData.listCategories.filter(
            item => item.id !== category?.id,
          );

          return {
            ...oldData,
            listCategories: newData,
          };
        },
      );

      api.open({
        type: 'success',
        message: 'Sucesso!',
        description: 'A categoria foi deletada com sucesso!',
      });
    },
    onError: () => {
      api.open({
        type: 'error',
        message: 'Erro!',
        description: 'Por favor, tente novamente.',
      });
    },
  });

  if (!category) return null;

  return (
    <Modal
      centered
      open={modalDeleteCategoryIsOpen}
      okText="Deletar"
      onOk={() => {
        mutate({
          deleteCategoryId: category?.id as string,
        });
      }}
      okButtonProps={{
        danger: true,
        htmlType: 'submit',
        loading: isLoading,
      }}
      cancelText="Cancelar"
      onCancel={() => {
        toggleModalDeleteCategory();
        handleSetCategory(null);
      }}
      cancelButtonProps={{
        disabled: isLoading,
        htmlType: 'button',
        danger: true,
      }}
      maskClosable={false}
      width={350}
    >
      <Typography.Title level={4}>Delete Category</Typography.Title>
      <Alert
        description={
          <>
            Ao deletar a categoria <strong>{category?.name}</strong>, todas as
            transações associadas a ela serão movidas para a categoria outros.
            Deseja continuar?
          </>
        }
        type="error"
      />
    </Modal>
  );
}
