import { Col, Divider, Table } from "antd";
import { useCreditCardDetailsData } from "../hooks/useCreditCardDetailsData";
import { CreditCardStatistics } from "./CreditCardStatistics";

export function CreditCardDetails() {
  const { columns, data } = useCreditCardDetailsData();
  return (
    <Col span={30}>
      <CreditCardStatistics />
      <Divider />
      <Table columns={columns} dataSource={data} />
    </Col>
  );
}
