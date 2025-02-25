import React, { useEffect, useRef, useState } from "react";
import logo from "@/assets/images/logo.jpg";

import { User, ShoppingBag, Search } from "lucide-react";
import Image from "next/image";
import MenuItems from "./menuItems";
import SearchMenuItems from "./searchMenuItems";

const HeaderNaivgation = ({
  openSmallSearchModal,
  setOpenSmallSearchModal,
  searchItem,
  setSearchItem,
}) => {
  const userModalRef = useRef(null);
  const [handleUserModal, setHandleUserModal] = useState(false);
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        userModalRef.current &&
        !userModalRef.current.contains(event.target)
      ) {
        setHandleUserModal(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [userModalRef]);
  return (
    <>
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
                  <Image
                    src={logo}
                    alt="logo"
                    width={500}
                    height={500}
                    className="w-[60px] flex dark:hidden"
                  />
                  <Image
                    src={logo}
                    alt="logo"
                    width={500}
                    height={500}
                    className="w-[60px] hidden dark:flex"
                  />
                </a>
              </div>
              <MenuItems />
              <SearchMenuItems
                openSmallSearchModal={openSmallSearchModal}
                setOpenSmallSearchModal={setOpenSmallSearchModal}
                searchItem={searchItem}
                setSearchItem={setSearchItem}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderNaivgation;
