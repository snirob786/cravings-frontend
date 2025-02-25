import React from "react";

const MobileNaivgationBottom = () => {
  return (
    <>
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
    </>
  );
};

export default MobileNaivgationBottom;
