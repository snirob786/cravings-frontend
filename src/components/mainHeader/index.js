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
import { useEffect, useRef, useState } from "react";
import HeaderNaivgation from "./headerNaivgation";
import MobileNaivgationBottom from "./mobileNaivgationBottom";
import TopSearchBar from "./topSearchBar";
import MobileMenuSidebarMenu from "./mobileMenuSidebarMenu";
import OfferHelpMenu from "./offerHelpMenu";
const { Header } = Layout;
const { Title } = Typography;
const { Link } = Anchor;
export default function MainHeader() {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const [openSmallSearchModal, setOpenSmallSearchModal] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  console.log("🚀 ~ MainHeader ~ searchItem:", searchItem);

  // const items = [
  //   {
  //     label: (
  //       <Avatar
  //         style={{ backgroundColor: "#f56a00", verticalAlign: "middle" }}
  //         size="large"
  //         gap={4}
  //       >
  //         {user?.userDetails?.name?.firstName?.slice(0, 1)}
  //       </Avatar>
  //     ),
  //     key: "User",

  //     children: [
  //       {
  //         label: "Dashboard",
  //         key: "dashboard",
  //       },
  //       {
  //         label: "Logout",
  //         key: "logout",
  //       },
  //     ],
  //   },
  // ];

  const onClick = (e) => {
    if (e.key === "logout") {
      dispatch(logout());
      router.push("/login");
    } else {
      router.push(e.key);
    }
  };
  return (
    <>
      <>
        <OfferHelpMenu />
        <HeaderNaivgation
          openSmallSearchModal={openSmallSearchModal}
          setOpenSmallSearchModal={setOpenSmallSearchModal}
          searchItem={searchItem}
          setSearchItem={setSearchItem}
        />
        <MobileNaivgationBottom />
        <MobileMenuSidebarMenu />
        <TopSearchBar
          openSmallSearchModal={openSmallSearchModal}
          setOpenSmallSearchModal={setOpenSmallSearchModal}
          searchItem={searchItem}
          setSearchItem={setSearchItem}
        />
      </>
    </>
  );
}
