import { Avatar, Card, Col, Row, Space, Statistic } from "antd";
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  BankOutlined,
  CreditCardOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { CSSProperties, ReactNode } from "react";

const cardStyle: CSSProperties = {
  borderRadius: 24,
};

interface CardStatisticProps {
  route: string;
  title: string;
  icon?: ReactNode;
  avatarColor?: string;
  value?: number;
}
function CardStatistic({
  route,
  icon,
  title,
  avatarColor,
  value,
}: CardStatisticProps) {
  return (
    <Link to={route}>
      <Card style={cardStyle}>
        <Space wrap size={16}>
          <Avatar
            size={48}
            icon={icon}
            style={{
              backgroundColor: avatarColor,
            }}
          />
          <Statistic title={title} value={value} precision={2} prefix="R$" />
        </Space>
      </Card>
    </Link>
  );
}

export function StatisticCards() {
  return (
    <Row
      gutter={16}
      style={{
        maxWidth: "100%",
        margin: "0 auto",
      }}
    >
      <Col span={6}>
        <CardStatistic
          icon={<BankOutlined />}
          title="Contas"
          route={"/accounts"}
          avatarColor="#1890ff"
          value={9.3}
        ></CardStatistic>
      </Col>
      <Col span={6}>
        <CardStatistic
          icon={<ArrowUpOutlined />}
          title="Receitas"
          route={"/revenues"}
          avatarColor="#23cf13"
          value={9.3}
        ></CardStatistic>
      </Col>
      <Col span={6}>
        <CardStatistic
          icon={<ArrowDownOutlined />}
          title="Despesas"
          route={"/expenses"}
          avatarColor="#cf1322"
          value={9.3}
        ></CardStatistic>
      </Col>
      <Col span={6}>
        <CardStatistic
          icon={<CreditCardOutlined />}
          title="Cartões de Crédito"
          route={"/creditCards"}
          avatarColor="#1e5307"
          value={9.3}
        ></CardStatistic>
      </Col>
    </Row>
  );
}
