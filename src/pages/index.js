import React from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import MainHeader from "@/components/mainHeader";
import PublicLayout from "@/components/layouts/publicLayout";
import { useSelector } from "react-redux";
const { Sider } = Layout;

export default function index() {
  const user = useSelector((state) => state.auth);
  return (
    <>
      <Layout>
        <PublicLayout>
          <MainHeader />
        </PublicLayout>
      </Layout>
    </>
  );
}
