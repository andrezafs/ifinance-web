import { Modal, message } from 'antd';

import { useQueryClient } from '@tanstack/react-query';
import { useCreateCategoryMutation, useListCategoriesQuery } from '@/graphql';

import { useCategoriesActions } from '../contexts/CategoriesActionsContext';
import { FormCreateCategory } from './FormCreateCategory';

export function ModalCreateCategory() {
  const { modalCreateCategoryIsOpen, toggleModalCreateCategory } =
    useCategoriesActions();

  const [messageApi, contextHolder] = message.useMessage();

  const queryClient = useQueryClient();

  const { mutate, isLoading } = useCreateCategoryMutation({
    onSuccess: () => {
      toggleModalCreateCategory();
      queryClient.invalidateQueries(useListCategoriesQuery.getKey());
      messageApi.open({
        type: 'success',
        content: 'Categoria criada com sucesso!',
        duration: 2,
      });
    },
    onError: () => {
      messageApi.open({
        type: 'error',
        content: 'Essa categoria já existe!',
        duration: 2,
      });
    },
  });

  return (
    <>
      {contextHolder}
      <Modal
        title="Cadastrar Nova Categoria"
        centered
        maskClosable={false}
        width={400}
        open={modalCreateCategoryIsOpen}
        okText="Salvar"
        okButtonProps={{
          htmlType: 'submit',
          form: 'create-category',
          loading: isLoading,
        }}
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
    </>
  );
}
