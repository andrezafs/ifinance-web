import { useQueryClient } from "@tanstack/react-query";
import { Button, Modal, message } from "antd";
import {
  useCreateCategoryMutation,
  useListCategoriesQuery,
} from "../../../graphql";
import { useCategoriesActions } from "../contexts/CategoriesActionsContext";
import { FormCreateCategory } from "./FormCreateCategory";
import { useState } from "react";

export function ModalCreateCategory() {
  const { modalCreateCategoryIsOpen, toggleModalCreateCategory } =
    useCategoriesActions();

  const [messageApi, contextHolder] = message.useMessage();

  const queryClient = useQueryClient();

  const { mutate, isLoading } = useCreateCategoryMutation({
    onSuccess: () => {
      queryClient.invalidateQueries(useListCategoriesQuery.getKey());
      messageApi.open({
        type: "success",
        content: "Categoria criada com sucesso!",
        duration: 2,
      });
    },
    onError: () => {
      messageApi.open({
        type: "error",
        content: "Essa categoria já existe!",
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
        open={modalCreateCategoryIsOpen}
        maskClosable={false}
        width={400}
        footer={[
          <Button
            key="submit"
            htmlType="submit"
            form="create-category"
            onClick={() => {
              toggleModalCreateCategory();
            }}
          >
            Salvar
          </Button>,

          <Button key="back" onClick={() => toggleModalCreateCategory()}>
            Cancelar
          </Button>,
        ]}
      >
        <FormCreateCategory
          onSubmit={(data) => {
            mutate({ data });
          }}
        />
      </Modal>
    </>
  );
}
