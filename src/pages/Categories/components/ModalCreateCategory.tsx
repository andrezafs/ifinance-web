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
        footer={[
          <Button key="submit" onClick={() => toggleModalCreateCategory()}>
            Salvar
          </Button>,
        ]}
      >
        <Typography.Title level={3}>Create Category</Typography.Title>
        <Input
          placeholder="Name"
          bordered={false}
          size="middle"
          style={{
            borderBottom: "1px solid #ccc",
          }}
        />
        <Row
          style={{
            alignItems: "center",
            gap: 8,
            paddingTop: 8,
            paddingBottom: 8,
          }}
        >
          <BgColorsOutlined width={40} height={40} />
          <Title
            level={5}
            style={{
              margin: 0,
            }}
          >
            Cor da Categoria
          </Title>
        </Row>
        <ColorPicker allowClear onOpenChange={toggleModalCreateCategory} />
      </Modal>
    </>
  );
}
