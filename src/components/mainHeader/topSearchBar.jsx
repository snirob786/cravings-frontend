import { Search, X } from "lucide-react";
import React, { useEffect, useRef } from "react";

const TopSearchBar = ({
  openSmallSearchModal,
  setOpenSmallSearchModal,
  searchItem,
  setSearchItem,
}) => {
  const topSearchModalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        topSearchModalRef.current &&
        !topSearchModalRef.current.contains(event.target)
      ) {
        setOpenSmallSearchModal(false);
        return;
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [topSearchModalRef]);
  return (
    <>
      {/* Topbar Search Modal (Small Screen) */}
      <div
        id="mobileSearchSidebar"
        className={`hs-overlay ${
          !openSmallSearchModal ? "hidden" : "open"
        } w-full h-full fixed top-0 left-0 z-60 overflow-x-hidden overflow-y-auto`}
        aria-overlay="true"
        tabindex="-1"
      >
        <div
          className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto"
          ref={topSearchModalRef}
        >
          <div className="flex flex-col bg-white shadow-sm rounded-lg">
            <div className="relative flex w-full">
              <span className="absolute start-4 top-3">
                <Search className="w-4 h-4 text-primary-500" />
              </span>
              <input
                className="px-10 py-2.5 block w-full border-transparent placeholder-primary-500 rounded-lg text-sm bg-transparent text-primary-500"
                placeholder="Search for items..."
                type="text"
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
              />
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopSearchBar;
