import { Row, Col } from 'antd';
import {
  BankOutlined,
  ArrowUpOutlined,
  CreditCardOutlined,
  CarryOutOutlined,
  WalletOutlined,
  ScheduleOutlined,
} from '@ant-design/icons';

import { CardStatistic } from '@/modules/shared/components/CardStatistic';
import { routes } from '@/routes';
import { useMountAndYear } from '@/modules/shared/hooks';
import { useListExpensesQuery } from '@/graphql';

export function StatisticCards() {
  const { month, year } = useMountAndYear();

  const { data } = useListExpensesQuery(
    {
      filter: {
        month,
        year,
      },
    },
    {
      select: data => {
        return {
          wallet: data.listExpense.expenses
            .filter(expense => !expense.creditCard)
            .reduce((acc, expense) => acc + expense.value, 0),
          creditCard: data.listExpense.expenses
            .filter(expense => expense.creditCard)
            .reduce((acc, expense) => acc + expense.value, 0),
          all: data.listExpense.expenses.reduce(
            (acc, expense) => acc + expense.value,
            0,
          ),
          ignored: data.listExpense.expenses
            .filter(expense => expense.isIgnored)
            .reduce((acc, expense) => acc + expense.value, 0),
        };
      },
    },
  );

  return (
    <Row
      gutter={16}
      style={{
        maxWidth: '100%',
        margin: '0 auto',
      }}
    >
      <Col span={4}>
        <CardStatistic
          icon={<BankOutlined />}
          title="Contas"
          avatarColor="#1890ff"
          prefix="R$"
          value={0}
        />
      </Col>
      <Col span={4}>
        <CardStatistic
          icon={<ArrowUpOutlined />}
          title="Receitas"
          avatarColor="#23cf13"
          prefix="R$"
          value={0}
        />
      </Col>
      <Col span={4}>
        <CardStatistic
          title="Balanço Mensal"
          icon={<ScheduleOutlined />}
          avatarColor="#ebe70d"
          value={10000 - Number(data?.all ?? 0) + Number(data?.ignored ?? 0)}
        />
      </Col>
      <Col span={4}>
        <CardStatistic
          icon={<WalletOutlined />}
          title="Carteira"
          route={routes.goToExpenses()}
          avatarColor="#cf1322"
          prefix="R$"
          value={data?.wallet ?? 0}
        />
      </Col>
      <Col span={4}>
        <CardStatistic
          icon={<CreditCardOutlined />}
          title="Cartões de Crédito"
          route={routes.goToCreditCards()}
          avatarColor="#cf1322"
          prefix="R$"
          value={data?.creditCard ?? 0}
        />
      </Col>
      <Col span={4}>
        <CardStatistic
          icon={<CarryOutOutlined />}
          title="Emprestados"
          avatarColor="#1e5307"
          prefix="R$"
          value={data?.ignored ?? 0}
        />
      </Col>
    </Row>
  );
}
