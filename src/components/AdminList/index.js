import React, { useEffect, useState } from "react";
import { SuperAdminDashboardLayout } from "../superAdminDashboardLayout/superAdminDashboardLayout";
import { SuperAdminSidebar } from "../superAdminSibebar/superAdminSidebar";
import { Button, Table, Tabs } from "antd";
import { useSelector } from "react-redux";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
// import { BsThreeDotsVertical } from "react-icons/bs";
const operations = (
  <Button>
    <FontAwesomeIcon icon={faEllipsisVertical} />
  </Button>
);

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    width: "15%",
  },
  {
    title: "Name",
    dataIndex: "fullName",
    sorter: true,
    // render: (name) => `${name.first} ${name.last}`,
    // value: "fullName",
    width: "20%",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    render: (gender) => <p className="capitalize">{gender}</p>,
    filters: [
      {
        text: "Male",
        value: "male",
      },
      {
        text: "Female",
        value: "female",
      },
    ],
    width: "20%",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Mobile",
    dataIndex: "contactNo",
  },
  {
    title: "Status",
    dataIndex: "status",
    render: (status) => (
      <p
        className={`capitalize ${
          status === "active" ? "text-green-500" : "text-red-500"
        }`}
      >
        {status}
      </p>
    ),
    width: "20%",
  },
];

const getRandomuserParams = (params) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});

export const AdminList = () => {
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
  const fetchData = () => {
    setLoading(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/admins`, {
        headers: {
          Authorization: userData.token,
        },
      })
      .then((res) => {
        console.log("res: ", res);
        console.log("res?.data?.data: ", res?.data?.data);
        setData(res?.data?.data?.result);
        setLoading(false);
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total: res?.data?.data?.total,
            // 200 is mock data, you should read it from server
            // total: data.totalCount,
          },
        });
      });
  };
  useEffect(() => {
    fetchData();
  }, [
    tableParams.pagination?.current,
    tableParams.pagination?.pageSize,
    tableParams?.sortOrder,
    tableParams?.sortField,
    JSON.stringify(tableParams.filters),
  ]);
  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      sortOrder: Array.isArray(sorter) ? undefined : sorter.order,
      sortField: Array.isArray(sorter) ? undefined : sorter.field,
    });

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const items = [
    {
      label: "Admin List",
      key: "adminList",
      children: (
        <>
          <Button
            type="primary"
            className="mb-3 bg-[#255b65]"
            // onClick={start}
            // disabled={!hasSelected}
            // loading={loading}
          >
            Reload
          </Button>
          <Table
            columns={columns}
            rowKey={(record) => record.id}
            dataSource={data}
            pagination={tableParams.pagination}
            loading={loading}
            onChange={handleTableChange}
            rowSelection={rowSelection}
            scroll={{
              x: 1500,
            }}
          />
        </>
      ),
    },
    {
      label: "Moderator List",
      key: "moderatorList",
      children: <p>Test moderator</p>,
    },
    {
      label: "Delivery Man List",
      key: "deliveryManList",
      children: <p>Test Delivery Man</p>,
    },
  ];

  return (
    <SuperAdminDashboardLayout sidebar={<SuperAdminSidebar />}>
      <Tabs tabBarExtraContent={operations} items={items} />
    </SuperAdminDashboardLayout>
  );
};
