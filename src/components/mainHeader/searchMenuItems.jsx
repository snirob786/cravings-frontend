import { useEffect, useRef, useState } from "react";

import { Search, ShoppingBag, User, X } from "lucide-react";

const SearchMenuItems = ({
  openSmallSearchModal,
  setOpenSmallSearchModal,
  searchItem,
  setSearchItem,
}) => {
  const userModalRef = useRef(null);
  const userModalButtonRef = useRef(null);
  const [handleUserModal, setHandleUserModal] = useState(false);
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        userModalRef.current &&
        !userModalRef.current.contains(event.target) &&
        userModalButtonRef.current &&
        !userModalButtonRef.current.contains(event.target)
      ) {
        setHandleUserModal(false);
        return;
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
      <ul className="flex items-center justify-end gap-x-6">
        {/* Search Form Input */}
        <li className="2xl:flex relative menu-item hidden">
          <input
            className="ps-10 pe-4 py-2.5 block w-64 border-transparent placeholder-primary-500 rounded-full text-sm bg-primary-400/40 text-primary"
            placeholder="Search for items..."
            type="text"
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
          />
          <span className="absolute start-4 top-3">
            <Search className="w-4 h-4 text-primary-500" />
          </span>
          {searchItem?.length > 0 && (
            <button
              className="absolute end-4 top-3"
              data-hs-overlay="#mobileSearchSidebar"
              onClick={() => {
                setSearchItem("");
              }}
            >
              <X className="w-4 h-4 text-primary-500" />
            </button>
          )}
        </li>
        {/* Search Button (small screen) */}
        <li className="2xl:hidden flex menu-item">
          <button
            data-hs-overlay="#mobileSearchSidebar"
            className="relative flex text-base transition-all text-default-600 hover:text-primary"
            onClick={() => {
              setOpenSmallSearchModal(true);
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
          <div
            className={`hs-dropdown relative inline-flex [--trigger:hover] [--placement:bottom]${
              handleUserModal ? " open" : ""
            }`}
            onClick={() => setHandleUserModal(!handleUserModal)}
            ref={userModalButtonRef}
          >
            <a
              className="hs-dropdown-toggle after:absolute hover:after:-bottom-10 after:inset-0 relative flex items-center text-base transition-all text-default-600 hover:text-primary"
              href="javascript:void(0)"
            >
              <User className="w-5 h-5 text-gray-600" />
            </a>
            <div
              className={`hs-dropdown-menu hs-dropdown-open:opacity-100 min-w-[200px] transition-[opacity,margin] mt-4 opacity-0 z-20 bg-white shadow-[,_17,_26,_0.1)_0px_0px_16px] rounded-lg border border-default-100 p-1.5 dark:bg-default-50 ${
                !handleUserModal ? "hidden" : "block userModalContainer"
              }`}
              data-popper-placement="bottom"
              ref={userModalRef}
            >
              <ul className="flex flex-col gap-1">
                <li>
                  <a
                    className="flex items-center gap-3 font-normal text-default-600 py-2 px-3 transition-all hover:text-default-700 hover:bg-default-100 rounded"
                    href="admin-dashboard.html"
                    target="_blank"
                  >
                    <i className="h-4 w-4" data-lucide="user-circle" />
                    Admin
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 font-normal text-default-600 py-2 px-3 transition-all hover:text-default-700 hover:bg-default-100 rounded"
                    href="cart.html"
                  >
                    <i className="h-4 w-4" data-lucide="shopping-cart" />
                    Cart
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 font-normal text-default-600 py-2 px-3 transition-all hover:text-default-700 hover:bg-default-100 rounded"
                    href="wishlist.html"
                  >
                    <i className="h-4 w-4" data-lucide="heart" /> Wishlist
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 font-normal text-default-600 py-2 px-3 transition-all hover:text-default-700 hover:bg-default-100 rounded"
                    href="auth-login.html"
                  >
                    <i className="h-4 w-4" data-lucide="log-out" /> Log Out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};

export default SearchMenuItems;
