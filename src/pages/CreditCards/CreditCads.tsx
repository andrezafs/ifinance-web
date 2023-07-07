import { Col, Row } from "antd";
import { CardCreditCard } from "./components/CardCreditCard";
import { Header } from "antd/es/layout/layout";
import { HeaderActions } from "./components/Header";
import { ModalCreateCreditCard } from "./components/ModalCreateCreditCard";
// 2023-07-06T15:29:02.248Z

export function CreditCads() {
  return (
    <>
      <Header
        style={{
          backgroundColor: "#fff",
        }}
      >
        <HeaderActions />
        <Row>
          <Col span={8}>
            <CardCreditCard
              title="Nubank Douglas"
              closeDate="06 de Julho "
              bank={{
                name: "Nubank",
                logo: "nubank.png",
                color: "#8A05BE",
              }}
              currentInvoice={1000}
              availableLimit={1000}
              totalLimit={5000}
              progress={100}
              paymentDate="06 de Agosto"
              usedLimit={4000}
            />
          </Col>
          <Col span={8}></Col>
        </Row>
      </Header>
      <ModalCreateCreditCard />
    </>
  );
}
