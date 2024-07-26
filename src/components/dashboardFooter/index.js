import { Col, Layout, Menu, Row, Typography } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import styles from "./dashboard-header.module.css";
const { Header, Content, Footer } = Layout;
const { Title } = Typography;

export default function DashboardFooter() {
  return (
    <Layout>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Cravings ©{new Date().getFullYear()}. All rights reserved by Cravings:
        Cafe & Bistro.
      </Footer>
    </Layout>
  );
}
