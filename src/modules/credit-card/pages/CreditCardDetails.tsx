import { Col, Divider, Table } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { PlusOutlined } from '@ant-design/icons';

import { ButtonAction } from '@/modules/shared/components/ButtonAction';

import { CreditCardStatistics } from '../components/CreditCardStatistics';
import { ModalCreateNewCreditCardExpense } from '../components/ModalCreateNewCreditCardExpense';
import { useCreditCardActions } from '../contexts/CreditCardsActionsContext';
import { useCreditCardDetailsData } from '../hooks/useCreditCardDetailsData';

export function CreditCardDetails() {
  const { columns, data } = useCreditCardDetailsData();

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
        <Table columns={columns} dataSource={data} />
      </Col>
      <ModalCreateNewCreditCardExpense />
    </>
  );
}
