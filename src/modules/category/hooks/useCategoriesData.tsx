import { Space, Tag } from "antd";
import { ColumnsType } from "antd/es/table";

import { DeleteOutlined, EditOutlined, ReadOutlined } from "@ant-design/icons";
import { useMemo } from "react";
import { ButtonAction } from "../../shared/components/ButtonAction";
import { useCategoriesActions } from "../contexts/CategoriesActionsContext";
import { Category } from "../../../graphql";

type DataType = {
  key: string;
  name: string;
  color: string;
  subcategory?: string[];
};

export function useCategoriesData(categories?: Category[]) {
  const { toggleModalCreateCategory, toggleModalDeleteCategory } =
    useCategoriesActions();

  const data = useMemo<DataType[]>(() => {
    if (!categories) return [];

    return categories.map((category) => ({
      key: category.id,
      name: category.name,
      color: category.color,
    }));
  }, [categories]);

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
        align: "center",
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
        align: "right",
        render: () => (
          <Space
            size="middle"
            style={{
              width: "100%",
              justifyContent: "flex-end",
            }}
          >
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
              onClick={() => toggleModalDeleteCategory()}
            />
          </Space>
        ),
      },
    ],
    [toggleModalCreateCategory, toggleModalDeleteCategory]
  );

  return useMemo(() => ({ columns, data }), [columns, data]);
}
