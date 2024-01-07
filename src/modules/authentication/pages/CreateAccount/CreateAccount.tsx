import { SubmitHandler, useForm } from 'react-hook-form';
import { FormItem } from 'react-hook-form-antd';
import { Form, Input, Button, Row, Typography, Flex } from 'antd';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { MailOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';

import { useNotificationContext } from '@/modules/shared/context/NotificationContext';
import { useCreateUserMutation } from '@/graphql';
import { routes } from '@/routes';

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
    .min(1, 'Senha é obrigatória'),
});

export function CreateAccount() {
  const navigate = useNavigate();

  const { api } = useNotificationContext();

  const { mutate, isPending: isLoading } = useCreateUserMutation({
    onSuccess: () => {
      navigate(routes.goToLogin(), { replace: true });

      api.open({
        message: 'Sucesso!',
        description: 'Sua conta foi criada com sucesso!',
        type: 'success',
      });
    },
    onError: () => {
      api.open({
        message: 'Tente Novamente!',
        description: 'Não foi possível criar sua conta!',
        type: 'error',
      });
    },
  });

  const { control, handleSubmit } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = data => {
    mutate({ data });
  };

  return (
    <Flex vertical style={{ width: 327 }}>
      <Typography.Title level={1}>Criar conta</Typography.Title>
      <Form
        onFinish={handleSubmit(onSubmit)}
        id="create-account-form"
        size="middle"
        layout="vertical"
      >
        <FormItem control={control} name="name" label="Nome">
          <Input prefix={<UserOutlined />} disabled={isLoading} />
        </FormItem>

        <FormItem control={control} name="email" label="E-mail">
          <Input prefix={<MailOutlined />} disabled={isLoading} />
        </FormItem>

        <FormItem control={control} name="password" label="Senha">
          <Input.Password prefix={<LockOutlined />} disabled={isLoading} />
        </FormItem>

        <Row justify="space-between" align="middle">
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Criar Conta
          </Button>
        </Row>
      </Form>

      <br />

      <Flex>
        <Typography.Text>
          Já tem uma conta?
          <Link to={routes.goToLogin()}> Entrar</Link>
        </Typography.Text>
      </Flex>
    </Flex>
  );
}
