import { useMemo } from 'react';
import { Space, Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

import { Category } from '@/graphql';
import { ButtonAction } from '@/modules/shared/components/ButtonAction';

import { useCategoriesActions } from '../contexts/CategoriesActionsContext';

type DataType = {
  key: string;
  name: string;
  color: string;
  userId: string;
  subcategory?: string[];
};

export function useCategoriesData(categories?: Category[]) {
  const {
    toggleModalDeleteCategory,
    toggleModalEditCategory,
    handleSetCategory,
  } = useCategoriesActions();

  const data = useMemo<DataType[]>(() => {
    if (!categories) return [];

    return categories.map(category => ({
      key: category.id,
      name: category.name,
      color: category.color,
      userId: category.userId,
    }));
  }, [categories]);

  const columns = useMemo<ColumnsType<DataType>>(
    () => [
      {
        title: 'Nome',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Cor',
        dataIndex: 'color',
        key: 'color',
        align: 'center',
        render: color => (
          <Tag
            color={color}
            key={color}
            style={{
              width: '20px',
              height: '20px',
              borderRadius: '50%',
            }}
          />
        ),
      },
      {
        title: 'Ações',
        key: 'actions',
        align: 'right',
        render: (_, record) => (
          <Space
            size="middle"
            style={{
              width: '100%',
              justifyContent: 'flex-end',
            }}
          >
            {/* <ButtonAction tooltipAction="Relatório" icon={<ReadOutlined />} /> */}

            <ButtonAction
              tooltipAction="Editar"
              icon={<EditOutlined />}
              onClick={() => {
                toggleModalEditCategory();
                handleSetCategory({
                  ...record,
                  id: record.key,
                });
              }}
            />

            <ButtonAction
              tooltipAction="Deletar"
              icon={<DeleteOutlined />}
              onClick={() => {
                toggleModalDeleteCategory();
                handleSetCategory({
                  ...record,
                  id: record.key,
                });
              }}
            />
          </Space>
        ),
      },
    ],
    [handleSetCategory, toggleModalDeleteCategory, toggleModalEditCategory],
  );

  return useMemo(() => ({ columns, data }), [columns, data]);
}
