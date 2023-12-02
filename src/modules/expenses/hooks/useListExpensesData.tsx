import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { ColumnFilterItem } from 'antd/es/table/interface';
import { useMemo } from 'react';

import { Expense } from '@/graphql';
import { ButtonAction } from '@/modules/shared/components/ButtonAction';
import { formatCurrency } from '@/modules/shared/helpers/formatCurrency';
import { formatDate } from '@/modules/shared/helpers/formatDate';

type DataType = {
  color?: string;
  key: string;
  situation: string;
  purchaseDate: number;
  purchaseDateLabel: string;
  description: string;
  category: string;
  value: number;
  valueLabel: string;
  account: string;
};

export function useListExpenseData(expenses?: Expense[]) {
  const filterCategories = useMemo(() => {
    if (!expenses) return [];

    return Array.from(
      new Set(
        expenses
          ?.map(expense => expense.category)
          ?.flat()
          .map(item => item?.name),
      ),
    ).map(
      item =>
        ({
          text: item,
          value: item,
        }) as ColumnFilterItem,
    );
  }, [expenses]);

  const filterAccount = useMemo(() => {
    if (!expenses) return [];

    return Array.from(
      new Set(
        expenses
          ?.map(expense => expense.creditCard)
          ?.flat()
          .map(item => item?.name),
      ),
    ).map(
      item =>
        ({
          text: item,
          value: item,
        }) as ColumnFilterItem,
    );
  }, [expenses]);

  const data = useMemo<DataType[]>(() => {
    if (!expenses) return [];

    return expenses.map(
      expense =>
        ({
          key: expense.id,
          category: expense?.category?.name,
          description: expense.name,
          value: expense.value,
          valueLabel: formatCurrency(expense.value || 0),
          situation: expense.isPaid ? 'Pago' : 'Pendente',
          purchaseDate: expense.purchaseDate,
          purchaseDateLabel: formatDate(expense.purchaseDate),
          account: expense?.creditCard?.name,
        }) as DataType,
    );
  }, [expenses]);

  const columns = useMemo<ColumnsType<DataType>>(
    () => [
      {
        title: 'Situação',
        dataIndex: 'situation',
        key: 'situation',
        filters: [
          {
            text: 'Pago',
            value: 'Pago',
          },
          {
            text: 'Pendente',
            value: 'Pendente',
          },
        ],
        onFilter: (value, record) =>
          record.situation.indexOf(value as string) === 0,
      },
      {
        title: 'Data de Compra',
        dataIndex: 'purchaseDateLabel',
        key: 'purchaseDateLabel',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.purchaseDate - b.purchaseDate,
      },
      {
        title: 'Descrição',
        dataIndex: 'description',
        key: 'description',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.description.length - b.description.length,
      },
      {
        title: 'Categoria',
        dataIndex: 'category',
        key: 'category',

        filters: filterCategories,
        onFilter: (value, record) =>
          record.category.indexOf(value as string) === 0,

        // render: (_, record) => (
        //   // eslint-disable-next-line react/jsx-no-useless-fragment
        //   <>
        //     {record.category && (
        //       <Tag
        //         color={record.color || 'default-color'}
        //         key={record.category}
        //       >
        //         {record.category.toUpperCase()}
        //       </Tag>
        //     )}
        //   </>
        // ),
      },
      {
        title: 'Origem',
        dataIndex: 'account',
        key: 'account',
        filters: filterAccount,
        onFilter: (value, record) =>
          record.account.indexOf(value as string) === 0,
      },
      {
        title: 'Valor',
        dataIndex: 'valueLabel',
        key: 'valueLabel',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.value - b.value,
      },
      {
        title: 'Ações',
        dataIndex: 'actions',
        key: 'actions',
        render: () => (
          <Space
            size="middle"
            style={{
              width: '100%',
              justifyContent: 'flex-end',
            }}
          >
            <ButtonAction tooltipAction="Editar" icon={<EditOutlined />} />
            <ButtonAction tooltipAction="Deletar" icon={<DeleteOutlined />} />
          </Space>
        ),
      },
    ],

    [filterAccount, filterCategories],
  );

  return useMemo(() => ({ columns, data }), [columns, data]);
}
