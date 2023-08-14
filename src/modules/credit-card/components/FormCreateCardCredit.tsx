import { Avatar, Form, Input, InputNumber, Select, Typography } from 'antd';
import {
  CalendarOutlined,
  CarryOutOutlined,
  CreditCardOutlined,
  WalletOutlined,
} from '@ant-design/icons';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormItem } from 'react-hook-form-antd';

import { useListBanksQuery } from '@/graphql';

const { Option } = Select;

interface FormFields {
  limit: number;
  bankId: string;
  closingDay: number;
  dueDay: number;
  name: string;
}

interface FormCreateCreditCardProps {
  onSubmit: (data: FormFields) => void;
}

const schema = z.object({
  name: z
    .string({
      required_error: 'Digite o nome do cartão',
    })
    .nonempty('Digite o nome do cartão'),
  limit: z
    .number({
      required_error: 'Digite o limite do cartão',
      invalid_type_error: 'O limite deve ser um número',
    })
    .min(1, 'O limite deve ser maior que 0'),
  // .refine(value => value * 100),
  // .transform(value => value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')),
  bankId: z.string({
    required_error: 'Selecione o banco do cartão',
  }),
  closingDay: z
    .number({
      required_error: 'Selecione o dia do fechamento do cartão',
      invalid_type_error: 'O dia deve ser um número',
    })
    .int({
      message: 'O número precisa ser inteiro',
    }),
  dueDay: z
    .number({
      required_error: 'Selecione o dia do pagamento do cartão',
      invalid_type_error: 'O dia deve ser um número',
    })
    .int({
      message: 'O número precisa ser inteiro',
    }),
});

export function FormCreateCardCredit({ onSubmit }: FormCreateCreditCardProps) {
  const { control, handleSubmit } = useForm<FormFields>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const { data } = useListBanksQuery();

  const formatCurrency = (value = 0) => {
    const formattedValue = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value / 100);

    return formattedValue.substring(3); // Retorna a string sem os 3 primeiros caracteres (removendo 'R$ ')
  };

  return (
    <Form onFinish={handleSubmit(onSubmit)} id="create-credit-card">
      <Typography.Title level={4}>Dados do cartão</Typography.Title>
      <FormItem name="limit" control={control}>
        <InputNumber
          formatter={formatCurrency}
          style={{
            width: '100%',
          }}
          placeholder="R$1.000,00"
          precision={2}
          prefix="R$"
          addonAfter={<WalletOutlined />}
          controls={false}
        />
      </FormItem>

      <FormItem name="name" control={control}>
        <Input
          addonAfter={<CreditCardOutlined />}
          placeholder="Nome do cartão"
          width="100%"
        />
      </FormItem>

      <FormItem name="bankId" control={control}>
        <Select placeholder="Selecione o seu Banco">
          {data?.listBanks.map(bank => (
            <Option key={bank.id} value={bank.id}>
              <Avatar
                src={bank.image}
                style={{
                  marginRight: 10,
                }}
              />
              {bank.name}
            </Option>
          ))}
        </Select>
      </FormItem>

      <FormItem
        name="closingDay"
        control={control}
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
      </FormItem>

      <FormItem
        name="dueDay"
        control={control}
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
      </FormItem>
    </Form>
  );
}
