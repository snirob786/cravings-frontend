import React from "react";
import { DashboardLayout } from "../../common/dashboardLayout/dashboardLayout";
import { Sidebar } from "../../common/Sibebar/sidebar";
import { DashboardUserPackageCard } from "./userPackageCard";

export const AdminDashboard = () => {
  return (
    <DashboardLayout>
      <DashboardUserPackageCard />
    </DashboardLayout>
  );
};
