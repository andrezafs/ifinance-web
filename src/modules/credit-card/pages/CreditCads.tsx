import { Col, Row, theme } from 'antd';
import { Header } from 'antd/es/layout/layout';

import { useListCreditCardsQuery } from '@/graphql';
import { SelectMonthExpense } from '@/modules/shared/components/SelectMonthExpense';

import { HeaderActions } from '../components/Header';
import { ModalCreateCreditCard } from '../components/ModalCreateCreditCard';
import { CardCreditCard } from '../components/CardCreditCard';
import { ModalDeleteCreditCard } from '../components/ModalDeleteCreditCard';
import { ModalCreateNewCreditCardExpense } from '../components/ModalCreateNewCreditCardExpense';

export function CreditCards() {
  const { data } = useListCreditCardsQuery();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Header
        style={{
          background: colorBgContainer,
          justifyContent: 'space-between',
          alignItems: 'center',
          display: 'flex',
          width: '100%',
        }}
      >
        <SelectMonthExpense />

        <HeaderActions />
      </Header>

      <br />
      <Row gutter={[16, 8]}>
        {data?.listCreditCards.map(creditCard => (
          <Col span={8} key={creditCard.id}>
            <CardCreditCard data={creditCard} />
          </Col>
        ))}
      </Row>

      <ModalCreateCreditCard />
      <ModalDeleteCreditCard />
      <ModalCreateNewCreditCardExpense />
    </>
  );
}
