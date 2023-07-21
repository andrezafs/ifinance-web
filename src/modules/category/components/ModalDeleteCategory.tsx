import { useQueryClient } from "@tanstack/react-query";
import { Alert, Button, Modal, Typography, message } from "antd";
import {
  useDeleteCategoryMutation,
  useListCategoriesQuery,
} from "../../../graphql";
import { useCategoriesActions } from "../contexts/CategoriesActionsContext";
import { Fragment } from "react";

export function ModalDeleteCategory() {
  const [messageApi, contextHolder] = message.useMessage();
  const queryClient = useQueryClient();

  const {
    modalDeleteCategoryIsOpen,
    toggleModalDeleteCategory,
    category,
    handleSetCategory,
  } = useCategoriesActions();

  const { mutate } = useDeleteCategoryMutation({
    onSuccess: () => {
      useDeleteCategoryMutation.getKey();
      handleSetCategory(null);
      queryClient.invalidateQueries(useListCategoriesQuery.getKey());
      messageApi.open({
        type: "success",
        content: "Categoria deletada com sucesso!",
        duration: 2,
      });
    },
    onError: () => {
      messageApi.open({
        type: "error",
        content: "Erro ao deletar categoria!",
        duration: 2,
      });
    },
  });

  console.log(category);

  return (
    <>
      {contextHolder}
      <Modal
        centered
        open={modalDeleteCategoryIsOpen}
        onOk={() => toggleModalDeleteCategory()}
        onCancel={() => toggleModalDeleteCategory()}
        maskClosable={false}
        width={350}
        footer={[
          <Button
            type="text"
            danger
            key="submit"
            onClick={() => {
              mutate({
                deleteCategoryId: category?.id as string,
              });
              toggleModalDeleteCategory();
            }}
          >
            Deletar
          </Button>,
          <Button
            type="primary"
            danger
            key="cancel"
            onClick={() => toggleModalDeleteCategory()}
          >
            Cancelar
          </Button>,
        ]}
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
    </>
  );
}
