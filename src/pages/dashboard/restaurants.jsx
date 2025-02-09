import { Button, Flex, Input, Result } from "antd";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { UserOutlined } from "@ant-design/icons";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/redux/features/authSlice";
import { useRouter } from "next/router";
import { SuperAdminDashboard } from "@/components/superAdmin/superAdminDashboard";
import { AdminList } from "@/components/AdminList";
import { DashboardLayout } from "@/components/common/dashboardLayout/dashboardLayout";
import { OrderListChild } from "@/components/common/OrderListChild";
import PackagesChild from "@/components/UserPakcageChild";
import { UserListChild } from "@/components/common/UserList";
import { RestaurantList } from "@/components/common/RestaurantList";

const Restaurant = () => {
  const user = useSelector((state) => state?.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  if (user?.userData?.user?.role === "superAdmin") {
    return (
      <>
        <DashboardLayout>
          <RestaurantList />
        </DashboardLayout>
      </>
    );
  } else {
    return (
      <>
        <DashboardLayout>
          <Result
            status="403"
            title="403"
            subTitle="Sorry, you are not authorized to access this page."
            extra={
              <div className="flex items-center gap-2 justify-center">
                <Button
                  type="default"
                  onClick={() => {
                    router.push("/");
                  }}
                >
                  Back Home
                </Button>
                <Button
                  type="primary"
                  onClick={() => {
                    router.push("/dashboard");
                  }}
                >
                  Back Dashboard
                </Button>
              </div>
            }
          />
        </DashboardLayout>
      </>
    );
  }
};

export default Restaurant;
