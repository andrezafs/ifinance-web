import { Modal, message } from 'antd';

import { useQueryClient } from '@tanstack/react-query';
import { useListCategoriesQuery, useUpdateCategoryMutation } from '@/graphql';

import { useCategoriesActions } from '../contexts/CategoriesActionsContext';
import { FormEditCategory, FormFields } from './FormEditCategory';

export function ModalEditCategory() {
  const { modalEditCategory, toggleModalEditCategory, category } =
    useCategoriesActions();

  const [messageApi, contextHolder] = message.useMessage();

  const queryClient = useQueryClient();

  const { mutate, isLoading } = useUpdateCategoryMutation({
    onSuccess: () => {
      toggleModalEditCategory();
      queryClient.invalidateQueries(useListCategoriesQuery.getKey());
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

  return (
    <>
      {contextHolder}
      <Modal
        title="Editar Categoria"
        centered
        maskClosable={false}
        width={400}
        open={modalEditCategory}
        okText="Editar"
        okButtonProps={{
          htmlType: 'submit',
          // form: "edit-category",
          loading: isLoading,
        }}
        cancelText="Cancelar"
        onCancel={() => toggleModalEditCategory()}
        cancelButtonProps={{
          disabled: isLoading,
        }}
      >
        {category && (
          <FormEditCategory
            onSubmit={handleSubmit}
            defaultValues={{
              color: category?.color,
              name: category?.name,
            }}
          />
        )}
      </Modal>
    </>
  );
}
