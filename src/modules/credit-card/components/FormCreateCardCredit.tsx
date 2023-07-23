import { Avatar, Form, Input, InputNumber, Select, Typography } from 'antd';
import {
  CalendarOutlined,
  CarryOutOutlined,
  CreditCardOutlined,
  WalletOutlined,
} from '@ant-design/icons';

const { Option } = Select;

const optionsBanks = [
  { value: 'nubank', label: 'Nubank' },
  { value: 'itau', label: 'Itaú' },
  { value: 'bradesco', label: 'Bradesco' },
  { value: 'santander', label: 'Santander' },
  { value: 'inter', label: 'Inter' },
  { value: 'next', label: 'Next' },
  { value: 'original', label: 'Original' },
  { value: 'neon', label: 'Neon' },
  { value: 'sicoob', label: 'Sicoob' },
  { value: 'banco-do-brasil', label: 'Banco do Brasil' },
  { value: 'caixa', label: 'Caixa' },
];

export function FormCreateCardCredit() {
  return (
    <Form>
      <Typography.Title level={4}>Dados do cartão</Typography.Title>

      <Form.Item name="Limite">
        <Input
          style={{
            width: '100%',
          }}
          placeholder="Limite do cartão"
          min={1}
          prefix="R$"
          addonAfter={<WalletOutlined />}
        />
      </Form.Item>

      <Form.Item>
        <Input
          addonAfter={<CreditCardOutlined />}
          placeholder="Nome do cartão"
          width="100%"
        />
      </Form.Item>

      <Form.Item>
        <Select placeholder="Selecione o seu Banco">
          {optionsBanks.map(bank => (
            <Option value={bank.value}>
              <Avatar
                src="/nubank.png"
                style={{
                  marginRight: 10,
                }}
              />
              {bank.label}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item style={{ marginBottom: 0 }}>
        <Form.Item
          style={{
            display: 'inline-block',
            width: 'calc(50% - 8px)',
            marginRight: 16,
          }}
        >
          <InputNumber
            min={1}
            max={31}
            placeholder="Dia do Fechamento"
            style={{
              width: '100%',
            }}
            addonAfter={<CalendarOutlined />}
          />
        </Form.Item>

        <Form.Item
          style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
        >
          <InputNumber
            min={1}
            max={31}
            placeholder="Dia do Pagamento"
            style={{
              width: '100%',
            }}
            addonAfter={<CarryOutOutlined />}
          />
        </Form.Item>
      </Form.Item>
    </Form>
  );
}
