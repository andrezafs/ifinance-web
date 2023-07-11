import { Avatar, Card, Space, Statistic } from "antd";
import { CSSProperties, ReactNode } from "react";
import { Link } from "react-router-dom";

const cardStyle: CSSProperties = {
  borderRadius: 24,
};

interface CardStatisticProps {
  route?: string;
  title: string;
  icon?: ReactNode;
  avatarColor?: string;
  value?: number | string;
  prefix?: string;
}
export function CardStatistic({
  route,
  icon,
  title,
  avatarColor,
  value,
  prefix,
}: CardStatisticProps) {
  return (
    <Link to={route ? route : "/"}>
      <Card style={cardStyle}>
        <Space wrap size={16}>
          <Avatar
            size={48}
            icon={icon}
            style={{
              backgroundColor: avatarColor,
            }}
          />
          <Statistic
            title={title}
            value={value}
            precision={2}
            prefix={prefix}
          />
        </Space>
      </Card>
    </Link>
  );
}
