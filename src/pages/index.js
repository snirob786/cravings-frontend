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
      {/* <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['4']}
                    items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
                        (icon, index) => ({
                            key: String(index + 1),
                            icon: React.createElement(icon),
                            label: `nav ${index + 1}`,
                        }),
                    )}
                />
            </Sider> */}
      <Layout>
        <PublicLayout>
          <MainHeader />
        </PublicLayout>
      </Layout>
    </>
  );
}
