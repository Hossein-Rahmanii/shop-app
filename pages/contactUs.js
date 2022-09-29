import axios from "axios";
import React, { useEffect } from "react";
import { getProducts } from "../hooks/getProducts";

export default function contactUs(props) {
  useEffect(() => {
    const data = axios.get("/api/hello").then((res) => console.log(res))
   
  },[])
  if (!props.data) {
    return <div>loading...</div>;
  }
  return <div>contactUs</div>;
}

export const getStaticProps = async (ctx) => {
   const data = await axios.get("https://jsonplaceholder.typicode.com/users");
   console.log(data, "aa");   

  return {
    props: {
      data: "sad",
    },
    revalidate: 60,
  };
};
