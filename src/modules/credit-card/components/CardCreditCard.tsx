import {
  EllipsisOutlined,
  PieChartOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons';
import {
  Avatar,
  Card,
  Col,
  Dropdown,
  Progress,
  Row,
  Statistic,
  Typography,
} from 'antd';
import { Link } from 'react-router-dom';

import { CreditCard } from '@/graphql';

import { useDropdownActions } from '../hooks/useDropdownActions';
import { useCreditCardActions } from '../contexts/CreditCardsActionsContext';

type CardCreditCardProps = {
  data: Partial<CreditCard>;
};

export function CardCreditCard({ data }: CardCreditCardProps) {
  const { menuProps } = useDropdownActions(data as CreditCard);
  const { toggleModalCreateCreditCard } = useCreditCardActions();

  return (
    <Card
      title={data.name}
      extra={`Fechamento em ${data.closingDay}`}
      actions={[
        <PlusCircleOutlined
          key="add"
          onClick={() => toggleModalCreateCreditCard()}
        />,
        <PieChartOutlined key="graphic" />,
        <Dropdown
          key="ellipsis"
          menu={{
            ...menuProps,
          }}
        >
          <EllipsisOutlined />
        </Dropdown>,
      ]}
    >
      <Link to={`/credit-cards/${data.id}`}>
        <Row justify="space-between">
          <Card.Meta
            title={data?.bank?.name}
            avatar={<Avatar src={data?.bank?.image} />}
          />
          <Statistic
            title="Fatura atual"
            prefix="R$"
            precision={2}
            // value={data.currentInvoice}
          />
        </Row>
        <Col>
          <Row justify="space-between">
            <Statistic
              title="Limite disponível"
              prefix="R$"
              precision={2}
              value={data.limitAvailable}
            />
          </Row>

          <Progress
            status="normal"
            percent={data.percentLimitUsed}
            strokeColor={data.bank?.color}
            showInfo
          />

          <Row justify="space-between">
            <Typography.Text>{`Vencimento em ${data.dueDay}`}</Typography.Text>
            <Typography.Text>{`R$${data.limitUsed} de R$${data.limit}`}</Typography.Text>
          </Row>
        </Col>
      </Link>
    </Card>
  );
}
