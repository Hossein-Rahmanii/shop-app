import React from "react";
import { getProducts, getSingleProduct } from "../../hooks/getProducts";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";

export default function Product() {
  const router = useRouter();
  console.log(router.query.productId);
  const { data, isLoading, isFetching } = useQuery(
    ["product", router.query.productId],
    () => getSingleProduct(router.query.productId)
  );
  console.log(data);
  const dispatch = useDispatch();
  if (isLoading) {
    return (
      <div className="w-screen h-screen p-24 bg-gray-100 text-center">
        درحال بارگذاری
      </div>
    );
  }
  return (
    <div className="w-screen h-screen flex items-center justify-center md:p-20 ">
      <section className="text-gray-600 max-w-6xl shadow-lg border-2 mt-48 sm:mt-64 md:mt-20 rounded-sm mb-10 container mx-4">
        <div className="mx-auto flex px-5 md:px-0 py-14 md:flex-row flex-col items-center ">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 text-center md:mb-0">
            <Image
              src={data.image}
              width={400}
              height={400}
              quality={100}
              className="object-contain"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font text-right sm:text-2xl text-xl mb-4 font-medium text-gray-900">
              نام محصول:
              <br className="hidden lg:inline-block" />
              <div dir="ltr" className="font-sans">
                {data.title}
              </div>
            </h1>
            <p class="mb-8 leading-relaxed font-sans text-right">
              {data.description}
            </p>
            <div className="flex">قیمت : {data.price} تومان</div>
            <button
              onClick={() => dispatch(addToCart(data))}
              className="w-full mt-2 text-white rounded-md shadow-md shadow-[#e63946] md:w-44 p-2 bg-[#e63946]"
            >
              اضافه کردن به سبد خرید
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export const getStaticProps = async (ctx) => {
  const productId = ctx.params.productId;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["product", productId], () =>
    getSingleProduct(productId)
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export const getStaticPaths = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["products"], getProducts);
  const data = queryClient.getQueryData(["products"]);
  const paths = data.map((item) => ({
    params: { productId: item.id.toString() },
  }));
  // console.log(paths);
  return {
    paths: paths,
    fallback: "blocking",
  };
};
