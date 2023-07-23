import { useController, useForm } from 'react-hook-form';
import { FormItem } from 'react-hook-form-antd';
import { Form, Input, Radio, Row, Typography } from 'antd';
import { BgColorsOutlined } from '@ant-design/icons';

import { defaultColors } from '../constants/defaultColors';
import { CategoryColor } from './CategoryColor';

const { Title } = Typography;

export interface FormFields {
  name: string;
  color: string;
}

interface FormEditCategoryProps {
  onSubmit: (data: FormFields) => void;
  defaultValues: FormFields;
}

export function FormEditCategory({
  onSubmit,
  defaultValues,
}: FormEditCategoryProps) {
  const { control, handleSubmit } = useForm<FormFields>({
    mode: 'onChange',
    defaultValues,
  });
  const { field } = useController({
    name: 'color',
    control,
  });

  return (
    <Form
      onFinish={handleSubmit(onSubmit)}
      id="edit-category"
      size="middle"
      layout="vertical"
    >
      <FormItem name="name" control={control}>
        <Input placeholder="Name" />
      </FormItem>
      <Row
        style={{
          alignItems: 'center',
          gap: 12,
        }}
      >
        <BgColorsOutlined
          style={{
            fontSize: 25,
            color: field.value,
          }}
        />
        <Title level={5}>Selecione uma cor</Title>
      </Row>
      <FormItem name="color" control={control}>
        <Radio.Group
          optionType="button"
          buttonStyle="solid"
          value={field.value}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 3,
          }}
        >
          {defaultColors.map(item => (
            <CategoryColor
              selectedColor={field.value}
              onColorSelected={field.onChange}
              key={item.key}
              value={item.color}
              style={{
                backgroundColor: item.color,
              }}
            />
          ))}
        </Radio.Group>
      </FormItem>
    </Form>
  );
}
