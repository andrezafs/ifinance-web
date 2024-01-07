import { Col, theme } from 'antd';
import { Header } from 'antd/es/layout/layout';

import { HeaderActions } from '../components/HeaderActions';
import { ModalCreateCategory } from '../components/ModalCreateCategory';
import { ModalDeleteCategory } from '../components/ModalDeleteCategory';
import { ModalEditCategory } from '../components/ModalEditCategory';
import { TableCategories } from '../components/TableCategories';

export function Categories() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Col>
        <Header
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            display: 'flex',
            width: '100%',
            background: colorBgContainer,
          }}
        >
          <HeaderActions />
        </Header>
        <br />
        <TableCategories />
      </Col>

      <ModalCreateCategory />
      <ModalDeleteCategory />
      <ModalEditCategory />
    </>
  );
}
