import { ChevronDown, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const PagesMenuItems = () => {
  const userModalButtonRef = useRef(null);
  const userModalRef = useRef(null);
  const [handleUserModal, setHandleUserModal] = useState(false);
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        userModalButtonRef.current &&
        !userModalButtonRef.current.contains(event.target) &&
        userModalRef.current &&
        !userModalRef.current.contains(event.target)
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
      {/* Pages Menu */}
      <li className="menu-item">
        <div
          className={`hs-dropdown relative inline-flex [--trigger:hover] [--placement:bottom]${
            handleUserModal ? " open" : ""
          }`}
          onClick={() => setHandleUserModal(!handleUserModal)}
          ref={userModalButtonRef}
        >
          <a
            className="hs-dropdown-toggle after:absolute hover:after:-bottom-10 after:inset-0 inline-flex items-center text-sm lg:text-base font-medium text-default-700 py-2 px-4 rounded-full hover:text-primary"
            href="javascript:void(0)"
          >
            Pages <ChevronDown className="w-4 h-4 ms-2" />
          </a>
          <div
            className={`hs-dropdown-menu hs-dropdown-open:opacity-100 min-w-[200px] transition-[opacity,margin] mt-4 opacity-0 h-max bg-white shadow-md rounded-lg border border-default-100 p-1.5 dark:bg-default-50 ${
              !handleUserModal ? "hidden" : "block userModalContainer"
            }`}
            data-popper-placement="bottom"
            ref={userModalRef}
          >
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
    </>
  );
};

export default PagesMenuItems;
