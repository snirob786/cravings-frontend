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

const Test = () => {
  const userData = useSelector((state) => state.auth.auth.userData);
  const userDetails = useSelector((state) => state.auth.auth.userDetails);
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    if (userData?.user?.role !== "superAdmin") router.push("");
  }, [router]);

  return (
    <>
      <AdminList />
    </>
  );
};

export default Test;
