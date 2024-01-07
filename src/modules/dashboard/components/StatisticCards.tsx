import { Row, Col } from 'antd';
import {
  BankOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  CreditCardOutlined,
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
      <Col span={6}>
        <CardStatistic
          icon={<BankOutlined />}
          title="Contas"
          // route="/accounts"
          avatarColor="#1890ff"
          prefix="R$"
          value={0}
        />
      </Col>
      <Col span={6}>
        <CardStatistic
          icon={<ArrowUpOutlined />}
          title="Receitas"
          // route="/revenues"
          avatarColor="#23cf13"
          prefix="R$"
          value={0}
        />
      </Col>
      <Col span={6}>
        <CardStatistic
          icon={<ArrowDownOutlined />}
          title="Despesas"
          route={routes.goToExpenses()}
          avatarColor="#cf1322"
          prefix="R$"
          value={data?.wallet ?? 0}
        />
      </Col>
      <Col span={6}>
        <CardStatistic
          icon={<CreditCardOutlined />}
          title="Cartões de Crédito"
          route={routes.goToCreditCards()}
          avatarColor="#1e5307"
          prefix="R$"
          value={data?.creditCard ?? 0}
        />
      </Col>
    </Row>
  );
}
