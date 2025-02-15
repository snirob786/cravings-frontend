import { DashboardLayout } from "@/components/common/dashboardLayout/dashboardLayout";
import { ProfileChild } from "@/components/common/ProfileChild";
import { useRouter } from "next/router";

const Profile = () => {
  const router = useRouter();

  return (
    <>
      <DashboardLayout>
        <ProfileChild />
      </DashboardLayout>
    </>
  );
};

export default Profile;
