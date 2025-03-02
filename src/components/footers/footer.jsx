import React, { useEffect, useRef, useState } from "react";
import logo from "@/assets/images/logo.jpg";

import { User, ShoppingBag, Search, Menu, Heart } from "lucide-react";
import Image from "next/image";
import MenuItems from "../mainHeader/menuItems";
import SearchMenuItems from "../mainHeader/searchMenuItems";

const FooterSection = ({}) => {
  return (
    <>
      <footer class="border-t border-default-200">
        <div class="container">
          <div class="grid lg:grid-cols-3 items-center gap-6 lg:py-10 py-6">
            <div class="lg:col-span-2">
              <div class="grid md:grid-cols-4 grid-cols-2 gap-6 mb-6">
                <div class="flex flex-col gap-3">
                  <h5 class="mb-3 font-semibold text-default-950">About</h5>
                  <div class="text-default-600">
                    <a href="javascript:void(0);">About Us</a>
                  </div>
                  <div class="text-default-600">
                    <a href="javascript:void(0);">Features</a>
                  </div>
                  <div class="text-default-600">
                    <a href="javascript:void(0);">News</a>
                  </div>
                  <div class="text-default-600">
                    <a href="javascript:void(0);">Careers</a>
                  </div>
                  <div class="text-default-600">
                    <a href="javascript:void(0);">Services</a>
                  </div>
                </div>

                <div class="flex flex-col gap-3">
                  <h5 class="mb-3 font-semibold text-default-950">Company</h5>
                  <div class="text-default-600">
                    <a href="javascript:void(0);">Our Team</a>
                  </div>
                  <div class="text-default-600">
                    <a href="javascript:void(0);">Partner with Us</a>
                  </div>
                  <div class="text-default-600">
                    <a href="javascript:void(0);">FAQs</a>
                  </div>
                  <div class="text-default-600">
                    <a href="javascript:void(0);">Blog</a>
                  </div>
                </div>

                <div class="flex flex-col gap-3">
                  <h5 class="mb-3 font-semibold text-default-950">Support</h5>
                  <div class="text-default-600">
                    <a href="javascript:void(0);">About</a>
                  </div>
                  <div class="text-default-600">
                    <a href="javascript:void(0);">Support Center</a>
                  </div>
                  <div class="text-default-600">
                    <a href="javascript:void(0);">Feedback</a>
                  </div>
                  <div class="text-default-600">
                    <a href="javascript:void(0);">Contact Us</a>
                  </div>
                  <div class="text-default-600">
                    <a href="javascript:void(0);">Accessibility</a>
                  </div>
                </div>

                <div class="flex flex-col gap-3">
                  <h5 class="mb-3 font-semibold text-default-950">
                    Get in touch
                  </h5>
                  <div class="text-default-600">
                    <a href="javascript:void(0);">(+123) 456 789 123</a>
                  </div>
                  <div class="text-default-600">
                    <a href="javascript:void(0);">example@mail.com</a>
                  </div>
                  <div class="flex items-center gap-4">
                    <a href="#!" class="cursor-pointer">
                      <i
                        data-lucide="phone"
                        class="h-6 w-6 transition-all text-default-600 hover:text-primary"
                      ></i>
                    </a>
                    <a href="#!" class="cursor-pointer">
                      <i
                        data-lucide="globe"
                        class="h-6 w-6 transition-all text-default-600 hover:text-primary"
                      ></i>
                    </a>
                    <a href="#!" class="cursor-pointer">
                      <i
                        data-lucide="instagram"
                        class="h-6 w-6 transition-all text-default-600 hover:text-primary"
                      ></i>
                    </a>
                    <a href="#!" class="cursor-pointer">
                      <i
                        data-lucide="twitter"
                        class="h-6 w-6 transition-all text-default-600 hover:text-primary"
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-1">
              <div class="flex flex-col gap-3">
                <div class="bg-primary/10 rounded-lg">
                  <div class="p-8">
                    <form class="space-y-2 mb-6">
                      <label
                        for="subscribeEmail"
                        class="text-lg font-medium text-default-950 mb-4"
                      >
                        Subscribe
                      </label>
                      <div class="flex rounded-md shadow-sm">
                        <input
                          type="email"
                          id="subscribeEmail"
                          name="subscribeEmail"
                          class="py-3 px-4 block w-full bg-white border-default-200 rounded-s-md text-sm dark:bg-default-50"
                          placeholder="Email address"
                        />
                        <button
                          type="button"
                          class="inline-flex flex-shrink-0 justify-center items-center h-[2.875rem] w-[2.875rem] rounded-e-md border border-transparent font-semibold bg-primary text-white hover:bg-primary-500 transition-all text-sm"
                        >
                          <i data-lucide="arrow-right" class="h-5 w-5"></i>
                        </button>
                      </div>
                    </form>
                    <p class="text-sm text-default-500 mb-6">
                      A Res is a self-service shop offering a wide variety of
                      food, beverages & household products we’re engage with
                      their clients & their team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="py-6 border-t border-default-200 lg:flex hidden">
            <div class="container">
              <div class="grid lg:grid-cols-2 items-center gap-6">
                <div>
                  <p class="text-default-600">
                    <script>document.write(new Date().getFullYear())</script>{" "}
                    Design crafted{" "}
                    <Heart class="inline h-4 w-4 text-red-500 fill-red-500" />{" "}
                    by Coderthemes.com
                  </p>
                </div>

                <div class="flex justify-end gap-6">
                  <a
                    href="javascript:void(0)"
                    class="text-default-500 font-medium"
                  >
                    Terms
                  </a>
                  <a
                    href="javascript:void(0)"
                    class="text-default-500 font-medium"
                  >
                    Privacy
                  </a>
                  <a
                    href="javascript:void(0)"
                    class="text-default-500 font-medium"
                  >
                    Cookies
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterSection;
