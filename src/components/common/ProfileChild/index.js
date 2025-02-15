import { EditOutlined, UserOutlined } from "@ant-design/icons";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Button } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { EditProfileModal } from "./editProfileModal";
const operations = (
  <Button>
    <FontAwesomeIcon icon={faEllipsisVertical} />
  </Button>
);

export const ProfileChild = () => {
  const user = useSelector((state) => state?.auth);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex justify-between mt-3">
        <div className="flex items-center justify-center flex-col w-full">
          <Avatar
            size={128}
            icon={<UserOutlined />}
            style={{
              backgroundColor: "#f56a00",
              verticalAlign: "middle",
            }}
            gap={4}
          >
            {user?.userDetails?.name?.firstName?.slice(0, 1)}
          </Avatar>
        </div>
        <Button
          type="primary"
          icon={<EditOutlined />}
          size="large"
          onClick={showModal}
        >
          <p>Edit</p>
        </Button>
      </div>
      {isModalOpen && (
        <EditProfileModal
          isModalOpen={isModalOpen}
          handleCancel={handleCancel}
          data={data}
          setData={setData}
        />
      )}
    </>
  );
};
