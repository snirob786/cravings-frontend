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
import { User, ShoppingBag, Search, X } from "lucide-react";
import { useState } from "react";
const { Header } = Layout;
const { Title } = Typography;
const { Link } = Anchor;
export default function MainHeader() {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const [openSmallSearchModal, setOpenSmallSearchModal] = useState(false);
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
    <>
      <>
        {/* Offer/Help Menu */}
        {/* <div className="h-8 lg:flex items-center hidden bg-red-950 text-white z-20">
          <div className="container">
            <nav className="grid lg:grid-cols-3 items-center gap-4">
              <div className="flex relative">
                <div className="hs-dropdown relative inline-flex [--trigger:hover] [--placement:bottom]">
                  <a
                    className="hs-dropdown-toggle after:absolute hover:after:-bottom-10 after:inset-0 relative flex items-center text-base"
                    href="javascript:void(0)"
                  >
                    <img
                      alt="Image"
                      className="h-3.5 me-3"
                      src="assets/images/flags/us.jpg"
                    />
                    <span className="font-medium text-xs">English (USA)</span>
                  </a>
                  <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 min-w-[140px] transition-[opacity,margin] mt-4 opacity-0 hidden z-50 bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-lg border border-default-100 p-1.5 dark:bg-default-50">
                    <ul className="flex flex-col gap-1">
                      <li>
                        <a
                          className="flex items-center gap-2 font-normal text-default-600 py-2 px-3 transition-all hover:text-default-700 hover:bg-default-100 rounded"
                          href="javascript:void(0)"
                        >
                          <img
                            alt="flag"
                            className="h-4"
                            src="assets/images/flags/us.jpg"
                          />
                          English
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex items-center gap-2 font-normal text-default-600 py-2 px-3 transition-all hover:text-default-700 hover:bg-default-100 rounded"
                          href="javascript:void(0)"
                        >
                          <img
                            alt="flag"
                            className="h-4"
                            src="assets/images/flags/french.jpg"
                          />
                          French
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex items-center gap-2 font-normal text-default-600 py-2 px-3 transition-all hover:text-default-700 hover:bg-default-100 rounded"
                          href="javascript:void(0)"
                        >
                          <img
                            alt="flag"
                            className="h-4"
                            src="assets/images/flags/germany.jpg"
                          />
                          German
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex items-center gap-2 font-normal text-default-600 py-2 px-3 transition-all hover:text-default-700 hover:bg-default-100 rounded"
                          href="javascript:void(0)"
                        >
                          <img
                            alt="flag"
                            className="h-4"
                            src="assets/images/flags/spain.jpg"
                          />
                          Spanish
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Offer Link */}
        {/* <h5 className="text-sm text-primary-50 text-center">
          Free Delivery Over $50
          <a className="font-semibold underline" href="javascript:void(0)">
            Claim Offer
          </a>
        </h5>
        <ul className="flex items-center justify-end gap-4">
          <li className="flex menu-item">
            <a className="text-sm hover:text-primary" href="faqs.html">
              Help
            </a>
          </li>
          <li className="flex menu-item">
            <a className="text-sm hover:text-primary" href="contact-us.html">
              Contact Us
            </a>
          </li>
        </ul> */}
        {/* </nav>
          </div> */}
        {/*</div> */}
        {/* Main Navigation Menu */}
        <header
          id="navbar"
          className="sticky top-0 z-20 border-b border-default-200 bg-transparent transition-all"
        >
          <div className="lg:h-20 h-14 flex items-center">
            <div className="container">
              <div className="grid lg:grid-cols-3 grid-cols-2 items-center gap-4">
                <div className="flex">
                  {/* Mobile Menu Toggle Button */}
                  <button
                    className="lg:hidden block"
                    data-hs-overlay="#mobile-menu"
                  >
                    <i
                      data-lucide="menu"
                      className="w-7 h-7 text-default-600 me-4 hover:text-primary"
                    />
                  </button>
                  {/* Navbar Brand Logo */}
                  <a href="home.html">
                    <img
                      src="assets/images/logo-dark.png"
                      alt="logo"
                      className="h-10 flex dark:hidden"
                    />
                    <img
                      src="assets/images/logo-light.png"
                      alt="logo"
                      className="h-10 hidden dark:flex"
                    />
                  </a>
                </div>
                {/* Nevigation Menu */}
                <ul className="menu lg:flex items-center justify-center hidden relative">
                  {/* Home Menu */}
                  <li className="menu-item">
                    <a
                      className="inline-flex items-center text-sm lg:text-base font-medium text-default-800 py-2 px-4 rounded-full hover:text-primary"
                      href="home.html"
                    >
                      Home
                    </a>
                  </li>
                  {/* Product Menu */}
                  <li className="menu-item">
                    <div className="hs-dropdown relative inline-flex [--trigger:hover] [--placement:bottom]">
                      <a
                        className="hs-dropdown-toggle after:absolute hover:after:-bottom-10 after:inset-0 inline-flex items-center text-sm lg:text-base font-medium text-default-700 py-2 px-4 rounded-full hover:text-primary"
                        href="javascript:void(0)"
                      >
                        Product{" "}
                        <i
                          className="w-4 h-4 ms-2"
                          data-lucide="chevron-down"
                        />
                      </a>
                      <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 min-w-[200px] transition-[opacity,margin] mt-4 opacity-0 hidden z-10 bg-white shadow-lg rounded-lg border border-default-100 p-1.5 dark:bg-default-50">
                        <ul className="flex flex-col gap-1">
                          <li>
                            <a
                              className="flex items-center font-normal text-default-600 py-2 px-3 transition-all hover:text-default-700 hover:bg-default-100 rounded"
                              href="product-grid.html"
                            >
                              Product Grid
                            </a>
                          </li>
                          <li>
                            <a
                              className="flex items-center font-normal text-default-600 py-2 px-3 transition-all hover:text-default-700 hover:bg-default-100 rounded"
                              href="product-list.html"
                            >
                              Product List
                            </a>
                          </li>
                          <li>
                            <a
                              className="flex items-center font-normal text-default-600 py-2 px-3 transition-all hover:text-default-700 hover:bg-default-100 rounded"
                              href="product-detail.html"
                            >
                              Product Detail
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  {/* Mega Menu */}
                  <li className="menu-item">
                    <div className="hs-dropdown relative inline-flex [--trigger:hover] [--auto-close:inside]">
                      <a
                        className="hs-dropdown-toggle after:absolute hover:after:-bottom-10 after:inset-0 inline-flex items-center text-sm whitespace-nowrap lg:text-base font-medium text-default-700 py-2 px-4 rounded-full hover:text-primary"
                        href="javascript:void(0)"
                      >
                        Mega Menu
                        <i
                          className="w-4 h-4 ms-2"
                          data-lucide="chevron-down"
                        />
                      </a>
                      <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 top-full inset-x-0 w-full min-w-full absolute mt-4 transition-[opacity,margin] opacity-0 hidden z-10 duration-300">
                        <div className="container">
                          <div className="bg-white shadow-lg rounded-lg border border-default-200 overflow-hidden dark:bg-default-50">
                            <div className="grid grid-cols-12">
                              <div className="col-span-2 text-sm">
                                <div className="bg-default-100 h-full w-full py-10 px-6">
                                  <nav
                                    aria-label="Tabs"
                                    className="flex flex-col space-y-3.5"
                                    data-hs-tabs-vertical="true"
                                    role="tablist"
                                  >
                                    <button
                                      className="hs-tab-active:text-primary !bg-transparent inline-flex items-center text-base font-medium text-default-600 hover:text-primary transition-all active"
                                      data-hs-tab="#wraps"
                                      role="tab"
                                      type="button"
                                    >
                                      Wraps
                                      <i
                                        className="w-5 h-5 ms-auto"
                                        data-lucide="chevron-right"
                                      />
                                    </button>
                                    <button
                                      className="hs-tab-active:text-primary !bg-transparent inline-flex items-center text-base font-medium text-default-600 hover:text-primary transition-all"
                                      data-hs-tab="#noodles"
                                      role="tab"
                                      type="button"
                                    >
                                      Noodles
                                      <i
                                        className="w-5 h-5 ms-auto"
                                        data-lucide="chevron-right"
                                      />
                                    </button>
                                    <button
                                      className="hs-tab-active:text-primary !bg-transparent inline-flex items-center text-base font-medium text-default-600 hover:text-primary transition-all"
                                      data-hs-tab="#mexican"
                                      role="tab"
                                      type="button"
                                    >
                                      Mexican cuisine
                                      <i
                                        className="w-5 h-5 ms-auto"
                                        data-lucide="chevron-right"
                                      />
                                    </button>
                                    <button
                                      className="hs-tab-active:text-primary !bg-transparent inline-flex items-center text-base font-medium text-default-600 hover:text-primary transition-all"
                                      data-hs-tab="#tacos"
                                      role="tab"
                                      type="button"
                                    >
                                      Tacos
                                      <i
                                        className="w-5 h-5 ms-auto"
                                        data-lucide="chevron-right"
                                      />
                                    </button>
                                    <button
                                      className="hs-tab-active:text-primary !bg-transparent inline-flex items-center text-base font-medium text-default-600 hover:text-primary transition-all"
                                      data-hs-tab="#smart-meals"
                                      role="tab"
                                      type="button"
                                    >
                                      Smart Meals
                                      <i
                                        className="w-5 h-5 ms-auto"
                                        data-lucide="chevron-right"
                                      />
                                    </button>
                                    <button
                                      className="hs-tab-active:text-primary !bg-transparent inline-flex items-center text-base font-medium text-default-600 hover:text-primary transition-all"
                                      data-hs-tab="#burger"
                                      role="tab"
                                      type="button"
                                    >
                                      Burger
                                      <i
                                        className="w-5 h-5 ms-auto"
                                        data-lucide="chevron-right"
                                      />
                                    </button>
                                    <button
                                      className="hs-tab-active:text-primary !bg-transparent inline-flex items-center text-base font-medium text-default-600 hover:text-primary transition-all"
                                      data-hs-tab="#beverages-desserts"
                                      role="tab"
                                      type="button"
                                    >
                                      Beverages &amp; Desserts
                                      <i
                                        className="w-5 h-5 ms-auto"
                                        data-lucide="chevron-right"
                                      />
                                    </button>
                                  </nav>
                                </div>
                              </div>
                              <div className="col-span-10">
                                <div className="py-10">
                                  <div id="wraps" role="tabpanel">
                                    <div className="grid grid-cols-4 divide-x divide-default-200">
                                      <div className="ps-6">
                                        <h6 className="text-base font-medium text-default-800">
                                          Bean-Based Wraps
                                        </h6>
                                        <ul className="grid space-y-3 mt-4">
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Black Bean Wrap
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Refried Bean and Cheese Wrap
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Falafel Wrap
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Chickpea and Hummus Wrap
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="ps-6">
                                        <h6 className="text-base font-medium text-default-800">
                                          Grilled Vegetable Wraps
                                        </h6>
                                        <ul className="grid space-y-3 mt-4">
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Grilled Veggie Wrap
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Roasted Red Pepper Wrap
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Portobello Mushroom Wrap
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Eggplant Parmesan Wrap
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="ps-6">
                                        <h6 className="text-base font-medium text-default-800">
                                          Cheese and Spinach Wraps
                                        </h6>
                                        <ul className="grid space-y-3 mt-4">
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Spinach and Feta Wrap
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Paneer Tikka Wrap
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Caprese Wrap
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="ps-6">
                                        <h6 className="text-base font-medium text-default-800">
                                          Chicken Wraps
                                        </h6>
                                        <ul className="grid space-y-3 mt-4">
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Grilled Chicken Wrap
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Buffalo Chicken Wrap
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Chicken Caesar Wrap
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Chicken Shawarma Wrap
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="hidden"
                                    id="noodles"
                                    role="tabpanel"
                                  >
                                    <div className="grid grid-cols-4 divide-x divide-default-200">
                                      <div className="ps-6">
                                        <h6 className="text-base font-medium text-default-800">
                                          Italian Pasta Dishes
                                        </h6>
                                        <ul className="grid space-y-3 mt-4">
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Spaghetti Bolognese
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Fettuccine Alfredo
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Lasagna
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Carbonara
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Penne alla Vodka
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="ps-6">
                                        <h6 className="text-base font-medium text-default-800">
                                          Asian Noodle Dishes
                                        </h6>
                                        <ul className="grid space-y-3 mt-4">
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Ramen
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Pad Thai
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Pho
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Chow Mein
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Udon Stir-Fry
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Soba Noodles
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Lo Mein
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="ps-6">
                                        <h6 className="text-base font-medium text-default-800">
                                          Chinese Noodle Dishes
                                        </h6>
                                        <ul className="grid space-y-3 mt-4">
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Beef Chow Fun
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Dan Dan Noodles
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Sesame Noodles
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Wonton Noodle Soup
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Zha Jiang Mian
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="ps-6">
                                        <h6 className="text-base font-medium text-default-800">
                                          Japanese Noodle Dishes
                                        </h6>
                                        <ul className="grid space-y-3 mt-4">
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Yakisoba
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Tempura Udon
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Hiyashi Chukakies
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Sushi Rolls
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="hidden"
                                    id="mexican"
                                    role="tabpanel"
                                  >
                                    <div className="grid grid-cols-4 divide-x divide-default-200">
                                      <div className="ps-6">
                                        <h6 className="text-base font-medium text-default-800">
                                          Thai Noodle Dishes
                                        </h6>
                                        <ul className="grid space-y-3 mt-4">
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Drunken Noodles
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Tom Yum Noodle Soup
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Green Curry Noodles
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Glass Noodle Salad
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="ps-6">
                                        <h6 className="text-base font-medium text-default-800">
                                          Indian Noodle Dishes
                                        </h6>
                                        <ul className="grid space-y-3 mt-4">
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Veg Hakka Noodles
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Maggi Noodles
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Masala Instant Noodles
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="ps-6">
                                        <h6 className="text-base font-medium text-default-800">
                                          Korean Noodle Dishes
                                        </h6>
                                        <ul className="grid space-y-3 mt-4">
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Japchae
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Jajangmyeon
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Ramyeon
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Naengmyeon
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="ps-6">
                                        <h6 className="text-base font-medium text-default-800">
                                          Western Noodle Dishes
                                        </h6>
                                        <ul className="grid space-y-3 mt-4">
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Chicken Noodle Soup
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Beef Stroganoff
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Tuna Noodle Casserole
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Macaroni and Cheese
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="hidden"
                                    id="tacos"
                                    role="tabpanel"
                                  >
                                    <div className="grid grid-cols-4 divide-x divide-default-200">
                                      <div className="ps-6">
                                        <h6 className="text-base font-medium text-default-800">
                                          Tacos
                                        </h6>
                                        <ul className="grid space-y-3 mt-4">
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Street Tacos
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Carnitas Tacos
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Barbacoa Tacos
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Fish Tacos
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Vegetarian Tacos
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="ps-6">
                                        <h6 className="text-base font-medium text-default-800">
                                          Enchiladas
                                        </h6>
                                        <ul className="grid space-y-3 mt-4">
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Chicken Enchiladas
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Cheese Enchiladas
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Beef Enchiladas
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Suizas Enchiladas
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="ps-6">
                                        <h6 className="text-base font-medium text-default-800">
                                          Tamales
                                        </h6>
                                        <ul className="grid space-y-3 mt-4">
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Pork Tamales
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Chicken Tamales
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Sweet Tamales
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="ps-6">
                                        <h6 className="text-base font-medium text-default-800">
                                          Quesadillas
                                        </h6>
                                        <ul className="grid space-y-3 mt-4">
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Cheese Quesadillas
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Chicken Quesadillas
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Vegetarian Quesadillas
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="hidden"
                                    id="smart-meals"
                                    role="tabpanel"
                                  >
                                    <div className="grid grid-cols-3 divide-x divide-default-200">
                                      <div className="ps-6">
                                        <h6 className="text-base font-medium text-default-800">
                                          Balanced Meals
                                        </h6>
                                        <ul className="grid space-y-3 mt-4">
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Grilled chicken breast with
                                              steamed broccoli and quinoa
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Baked salmon with asparagus and
                                              brown rice
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="ps-6">
                                        <h6 className="text-base font-medium text-default-800">
                                          Low-Carb Meals
                                        </h6>
                                        <ul className="grid space-y-3 mt-4">
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Cauliflower rice stir-fry with
                                              tofu and mixed vegetables
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Zucchini noodles with pesto and
                                              grilled shrimp
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="ps-6">
                                        <h6 className="text-base font-medium text-default-800">
                                          High-Protein Meals
                                        </h6>
                                        <ul className="grid space-y-3 mt-4">
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Lean beef or turkey burger with a
                                              side salad
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Greek yogurt parfait with berries
                                              and nuts
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="hidden"
                                    id="burger"
                                    role="tabpanel"
                                  >
                                    <div className="grid grid-cols-4 divide-x divide-default-200">
                                      <div className="ps-6">
                                        <h6 className="text-base font-medium text-default-800">
                                          Classic Burgers
                                        </h6>
                                        <ul className="grid space-y-3 mt-4">
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Cheeseburger
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Bacon Cheeseburger
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Double Cheeseburger
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Triple Cheeseburger
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Classic Veggie Burger
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="ps-6">
                                        <h6 className="text-base font-medium text-default-800">
                                          Patty Variations
                                        </h6>
                                        <ul className="grid space-y-3 mt-4">
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Turkey Burger
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Chicken Burger
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Bison Burger
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Salmon Burger
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Black Bean Burger
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Portobello Mushroom Burger
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="ps-6">
                                        <h6 className="text-base font-medium text-default-800">
                                          Flavorful Toppings
                                        </h6>
                                        <ul className="grid space-y-3 mt-4">
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              BBQ Burgerges
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Mushroom Swiss Burger
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Western/Cowboy Burger
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Blue Cheese Burger
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Jalapeño Burger
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Guacamole Burger
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="ps-6">
                                        <h6 className="text-base font-medium text-default-800">
                                          Breakfast Burger
                                        </h6>
                                        <ul className="grid space-y-3 mt-4">
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Avocado Burger
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Caprese Burger
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Mediterranean Burger
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Tex-Mex Burger
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Reuben Burger
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="hidden"
                                    id="beverages-desserts"
                                    role="tabpanel"
                                  >
                                    <div className="grid grid-cols-4 divide-x divide-default-200">
                                      <div className="ps-6">
                                        <h6 className="text-base font-medium text-default-800">
                                          Coffee Based
                                        </h6>
                                        <ul className="grid space-y-3 mt-4">
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Espresso
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Cappuccino
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Latte
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Americano
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Mocha
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Macchiato
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="ps-6">
                                        <h6 className="text-base font-medium text-default-800">
                                          Tea
                                        </h6>
                                        <ul className="grid space-y-3 mt-4">
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Black Tea
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Green Tea
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Herbal Tea
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Chai Tea
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Earl Grey
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="ps-6">
                                        <h6 className="text-base font-medium text-default-800">
                                          Cakes
                                        </h6>
                                        <ul className="grid space-y-3 mt-4">
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Chocolate Cake
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Carrot Cake
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Red Velvet Cake
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Cheesecake
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="ps-6">
                                        <h6 className="text-base font-medium text-default-800">
                                          Cookies &amp; Pastries
                                        </h6>
                                        <ul className="grid space-y-3 mt-4">
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Chocolate Chip Cookies
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Oatmeal Raisin Cookies
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Peanut Butter Cookies
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Sugar Cookies
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Croissant
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                              href="javascript:void(0)"
                                            >
                                              Danish Pastry
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* Pages Menu */}
                  <li className="menu-item">
                    <div className="hs-dropdown relative inline-flex [--trigger:hover] [--placement:bottom]">
                      <a
                        className="hs-dropdown-toggle after:absolute hover:after:-bottom-10 after:inset-0 inline-flex items-center text-sm lg:text-base font-medium text-default-700 py-2 px-4 rounded-full hover:text-primary"
                        href="javascript:void(0)"
                      >
                        Pages{" "}
                        <i
                          className="w-4 h-4 ms-2"
                          data-lucide="chevron-down"
                        />
                      </a>
                      <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 min-w-[200px] transition-[opacity,margin] mt-4 opacity-0 hidden z-10 bg-white shadow-md rounded-lg border border-default-100 p-1.5 dark:bg-default-50">
                        <ul className="flex flex-col gap-1">
                          <li>
                            <a
                              className="flex items-center font-normal text-default-600 py-2 px-3 transition-all hover:text-default-700 hover:bg-default-100 rounded"
                              href="cart.html"
                            >
                              Cart
                            </a>
                          </li>
                          <li>
                            <a
                              className="flex items-center font-normal text-default-600 py-2 px-3 transition-all hover:text-default-700 hover:bg-default-100 rounded"
                              href="wishlist.html"
                            >
                              Wishlist
                            </a>
                          </li>
                          <li>
                            <a
                              className="flex items-center font-normal text-default-600 py-2 px-3 transition-all hover:text-default-700 hover:bg-default-100 rounded"
                              href="checkout.html"
                            >
                              Checkout
                            </a>
                          </li>
                          <li>
                            <a
                              className="flex items-center font-normal text-default-600 py-2 px-3 transition-all hover:text-default-700 hover:bg-default-100 rounded"
                              href="faqs.html"
                            >
                              FAQs
                            </a>
                          </li>
                          <li>
                            <a
                              className="flex items-center font-normal text-default-600 py-2 px-3 transition-all hover:text-default-700 hover:bg-default-100 rounded"
                              href="contact-us.html"
                            >
                              Contact Us
                            </a>
                          </li>
                          <li>
                            <a
                              className="flex items-center font-normal text-default-600 py-2 px-3 transition-all hover:text-default-700 hover:bg-default-100 rounded"
                              href="error-404.html"
                            >
                              Error 404
                            </a>
                          </li>
                          <li>
                            <a
                              className="flex items-center font-normal text-default-600 py-2 px-3 transition-all hover:text-default-700 hover:bg-default-100 rounded"
                              href="auth-login.html"
                            >
                              Login
                            </a>
                          </li>
                          <li>
                            <a
                              className="flex items-center font-normal text-default-600 py-2 px-3 transition-all hover:text-default-700 hover:bg-default-100 rounded"
                              href="auth-register.html"
                            >
                              Register
                            </a>
                          </li>
                          <li>
                            <a
                              className="flex items-center font-normal text-default-600 py-2 px-3 transition-all hover:text-default-700 hover:bg-default-100 rounded"
                              href="auth-recoverpw.html"
                            >
                              Forgot Password
                            </a>
                          </li>
                          <li>
                            <a
                              className="flex items-center font-normal text-default-600 py-2 px-3 transition-all hover:text-default-700 hover:bg-default-100 rounded"
                              href="auth-reset-password.html"
                            >
                              Reset Password
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  {/* Admin Link */}
                  <li className="menu-item">
                    <a
                      className="inline-flex items-center text-sm lg:text-base font-medium text-default-700 py-2 px-4 rounded-full hover:text-primary"
                      href="admin-dashboard.html"
                      target="_blank"
                    >
                      Admin
                    </a>
                  </li>
                </ul>
                <ul className="flex items-center justify-end gap-x-6">
                  {/* Search Form Input */}
                  <li className="2xl:flex relative menu-item hidden">
                    <input
                      className="ps-10 pe-4 py-2.5 block w-64 border-transparent placeholder-primary-500 rounded-full text-sm bg-primary-400/40 text-primary"
                      placeholder="Search for items..."
                      type="search"
                    />
                    <span className="absolute start-4 top-3">
                      <i
                        className="w-4 h-4 text-primary-500"
                        data-lucide="search"
                      />
                    </span>
                  </li>
                  {/* Search Button (small screen) */}
                  <li className="2xl:hidden flex menu-item">
                    <button
                      data-hs-overlay="#mobileSearchSidebar"
                      className="relative flex text-base transition-all text-default-600 hover:text-primary"
                      onClick={() => {
                        setOpenSmallSearchModal(!openSmallSearchModal);
                      }}
                    >
                      <Search className="w-5 h-5 text-gray-600" />
                    </button>
                  </li>
                  {/* Cart Page link */}
                  <li className="flex menu-item">
                    <a
                      href="cart.html"
                      className="relative flex text-base transition-all text-default-600 hover:text-primary"
                    >
                      <ShoppingBag className="w-5 h-5 text-gray-600" />
                      <span className="absolute z-10 -top-2.5 end-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 bg-red-500 rounded-full">
                        1
                      </span>
                    </a>
                  </li>
                  {/* User Dropdown */}
                  <li className="flex menu-item">
                    <div className="hs-dropdown relative inline-flex [--trigger:hover] [--placement:bottom]">
                      <a
                        className="hs-dropdown-toggle after:absolute hover:after:-bottom-10 after:inset-0 relative flex items-center text-base transition-all text-default-600 hover:text-primary"
                        href="javascript:void(0)"
                      >
                        <User className="w-5 h-5 text-gray-600" />
                      </a>
                      <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 min-w-[200px] transition-[opacity,margin] mt-4 opacity-0 hidden z-20 bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded-lg border border-default-100 p-1.5 dark:bg-default-50">
                        <ul className="flex flex-col gap-1">
                          <li>
                            <a
                              className="flex items-center gap-3 font-normal text-default-600 py-2 px-3 transition-all hover:text-default-700 hover:bg-default-100 rounded"
                              href="admin-dashboard.html"
                              target="_blank"
                            >
                              <i
                                className="h-4 w-4"
                                data-lucide="user-circle"
                              />
                              Admin
                            </a>
                          </li>
                          <li>
                            <a
                              className="flex items-center gap-3 font-normal text-default-600 py-2 px-3 transition-all hover:text-default-700 hover:bg-default-100 rounded"
                              href="cart.html"
                            >
                              <i
                                className="h-4 w-4"
                                data-lucide="shopping-cart"
                              />
                              Cart
                            </a>
                          </li>
                          <li>
                            <a
                              className="flex items-center gap-3 font-normal text-default-600 py-2 px-3 transition-all hover:text-default-700 hover:bg-default-100 rounded"
                              href="wishlist.html"
                            >
                              <i className="h-4 w-4" data-lucide="heart" />{" "}
                              Wishlist
                            </a>
                          </li>
                          <li>
                            <a
                              className="flex items-center gap-3 font-normal text-default-600 py-2 px-3 transition-all hover:text-default-700 hover:bg-default-100 rounded"
                              href="auth-login.html"
                            >
                              <i className="h-4 w-4" data-lucide="log-out" />{" "}
                              Log Out
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        {/* Mobile Nav (Bottom Navbar) */}
        <div className="flex lg:hidden">
          <div className="fixed inset-x-0 bottom-0 h-16 w-full grid grid-cols-3 items-center justify-items-center border-t border-default-200 bg-white dark:bg-default-50 z-40">
            <a
              href="home.html"
              className="flex flex-col items-center justify-center gap-1 text-default-600"
              type="button"
            >
              <i className="fa-solid fa-house text-lg" />
              <span className="text-xs font-medium">Home</span>
            </a>
            <a
              href="product-grid.html"
              className="flex flex-col items-center justify-center gap-1 text-default-600"
              type="button"
            >
              <i className="fa-solid fa-utensils text-lg" />
              <span className="text-xs font-medium">Food</span>
            </a>
            <a
              href="wishlist.html"
              className="flex flex-col items-center justify-center gap-1 text-default-600"
              type="button"
            >
              <i className="fa-regular fa-heart text-lg" />
              <span className="text-xs font-medium">Wishlist</span>
            </a>
          </div>
        </div>
        {/* Mobile Menu (Sidebar Menu) */}
        <div
          id="mobile-menu"
          className="hs-overlay hs-overlay-open:translate-x-0 hidden -translate-x-full fixed top-0 left-0 transition-all transform h-full max-w-[270px] w-full z-60 border-r border-default-200 bg-white dark:bg-default-50"
          tabIndex={-1}
        >
          <div className="flex justify-center items-center border-b border-dashed border-default-200 h-16 transition-all duration-300">
            <a href="home.html">
              <img
                src="assets/images/logo-dark.png"
                alt="logo"
                className="h-10 flex dark:hidden"
              />
              <img
                src="assets/images/logo-light.png"
                alt="logo"
                className="h-10 hidden dark:flex"
              />
            </a>
          </div>
          <div className="h-[calc(100%-4rem)]" data-simplebar="">
            <nav className="hs-accordion-group p-4 w-full flex flex-col flex-wrap">
              <ul className="space-y-2.5">
                <li>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-medium text-default-700 rounded-md hover:bg-default-100"
                    href="home.html"
                  >
                    Home
                  </a>
                </li>
                <li className="hs-accordion" id="product-categories-accordion">
                  <a
                    className="hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-primary hs-accordion-active:bg-default-100 text-sm font-medium text-default-700 rounded-md hover:bg-default-100"
                    href="javascript:;"
                  >
                    Product
                    <i
                      data-lucide="chevron-down"
                      className="w-5 h-5 ms-auto hs-accordion-active:rotate-180 transition-all"
                    />
                  </a>
                  <div
                    id="product-categories-accordion"
                    className="hs-accordion-content w-full overflow-hidden transition-[height] hidden"
                  >
                    <ul className="pt-2 ps-2">
                      <li>
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-medium text-default-700 rounded-md hover:bg-default-100"
                          href="product-grid.html"
                        >
                          Product Grid
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-medium text-default-700 rounded-md hover:bg-default-100"
                          href="product-list.html"
                        >
                          Product List
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-medium text-default-700 rounded-md hover:bg-default-100"
                          href="product-detail.html"
                        >
                          Product Details
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-medium text-default-700 rounded-md hover:bg-default-100"
                    href="wishlist.html"
                  >
                    My Wishlist
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-medium text-default-700 rounded-md hover:bg-default-100"
                    href="contact-us.html"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-medium text-default-700 rounded-md hover:bg-default-100"
                    href="faqs.html"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-medium text-default-700 rounded-md hover:bg-default-100"
                    href="error-404.html"
                  >
                    Error Page
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-medium text-default-700 rounded-md hover:bg-default-100"
                    href="auth-login.html"
                  >
                    Login
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-medium text-default-700 rounded-md hover:bg-default-100"
                    href="auth-register.html"
                  >
                    Register
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-medium text-default-700 rounded-md hover:bg-default-100"
                    href="auth-recoverpw.html"
                  >
                    Forgot Password
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-medium text-default-700 rounded-md hover:bg-default-100"
                    href="auth-reset-password.html"
                  >
                    Reset Password
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* Topbar Search Modal (Small Screen) */}
        <div
          id="mobileSearchSidebar"
          className={`hs-overlay ${
            !openSmallSearchModal ? "hidden" : "open"
          } w-full h-full fixed top-0 left-0 z-60 overflow-x-hidden overflow-y-auto`}
          aria-overlay="true"
          tabindex="-1"
        >
          <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
            <div className="flex flex-col bg-white shadow-sm rounded-lg">
              <div className="relative flex w-full">
                <span className="absolute start-4 top-3">
                  <i
                    className="w-4 h-4 text-primary-500"
                    data-lucide="search"
                  />
                </span>
                <input
                  className="px-10 py-2.5 block w-full border-transparent placeholder-primary-500 rounded-lg text-sm bg-transparent text-primary-500"
                  placeholder="Search for items..."
                  type="search"
                />
                <button
                  className="absolute end-4 top-3"
                  data-hs-overlay="#mobileSearchSidebar"
                >
                  <X className="w-4 h-4 text-primary-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
