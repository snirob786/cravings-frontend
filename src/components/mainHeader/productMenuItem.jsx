import { ChevronDown, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ProductMenuItems = () => {
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
  }, []);
  return (
    <>
      {/* Product Menu */}
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
            Product <ChevronDown className="w-4 h-4 ms-2" />
          </a>
          <div
            className={`hs-dropdown-menu hs-dropdown-open:opacity-100 min-w-[200px] transition-[opacity,margin] mt-4 opacity-0 z-10 bg-white shadow-lg rounded-lg border border-default-100 p-1.5 dark:bg-default-50 ${
              !handleUserModal ? "hidden" : "block userModalContainer"
            }`}
            ref={userModalRef}
          >
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
    </>
  );
};

export default ProductMenuItems;
