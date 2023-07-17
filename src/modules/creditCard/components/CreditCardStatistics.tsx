import { Col, Row } from "antd";

import {
  CalendarOutlined,
  CarryOutOutlined,
  ScheduleOutlined,
  WalletOutlined,
} from "@ant-design/icons";

import { CardStatistic } from "../../shared/components/CardStatistic";

export function CreditCardStatistics() {
  return (
    <Row gutter={16}>
      <Col span={6}>
        <CardStatistic
          title="Valor da Fatura"
          icon={<WalletOutlined />}
          avatarColor="#1890ff"
          prefix="R$"
          value={9.3}
        ></CardStatistic>
      </Col>
      <Col span={6}>
        <CardStatistic
          title="Status"
          icon={<ScheduleOutlined />}
          avatarColor="#23cf13"
          value={"Aberta"}
        ></CardStatistic>
      </Col>
      <Col span={6}>
        <CardStatistic
          title="Dia de Fechamento"
          icon={<CalendarOutlined />}
          avatarColor="#cf1322"
          value={"10 de Agosto"}
        ></CardStatistic>
      </Col>
      <Col span={6}>
        <CardStatistic
          title="Data de Vencimento"
          icon={<CarryOutOutlined />}
          avatarColor="#1e5307"
          value={"10 de Setembro"}
        ></CardStatistic>
      </Col>
    </Row>
  );
}
