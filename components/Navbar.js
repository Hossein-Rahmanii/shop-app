import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Drawer from "./darwer";
const { motion } = require("framer-motion");
const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false)
  const cart = useSelector((state) => state.cart.products);
  console.log(cart.length);
  console.log(cart.products);
  const totalProducts = () => {
    return cart.reduce(
      (accumulator, product) => accumulator + product.quantity,
      0
    );
  };
  console.log(totalProducts());
  const toggleDrawer = () => {
    setOpen((pre) => !pre)
  }
  console.log(open)
  return (
    <motion.div
      initial={{ y:-100 }}
      animate={{ y: 0 }}
      transition={{type:"tween"}}
      className="fixed top-0 z-10 w-full flex justify-between items-center p-4 px-10 shadow-md bg-[#1d3557] text-white "
    >
      <div className="flex justify-between items-center w-84">
        {open ? (
          <div className="flex sm:hidden -mr-4" onClick={() => toggleDrawer()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        ) : (
          <div className="flex sm:hidden -mr-4" onClick={() => toggleDrawer()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
        <Drawer click={toggleDrawer} open={open} />
        <div className="text-2xl mx-4  pl-4 ">فروشگاه یونیک</div>

        <div className="menu hidden sm:flex">
          <Link href="/">صفحه اصلی</Link>
        </div>
        <div className="menu hidden sm:flex">
          <Link href="/products">محصولات</Link>
        </div>
        <div className="menu hidden sm:flex">
          <Link href="/contactUs">ارتباط با ما</Link>
        </div>
      </div>
      <div className="p-1 relative" onClick={() => router.push("/cart")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
        <div className=" absolute -top-1 -right-1 bg-[#e63946] w-5 h-5 grid place-content-center rounded-full p-0.5 text-sm">
          {totalProducts()}
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
