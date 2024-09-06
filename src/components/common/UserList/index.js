import React, { useEffect, useState } from "react";
import { DashboardLayout } from "../dashboardLayout/dashboardLayout";
import { Button, Table, Tabs } from "antd";
import { useSelector } from "react-redux";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import { AdminList } from "../../AdminList";
import { ModeratorList } from "../ModeratorList";
import { DeliveryManList } from "../DeliveryManList";
const operations = (
  <Button>
    <FontAwesomeIcon icon={faEllipsisVertical} />
  </Button>
);

export const UserListChild = () => {
  const user = useSelector((state) => state?.auth?.auth);
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
      children: (
        <DeliveryManList
          selectedRowKeys={selectedRowKeys}
          setSelectedRowKeys={setSelectedRowKeys}
        />
      ),
    },
  ];

  useEffect(() => {
    console.log("selectedRowKeys: ", selectedRowKeys);
  }, [selectedRowKeys]);
  return <Tabs tabBarExtraContent={operations} items={items} />;
};
