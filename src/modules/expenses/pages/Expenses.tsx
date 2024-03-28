import { PlusOutlined } from '@ant-design/icons';
import { Col, theme } from 'antd';
import { Header } from 'antd/es/layout/layout';

import { ButtonAction } from '@/modules/shared/components/ButtonAction';
import { SelectMonthExpense } from '@/modules/shared/components/SelectMonthExpense';

import { ModalCreateNewExpense } from '../components/ModalCreateNewExpense';
import { TableExpenses } from '../components/TableExpenses';
import { useExpenseActions } from '../contexts/ExpensesActionsContext';

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
            justifyContent: 'space-between',
            alignItems: 'center',
            display: 'flex',
            width: '100%',
            background: colorBgContainer,
          }}
        >
          <SelectMonthExpense />

          <ButtonAction
            icon={<PlusOutlined />}
            size="large"
            onClick={() => {
              toggleModalCreateExpense();
            }}
          />
        </Header>
        <br />
        <TableExpenses />
      </Col>

      <ModalCreateNewExpense />
    </>
  );
}
