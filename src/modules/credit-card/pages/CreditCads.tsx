import { Col, Row, theme } from 'antd';
import { Header } from 'antd/es/layout/layout';

import { useListCreditCardsQuery } from '@/graphql';

import { HeaderActions } from '../components/Header';
import { ModalCreateCreditCard } from '../components/ModalCreateCreditCard';
import { CardCreditCard } from '../components/CardCreditCard';

export function CreditCards() {
  const { data } = useListCreditCardsQuery();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Header
        style={{
          marginBottom: 16,
          background: colorBgContainer,
        }}
      >
        <HeaderActions />
      </Header>

      <Row gutter={[16, 8]}>
        {/* <Col span={8}>
          <CardCreditCard
            id="1"
            title="Nubank Douglas"
            closingDay="06 de Julho "
            bank={{
              name: 'Nubank',
              logo: 'nubank.png',
              color: '#8A05BE',
            }}
            currentInvoice={1000}
            availableLimit={1000}
            totalLimit={5000}
            progress={100}
            paymentDate="06 de Agosto"
            usedLimit={4000}
          />
        </Col>
        <Col span={8}>
          <CardCreditCard
            id="2"
            title="Nubank Andreza"
            closingDay="01 de Julho "
            bank={{
              name: 'Nubank',
              logo: 'nubank.png',
              color: '#8A05BE',
            }}
            currentInvoice={1000}
            availableLimit={1000}
            totalLimit={5000}
            progress={100}
            paymentDate="07 de Julho"
            usedLimit={4000}
          />
        </Col>
        <Col span={8}>
          <CardCreditCard
            id="3"
            title="Inter"
            closingDay="01 de Julho "
            bank={{
              name: 'Inter',
              logo: 'inter.png',
              color: '#FF8700',
            }}
            currentInvoice={1000}
            availableLimit={1000}
            totalLimit={5000}
            progress={100}
            paymentDate="07 de Julho"
            usedLimit={4000}
          />
        </Col>
        <Col span={8}>
          <CardCreditCard
            id="4"
            title="NEO"
            closingDay="01 de Julho "
            bank={{
              name: 'NEO',
              logo: 'neo.png',
              color: '#ff0000',
            }}
            currentInvoice={1000}
            availableLimit={1000}
            totalLimit={5000}
            progress={100}
            paymentDate="07 de Julho"
            usedLimit={4000}
          />
        </Col>
        <Col span={8}>
          <CardCreditCard
            id="5"
            title="Neon"
            closingDay="01 de Julho "
            bank={{
              name: 'Neon',
              logo: 'neon.png',
              color: '#00ffff',
            }}
            currentInvoice={1000}
            availableLimit={1000}
            totalLimit={5000}
            progress={100}
            paymentDate="07 de Julho"
            usedLimit={4000}
          />
        </Col> */}

        {data?.listCreditCards.map(creditCards => (
          <Col span={8} key={creditCards.id}>
            <CardCreditCard
              title={creditCards.name}
              closingDay={creditCards.closingDay}
              bank={{
                name: creditCards.bank.name,
                logo: creditCards.bank.image,
                color: creditCards.bank.color,
              }}
              currentInvoice={0}
              availableLimit={creditCards.limitAvailable}
              totalLimit={creditCards.limit}
              progress={50}
              paymentDate={creditCards.dueDay}
              usedLimit={creditCards.limitUsed}
              id={creditCards.id}
            />
          </Col>
        ))}
      </Row>

      <ModalCreateCreditCard />
    </>
  );
}
