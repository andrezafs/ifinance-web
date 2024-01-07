/* eslint-disable react/no-unstable-nested-components */
import { Row, Table } from 'antd';

import { useListCategoriesQuery } from '@/graphql';

import { useCategoriesData } from '../hooks/useCategoriesData';

export function TableCategories() {
  const { data: categories, isFetching } = useListCategoriesQuery();
  const { columns, data } = useCategoriesData(categories?.listCategories);

  return (
    <Table
      loading={isFetching}
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
