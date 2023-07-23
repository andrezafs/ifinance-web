import { Row, Col } from 'antd';
import {
  BankOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  CreditCardOutlined,
} from '@ant-design/icons';

import { CardStatistic } from '@/modules/shared/components/CardStatistic';

export function StatisticCards() {
  return (
    <Row
      gutter={16}
      style={{
        maxWidth: '100%',
        margin: '0 auto',
      }}
    >
      <Col span={6}>
        <CardStatistic
          icon={<BankOutlined />}
          title="Contas"
          route="/accounts"
          avatarColor="#1890ff"
          prefix="R$"
          value={9.3}
        />
      </Col>
      <Col span={6}>
        <CardStatistic
          icon={<ArrowUpOutlined />}
          title="Receitas"
          route="/revenues"
          avatarColor="#23cf13"
          prefix="R$"
          value={9.3}
        />
      </Col>
      <Col span={6}>
        <CardStatistic
          icon={<ArrowDownOutlined />}
          title="Despesas"
          route="/expenses"
          avatarColor="#cf1322"
          prefix="R$"
          value={9.3}
        />
      </Col>
      <Col span={6}>
        <CardStatistic
          icon={<CreditCardOutlined />}
          title="Cartões de Crédito"
          route="/creditCards"
          avatarColor="#1e5307"
          prefix="R$"
          value={9.3}
        />
      </Col>
    </Row>
  );
}
