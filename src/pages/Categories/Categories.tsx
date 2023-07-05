import { Button, Col, Row, Select, Space, Tag } from "antd";
import { ModalCreateCategory } from "./components/ModalCreateCategory";
import { Header } from "antd/es/layout/layout";
import { TableCategories } from "./components/TableCategories";
import { HeaderActions } from "./components/HeaderActions";

export function Categories() {
  return (
    <>
      <Col
        style={{
          maxWidth: "100%",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        <Header
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            display: "flex",
            width: "100%",
            backgroundColor: "#fff",
          }}
        >
          <HeaderActions />
        </Header>
        <TableCategories />
      </Col>

      <ModalCreateCategory />
    </>
  );
}
