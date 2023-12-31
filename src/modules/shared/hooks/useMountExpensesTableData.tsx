import { useMemo } from 'react';
import { Space } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { DeleteOutlined } from '@ant-design/icons';
import { ColumnFilterItem } from 'antd/es/table/interface';

import { ButtonAction } from '@/modules/shared/components/ButtonAction';
import {
  Expense,
  useDeleteExpenseMutation,
  useListExpensesByCreditCardQuery,
  useListExpensesByWalletQuery,
  useListExpensesQuery,
} from '@/graphql';
import { formatCurrency } from '@/modules/shared/helpers/formatCurrency';
import { formatDate } from '@/modules/shared/helpers/formatDate';
import { useQueryClient } from '@tanstack/react-query';

export type ExpensesTableDataType = {
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

export function useMountExpensesTableData(expenses?: Expense[]) {
  const queryClient = useQueryClient();

  const { mutate: deleteExpense } = useDeleteExpenseMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: useListExpensesQuery.getKey({} as any),
      });
      queryClient.invalidateQueries({
        queryKey: useListExpensesByCreditCardQuery.getKey({} as any),
      });
      queryClient.invalidateQueries({
        queryKey: useListExpensesByWalletQuery.getKey({} as any),
      });
    },
  });

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

    const filters = Array.from(
      new Set(
        expenses
          ?.map(expense => expense.creditCard)
          ?.flat()
          .map(item => item?.name),
      ),
    )
      .map(
        item =>
          ({
            text: item,
            value: item,
          }) as ColumnFilterItem,
      )
      .filter(item => item.text);

    return [{ text: 'Carteira', value: 'Carteira' }, ...filters];
  }, [expenses]);

  const data = useMemo<ExpensesTableDataType[]>(() => {
    if (!expenses) return [];

    return expenses.map(expense => ({
      key: expense.id,
      category: expense?.category?.name,
      description: expense.name,
      value: expense.value,
      valueLabel: formatCurrency(expense.value || 0),
      situation: expense.isPaid ? 'Pago' : 'Pendente',
      purchaseDate: expense.purchaseDate,
      purchaseDateLabel: formatDate(expense.purchaseDate),
      account: expense?.creditCard?.name ?? 'Carteira',
      color: expense?.category?.color,
    }));
  }, [expenses]);

  const columns = useMemo<ColumnsType<ExpensesTableDataType>>(
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
        sorter: (a, b) =>
          new Date(a.purchaseDate).getTime() -
          new Date(b.purchaseDate).getTime(),
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
        render: (_, record) => (
          <Space
            size="middle"
            style={{
              width: '100%',
              justifyContent: 'flex-end',
            }}
          >
            {/* <ButtonAction tooltipAction="Relatório" icon={<ReadOutlined />} /> */}
            {/* <ButtonAction tooltipAction="Editar" icon={<EditOutlined />} /> */}
            <ButtonAction
              tooltipAction="Deletar"
              icon={<DeleteOutlined />}
              onClick={() => deleteExpense({ deleteExpenseId: record.key })}
            />
          </Space>
        ),
      },
    ],

    [filterCategories, filterAccount, deleteExpense],
  );

  return useMemo(() => ({ columns, data }), [columns, data]);
}
