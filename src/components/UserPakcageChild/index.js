import React, { useEffect, useState } from "react";
import {
  Button,
  Input,
  Table,
  Tabs,
  Tooltip,
  Dropdown,
  Space,
  Col,
  Row,
  Card,
} from "antd";
import { useSelector } from "react-redux";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import CopyToClipboard from "react-copy-to-clipboard";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { DownOutlined } from "@ant-design/icons";
import { CopyItem } from "@/components/copyId/copyid";
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

const style = {
  // background: "#0092ff",
  // padding: "8px 0",
  width: "24.5%",
};

const PackagesChild = ({ selectedRowKeys, setSelectedRowKeys }) => {
  const user = useSelector((state) => state?.auth?.auth);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
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

  const fetchData = () => {
    setLoading(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user-packages`, {
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

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      width: "15%",
      render: (id) => (
        <>
          <CopyItem item={id} />
        </>
      ),
    },
    {
      title: "Name",
      dataIndex: "fullName",
      sorter: true,
      // render: (name) => `${name.first} ${name.last}`,
      // value: "fullName",
      width: "15%",
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
      width: "5%",
    },
    {
      title: "Email",
      dataIndex: "email",
      render: (email) => <CopyItem item={email} />,
    },
    {
      title: "Mobile",
      dataIndex: "contactNo",
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
      <div className="flex items-center gap-2 py-5 flex-wrap">
        <div style={style}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </div>
        <div style={style}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </div>
        <div style={style}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </div>
        <div style={style}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </div>
        <div style={style}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </div>
        <div style={style}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </div>
        <div style={style}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </div>
        <div style={style}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </div>
        <div style={style}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </div>
        <div style={style}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </div>
        <div style={style}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </div>
      </div>
    </>
  );
};

export default PackagesChild;
