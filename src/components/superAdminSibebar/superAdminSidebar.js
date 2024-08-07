import { Avatar, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const SuperAdminSidebar = () => {
  const user = useSelector((state) => state.auth.auth);
  const router = useRouter();

  const [selectedKey, setSelectedKey] = useState(router.pathname);

  const items = [
    {
      label: "Dashboard",
      key: "/dashboard",
    },
    {
      label: "User List",
      key: "/dashboard/user-list",
    },
  ];

  const handleMenuClick = (item) => {
    setSelectedKey(item.key);
    router.push(item.key);
  };
  return (
    <>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 64,
          bottom: 0,
        }}
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={[selectedKey]}
          items={items}
          onClick={(item) => handleMenuClick(item)}
          className="min-h-full"
        />
      </Sider>
    </>
  );
};
