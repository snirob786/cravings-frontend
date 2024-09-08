import { Avatar, Divider, Menu } from "antd";
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
  {
    label: "Packages",
    key: "/dashboard/packages",
  },
];
const adminDashboard = [
  {
    label: "Dashboard",
    key: "/dashboard",
  },
  {
    label: "User List",
    key: "/dashboard/user-list",
  },
  {
    label: "Packages",
    key: "/dashboard/packages",
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
  const auth = useSelector((state) => state.auth.auth);
  const router = useRouter();
  const [items, setItems] = useState(null);

  useEffect(() => {
    console.log("user: ", auth);
    if (auth?.userData?.user?.role === "superAdmin") {
      setItems(superAdminDashboard);
    } else if (auth?.userData?.user?.role === "admin") {
      setItems(adminDashboard);
    } else if (auth?.userData?.user?.role === "user") {
      setItems(userDashboard);
    }
  }, [auth]);

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
          backgroundColor: "white",
        }}
        className="drop-shadow-2xl"
      >
        <div className="h-full">
          <div className="bg-white px-2 py-4 flex items-center gap-2">
            <Avatar
              style={{ backgroundColor: "#f56a00", verticalAlign: "middle" }}
              size="small"
              gap={4}
            >
              {console.log("auth: ", auth)}
              {auth?.userDetails?.name?.firstName?.slice(0, 1)}
            </Avatar>
            <div>
              <p className="text-base">{auth?.userDetails?.fullName}</p>
              <p className="text-xs font-thin capitalize">
                {auth?.userDetails?.designation || auth?.userDetails?.role}
              </p>
            </div>
          </div>
          <Divider className="m-0" />
          <Menu
            mode="inline"
            defaultSelectedKeys={[selectedKey]}
            items={items}
            onClick={(item) => handleMenuClick(item)}
          />
        </div>
      </Sider>
    </>
  );
};
