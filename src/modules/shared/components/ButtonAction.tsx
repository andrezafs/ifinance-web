import { ComponentProps } from 'react';
import { Button, Tooltip } from 'antd';

type ButtonProps = ComponentProps<typeof Button>;

type ButtonActionProps = ButtonProps & {
  tooltipAction?: string;
};

export function ButtonAction({ tooltipAction, ...props }: ButtonActionProps) {
  return (
    <Tooltip title={tooltipAction}>
      <Button type="default" shape="circle" {...props} />
    </Tooltip>
  );
}
