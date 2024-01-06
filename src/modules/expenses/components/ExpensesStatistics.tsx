import { Col, Row } from 'antd';
import {
  CalendarOutlined,
  CarryOutOutlined,
  ScheduleOutlined,
  WalletOutlined,
} from '@ant-design/icons';

import { CardStatistic } from '@/modules/shared/components/CardStatistic';
import { useListExpensesQuery } from '@/graphql';
import { useMountAndYear } from '@/modules/shared/hooks';

export function ExpensesStatistics() {
  const { month, year } = useMountAndYear();
  const { data } = useListExpensesQuery(
    {
      filter: {
        month,
        year,
      },
    },
    {
      select: data =>
        data.listExpense.expenses.reduce((acc, curr) => acc + curr.value, 0),
    },
  );

  return (
    <Row gutter={16}>
      <Col span={6}>
        <CardStatistic
          title="Despesas do Mês"
          icon={<WalletOutlined />}
          avatarColor="#1890ff"
          prefix="R$"
          value={data}
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
          value={10000 - Number(data ?? 0)}
        />
      </Col>
    </Row>
  );
}
