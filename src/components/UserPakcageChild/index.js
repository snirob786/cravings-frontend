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
import {
  faEllipsisVertical,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
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
        setData(res?.data?.data);
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

  return (
    <>
      <div className="flex items-center gap-2 py-5 flex-wrap">
        <div style={style}>
          {data &&
            data.map((item) => (
              <>
                <div key={item?._id}>
                  <Card
                    title={
                      <span className="text-xl font-bold">{item.title}</span>
                    }
                    bordered={false}
                  >
                    <div>
                      <div>
                        <span className="font-bold text-lg">
                          {item?.price} BDT
                        </span>
                      </div>
                      <ul>
                        <li>
                          <span className="font-bold text-xs">Duration:</span>{" "}
                          {(item.validityDays / 30).toFixed()} Months
                        </li>
                        <li>
                          <Tooltip title="Number of maximum menu items can be added">
                            <span className="font-bold text-xs">
                              Menu:{" "}
                              <FontAwesomeIcon icon={faInfoCircle} size="xs" />
                            </span>{" "}
                          </Tooltip>
                          {item.menuItemLimit}
                        </li>
                        <li>
                          <Tooltip title="Number of maximum special menu items can be added">
                            <span className="font-bold text-xs">
                              Special Menu:{" "}
                              <FontAwesomeIcon icon={faInfoCircle} size="xs" />
                            </span>{" "}
                          </Tooltip>
                          {item.specialMenuLimit}
                        </li>
                        <li>
                          <Tooltip title="Number of maximum platter can be added">
                            <span className="font-bold text-xs">
                              Platter:{" "}
                              <FontAwesomeIcon icon={faInfoCircle} size="xs" />
                            </span>{" "}
                          </Tooltip>
                          {item.platterLimit}
                        </li>
                        <li>
                          <Tooltip title="Number of maximum moderator can be added">
                            <span className="font-bold text-xs">
                              Moderator:{" "}
                              <FontAwesomeIcon icon={faInfoCircle} size="xs" />
                            </span>{" "}
                          </Tooltip>
                          {item.moderatorLimit}
                        </li>
                      </ul>
                      <div className="mt-5">
                        <Button type="primary" htmlType="submit">
                          Buy Now
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              </>
            ))}
        </div>
      </div>
    </>
  );
};

export default PackagesChild;
