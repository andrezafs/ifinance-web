import { Alert, Button, Modal, Typography } from "antd";
import { useCategoriesActions } from "../contexts/CategoriesActionsContext";

export function ModalDeleteCategory() {
  const { modalDeleteCategoryIsOpen, toggleModalDeleteCategory } =
    useCategoriesActions();

  return (
    <>
      <Modal
        centered
        open={modalDeleteCategoryIsOpen}
        onOk={() => toggleModalDeleteCategory()}
        onCancel={() => toggleModalDeleteCategory()}
        width={350}
        footer={[
          <Button
            type="text"
            danger
            key="submit"
            onClick={() => toggleModalDeleteCategory()}
          >
            Não mover
          </Button>,
          <Button
            type="primary"
            danger
            key="submit"
            onClick={() => toggleModalDeleteCategory()}
          >
            Mover Transações
          </Button>,
        ]}
      >
        <Typography.Title level={4}>Delete Category</Typography.Title>
        <Alert
          description="  Ao deletar essa categoria, todas as transações associadas a ela também
          serão excluídas. Antes de deletá-la, gostaria de mover suas transações
          para outra categoria?"
          type="error"
        />
      </Modal>
    </>
  );
}
