import { Button, Flex, Input } from "antd";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { UserOutlined } from "@ant-design/icons";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/redux/features/authSlice";
import { useRouter } from "next/router";
import { SuperAdminDashboard } from "@/components/superAdmin/superAdminDashboard";
import { UserDashboard } from "@/components/user/userDashboard";
import { AdminDashboard } from "@/components/admin/adminDashboard";

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
      {user?.userData?.user?.role === "admin" && <AdminDashboard />}
    </>
  );
};

export default Dashboard;
