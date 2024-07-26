import React from "react";
import MainHeader from "../mainHeader";
import { Flex, Layout, Menu } from "antd";
import DashboardFooter from "../dashboardFooter";
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#4096ff",
};
const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#0958d9",
};
const siderStyle = {
  overflow: "auto",
  height: "100vh",
  position: "fixed",
  left: 0,
  top: 0,
  bottom: 0,
};
const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};
const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  width: "100%",
  // maxWidth: "calc(50% - 8px)",
};

export const SuperAdminDashboardLayout = ({ sidebar, children }) => {
  return (
    <>
      <Layout>
        <div
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
          }}
        >
          <MainHeader />
          {/* <div className="demo-logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={items}
            style={{
              flex: 1,
              minWidth: 0,
            }}
          /> */}
        </div>
        <Layout hasSider>
          {sidebar}

          <Layout
            style={{
              marginLeft: 200,
            }}
          >
            {children}
            <DashboardFooter />
          </Layout>
        </Layout>
      </Layout>
      {/* <Layout>
        <MainHeader />
        <Flex
          justify="space-between"
          align="center"
          className="min-h-full px-[70px] bg-gray-500 text-white"
        >
          <div>{sidebar}</div>
          <div>{children}</div>
        </Flex>
      </Layout> */}
    </>
  );
};
