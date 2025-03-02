import PublicLayout from "@/components/layouts/publicLayout";
import MainHeader from "@/components/mainHeader";
import BackToTop from "@/components/footers/backToTop";
import FooterSection from "@/components/footers/footer";
import { Layout } from "antd";
import { useSelector } from "react-redux";
const { Sider } = Layout;

export default function index() {
  const user = useSelector((state) => state.auth);
  return (
    <>
      <Layout>
        <PublicLayout>
          <MainHeader />

          <FooterSection />
          <BackToTop />
        </PublicLayout>
      </Layout>
    </>
  );
}
