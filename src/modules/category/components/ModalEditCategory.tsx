import { ButtonProps, Modal } from 'antd';

import { useQueryClient } from '@tanstack/react-query';
import { useListCategoriesQuery, useUpdateCategoryMutation } from '@/graphql';

import { useCategoriesActions } from '../contexts/CategoriesActionsContext';
import { FormEditCategory, FormFields } from './FormEditCategory';

export function ModalEditCategory() {
  const {
    modalEditCategory,
    toggleModalEditCategory,
    category,
    handleSetCategory,
    messageApi,
  } = useCategoriesActions();

  const queryClient = useQueryClient();

  const { mutate, isPending: isLoading } = useUpdateCategoryMutation({
    onSuccess: () => {
      handleSetCategory(null);
      toggleModalEditCategory();
      queryClient.invalidateQueries({
        queryKey: useListCategoriesQuery.getKey(),
      });
      messageApi.open({
        type: 'success',
        content: 'Categoria editada com sucesso',
        duration: 2,
      });
    },
    onError: () => {
      messageApi.open({
        type: 'error',
        content: 'Erro ao editar a categoria',
        duration: 2,
      });
    },
  });

  function handleSubmit(data: FormFields) {
    mutate({
      updateCategoryId: category?.id as string,
      data,
    });
  }

  if (!category) return null;

  return (
    <Modal
      title="Editar Categoria"
      centered
      maskClosable={false}
      width={400}
      open={modalEditCategory}
      okText="Editar"
      okButtonProps={
        {
          htmlType: 'submit',
          form: 'edit-category',
          loading: isLoading,
        } as ButtonProps
      }
      cancelText="Cancelar"
      onCancel={() => {
        toggleModalEditCategory();
        handleSetCategory(null);
      }}
      cancelButtonProps={{
        disabled: isLoading,
      }}
    >
      <FormEditCategory
        onSubmit={handleSubmit}
        defaultValues={{
          color: category?.color,
          name: category?.name,
        }}
      />
    </Modal>
  );
}
