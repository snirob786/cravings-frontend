import React, { useEffect, useRef, useState } from "react";
import logo from "@/assets/images/logo.jpg";

import { User, ShoppingBag, Search } from "lucide-react";
import Image from "next/image";
const MobileMenuSidebarMenu = () => {
  return (
    <>
      {/* Mobile Menu (Sidebar Menu) */}
      <div
        id="mobile-menu"
        className="hs-overlay hs-overlay-open:translate-x-0 hidden -translate-x-full fixed top-0 left-0 transition-all transform h-full max-w-[270px] w-full z-60 border-r border-default-200 bg-white dark:bg-default-50"
        tabIndex={-1}
      >
        <div className="flex justify-center items-center border-b border-dashed border-default-200 h-16 transition-all duration-300">
          <a href="home.html">
            <Image
              src={logo}
              alt="logo"
              width={500}
              height={500}
              className="w-[10px] flex dark:hidden"
            />
            <Image
              src={logo}
              alt="logo"
              width={500}
              height={500}
              className="w-[10px] hidden dark:flex"
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
    </>
  );
};

export default MobileMenuSidebarMenu;
