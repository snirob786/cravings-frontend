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
import { AdminList } from "@/components/AdminList";
import { UserListChild } from "@/components/UserList";

const UserList = () => {
  const user = useSelector((state) => state?.auth?.auth);
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    if (user?.userData?.user?.role !== "superAdmin") router.push("");
  }, [router]);

  return (
    <>
      <UserListChild />
    </>
  );
};

export default UserList;
