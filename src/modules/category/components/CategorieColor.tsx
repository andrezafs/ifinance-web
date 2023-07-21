import { Button } from "antd";
import { ComponentProps, useState } from "react";
import { CheckOutlined } from "@ant-design/icons";

type ButtonProps = ComponentProps<typeof Button>;

const categoryColor = {
  width: 30,
  height: 30,
  borderRadius: 15,
};

export function CategorieColor({
  value,
  selectedColor,
  onColorSelected,
  ...props
}: ButtonProps & {
  value: string;
  selectedColor: string;
  onColorSelected: (color: string) => void;
}) {
  const isSelected = value === selectedColor;

  const handleColorSelected = () => {
    onColorSelected(value);
  };

  return (
    <Button
      type="default"
      shape="circle"
      style={{
        ...categoryColor,
        backgroundColor: isSelected ? value : "transparent",
      }}
      onClick={handleColorSelected}
      {...props}
    >
      {isSelected && (
        <CheckOutlined
          style={{
            color: "white",
          }}
        />
      )}
    </Button>
  );
}
