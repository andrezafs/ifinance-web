import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Flex, Form, Input, Row, Typography } from 'antd';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormItem } from 'react-hook-form-antd';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

import { useAuthenticateMutation } from '@/graphql';
import { useNotificationContext } from '@/modules/shared/context/NotificationContext';
import { sessionManager } from '@/configurations/sessionManager';

const schema = z.object({
  email: z
    .string({ required_error: 'Email é obrigatório' })
    .email('Digite um email válido'),
  password: z
    .string({ required_error: 'Senha é obrigatória' })
    .min(1, 'Senha é obrigatória'),
});

type FormFields = z.infer<typeof schema>;

export function Login() {
  const navigate = useNavigate();

  const { api } = useNotificationContext();

  const { mutate, isLoading } = useAuthenticateMutation({
    onSuccess: data => {
      sessionManager.authenticate(data.authenticate);
      navigate('/', { replace: true });
    },
    onError: () => {
      sessionManager.logout();
      api.open({
        message: 'Erro ao fazer login',
        description: 'Usuário ou senha inválidos',
        type: 'error',
      });
    },
  });

  const { control, handleSubmit } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = data => {
    mutate(data);
  };

  return (
    <Flex vertical style={{ width: 327 }}>
      <Typography.Title level={1}>Login</Typography.Title>
      <Form
        onFinish={handleSubmit(onSubmit)}
        id="login-form"
        size="middle"
        layout="vertical"
      >
        <FormItem control={control} name="email" label="Username">
          <Input prefix={<MailOutlined />} disabled={isLoading} />
        </FormItem>

        <FormItem control={control} name="password" label="Password">
          <Input.Password prefix={<LockOutlined />} disabled={isLoading} />
        </FormItem>

        <Row justify="space-between" align="middle">
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Row>
      </Form>
    </Flex>
  );
}
