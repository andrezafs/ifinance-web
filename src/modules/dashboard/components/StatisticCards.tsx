import {
  ArrowUpOutlined,
  BankOutlined,
  CarryOutOutlined,
  CreditCardOutlined,
  ScheduleOutlined,
  WalletOutlined,
} from '@ant-design/icons';
import { Col, Row } from 'antd';

import { useListExpensesQuery } from '@/graphql';
import { CardStatistic } from '@/modules/shared/components/CardStatistic';
import { useMountAndYear } from '@/modules/shared/hooks';
import { routes } from '@/routes';

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
            .filter(expense => expense.category.name !== 'Emprestados')
            .reduce((acc, expense) => acc + expense.value, 0),
          borrowed: data.listExpense.expenses
            .filter(expense => expense.category.name === 'Emprestados')
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
          value={
            10000 -
            Number(data?.all ?? 0) +
            Number(data?.ignored ?? 0) +
            Number(data?.borrowed ?? 0)
          }
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
          title="Ignorados"
          avatarColor="#1e5307"
          prefix="R$"
          value={data?.ignored ?? 0}
        />
      </Col>
      <Col span={4}>
        <CardStatistic
          icon={<CarryOutOutlined />}
          title="Emprestados"
          avatarColor="#1e5307"
          prefix="R$"
          value={data?.borrowed ?? 0}
        />
      </Col>
    </Row>
  );
}
