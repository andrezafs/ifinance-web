import { BgColorsOutlined } from "@ant-design/icons";
import { Button, ColorPicker, Input, Modal, Row, Typography } from "antd";
import Title from "antd/es/typography/Title";
import { useCategoriesActions } from "../contexts/CategoriesActionsContext";

export function ModalCreateCategory() {
  const { modalCreateCategoryIsOpen, toggleModalCreateCategory } =
    useCategoriesActions();

  return (
    <>
      <Modal
        centered
        open={modalCreateCategoryIsOpen}
        onOk={() => toggleModalCreateCategory()}
        onCancel={() => toggleModalCreateCategory()}
        width={350}
        footer={[
          <Button key="submit" onClick={() => toggleModalCreateCategory()}>
            Salvar
          </Button>,
        ]}
      >
        <Typography.Title level={4}>Create Category</Typography.Title>
        <Input placeholder="Name" size="middle" />
        <Row
          style={{
            marginTop: 10,
            justifyContent: "space-between",
          }}
        >
          <Row
            style={{
              gap: 10,
              alignItems: "center",
            }}
          >
            <BgColorsOutlined width={40} height={40} />
            <Title level={5}>Color</Title>
          </Row>
          <ColorPicker allowClear onOpenChange={toggleModalCreateCategory} />
        </Row>
      </Modal>
    </>
  );
}
