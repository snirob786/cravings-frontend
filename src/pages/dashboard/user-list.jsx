import { UserListChild } from "@/components/common/UserList";
import { DashboardLayout } from "@/components/common/dashboardLayout/dashboardLayout";
import { Button, Result } from "antd";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

const UserList = () => {
  const user = useSelector((state) => state?.auth?.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  if (user?.userData?.user?.role === "superAdmin") {
    return (
      <>
        <DashboardLayout>
          <UserListChild />
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

export default UserList;
