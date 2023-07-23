/* eslint-disable react/no-unstable-nested-components */
import { Row, Skeleton, Table } from 'antd';

import { useListCategoriesQuery } from '@/graphql';

import { useCategoriesData } from '../hooks/useCategoriesData';

export function TableCategories() {
  const { data: categories, isLoading } = useListCategoriesQuery();
  const { columns, data } = useCategoriesData(categories?.listCategories);

  if (isLoading) {
    return <Skeleton active />;
  }

  return (
    <Table
      pagination={false}
      expandable={{
        expandedRowRender: record => (
          <Row
            style={{
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {record.subcategory}
          </Row>
        ),
        rowExpandable: record => record.subcategory !== undefined,
      }}
      columns={columns}
      dataSource={data}
    />
  );
}
