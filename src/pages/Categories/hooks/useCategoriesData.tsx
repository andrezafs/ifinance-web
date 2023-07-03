import { Space, Tag } from "antd";
import { ColumnsType } from "antd/es/table";

import { DeleteOutlined, EditOutlined, ReadOutlined } from "@ant-design/icons";
import { useMemo } from "react";
import { ButtonAction } from "../components/ButtonAction";
import { useCategoriesActions } from "../contexts/CategoriesActionsContext";

type DataType = {
  key: string;
  name: string;
  color: string;
  subcategory?: string[];
};

const data: DataType[] = [
  {
    key: "1",
    name: "Supermercado",
    color: "red",
    subcategory: ["Alimentos", "Limpeza"],
  },
  {
    key: "2",
    name: "Escritório",
    color: "blue",
  },
  {
    key: "3",
    name: "Casa",
    color: "green",
  },
];

export function useCategoriesData() {
  const { toggleModalCreateCategory } = useCategoriesActions();

  const columns = useMemo<ColumnsType<DataType>>(
    () => [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Color",
        dataIndex: "color",
        key: "color",
        render: (color) => (
          <Tag
            color={color}
            key={color}
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
            }}
          ></Tag>
        ),
      },
      {
        title: "Actions",
        key: "actions",
        align: "center",
        render: (_, record) => (
          <Space size="middle">
            <ButtonAction
              tooltipAction="Relatório"
              icon={<ReadOutlined />}
              onClick={() => toggleModalCreateCategory()}
            />

            <ButtonAction
              tooltipAction="Editar"
              icon={<EditOutlined />}
              onClick={() => console.log("Editar")}
            />

            <ButtonAction
              tooltipAction="Deletar"
              icon={<DeleteOutlined />}
              onClick={() => console.log("Deletar")}
            />
          </Space>
        ),
      },
    ],
    [toggleModalCreateCategory]
  );

  return {
    columns,
    data,
  };
}
