import { ComponentProps } from 'react';
import { Button } from 'antd';
import { CheckOutlined } from '@ant-design/icons';

type ButtonProps = ComponentProps<typeof Button>;
type CategoryColorProps = ButtonProps & {
  value: string;
  selectedColor?: string;
  onColorSelected?: (color: string) => void;
};
const categoryColor = {
  width: 30,
  height: 30,
  borderRadius: 15,
};

export function CategoryColor({
  value,
  selectedColor,
  onColorSelected,

  ...props
}: CategoryColorProps) {
  const isSelected = value.toLowerCase() === selectedColor?.toLowerCase();

  const handleColorSelected = () => {
    onColorSelected?.(value);
  };

  return (
    <Button
      type="default"
      shape="circle"
      style={{
        ...categoryColor,

        backgroundColor: value,
      }}
      onClick={handleColorSelected}
      {...props}
    >
      {isSelected && (
        <CheckOutlined
          style={{
            color: 'white',
          }}
        />
      )}
    </Button>
  );
}
