import { Col, Row } from 'antd';
import {
  CalendarOutlined,
  CarryOutOutlined,
  ScheduleOutlined,
  WalletOutlined,
} from '@ant-design/icons';
import { useMemo } from 'react';

import { CardStatistic } from '@/modules/shared/components/CardStatistic';

import { useGetExpensesByCreditCard } from '../hooks/useGetExpensesByCreditCard';

export function CreditCardStatistics() {
  const { data: expenses } = useGetExpensesByCreditCard();

  const amountInvoice = useMemo(() => {
    if (!expenses?.listExpenseByCreditCard) return 0;

    return Math.abs(
      expenses.listExpenseByCreditCard.reduce(
        (acc, current) => acc + current.value,
        0,
      ),
    );
  }, [expenses]);

  return (
    <Row gutter={16}>
      <Col span={6}>
        <CardStatistic
          title="Valor da Fatura"
          icon={<WalletOutlined />}
          avatarColor="#1890ff"
          prefix="R$"
          value={amountInvoice}
        />
      </Col>
      <Col span={6}>
        <CardStatistic
          title="Status"
          icon={<ScheduleOutlined />}
          avatarColor="#23cf13"
          value="Aberta"
        />
      </Col>
      <Col span={6}>
        <CardStatistic
          title="Dia de Fechamento"
          icon={<CalendarOutlined />}
          avatarColor="#cf1322"
          value="10 de Agosto"
        />
      </Col>
      <Col span={6}>
        <CardStatistic
          title="Data de Vencimento"
          icon={<CarryOutOutlined />}
          avatarColor="#1e5307"
          value="10 de Setembro"
        />
      </Col>
    </Row>
  );
}
