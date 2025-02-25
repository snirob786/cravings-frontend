import { useEffect, useRef, useState } from "react";

const MenuItems = () => {
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
          <div
            className={`hs-dropdown relative inline-flex [--trigger:hover] [--placement:bottom]${
              handleUserModal ? " open" : ""
            }`}
            onClick={() => setHandleUserModal(!handleUserModal)}
          >
            <a
              className="hs-dropdown-toggle after:absolute hover:after:-bottom-10 after:inset-0 inline-flex items-center text-sm lg:text-base font-medium text-default-700 py-2 px-4 rounded-full hover:text-primary"
              href="javascript:void(0)"
            >
              Product <i className="w-4 h-4 ms-2" data-lucide="chevron-down" />
            </a>
            <div
              className={`hs-dropdown-menu hs-dropdown-open:opacity-100 min-w-[200px] transition-[opacity,margin] mt-4 opacity-0 z-10 bg-white shadow-lg rounded-lg border border-default-100 p-1.5 dark:bg-default-50 ${
                !handleUserModal ? "hidden" : "block userModalContainer"
              }`}
              data-popper-placement="bottom"
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
        {/* Mega Menu */}
        <li className="menu-item">
          <div className="hs-dropdown relative inline-flex [--trigger:hover] [--auto-close:inside]">
            <a
              className="hs-dropdown-toggle after:absolute hover:after:-bottom-10 after:inset-0 inline-flex items-center text-sm whitespace-nowrap lg:text-base font-medium text-default-700 py-2 px-4 rounded-full hover:text-primary"
              href="javascript:void(0)"
            >
              Mega Menu
              <i className="w-4 h-4 ms-2" data-lucide="chevron-down" />
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
                        <div className="hidden" id="noodles" role="tabpanel">
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
                        <div className="hidden" id="mexican" role="tabpanel">
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
                        <div className="hidden" id="tacos" role="tabpanel">
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
                                    Grilled chicken breast with steamed broccoli
                                    and quinoa
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                    href="javascript:void(0)"
                                  >
                                    Baked salmon with asparagus and brown rice
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
                                    Cauliflower rice stir-fry with tofu and
                                    mixed vegetables
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                    href="javascript:void(0)"
                                  >
                                    Zucchini noodles with pesto and grilled
                                    shrimp
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
                                    Lean beef or turkey burger with a side salad
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="text-sm font-medium text-default-600 hover:text-primary transition-all"
                                    href="javascript:void(0)"
                                  >
                                    Greek yogurt parfait with berries and nuts
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="hidden" id="burger" role="tabpanel">
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
          <div
            className={`hs-dropdown relative inline-flex [--trigger:hover] [--placement:bottom]${
              handleUserModal ? " open" : ""
            }`}
            onClick={() => setHandleUserModal(!handleUserModal)}
          >
            <a
              className="hs-dropdown-toggle after:absolute hover:after:-bottom-10 after:inset-0 inline-flex items-center text-sm lg:text-base font-medium text-default-700 py-2 px-4 rounded-full hover:text-primary"
              href="javascript:void(0)"
            >
              Pages <i className="w-4 h-4 ms-2" data-lucide="chevron-down" />
            </a>
            <div
              className={`hs-dropdown-menu hs-dropdown-open:opacity-100 min-w-[200px] transition-[opacity,margin] mt-4 opacity-0 h-10 bg-white shadow-md rounded-lg border border-default-100 p-1.5 dark:bg-default-50 ${
                !handleUserModal ? "hidden" : "block userModalContainer"
              }`}
              data-popper-placement="bottom"
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
    </>
  );
};

export default MenuItems;
