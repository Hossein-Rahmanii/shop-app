import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { useRouter } from "next/router";
const Product = ({ data }) => {
  // console.log(data, "11");
  const cart = useSelector((state) => state.cart);
  // console.log(cart);
  const dispatch = useDispatch();
  const router = useRouter()
  // useEffect(() => {
  //   if (cart !== []) {
  //     localStorage.setItem("cart", JSON.stringify(cart));
  //   }
  // }, [cart]);
  console.log(data.category.image)
  return (
    <div className=" shadow-lg border-2  rounded-md hover:-translate-y-2 transition ">
      <div
        onClick={() => router.push(`/products/${data.id}`)}
        className="rounded-t-md p-1 border-slate-400 flex justify-center bg-white cursor-pointer"
      >
        <Image
          src={data.image}
          width={200}
          height={200}
          quality={100}
          className="w-full object-contain "
        />
      </div>
      <div className="p-2 rounded-b-md h-auto bg-white  ">
        <div
          dir="ltr"
          className="w-64 sm:w-full text-center font-sans font-bold	 overflow-hidden text-sm truncate  p-1 text-gray-900"
        >
          {data.title}
        </div>
        <div className="flex items-center mt-3 justify-between px-2 border-t -2 border-dashed border-slate-400 py-3">
          <div className=" text-gray-700"> {data.price} تومان</div>
          <div
            className="tooltip tooltip-bottom text-xs"
            data-tip="اضافه کردن به سبد خرید"
          >
            <button
              onClick={() => dispatch(addToCart(data))}
              className=" text-center p-2 shadow-md shadow-[#e63946]  text-white text-sm rounded-sm bg-[#e63946] "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6  text-black "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
