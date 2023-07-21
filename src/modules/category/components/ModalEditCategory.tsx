import { Modal } from "antd";
import { useCategoriesActions } from "../contexts/CategoriesActionsContext";
import { FormEditCategory } from "./FormEditCategory";

export function ModalEditCategory() {
  const { modalEditCategory, toggleModalEditCategory } = useCategoriesActions();

  return (
    <Modal
      title="Editar Categoria"
      centered
      open={modalEditCategory}
      onOk={() => toggleModalEditCategory()}
      onCancel={() => toggleModalEditCategory()}
      maskClosable={false}
      width={350}
    >
      <FormEditCategory />
    </Modal>
  );
}
