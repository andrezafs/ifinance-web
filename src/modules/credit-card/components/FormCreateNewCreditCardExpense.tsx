import {
  Avatar,
  DatePicker,
  Flex,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Switch,
  Typography,
} from 'antd';
import { FormItem } from 'react-hook-form-antd';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreditCardOutlined, WalletOutlined } from '@ant-design/icons';
import { useForm, useController, Controller } from 'react-hook-form';

import { useListCategoriesQuery, useListCreditCardsQuery } from '@/graphql';
import { CategoryColor } from '@/modules/category/components/CategoryColor';

import { defaultInstallments } from '../constants/installments';

const { Option } = Select;

const schema = z.object({
  value: z
    .number({
      required_error: 'Digite o valor da despesa',
      invalid_type_error: 'A despesa deve ser um número',
    })
    .min(1, 'O valor da despesa deve ser maior que 0'),
  name: z.string({
    required_error: 'Digite a descrição da despesa',
  }),
  purchaseDate: z.date({ required_error: 'Selecione uma data' }),
  isFixed: z.boolean().default(false),
  isIgnored: z.boolean().default(false),
  installments: z.number({
    coerce: true,
  }),
  hasInstallments: z.boolean().default(false),
  creditCard: z.string(),
  category: z.string(),
});

export type FormFields = z.infer<typeof schema>;

interface FormCreateNewCreditCardExpenseProps {
  onSubmit: (data: FormFields) => void;
}

export function FormCreateNewCreditCardExpense({
  onSubmit,
}: FormCreateNewCreditCardExpenseProps) {
  const { data: categories } = useListCategoriesQuery();
  const { data: creditCards } = useListCreditCardsQuery();

  const { control, handleSubmit } = useForm<FormFields>({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues: {
      category: categories?.listCategories[0].id,
      creditCard: creditCards?.listCreditCards[0].id,
      installments: defaultInstallments[0].portion,
    },
  });

  const hasInstallmentsField = useController({
    name: 'hasInstallments',
    control,
  });

  const isIgnored = useController({
    name: 'isIgnored',
    control,
  });
  const isFixed = useController({
    name: 'isFixed',
    control,
  });

  return (
    <Form
      onFinish={handleSubmit(onSubmit)}
      title="Nova Despesa no Cartão de Crédito"
      id="crete-credit-card-new-expense"
    >
      <Typography.Title level={4}> Dados da Despesa</Typography.Title>
      <FormItem name="value" control={control}>
        <InputNumber
          style={{
            width: '100%',
          }}
          placeholder="1.000,00"
          precision={2}
          prefix="R$"
          addonAfter={<WalletOutlined />}
          controls={false}
        />
      </FormItem>
      <FormItem name="name" control={control}>
        <Input
          addonAfter={<CreditCardOutlined />}
          placeholder="Descrição"
          width="100%"
        />
      </FormItem>
      <FormItem name="category" control={control}>
        <Select placeholder="Selecione a Categoria">
          {categories?.listCategories.map(category => (
            <Option key={category.id}>
              <CategoryColor value={category.color} />
              {category.name}
            </Option>
          ))}
        </Select>
      </FormItem>
      <FormItem name="creditCard" control={control}>
        <Select placeholder="Selecione o cartão de crédito">
          {creditCards?.listCreditCards.map(creditCard => (
            <Option key={creditCard.id}>
              <Avatar
                src={creditCard.bank.image}
                style={{
                  marginRight: 10,
                }}
              />
              {creditCard.name}
            </Option>
          ))}
        </Select>
      </FormItem>

      <Controller
        name="purchaseDate"
        control={control}
        render={({ field, fieldState }) => (
          <Form.Item>
            <Flex vertical>
              <DatePicker
                onChange={value => field.onChange(value?.toDate())}
                status={fieldState.error?.message ? 'error' : ''}
              />
              {fieldState.error?.message && (
                <Typography.Text type="danger">
                  {fieldState.error?.message}
                </Typography.Text>
              )}
            </Flex>
          </Form.Item>
        )}
      />

      <FormItem name="isIgnored" control={control}>
        <Row justify="space-between">
          <span> Ignorar Transação</span>
          <Switch
            checked={isIgnored.field.value}
            onChange={isIgnored.field.onChange}
          />
        </Row>
      </FormItem>
      <FormItem name="isFixed" control={control}>
        <Row justify="space-between">
          <span> Despesa Fixa</span>
          <Switch
            checked={isFixed.field.value}
            onChange={isFixed.field.onChange}
          />
        </Row>
      </FormItem>
      <FormItem name="hasInstallments" control={control}>
        <Row justify="space-between">
          <span> Parcelado</span>
          <Switch
            checked={hasInstallmentsField.field.value}
            onChange={hasInstallmentsField.field.onChange}
          />
        </Row>
      </FormItem>
      <FormItem name="installments" control={control}>
        <Select disabled={!hasInstallmentsField.field.value}>
          {defaultInstallments.map(item => (
            <Option key={item.portion}>{item.portion}</Option>
          ))}
        </Select>
      </FormItem>
    </Form>
  );
}
