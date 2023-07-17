import { Row, Table } from "antd";

import { useCategoriesData } from "../hooks/useCategoriesData";
import { useQuery } from "@tanstack/react-query";
import { getListCategories } from "../services/getListCategories";

export function TableCategories() {
  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getListCategories,
  });
  const { columns, data } = useCategoriesData(categories);

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
