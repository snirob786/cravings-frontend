import { ChevronDown, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ProductMenuItems from "./ProductMenuItem";
import MegaMenuItem from "./megaMenuItem";
import PagesMenuItems from "./pagesMenuItem";
import Link from "next/link";

const MenuItems = () => {
  return (
    <>
      {/* Nevigation Menu */}
      <ul className="menu lg:flex items-center justify-center hidden relative">
        {/* Home Menu */}
        <li className="menu-item">
          <Link
            className="inline-flex items-center text-sm lg:text-base font-medium text-default-800 py-2 px-4 rounded-full hover:text-primary"
            href="/"
          >
            Home
          </Link>
        </li>
        <ProductMenuItems />
        <MegaMenuItem />
        <PagesMenuItems />
        {/* Admin Link */}
        <li className="menu-item">
          <Link
            className="inline-flex items-center text-sm lg:text-base font-medium text-default-700 py-2 px-4 rounded-full hover:text-primary"
            href="/dashboard"
          >
            Admin
          </Link>
        </li>
      </ul>
    </>
  );
};

export default MenuItems;
