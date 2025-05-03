"use client";

import { MENU_ITEMS } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="relative container mx-auto p-6">
      {/* Flex Container For All Items */}
      <div className="flex items-center justify-between">
        {/* Flex Container for Logo&Menu  */}
        <div className="flex items-center  space-x-20">
          {/* App Logo */}
          <Image
            src="/images/logo.svg"
            alt="shortly logo"
            width={96}
            height={96}
          />

          {/* Left Menu Items Container */}

          <div className="hidden space-x-8 lg:flex font-bold ">
            {MENU_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="text-grayish-violet
                 hover:text-very-dark-violet"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-6 font-bold ">
          <Link
            href="#"
            className=" hover:text-very-dark-violet text-grayish-violet"
          >
            Login
          </Link>
          <Link
            href="#"
            className="bg-cyan text-white rounded-full px-8 py-3 font-bold hover:opacity-70"
          >
            Sign Up
          </Link>
        </div>

        {/* Hamburger Menu */}

        <button
          id="menu-btn"
          className={`${
            isOpen ? "open" : ""
          } block hamburger lg:hidden foucs:outline-none`}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      {/*  Mobile Menu */}

      <div
        className={`absolute ${
          isOpen ? "flex" : "hidden"
        } p-6 rounded-lg bg-dark-violet left-6 right-6 top-20 z-100 lg:hidden`}
      >
        <div className=" flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
          {MENU_ITEMS.map((item, index) => (
            <Link key={index} href={item.path} className="w-full text-center">
              {item.name}
            </Link>
          ))}
          <Link
            href="#"
            className="w-full text-center pt-6 border-t border-gray-400"
          >
            Login
          </Link>
          <Link
            href="#"
            className="w-full py-3 text-center rounded-full bg-cyan"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
