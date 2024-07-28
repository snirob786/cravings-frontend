import React, { useEffect, useState } from "react";
import { SuperAdminDashboardLayout } from "../superAdminDashboardLayout/superAdminDashboardLayout";
import { SuperAdminSidebar } from "../superAdminSibebar/superAdminSidebar";
import { Button, Table, Tabs } from "antd";
import { useSelector } from "react-redux";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import { AdminList } from "../AdminList";
import { ModeratorList } from "../ModeratorList";
const operations = (
  <Button>
    <FontAwesomeIcon icon={faEllipsisVertical} />
  </Button>
);

export const UserList = () => {
  const userData = useSelector((state) => state.auth.auth.userData);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  const items = [
    {
      label: "Admin List",
      key: "adminList",
      children: (
        <>
          <AdminList
            selectedRowKeys={selectedRowKeys}
            setSelectedRowKeys={setSelectedRowKeys}
          />
        </>
      ),
    },
    {
      label: "Moderator List",
      key: "moderatorList",
      children: (
        <>
          <ModeratorList
            selectedRowKeys={selectedRowKeys}
            setSelectedRowKeys={setSelectedRowKeys}
          />
        </>
      ),
    },
    {
      label: "Delivery Man List",
      key: "deliveryManList",
      children: <p>Test Delivery Man</p>,
    },
  ];

  useEffect(() => {
    console.log("selectedRowKeys: ", selectedRowKeys);
  }, [selectedRowKeys]);
  return (
    <SuperAdminDashboardLayout sidebar={<SuperAdminSidebar />}>
      <Tabs tabBarExtraContent={operations} items={items} />
    </SuperAdminDashboardLayout>
  );
};
