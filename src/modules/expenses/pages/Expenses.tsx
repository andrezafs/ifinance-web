import { Col, theme } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { PlusOutlined } from '@ant-design/icons';

import { ButtonAction } from '@/modules/shared/components/ButtonAction';

import { TableExpenses } from '../components/TableExpenses';
import { useExpenseActions } from '../contexts/ExpensesActionsContext';
import { ModalCreateNewExpense } from '../components/ModalCreateNewExpense';

export function Expenses() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { toggleModalCreateExpense } = useExpenseActions();

  return (
    <>
      <Col>
        <Header
          style={{
            justifyContent: 'flex-end',
            alignItems: 'center',
            display: 'flex',
            width: '100%',
            background: colorBgContainer,
          }}
        >
          <ButtonAction
            icon={<PlusOutlined />}
            size="large"
            onClick={() => {
              toggleModalCreateExpense();
            }}
          />
        </Header>
        <br />
        <TableExpenses />;
      </Col>

      <ModalCreateNewExpense />
    </>
  );
}
