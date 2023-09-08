import { Col, Row } from 'antd';
import {
  CalendarOutlined,
  CarryOutOutlined,
  ScheduleOutlined,
  WalletOutlined,
} from '@ant-design/icons';

import { CardStatistic } from '@/modules/shared/components/CardStatistic';
import { useListExpenseQuery } from '@/graphql';

export function ExpensesStatistics() {
  const { data } = useListExpenseQuery({
    filter: {
      month: 10,
      year: 2023,
    },
  });

  return (
    <Row gutter={16}>
      <Col span={6}>
        <CardStatistic
          title="Despesas do Mês"
          icon={<WalletOutlined />}
          avatarColor="#1890ff"
          prefix="R$"
          value={data?.listExpense.amount}
        />
      </Col>
      <Col span={6}>
        <CardStatistic
          title="Despesas Pagas"
          icon={<ScheduleOutlined />}
          avatarColor="#23cf13"
          value="Aberta"
        />
      </Col>
      <Col span={6}>
        <CardStatistic
          title="Despesas Pendentes"
          icon={<CalendarOutlined />}
          avatarColor="#cf1322"
          value="10 de Agosto"
        />
      </Col>
      <Col span={6}>
        <CardStatistic
          title="Balanço Mensal"
          icon={<CarryOutOutlined />}
          avatarColor="#cf1322"
          value={10000 - Number(data?.listExpense.amount)}
        />
      </Col>
    </Row>
  );
}
