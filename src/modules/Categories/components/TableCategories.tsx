import { Row, Table } from "antd";

import { useListCategoriesQuery } from "../../../graphql/generated/graphql";
import { useCategoriesData } from "../hooks/useCategoriesData";

export function TableCategories() {
  const { data: categories, isLoading } = useListCategoriesQuery();
  const { columns, data } = useCategoriesData(categories?.listCategories);

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  return (
    <Table
      expandable={{
        expandedRowRender: (record) => (
          <Row
            style={{
              margin: 0,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {record.subcategory}
          </Row>
        ),
        rowExpandable: (record) => record.subcategory !== undefined,
      }}
      columns={columns}
      dataSource={data}
    />
  );
}
