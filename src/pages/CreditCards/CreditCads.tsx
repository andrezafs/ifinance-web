import { Col, Row } from "antd";
import { CardCreditCard } from "./components/CardCreditCard";

// 2023-07-06T15:29:02.248Z

export function CreditCads() {
  return (
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
  );
}
