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
  Alert,
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
import { CopyItem } from "@/components/common/copyId/copyid";
import { CreateUserPackageModal } from "./createUserPackageModal";
import requestHandler from "@/services/requestHandler";
// import { BsThreeDotsVertical } from "react-icons/bs";
// const operations = (
//   <Button>
//     <FontAwesomeIcon icon={faEllipsisVertical} />
//   </Button>
// );

const style = {
  // background: "#0092ff",
  // padding: "8px 0",
  width: "24.5%",
};

const PackagesChild = ({ selectedRowKeys, setSelectedRowKeys }) => {
  const auth = useSelector((state) => state?.auth);
  const userPacakgeData = useSelector(
    (state) => state?.auth?.userData?.user?.userPackage
  );
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
    sortOrder: "ascend",
    sortField: "createdAt",
  });
  const [currentRole, setCurrentRole] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setCurrentRole(auth?.userData?.user?.role);
  }, [auth]);

  useEffect(() => {
    setLoading(true);
    let filters = currentRole === "superAdmin" ? null : { status: "active" };
    requestHandler(
      "GET",
      "user-packages",
      null,
      {
        Authorization: auth?.userData?.token,
      },
      {
        searchTerm: searchTerm,
        ...filters,
        sort: tableParams?.sortField,
        page: tableParams.pagination?.current,
        limit: tableParams.pagination?.pageSize,
        // fields,
      }
    )
      .then((res) => {
        console.log("🚀 ~ PackagesChild then ~ res:", res);
        setData(res?.data);
        setLoading(false);
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total: res?.data?.data?.total,
          },
        });
      })
      .catch((error) => {
        return (
          <Alert
            message="Not an Admin?"
            description="Visit our packages and become an Admin"
            type="info"
            action={
              <Space direction="vertical">
                <Button
                  size="small"
                  type="primary"
                  onClick={() => router.push("dashboard/packages")}
                >
                  Packages
                </Button>
              </Space>
            }
          />
        );
      });
  }, [
    searchTerm,
    tableParams.pagination?.current,
    tableParams.pagination?.pageSize,
    tableParams?.sortOrder,
    tableParams?.sortField,
    JSON.stringify(tableParams.filters),
  ]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChangeUserPackage = async (id) => {
    console.log("user package id: ", id);
    try {
      const changedUser = await axios({
        method: "POST",
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/change-to-admin/${auth?.userData?._id}`,
        headers: {
          Authorization: auth?.userData?.token,
        },
      });
      console.log("changedUser: ", changedUser);
    } catch (error) {}
  };

  return (
    <>
      {auth?.userData?.user?.role === "superAdmin" && (
        <div className="flex items-center justify-end py-3">
          <Button type="primary" onClick={showModal}>
            Create
          </Button>
        </div>
      )}
      <div className="flex items-center gap-2 py-5 flex-wrap">
        {data &&
          data.map((item) => (
            <div key={item?._id} style={style}>
              <Card
                title={<span className="text-xl font-bold">{item.title}</span>}
                bordered={false}
              >
                <div>
                  <div>
                    <span className="font-bold text-lg">{item?.price} BDT</span>
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
                    {currentRole === "superAdmin" ? (
                      <>
                        <div>
                          {item?.status === "active" ? (
                            <>
                              <Button
                                type="primary"
                                htmlType="submit"
                                onClick={() =>
                                  handleChangeUserPackage(item?._id)
                                }
                                disabled={item?._id === userPacakgeData?._id}
                              >
                                Inactive
                              </Button>
                            </>
                          ) : (
                            <>
                              <Button
                                type="primary"
                                color="red"
                                htmlType="submit"
                                onClick={() =>
                                  handleChangeUserPackage(item?._id)
                                }
                                disabled={item?._id === userPacakgeData?._id}
                              >
                                Active
                              </Button>
                            </>
                          )}
                        </div>
                      </>
                    ) : (
                      <>
                        <Button
                          type="primary"
                          htmlType="submit"
                          onClick={() => handleChangeUserPackage(item?._id)}
                          disabled={item?._id === userPacakgeData?._id}
                        >
                          Buy Now
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        <div style={style}></div>
      </div>
      <CreateUserPackageModal
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        data={data}
        setData={setData}
      />
    </>
  );
};

export default PackagesChild;
