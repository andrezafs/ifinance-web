import { Card, Typography } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

export function CreateCardCredit() {
  return (
    <Card>
      <Typography.Title level={4}>Novo cartão de Crédito</Typography.Title>
      <PlusCircleOutlined />
    </Card>
  );
}
