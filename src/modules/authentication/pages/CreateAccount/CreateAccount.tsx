import { useController, useForm } from 'react-hook-form';
import { FormItem } from 'react-hook-form-antd';
import { Form, Input, Button, Row, Typography, notification } from 'antd';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { MailOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';

interface FormFields {
  name: string;
  email: string;
  password: string;
}

const schema = z.object({
  name: z.string({ required_error: 'Nome é obrigatório' }),

  email: z
    .string({ required_error: 'Email é obrigatório' })
    .email('Digite um email válido'),

  password: z
    .string({ required_error: 'Senha é obrigatória' })
    .nonempty('Senha é obrigatória'),
});

export function CreateAccount() {
  const { control } = useForm<FormFields>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const nameField = useController({
    name: 'name',
    control,
  });

  const emailField = useController({
    name: 'email',
    control,
  });

  const passwordField = useController({
    name: 'password',
    control,
  });

  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.open({
      message: 'Não foi possível criar sua conta!',
      description: 'Tente Novamente!',
      duration: 1,
    });
  };
  return (
    <>
      {contextHolder}
      <Typography.Title level={1}>Create Account</Typography.Title>
      <Form
        // onFinish={handleSubmit(onSubmit)}
        id="login-form"
        size="middle"
        layout="vertical"
      >
        <FormItem name="name" control={control}>
          <Input
            placeholder="Name"
            prefix={<UserOutlined />}
            {...nameField.field}
          />
        </FormItem>
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
          <Button type="primary" htmlType="submit" onClick={openNotification}>
            Create Account
          </Button>
        </Row>
      </Form>
    </>
  );
}
