import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  syncState,
} from "../store/cartSlice";
import Image from "next/image";
import { useEffect } from "react";
import store from "../store/store";
import { useState } from "react";
const Cart = () => {
  const cart = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const [first, setfirst] = useState([]);
  const totalProducts = () => {
    return cart.reduce(
      (accumulator, product) => accumulator + product.quantity * product.price,
      0
    );
  };
  useEffect(() => {
      dispatch(syncState())
  }, [dispatch]);

  return (
    <div className="w-screen min-h-screen p-24 bg-gray-100">
      {cart.length == 0 ? (
        <div className="flex flex-col text-center">
          <div className="text-xl mt-5">
            درحال حاضر سبد خرید شما خالی می باشد...
          </div>
          <Image
            src="/images/animation_500_l87phoav.gif"
            className="object-contain"
            width={200}
            height={400}
          />
        </div>
      ) : (
        <>
          <div className="text-xl my-3 mx-7">سبد خرید شما</div>

          <div className=" mx-auto max-w-7xl h-full bg-white">
            {cart.map((item) => {
              return (
                <div className="w-full h-40 flex items-center shadow-lg ">
                  <div className="w-1/5 grid place-content-center">
                    <Image
                      src={item.image}
                      quality={100}
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex justify-between px-6 items-center w-4/5 sm:flex-row flex-col">
                    <div className="flex flex-col gap-5">
                      <div className="font-sans w-44">{item.title}</div>
                      <div>کد محصول : {item.id}</div>
                    </div>
                    <div className=" flex flex-row sm:flex-col my-2   gap-3">
                      <div className="p-1 bg-slate-300 rounded-md">
                        قیمت : {item.price} تومان{" "}
                      </div>
                      <div className="flex gap-2 justify-center">
                        <button
                          className="quantity"
                          onClick={() => dispatch(incrementQuantity(item.id))}
                        >
                          +
                        </button>
                        <div>{item.quantity}</div>
                        <button
                          className="quantity"
                          onClick={() => dispatch(decrementQuantity(item.id))}
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            onClick={() => console.log(cart)}
            className="mx-auto max-w-7xl mt-4 w-full h-20 bg-[#e63946] grid place-content-center shadow-md shadow-[#e63946] rounded-md text-white"
          >
            مجموع قیمت نهایی: {totalProducts().toFixed(2)} تومان
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
