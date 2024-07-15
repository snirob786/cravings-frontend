import styles from "./main-header.module.css";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import {
  Anchor,
  Avatar,
  Button,
  Col,
  Flex,
  Layout,
  Menu,
  Row,
  Typography,
} from "antd";
const { Header } = Layout;
const { Title } = Typography;
const { Link } = Anchor;
import logo from "@/assets/logo.jpg";
import Image from "next/image";
import { useSelector } from "react-redux";
export default function MainHeader() {
  const user = useSelector((state) => state.auth.auth);
  const items = [
    {
      label: "Navigation One",
      key: "mail",
      icon: <MailOutlined />,
    },
    {
      label: "Navigation Two",
      key: "app",
      icon: <AppstoreOutlined />,
    },
    {
      label: "Navigation Three - Submenu",
      key: "SubMenu",
      icon: <SettingOutlined />,
      children: [
        {
          type: "group",
          label: "Item 1",
          children: [
            {
              label: "Option 1",
              key: "setting:1",
            },
            {
              label: "Option 2",
              key: "setting:2",
            },
          ],
        },
        {
          type: "group",
          label: "Item 2",
          children: [
            {
              label: "Option 3",
              key: "setting:3",
            },
            {
              label: "Option 4",
              key: "setting:4",
            },
          ],
        },
      ],
    },
    {
      label: (
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Navigation Four - Link
        </a>
      ),
      key: "alipay",
    },
  ];
  return (
    <Header className={styles.headerBgLight}>
      <Row justify="space-between" align="middle">
        <Col span={4} className="demo-logo">
          <Link href="/">
            <Image
              src={logo}
              width={1000}
              height={1000}
              alt="Cravings Logo"
              className="w-16"
            />
          </Link>
        </Col>
        <Col span={12}>
          <Flex justify="flex-end" align="center" gap={10}>
            {!user && (
              <>
                <Button type="default" size={"default"} href="login">
                  Login
                </Button>
                <Button type="primary" size={"default"}>
                  Signup
                </Button>
              </>
            )}
            {user && (
              <Avatar
                style={{ backgroundColor: "#f56a00", verticalAlign: "middle" }}
                size="large"
                gap={4}
              >
                {user?.userDetails?.name?.firstName?.slice(0, 1)}
              </Avatar>
            )}
          </Flex>
        </Col>
      </Row>
    </Header>
  );
}
