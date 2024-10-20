import { Card, Tooltip } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Typography } from "antd";
const { Title } = Typography;

export const DashboardUserPackageCard = () => {
  const userPacakgeData = useSelector(
    (state) => state?.auth?.userData?.user?.userPackage
  );
  console.log("userPacakgeData: ", userPacakgeData);
  return (
    <Card
      title="Current User Package"
      bordered
      //   style={{
      //     width: 300,
      //   }}
    >
      <Title level={4}>{userPacakgeData?.title}</Title>
      <Tooltip
        placement="topLeft"
        title="Numbers of menus can be available under this packages"
        arrow
      >
        <p>
          Menu Items: <span>{userPacakgeData?.menuItemLimit}</span>
        </p>
      </Tooltip>
      <Tooltip
        placement="topLeft"
        title="Numbers of special menus can be available under this packages"
        arrow
      >
        <p>
          Special Menu Items: <span>{userPacakgeData?.specialMenuLimit}</span>
        </p>
      </Tooltip>
      <Tooltip
        placement="topLeft"
        title="Numbers of platters can be available under this packages"
        arrow
      >
        <p>
          Platters: <span>{userPacakgeData?.platterLimit}</span>
        </p>
      </Tooltip>
      <Tooltip
        placement="topLeft"
        title="Numbers of moderators can be managed under this packages"
        arrow
      >
        <p>
          Moderators: <span>{userPacakgeData?.moderatorLimit}</span>
        </p>
      </Tooltip>
    </Card>
  );
};
