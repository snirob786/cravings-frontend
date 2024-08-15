import React from "react";
import MainHeader from "../mainHeader";
import { Alert, Button, Flex, Layout, Menu, Space } from "antd";
import DashboardFooter from "../dashboardFooter";
import { Sidebar } from "../sibebar/sidebar";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export const DashboardLayout = ({ children }) => {
  const auth = useSelector((state) => state?.auth?.auth);
  const router = useRouter();
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
          <Sidebar />

          <Layout
            style={{
              marginLeft: 200,
            }}
          >
            <div className="mx-6">
              {auth?.userDetails?.role === "user" &&
                !auth?.userDetails?.package &&
                !router?.asPath?.includes("packages") && (
                  <div className="my-5">
                    <Alert
                      message="Not an Admin?"
                      description="Visit our packages and become an Admin"
                      type="info"
                      action={
                        <Space direction="vertical">
                          <Button
                            size="small"
                            type="primary"
                            onClick={() => router.push("dashboard/packages")}
                          >
                            Packages
                          </Button>
                        </Space>
                      }
                    />
                  </div>
                )}

              <div>{children}</div>
            </div>
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
