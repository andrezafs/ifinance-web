import { ComponentProps } from 'react';
import { Button } from 'antd';
import { CheckOutlined } from '@ant-design/icons';

type ButtonProps = ComponentProps<typeof Button>;

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
}: ButtonProps & {
  value: string;
  selectedColor: string;
  onColorSelected: (color: string) => void;
}) {
  const isSelected = value.toLowerCase() === selectedColor.toLowerCase();

  const handleColorSelected = () => {
    onColorSelected(value);
  };

  return (
    <Button
      type="default"
      shape="circle"
      style={{
        ...categoryColor,
        backgroundColor: isSelected ? value : 'transparent',
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
