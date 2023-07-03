import { Col } from "antd";
import { TableCategories } from "./TableCategories";
import { ModalCreateCategory } from "./components/ModalCreateCategory";

export function Categories() {
  return (
    <>
      <Col
        style={{
          maxWidth: "100%",
          margin: "0 auto",
        }}
      >
        <TableCategories />
      </Col>

      <ModalCreateCategory />
    </>
  );
}
