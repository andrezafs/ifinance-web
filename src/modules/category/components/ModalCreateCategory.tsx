import { ButtonProps, Modal } from 'antd';

import { useCreateCategoryMutation, useListCategoriesQuery } from '@/graphql';
import { useQueryClient } from '@tanstack/react-query';
import { useNotificationContext } from '@/modules/shared/context/NotificationContext';

import { useCategoriesActions } from '../contexts/CategoriesActionsContext';
import { FormCreateCategory } from './FormCreateCategory';

export function ModalCreateCategory() {
  const { modalCreateCategoryIsOpen, toggleModalCreateCategory } =
    useCategoriesActions();

  const { api } = useNotificationContext();

  const queryClient = useQueryClient();

  const { mutate, isPending: isLoading } = useCreateCategoryMutation<any>({
    onSuccess: () => {
      toggleModalCreateCategory();

      queryClient.invalidateQueries({
        queryKey: useListCategoriesQuery.getKey(),
      });

      api.open({
        type: 'success',
        message: 'Sucesso!',
        description: 'A categoria foi criada com sucesso!',
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

  if (!modalCreateCategoryIsOpen) return null;

  return (
    <Modal
      title="Cadastrar Nova Categoria"
      centered
      maskClosable={false}
      width={400}
      open={modalCreateCategoryIsOpen}
      okText="Salvar"
      okButtonProps={
        {
          htmlType: 'submit',
          form: 'create-category',
          loading: isLoading,
        } as ButtonProps
      }
      cancelText="Cancelar"
      onCancel={() => toggleModalCreateCategory()}
      cancelButtonProps={{
        disabled: isLoading,
      }}
    >
      <FormCreateCategory
        onSubmit={data => {
          mutate({ data });
        }}
      />
    </Modal>
  );
}
