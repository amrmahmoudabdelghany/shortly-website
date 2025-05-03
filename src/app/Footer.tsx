import { FOOTER_MENU } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-16 bg-very-dark-violet">
      <div className="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start">
        {/* Logo */}
        <Image src="/images/logo.svg" alt="app logo" width={200} height={200} />
        <div className="flex flex-col space-y-16 md:flex-row md:space-y-0 md:space-x-20 ">
          {/* Menu Items*/}

          {FOOTER_MENU.map((menu, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-full  md:items-start"
            >
              <div className="mb-5 font-bold text-white capitalize">
                {menu.label}
              </div>
              <div className="flex flex-col items-center space-y-3 md:items-start">
                {menu.items.map((item, index) => (
                  <Link
                    key={index}
                    href={item.path}
                    className="capitalize text-grayish-violet hover:text-cyan "
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Social icons */}

        <div className="flex  space-x-6 ">
          <Link href="#">
            <Image
              className="ficon"
              src="/images/icon-facebook.svg"
              alt="facebook icon"
              width={24}
              height={24}
            />
          </Link>
          <Link href="#">
            <Image
              className="ficon"
              src="/images/icon-twitter.svg"
              alt="twitter icon"
              width={24}
              height={24}
            />
          </Link>
          <Link href="#">
            <Image
              className="ficon"
              src="/images/icon-instagram.svg"
              alt="instagram icon"
              width={24}
              height={24}
            />
          </Link>
          <Link href="#">
            <Image
              className="ficon"
              src="/images/icon-pinterest.svg"
              alt="pinterest icon"
              width={24}
              height={24}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
