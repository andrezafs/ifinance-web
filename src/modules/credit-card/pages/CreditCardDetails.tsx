import { PlusOutlined } from '@ant-design/icons';
import { Col, theme } from 'antd';
import { Header } from 'antd/es/layout/layout';

import { ButtonAction } from '@/modules/shared/components/ButtonAction';

import { CreditCardStatistics } from '../components/CreditCardStatistics';
import { ModalCreateNewCreditCardExpense } from '../components/ModalCreateNewCreditCardExpense';
import { TableExpensesCreditCard } from '../components/TableExpensesCreditCard';
import { useCreditCardActions } from '../contexts/CreditCardsActionsContext';

export function CreditCardDetails() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { toggleModalCreateNewCreditCardExpense } = useCreditCardActions();

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
              toggleModalCreateNewCreditCardExpense();
            }}
          />
        </Header>
        <br />

        <CreditCardStatistics />
        <br />
        <TableExpensesCreditCard />
      </Col>
      <ModalCreateNewCreditCardExpense />
    </>
  );
}
