import React, { useState } from "react";
import {
  FlagOutlined,
  HomeOutlined,
  BarChartOutlined,
  CreditCardOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Dashboard", "/", <HomeOutlined />),
  getItem("Categories", "/categories", <FlagOutlined />),
  getItem("Credits Card", "/creditCards", <CreditCardOutlined />),
  getItem("Planning", "/planning", <BarChartOutlined />),
  getItem("Report", "/report", <PieChartOutlined />),
];

export function SideMenu() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
        onClick={(items) => navigate(items.key.toString())}
      />
    </Sider>
  );
}
