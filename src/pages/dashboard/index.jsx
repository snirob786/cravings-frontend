import { Button, Flex, Input } from "antd";
import React, { useEffect, useState } from "react";
import loginImage from "@/assets/login.png";
import Image from "next/image";
import { UserOutlined } from "@ant-design/icons";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/redux/features/authSlice";
import { useRouter } from "next/router";
import { SuperAdminDashboard } from "@/components/superAdminDashboard";
import { UserDashboard } from "@/components/userDashboard";

const Dashboard = () => {
  const user = useSelector((state) => state?.auth?.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  return (
    <>
      {user?.userData?.user?.role === "superAdmin" && <SuperAdminDashboard />}
      {user?.userData?.user?.role === "user" && <UserDashboard />}
    </>
  );
};

export default Dashboard;
