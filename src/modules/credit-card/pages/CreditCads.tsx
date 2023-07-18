import { Row, Col } from "antd";
import { Header } from "antd/es/layout/layout";
import { CardCreditCard } from "../components/CardCreditCard";
import { HeaderActions } from "../components/Header";
import { ModalCreateCreditCard } from "../components/ModalCreateCreditCard";

export function CreditCads() {
  return (
    <>
      <Header
        style={{
          backgroundColor: "#fff",
          marginBottom: 16,
        }}
      >
        <HeaderActions />
      </Header>
      <Row gutter={[16, 8]}>
        <Col span={8}>
          <CardCreditCard
            id="1"
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
        <Col span={8}>
          <CardCreditCard
            id="2"
            title="Nubank Andreza"
            closeDate="01 de Julho "
            bank={{
              name: "Nubank",
              logo: "nubank.png",
              color: "#8A05BE",
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
            closeDate="01 de Julho "
            bank={{
              name: "Inter",
              logo: "inter.png",
              color: "#FF8700",
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
            closeDate="01 de Julho "
            bank={{
              name: "NEO",
              logo: "neo.png",
              color: "#ff0000",
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
            closeDate="01 de Julho "
            bank={{
              name: "Neon",
              logo: "neon.png",
              color: "#00ffff",
            }}
            currentInvoice={1000}
            availableLimit={1000}
            totalLimit={5000}
            progress={100}
            paymentDate="07 de Julho"
            usedLimit={4000}
          />
        </Col>
      </Row>
      <ModalCreateCreditCard />
    </>
  );
}
