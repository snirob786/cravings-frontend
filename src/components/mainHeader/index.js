import { logout } from "@/redux/features/authSlice";
import { Anchor, Layout, Typography } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderNaivgation from "./headerNaivgation";
import MobileMenuSidebarMenu from "./mobileMenuSidebarMenu";
import MobileNaivgationBottom from "./mobileNaivgationBottom";
import OfferHelpMenu from "./offerHelpMenu";
import TopSearchBar from "./topSearchBar";
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
