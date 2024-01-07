import { ButtonProps, Modal } from 'antd';

import { produce } from 'immer';

import { useQueryClient } from '@tanstack/react-query';
import {
  ListCategoriesQuery,
  useListCategoriesQuery,
  useUpdateCategoryMutation,
} from '@/graphql';
import { useNotificationContext } from '@/modules/shared/context/NotificationContext';

import { useCategoriesActions } from '../contexts/CategoriesActionsContext';
import { FormEditCategory, FormFields } from './FormEditCategory';

export function ModalEditCategory() {
  const {
    modalEditCategory,
    toggleModalEditCategory,
    category,
    handleSetCategory,
  } = useCategoriesActions();

  const queryClient = useQueryClient();

  const { api } = useNotificationContext();

  const { mutate, isPending: isLoading } = useUpdateCategoryMutation({
    onSuccess: ({ updateCategory }) => {
      handleSetCategory(null);
      toggleModalEditCategory();

      queryClient.setQueryData<ListCategoriesQuery>(
        useListCategoriesQuery.getKey(),
        oldData => {
          if (!oldData) return oldData;

          return produce(oldData, draft => {
            draft.listCategories = draft.listCategories.map(item => {
              if (item.id === updateCategory?.id) {
                return {
                  ...item,
                  ...updateCategory,
                };
              }

              return item;
            });
          });
        },
      );

      api.open({
        type: 'success',
        message: 'Sucesso!',
        description: 'A categoria foi editada com sucesso!',
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
