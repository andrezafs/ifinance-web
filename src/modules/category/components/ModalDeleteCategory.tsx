import { Alert, Modal, Typography } from 'antd';

import { useQueryClient } from '@tanstack/react-query';
import { useDeleteCategoryMutation, useListCategoriesQuery } from '@/graphql';

import { useCategoriesActions } from '../contexts/CategoriesActionsContext';

export function ModalDeleteCategory() {
  const queryClient = useQueryClient();

  const {
    modalDeleteCategoryIsOpen,
    toggleModalDeleteCategory,
    category,
    handleSetCategory,
    messageApi,
  } = useCategoriesActions();

  const { mutate, isLoading } = useDeleteCategoryMutation({
    onSuccess: () => {
      toggleModalDeleteCategory();
      useDeleteCategoryMutation.getKey();
      handleSetCategory(null);
      queryClient.invalidateQueries(useListCategoriesQuery.getKey());
      messageApi.open({
        type: 'success',
        content: 'Categoria deletada com sucesso!',
        duration: 2,
      });
    },
    onError: () => {
      messageApi.open({
        type: 'error',
        content: 'Erro ao deletar categoria!',
        duration: 2,
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
