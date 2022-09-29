import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import React from "react";
import Product from "../../components/product";
import { getProducts } from "../../hooks/getProducts";

const Products = (props) => {
    const {data,isLoading,isFetching} = useQuery(["products"], getProducts);
    console.log(props.dehydratedState)
    // console.log(props.data,'22')
  console.log(isFetching)
    if (isLoading) {
        return <div className="mt-64 text-center text-2xl">درحال بارگذاری اطلاعات...</div>
    }
  return (
    <div className=" p-16 mt-12 mx-auto bg-gray-200">
      <div className="text-2xl text-gray-700 my-3 flex gap-2 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 007.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 004.902-5.652l-1.3-1.299a1.875 1.875 0 00-1.325-.549H5.223z" />
          <path
            fillRule="evenodd"
            d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 009.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 002.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3zm3-6a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75v-3zm8.25-.75a.75.75 0 00-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-5.25a.75.75 0 00-.75-.75h-3z"
            clipRule="evenodd"
          />
        </svg>
        <div>همه محصولات</div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {data.map((product) => {
          return <Product key={product.id} data={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;

export const getStaticProps = async (ctx) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["products"], getProducts)
  const data = queryClient.getQueryData(["products"]);
  console.log(data, 222);
  // console.log(queryClient);
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
        // data:data
      },
      revalidate:60
    };
}