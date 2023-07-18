import { useQueryClient } from "@tanstack/react-query";
import { Button, Modal, message } from "antd";
import {
  useCreateCategoryMutation,
  useListCategoriesQuery,
} from "../../../graphql";
import { useCategoriesActions } from "../contexts/CategoriesActionsContext";
import { FormCreateCategory } from "./FormCreateCategory";

export function ModalCreateCategory() {
  const [messageApi, contextHolder] = message.useMessage();

  const queryClient = useQueryClient();

  useCreateCategoryMutation({
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

  const { modalCreateCategoryIsOpen, toggleModalCreateCategory } =
    useCategoriesActions();

  return (
    <>
      {contextHolder}
      <Modal
        centered
        open={modalCreateCategoryIsOpen}
        onOk={() => toggleModalCreateCategory()}
        onCancel={() => toggleModalCreateCategory()}
        width={350}
        footer={[
          <Button
            key="submit"
            onClick={() => {
              toggleModalCreateCategory();
            }}
          >
            Salvar
          </Button>,
        ]}
      >
        <FormCreateCategory />
      </Modal>
    </>
  );
}
