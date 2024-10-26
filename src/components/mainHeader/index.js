import logo from "@/assets/images/logo.jpg";
import { logout } from "@/redux/features/authSlice";
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
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import styles from "./main-header.module.css";
const { Header } = Layout;
const { Title } = Typography;
const { Link } = Anchor;
export default function MainHeader() {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const items = [
    {
      label: (
        <Avatar
          style={{ backgroundColor: "#f56a00", verticalAlign: "middle" }}
          size="large"
          gap={4}
        >
          {user?.userDetails?.name?.firstName?.slice(0, 1)}
        </Avatar>
      ),
      key: "User",

      children: [
        {
          label: "Dashboard",
          key: "dashboard",
        },
        {
          label: "Logout",
          key: "logout",
        },
      ],
    },
  ];

  const onClick = (e) => {
    if (e.key === "logout") {
      dispatch(logout());
      router.push("/login");
    } else {
      router.push(e.key);
    }
  };
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
            {user && <Menu onClick={onClick} mode="horizontal" items={items} />}
          </Flex>
        </Col>
      </Row>
    </Header>
  );
}
