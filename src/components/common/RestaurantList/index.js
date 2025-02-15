import React, { useCallback, useEffect, useState } from "react";
import { DashboardLayout } from "@/components/common/dashboardLayout/dashboardLayout";
import { Button, Input, Table, Tabs, Tooltip, Dropdown, Space } from "antd";
import { useSelector } from "react-redux";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import CopyToClipboard from "react-copy-to-clipboard";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { CopyItem } from "@/components/common/copyId/copyid";
import { DownOutlined } from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import { ActionDropdown } from "./actionDropdown";
import { CreateRestaurantModal } from "./createRestaurantModal";
// import { BsThreeDotsVertical } from "react-icons/bs";
// const operations = (
//   <Button>
//     <FontAwesomeIcon icon={faEllipsisVertical} />
//   </Button>
// );

const getRandomuserParams = (params) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});
export const RestaurantList = () => {
  const user = useSelector((state) => state?.auth);
  const [data, setData] = useState();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const [searchTerm, setSearchTerm] = useState("");
  const items = [
    {
      label: <p>Change to Active</p>,
      key: "active",
    },
    {
      label: <p>Change to Inactive</p>,
      key: "inactive",
    },
  ];

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const fetchData = () => {
    setLoading(true);

    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/restaurants`, {
        headers: {
          Authorization: user?.userData?.token,
        },
        params: {
          searchTerm: searchTerm,
          ...tableParams.filters,
          sort: tableParams?.sortField,
          page: tableParams.pagination?.current,
          limit: tableParams.pagination?.pageSize,
          // fields,
        },
      })
      .then((res) => {
        setData(res?.data?.data?.data);
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
    searchTerm,
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

  const onSelectChange = useCallback((newSelectedRowKeys) => {
    console.log(
      "🚀 ~ onSelectChange ~ newSelectedRowKeys:",
      newSelectedRowKeys
    );
    setSelectedRowKeys(newSelectedRowKeys);
  }, []);

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    type: "checkbox",
    getCheckboxProps: (record) => ({
      disabled: record.disabled, // Disable selection for certain rows
    }),
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      width: "15%",
      render: (id) => (
        <>
          <CopyItem item={id} />
        </>
      ),
    },
    {
      title: "Name",
      dataIndex: "title",
      sorter: true,
      // render: (name) => `${name.first} ${name.last}`,
      // value: "fullName",
      width: "15%",
    },
    {
      title: "Created By",
      dataIndex: "createdBy",
      key: "createdBy",
      sorter: true,
      render: (createdBy) => `${createdBy.superAdmin.fullName}`,
      // value: "fullName",
      width: "20%",
    },
    {
      title: "Status",
      dataIndex: "status",
      filters: [
        {
          text: "Active",
          value: "active",
        },
        {
          text: "Inactive",
          value: "inactive",
        },
      ],
      render: (status) => (
        <p
          className={`capitalize ${
            status === "active" ? "text-green-500" : "text-red-500"
          }`}
        >
          {status}
        </p>
      ),
      width: "5%",
    },
    {
      title: "Created On",
      dataIndex: "createdAt",
      sorter: true,
      render: (date) => <p>{moment(date).format("Do MMM, YYYY hh:mm A")}</p>,
    },
  ];
  return (
    <>
      <div className="my-6">
        <Title level={2}>Restaurants</Title>
      </div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-5">
          <p>Change Status</p>
          <Button
            type="primary"
            // onClick={start}
            disabled={!selectedRowKeys?.length > 0}
            loading={loading}
          >
            Active
          </Button>
          <Button
            type="primary"
            // onClick={start}
            disabled={!selectedRowKeys?.length > 0}
            loading={loading}
            danger
          >
            Inactive
          </Button>

          {selectedRowKeys?.length > 0 && (
            <p className="m-0">
              {selectedRowKeys.length}{" "}
              {selectedRowKeys.length > 1
                ? "items are selected"
                : "item is selected"}
            </p>
          )}
        </div>
        <div className="w-1/4 flex items-center gap-2">
          <div className="flex items-center justify-end py-3">
            <Button type="primary" onClick={showModal}>
              Create
            </Button>
          </div>
          <Tooltip title="Search by restaurant ID, restaurant Name">
            <Input
              placeholder="Search"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Tooltip>
          <ActionDropdown />
        </div>
      </div>
      <Table
        columns={columns}
        rowKey={(record) => record._id}
        dataSource={data}
        pagination={tableParams.pagination}
        loading={loading}
        onChange={handleTableChange}
        rowSelection={rowSelection}
        scroll={{
          x: 900,
        }}
      />
      <CreateRestaurantModal
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        data={data}
        setData={setData}
      />
    </>
  );
};
