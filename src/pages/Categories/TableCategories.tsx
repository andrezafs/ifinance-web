import { Row, Table } from "antd";

import { useCategoriesData } from "./hooks/useCategoriesData";

export function TableCategories() {
  const { columns, data } = useCategoriesData();

  return (
    <Table
      expandable={{
        expandedRowRender: (record) => (
          <Row
            style={{
              margin: 0,
              display: "flex",
              flexDirection: "column",
              background: "red",
            }}
          >
            {record.subcategory}
          </Row>
        ),
        rowExpandable: (record) => record.subcategory !== undefined,
      }}
      columns={columns}
      dataSource={data}
      bordered
    />
  );
}
