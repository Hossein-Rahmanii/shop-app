import React from 'react'
import Image from "next/image";
import {useRouter} from 'next/router'
const { motion } = require("framer-motion");
const MainPage = () => {
  const router = useRouter()
  return (
    <div className="h-screen flex items-center justify-around  mx-auto ">
      <div className="container md:px-7 flex flex-wrap items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="sm:w-1/2 flex flex-col p-10 gap-3 "
        >
          <div className="text-4xl">فروشگاه یونیک</div>
          <div className="">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است
          </div>
          <button
            onClick={() => router.push("/products")}
            className="w-40 h-10 mt-3 rounded-md text-white bg-[#1d3557]"
          >
            مشاهده محصولات
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="sm:w-1/2 p-5 flex justify-center"
        >
          <Image
            src="/images/83548-online-shopping-black-friday.gif"
            width={500}
            height={500}
            quality={100}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default MainPage;
