import { DashboardLayout } from "@/components/common/dashboardLayout/dashboardLayout";
import { OrderListChild } from "@/components/common/OrderListChild";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

const OrderList = () => {
  const user = useSelector((state) => state?.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <>
      <DashboardLayout>
        <OrderListChild />
      </DashboardLayout>
    </>
  );
};

export default OrderList;
