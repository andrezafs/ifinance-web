import { PlusOutlined } from '@ant-design/icons';
import { Col, Divider } from 'antd';
import { Header } from 'antd/es/layout/layout';

import { ButtonAction } from '@/modules/shared/components/ButtonAction';

import { CreditCardStatistics } from '../components/CreditCardStatistics';
import { ModalCreateNewCreditCardExpense } from '../components/ModalCreateNewCreditCardExpense';
import { TableExpensesCreditCard } from '../components/TableExpensesCreditCard';
import { useCreditCardActions } from '../contexts/CreditCardsActionsContext';

export function CreditCardDetails() {
  const { toggleModalCreateNewCreditCardExpense } = useCreditCardActions();

  return (
    <>
      <Col span={30}>
        <Header
          style={{
            backgroundColor: '#fff',
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

        <CreditCardStatistics />
        <Divider />
        <TableExpensesCreditCard />
      </Col>
      <ModalCreateNewCreditCardExpense />
    </>
  );
}
