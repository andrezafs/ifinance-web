import { Layout, Typography } from "antd";
import { StatisticCards } from "./StatisticCards";

export function Dashboard() {
  return (
    <Layout.Content
      style={{
        padding: "24px",
      }}
    >
      <StatisticCards />
    </Layout.Content>
  );
}
