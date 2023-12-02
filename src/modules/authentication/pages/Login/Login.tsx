import { useController, useForm } from 'react-hook-form';
import { FormItem } from 'react-hook-form-antd';
import { Form, Input, Button, Row, Typography } from 'antd';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { MailOutlined, LockOutlined } from '@ant-design/icons';

interface FormFields {
  email: string;
  password: string;
}

const schema = z.object({
  email: z
    .string({ required_error: 'Email é obrigatório' })
    .email('Digite um email válido'),
  password: z
    .string({ required_error: 'Senha é obrigatória' })
    .min(1, 'Senha é obrigatória'),
});

export function Login() {
  const { control } = useForm<FormFields>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const emailField = useController({
    name: 'email',
    control,
  });

  const passwordField = useController({
    name: 'password',
    control,
  });

  return (
    <>
      <Typography.Title level={1}>Login</Typography.Title>
      <Form
        // onFinish={handleSubmit(onSubmit)}
        id="login-form"
        size="middle"
        layout="vertical"
      >
        <FormItem name="email" control={control}>
          <Input
            placeholder="Email"
            prefix={<MailOutlined />}
            {...emailField.field}
          />
        </FormItem>

        <FormItem name="password" control={control}>
          <Input.Password
            placeholder="Senha"
            prefix={<LockOutlined />}
            {...passwordField.field}
          />
        </FormItem>

        <Row justify="space-between" align="middle">
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Row>
      </Form>
    </>
  );
}
