import { Avatar, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const superAdminDashboard = [
  {
    label: "Dashboard",
    key: "/dashboard",
  },
  {
    label: "User List",
    key: "/dashboard/user-list",
  },
];

const userDashboard = [
  {
    label: "Dashboard",
    key: "/dashboard",
  },
  {
    label: "Orders List",
    key: "/dashboard/order-list",
  },
  {
    label: "Packages",
    key: "/dashboard/packages",
  },
];

export const Sidebar = () => {
  const user = useSelector((state) => state.auth.auth);
  const router = useRouter();
  const [items, setItems] = useState(null);

  useEffect(() => {
    console.log("user: ", user);
    if (user?.userData?.user?.role === "superAdmin") {
      setItems(superAdminDashboard);
    } else if (user?.userData?.user?.role === "admin") {
    } else if (user?.userData?.user?.role === "user") {
      setItems(userDashboard);
    }
  }, [user]);

  const [selectedKey, setSelectedKey] = useState(router.pathname);

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
