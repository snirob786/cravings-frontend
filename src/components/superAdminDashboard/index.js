import React from "react";
import { SuperAdminDashboardLayout } from "../superAdminDashboardLayout/superAdminDashboardLayout";
import { SuperAdminSidebar } from "../superAdminSibebar/superAdminSidebar";

export const SuperAdminDashboard = () => {
  return (
    <SuperAdminDashboardLayout sidebar={<SuperAdminSidebar />}>
      test
    </SuperAdminDashboardLayout>
  );
};
