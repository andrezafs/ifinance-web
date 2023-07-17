import { Space } from "antd";
import { ColumnsType } from "antd/es/table";
import { useMemo } from "react";
import { ButtonAction } from "../../shared/components/ButtonAction";
import { DeleteOutlined, EditOutlined, ReadOutlined } from "@ant-design/icons";

type DataType = {
  key: string;
  situation: string;
  purchaseDate: number;
  purchaseDateLabel: string;
  description: string;
  category: string;
  value: number;
  valueLabel: string;
};

const data: DataType[] = [
  {
    key: "1",
    situation: "Pago",
    purchaseDate: 10 / 6 / 2023,
    purchaseDateLabel: "10/06/2023",
    description: "Compra no mercado",
    category: "Supermercado",
    value: 500,
    valueLabel: "R$ 500,00",
  },
  {
    key: "2",
    situation: "Pendente",
    purchaseDate: 8 / 5 / 2023,
    purchaseDateLabel: "08/05/2023",
    description: "Compra na amazon",
    category: "Escritório",
    value: 200,
    valueLabel: "R$ 200,00",
  },
  {
    key: "3",
    situation: "Pago",
    purchaseDate: 12 / 4 / 2023,
    purchaseDateLabel: "12/04/2023",
    description: "Compra nas casas bahia",
    category: "Casa",
    value: 1000,
    valueLabel: "R$ 1.000,00",
  },
  {
    key: "4",
    situation: "Pendente",
    purchaseDate: 9 / 5 / 2023,
    purchaseDateLabel: "09/05/2023",
    description: "Compra na Boticário",
    category: "Higiene",
    value: 100,
    valueLabel: "R$ 100,00",
  },
];

export function useCreditCardDetailsData() {
  const columns = useMemo<ColumnsType<DataType>>(
    () => [
      {
        title: "Situação",
        dataIndex: "situation",
        key: "situation",
        filters: [
          {
            text: "Pago",
            value: "Pago",
          },
          {
            text: "Pendente",
            value: "Pendente",
          },
        ],
        onFilter: (value, record) =>
          record.situation.indexOf(value as string) === 0,
      },
      {
        title: "Data de Compra",
        dataIndex: "purchaseDateLabel",
        key: "purchaseDateLabel",
        defaultSortOrder: "descend",
        sorter: (a, b) => a.purchaseDate - b.purchaseDate,
      },
      {
        title: "Descrição",
        dataIndex: "description",
        key: "description",
        defaultSortOrder: "descend",
        sorter: (a, b) => a.description.length - b.description.length,
      },
      {
        title: "Categoria",
        dataIndex: "category",
        key: "category",
        filters: [
          {
            text: "Supermercado",
            value: "Supermercado",
          },
          {
            text: "Escritório",
            value: "Escritório",
          },
          {
            text: "Casa",
            value: "Casa",
          },
          {
            text: "Higiene",
            value: "Higiene",
          },
        ],
        onFilter: (value, record) =>
          record.category.indexOf(value as string) === 0,
      },
      {
        title: "Valor",
        dataIndex: "valueLabel",
        key: "valueLabel",
        defaultSortOrder: "descend",
        sorter: (a, b) => a.value - b.value,
      },
      {
        title: "Ações",
        dataIndex: "actions",
        key: "actions",
        render: (_, record) => (
          <Space
            size="middle"
            style={{
              width: "100%",
              justifyContent: "flex-end",
            }}
          >
            <ButtonAction tooltipAction="Relatório" icon={<ReadOutlined />} />
            <ButtonAction
              tooltipAction="Editar"
              icon={<EditOutlined />}
              onClick={() => console.log("Editar")}
            />

            <ButtonAction tooltipAction="Deletar" icon={<DeleteOutlined />} />
          </Space>
        ),
      },
    ],

    []
  );
  return {
    columns,
    data,
  };
}
